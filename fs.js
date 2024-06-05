const fs = require('node:fs')
const fsPro = require('node:fs/promises')
const path = require('node:path')


const readFile = (path) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(':c cagó', err.code);
    } else {
      console.log(data.toString());
    }
  })
}

const newReadFile = async(path) => {
  try {
    const response = await fsPro.readFile(path)
    console.log(response.toString());
  } catch (error) {
    console.log(':c cagó', error.code);
  }
}
const route = path.join(__dirname, 'callbacks.js')
const addContent = async (path, code) => {
  try {    
    const existFile = fs.existsSync(route)
    if (!existFile) {
      console.log('La ruta no existe');
      return
    }
    const a = await fsPro.appendFile(path, '\n'+code, {encoding : 'utf-8'})        
    console.log(a, 'CONTENT ADDED');
  } catch (error) {    
    console.log(error);
  }
} 

const createFile = async(path, content = '') => {
  try {
    const response = await fsPro.writeFile(path, content)
    console.log(response, 'CREADO');
  } catch (error) {
    console.log(error);
  }
}

const newFIle  =  path.join(__dirname, 'data.json')

const data  = {
  name: 'juan', year: 15, hability: 'basket player'
}

const readFiles = async (path) => {
  try {
    const response = await fsPro.readFile(path, { encoding: 'utf-8' })
    return response
  } catch (error) {
    console.log(error);
  }
}

const deleteFile = async(path) => {
  try {
    const r = await fsPro.unlink(path)
    console.log(r, 'DELETED');
  } catch (error) {
    console.log(error);
  }
}
const startScript = async() => {
  await createFile(newFIle)
  await addContent(newFIle, JSON.stringify([data]))
  const response = await readFiles(newFIle)  
  console.log(response, 'READED');
  setTimeout(()=> deleteFile(newFIle), 3000)
}
startScript()


