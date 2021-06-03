
const fs = require('fs');
const colors = require('colors');


 
    // Ejemplo de como ponerle otros nombres a cada color
    colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
    });
    //_________________________







    const crearArchivo = async ( base, listar, hasta ) => {


            try {

                if( listar == true){
                    console.log( colors.verbose( '================' ) );
                    console.log( `  Tabla del ${ base }  ` );
                    console.log( colors.verbose('================' ) );
                }

                    let salida = '';
                    let consola = '';

                    for (let i = 1 ; i <= hasta ; i++) {

                        let result = base * i;

                        salida  += (` ${ base } x ${ i } = ${ result }\n `);
                        consola += (` ${ base } ${ 'x'.green } ${ i } ${ '='.cyan } ${ result }\n `);

                    }


                if( listar == true){
                    console.log( salida );
                }

                
                    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)
                        
                
                return `Tabla del ${ base } creada`;
                
            } catch (err) {
                
                throw err

            }


        }

    module.exports = {
        crearArchivo
    }