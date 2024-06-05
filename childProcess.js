const { exec, spawn } = require('node:child_process');  // permite ejkecutar comonados de la terminal
const util = require('node:util')

const execPro = util.promisify(require('node:child_process').exec)


const listDirectory = async(command) => {
  try {
    const { stdout, stderr } = await execPro(command)
    console.log(stdout, stderr);
    // exec(command, (err, stdout, stderr) => {
    //   console.log('SALIDA DE ERROR: ',stderr);
    //   if ( err) {
    //     console.log('ERROR', err);
    //   } else {
    //     console.log(stdout);
    //     console.log(stderr);
    //   }
    // })    
  }
    catch (error) {
    console.log(error);
  }
}

// listDirectory('dir')

const ls = spawn('ls', ['-la']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);

})
ls.stderr.on('data', (data) => {
  console.log(`ERRORRRR: ${data}`);

})

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
}); 
//*** donde err es un objeto de error si algo salió mal, stdout es la salida estándar del comando y stderr es la salida de error estándar.

// const ip = "8.8.8.8";

// const ping = (address) => {
//   return new Promise((resolve, reject) => {
//     exec(`ping ${address}`, (error, stdout, stderr) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(stdout);
//       }
//     });
//   });
// };

// ping(ip)
//   .then((result) => console.log(result))
//   .catch((error) => console.error("Ocurrió un error: ", error.message));