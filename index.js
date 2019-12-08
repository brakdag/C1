const { spawn } = require('child_process');
const path_linux='./lib/w1'
const path_windows='./lib/w2.exe'

const ruta = path_linux

const child = spawn(ruta, ['-l']);
child.stdout.pipe(process.stdout);
console.log("running.")