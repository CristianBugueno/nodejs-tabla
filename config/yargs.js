const argv = require('yargs')
        .options('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            description: 'Es la base de la tabla de multiplicar'
        })
        .options('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Es es el número hasta donde se multiplicará'
        })
        .options('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            demandOption: false,
            describe: 'Muestra la tabla en consola'
        })
        .check((argv, options) =>{
            if (isNaN(argv.b)) {
                throw 'La base tiene que ser un número';  
            }
            return true;
        })
        .argv;

module.exports = argv;