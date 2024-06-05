const greet = (name, callback) => {
  setTimeout(()=> {
    callback(name)
    console.log('Hola', name);
  }, 1000)
}

const farewell = (name, callback) => {
  setTimeout(()=> {
    console.log('Adios', name);
    callback(name)
  }, 1010)
}

const talk = (callback) => {
  setTimeout(()=> {
    console.log('Toy hablando');
    callback()
  }, 1000)
}

const name = 'manuelsiño potoconcoko'

const LAST_TIME = 0

const conversation = ({ times, name, greet, talk, farewell, withGreet = true }) => {
  const firstTime = withGreet  
  const othersTimes = false  

  if (times === LAST_TIME ) {
    farewell(name, () => console.log('finishing'))
    return 
  } 

  if (firstTime) greet(name, () => console.log('starting'))

  const time = firstTime ? 1000 : 0
  setTimeout(() => {
    talk(() => {    
      conversation({ times: --times, name,greet, talk, farewell, withGreet: othersTimes })
    })    
  }, time);
}
const options = {
  times: 9,
  name,
  greet, 
  talk, 
  farewell  
}

conversation(options)
// greet(name, (theName) => {
//   farewell(theName,() => {
//     greet('Juana', (theName) => {
//       console.log('finish', theName);
//     })
//   })
// })
const sum = 5 + 5