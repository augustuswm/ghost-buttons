var express = require('express'),
    fs = require('fs'),
    less = require('less');
var app = express();

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
    } else if (file && file.search(/less\.compile$/) !== -1) {
      var input = fs.readFileSync('assets/css/less/style.less', {encoding: 'utf8'});
      console.log(input);
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
          fs.writeFile('assets/build/style.min.css', output.css, function(error) {
            console.log(error);
            res.send({status: error === null});
          });
        }
      );
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

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});