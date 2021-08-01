
const fs =require('fs');
const colors = require('colors');

const  crearArchivo  = async (base = 0 , lista=false,hasta = 12) => {
    
    try {
        let salida,archivo = '';
        for (let index = 1; index <= hasta; index++) {
            salida += ` ${base } `+'x'.red+ ` ${index }  =`+` ${index * base}\n`.green; 
            archivo += ` ${ base } `+'x'+` ${index }  =`+` ${index * base}\n`; 
                        
           }           
        fs.writeFileSync(`./salida/tabla-${base}.txt`,archivo);

        if (lista){
            console.log('========================='.blue);
            console.log('      Tabla del '.blue + base.toString().red);
            console.log('========================='.blue);
            console.log(salida);
        }

        return `tabla-${base}.txt creada!!`.trap.rainbow;

    } catch (error) {
        throw error;
    }
}
module.exports = {
    crearArchivo 
}