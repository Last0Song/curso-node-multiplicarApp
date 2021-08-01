


const { crearArchivo } = require ('./helpers/multiplicar'); 
const argv = require ('./config/yargs');

//To Do , enviar argunento l

console.clear();
console.log(argv);

crearArchivo(argv.base,argv.lista,argv.h)
    .then( msg => console.log(msg) )
    .catch( err => console.log(err));







