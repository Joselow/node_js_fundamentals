const os = require('node:os')

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
// console.log(os.constants) ;    // errores
console.log(os.freemem()/1_073_741_824, 'Gb') ; /// memoria libre RAM
console.log(os.totalmem()/1_073_741_824, 'Gb') ; /// memoria total RAM
console.log(os.homedir()) ; 
console.log(os.tmpdir()) ; 
console.log(os.hostname()) ; 
console.log(os.networkInterfaces()) ;  // redes