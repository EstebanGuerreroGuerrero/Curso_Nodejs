const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de  ultiplicar', opciones)
    .command('crear', 'Genera una tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}