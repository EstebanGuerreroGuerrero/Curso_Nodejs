const fs = require('fs');
const colors = require('colors');




let listar = (base, limite = 10) => {

    if (!Number(base)) {
        reject('No es un numero');
        return;
    }


    console.log('=============='.green);
    console.log(`==Tabla de ${base}`.green);
    console.log('=============='.green);

    for (let i = 1; i <= limite; i++) {

        console.log((`${ base } * ${ i } = ${ base * i }`));
    }

}


let crearArchivo = (base, limite = 10) => {


    if (!Number(base)) {
        reject('No es un numero');
        return;
    }



    return new Promise((resolve, reject) => {

        let contenido = '';

        // Se realiza el calculo
        for (let i = 1; i <= limite; i++) {

            contenido += (`${ base } * ${ i } = ${ base * i }\n`); //Se guarda el resultado en una variable

        }

        // Crea un archivo en una carpeta
        fs.writeFile(`tablas/tabla-${ base }.txt`, contenido, (err) => { //Argumentos: url, contenido, error(funcion flecha)

            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${ base }`)
            }

            console.log(`Te file tabla-${ base }.txt has been saved!`); // confirmacion en consola
        });

    })
}


module.exports = {
    crearArchivo,
    listar
}