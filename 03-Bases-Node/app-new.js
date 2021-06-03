

const { crearArchivo } = require('./helpers-new/multiplicar-new');
const argv = require('./config/yargs-new');
const colors = require('colors');







    // Se ejecuta la funcion
        crearArchivo ( argv.b, argv.l, argv.h ) //Los valores base y listar jeje
            .then( nombreArchivo => console.log(nombreArchivo.cyan, 'creado') )
            .catch( err => console.log(err) );
