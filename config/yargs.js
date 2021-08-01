const argv = require('yargs')
                .option('b',{
                    alias : 'base',
                    type : 'number',
                    demandOption : true,
                    describe:'Es la base de la tabla de multiplicar'
                        })
                .option('l',{
                    alias : 'lista',
                    type : 'boolean',
                    default:false  ,
                    describe:'Muestra la tabla en consola'               
                        })
                .option('h',{
                    alias : 'hasta',
                    type : 'number',
                    default:12  ,
                    describe:'Hasta que numero se ejecuta la tabla'               
                        })
                .check((argv,option)=>{
                    if( isNaN(argv.b)){
                        throw 'La base tiene que ser un numero';
                    }
                    if( isNaN(argv.h)){
                        throw '"hasta , h" tiene que ser un numero';
                    }
                    return true;
                })
                .argv ;

module.exports = argv;