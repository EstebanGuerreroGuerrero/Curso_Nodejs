


const deadpool = {
    
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Volar',

    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }

};

const { nombre, apellido, poder } = deadpool; // Sacamos las variables del objeto deadpool de esta manera

const { nombre: name, apellido: lastname, poder: power } = deadpool; // Ahora supongamos que las variables chocan con otras que hayan por ahi podemos renombrarlas de esta manera

console.log(name, lastname, power);
