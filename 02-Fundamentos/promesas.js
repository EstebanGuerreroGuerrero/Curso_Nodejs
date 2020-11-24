let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];


let salarios = [{
    id: 1,
    salarios: 1000
}, {
    id: 2,
    salario: 2000
}]


let getEmpleado = (id) => {


    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id == id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB);
        }

    });

}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`El empleado ${ empleado.nombre } no tiene el salario especificado`);
        } else {
            resolve(salarioDB)
        }

    });
}

getEmpleado(1).then(empleado => {
    console.log(empleado);
    getSalario(empleado).then(resp => {
        console.log(resp);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});



// Promesas en cadena (para cuando necesitamos muchas promesas juntas)

getEmpleado(2).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
    })
    .catch(err => {
        console.log(err);
    })