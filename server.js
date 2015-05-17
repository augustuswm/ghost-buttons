var express = require('express');
var fs = require('fs');
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