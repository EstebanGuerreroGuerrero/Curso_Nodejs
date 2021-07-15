/**
 * Async Await
 */

// Modelo de empleados
 const empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

// Modelo salarios
const salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]


const getEmpleado = (id) => {

    const promesa = new Promise(( resolve, reject ) => {

        const empleado = empleados.find( e => e.id === id ) ?.nombre; // find: Para buscar uno y le mandamos como quermos llamarlo y compararlo o cualquier cosa jjjaa.

        //Se puede hacer con un If normal o con un ternario como se ve a continuacion
         ( empleado ) 
            ? resolve( empleado ) 
            : reject (`No existe empleado con id ${ id }`);
        

    })

    return promesa;

}



const getSalario = (id) => {

    const promesa = new Promise(( resolve, reject ) => {
        
        const salario = salarios.find( s => s.id === id) ?.salario;

        (salario)
            ? resolve( salario )
            : reject (`El empleado con id ${ id }, No tiene salario definido`);
    })

    return promesa;
}



//Esta variable es para darle valor a los argumentos solamente ingresando la id de los usuarios que hay o que no hay jjjaa
const id = 2;


const getInfoUsuario = async (id) => {

    try {

        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El empleado: ${empleado}, tiene ${salario} de salario`;

    } catch (error) {

        throw error;

    }

    

}


getInfoUsuario(id)

    .then( msg => {
        console.log('Salio Bien')
        console.log(msg) 
    })
    .catch( err => {
        console.log('Salio mal')
        console.log( err ) 
    })

















//Async y await explicacion antiua

/*
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
*/