
//OBJETOS -----------------
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


const salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]
//--------------------------



//CONSTRUCCION DE FUNCIONES (con promesas) -------------------------------------
const getEmpleado = (id) => {

    const promesa = new Promise(( resolve, reject ) => {

        const empleado = empleados.find( e => e.id === id ) ?.nombre;

        //Se puede hacer con un If o con un ternario como se ve a continuacion
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
//FIN DE LA CONSTRUCCION DE FUNCIONES --------------------------------------------




// ejecutar e imrimir PROMESAS EN CADENA ----------------------------------------------
let nombre;
const id = 10; 

//Si existe el empleado se ejecutara la promesa del salario
getEmpleado(id)
    .then ( empleado => {
        nombre = empleado;
        return getSalario( id ) 
    })
    .then ( salario => console.log( 'El empleado:', nombre, 'tiene un salario de:', salario ))
    .catch ( err => console.log (err));

//FIN DE PROMESAS EN CADENA --------------------------------------------------
















/* 
const getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`El empleado ${ empleado.nombre } no tiene el salario especificado`);
        } else {
            resolve(salarioDB)
        }

    });
}
*/


/*
getEmpleado(id)
    .then ( empleado => console.log(empleado) )
    .catch( err => console.log(err) );


getSalario(id)
    .then ( salario => console.log(salario) )
    .catch( err => console.log(err) );
*/


// Promesas en cadena (para cuando necesitamos muchas promesas juntas)
/*
getEmpleado(2).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
    })
    .catch(err => {
        console.log(err);
    })
*/