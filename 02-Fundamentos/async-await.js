/**
 * Async Await
 */

let getNombre = async() => {
    return 'Fernando';
}


let getApellido = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Fernando');
        }, 3000);
    });
}

let saludo = async() => {

    let apellido = await getApellido();
    return `Hola ${ apellido }`;

}

saludo().then(mensaje => {
    console.log(mensaje);
})