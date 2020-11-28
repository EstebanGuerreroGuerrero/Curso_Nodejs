const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listar } = require('./multiplicar/multiplicar'); //Instancia el archivo multiplicar de la carpeta multiplicar.
//Se almacena en una constante que indica QUE FUNCIONES se utilizaran de ese archivo.





let comando = argv._[0];

switch (comando) {

    case 'listar':
        listar(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo.green }`)) // Siempre con promesa, es una buena práctica.
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}


// Así se usa una funcion