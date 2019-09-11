var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('views'));

app.get('/openCamera', (req, res) => {
  res.sendFile( __dirname + "/views/" + "index.html" );

})


var server = app.listen(port, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
})
