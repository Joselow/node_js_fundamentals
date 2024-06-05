
process.on('exit', () => {
  console.log('eh?, terminó');
})

process.on('beforeExit', () => {
  console.log('o no?, terminara?');
})

process.on('uncaughtException', (error, origin) => {
  console.log('error atrapado', error, origin);
})
process.on('unhandledRejection', (error, origin) => {
  console.log('error atrapado', error, origin);
})

juan()