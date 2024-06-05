const findData = () => {
  return [ 
    {
      name: 'Juan',
      year: 15,
    },
    {
      name: 'Volibear',
      year: 45
    }
  ]
}

const printDataInTable = (data) => {
  console.table(data)
}

printDataInTable(findData())


const asynError = async() => {
  const raResponse = await faetch('https://jsonplaceholder.typicode.com/todos/1')
  return raResponse.json()  
}



const runAync = async () => {
  try {
    await asynError()
    console.log('aaaaaaaaa');
  } catch (error) {
    console.log('ERRROR');  
  }
}

runAync()