

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
        salarios: 1000
    }, {
        id: 2,
        salario: 2000
    }]

const getEmpleado = (id, callback) => {

    
    const empleadoDB = empleados.find(e => e.id == id)?.nombre; //SI el resultado existe ? traeme el nombre

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}


const getSalario = (empleado, callback) => {

    const salarioEMP = salarios.find( s => s.id === id)?.salario

    if (!salarioEMP) {
        callback(`NO se encontro un salario para el usuario ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioEMP.salario,
            id: empleado.id
        });
    }
}

getEmpleado(2, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, respuesta) => {

        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${ respuesta.nombre } es ${ respuesta.salario } y su id es ${ respuesta.id }`);
    })
});