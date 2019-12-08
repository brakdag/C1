const { spawn } = require('child_process');
const path_linux='./lib/w1'
const path_windows='./lib/w2.exe'

try{
    const ruta = path_linux
    const child = spawn(ruta, ['-l']);
}catch(e){console.log(e)}

//child.stdout.pipe(process.stdout);

var express = require('express');
var app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.get('/', function (req, res) {
  res.send("ok");
});

app.listen(server_port, server_ip_address, function () {
  //console.log(process.stdout);
});