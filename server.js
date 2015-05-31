var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    fs = require('fs'),
    less = require('less');

app.get(/^\/(.*)?$/, function (req, res) {
  var file = req.params[0];
  console.log (req.params);

  fs.stat(file, function(err, stat) {
    if (err === null) {
      res.sendFile(file, {root: __dirname}, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', file);
        }
      });
    } else {  
      res.sendFile('index.html', {root: __dirname}, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', 'index');
        }
      });
    }
  });
});

io.on("connection", function(socket) {
  console.log("Made socket connection");
  socket.on("compile", function() {
    var input = fs.readFileSync('assets/css/less/backgrounds.less', {encoding: 'utf8'});
      // console.log(input);
      console.log("try compile");
      less.render(
        input,
        {
          paths: 'assets/css/less',
          compress: true,
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-functions'))()
          ]
        },
        function(error, output) {
          fs.writeFile('assets/build/backgrounds.min.css', output.css, function(error) {
            console.log(error);
            io.sockets.emit("recompiled", output);
          });
        }
      );
  });
});

var server = http.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});