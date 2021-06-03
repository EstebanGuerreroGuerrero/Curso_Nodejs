



    // ARGV:   TODO ESTE BLOQUE ES PARA CREAR Y CONFIGURAR EL ARGV, PARA MANDAR LOS VALORES DESDE LA CONSOLA____________________________________
    const argv = require( 'yargs' )

                .option('b', {
                    alias: 'base',
                    type: 'number',
                    descripton: 'Es la base de la multiplicación',
                    demand0ption: true
                })

                .option('l', {
                    alias:'listar',
                    type: 'boolean',
                    descripton: 'Para listar la multiplicación',
                    default: false
                })

                .option('h', {
                    alias:'hasta',
                    type: 'number',
                    descripton: 'Para poner un límite a la multiplicación',
                    default: 10
                })

                .check( ( argv ) => { //Método para checkear el tipo de dato el argumento
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un número'
                    }
                    return true
                })

                .argv;


        /* Para debugear al momento de crear un argv mostrando la info:
            console.log( argv) ;
            console.log( 'base: yargs', argv.base );
            console.log( 'listar: yargs', argv.listar );
        */


    // BLOQUE CREACION ARGV _________________________________________________________________________________________________



    module.exports = argv;