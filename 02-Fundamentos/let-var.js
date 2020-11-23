// VAR -------------------------------------------------
var nombre = 'Wolverine';

if (true) {
    var nombre = 'magnetoo';
}

console.log(nombre);
//En resumen una variable var es reinicializable.active



// LET -------------------------------------------------
let nombre2 = 'Gambit';

if (true) {
    let nombre2 = 'mistic';
}

console.log(nombre2);
// la variable let no es reemplazable a menos que la impresion se ejecute dentro del contexto


// Pero la principal diferencia lo veremos ahora...

//Para var
for (var i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}

console.log(i);



//Para let 
let e = 'Hola mundo';
for (let e = 0; e <= 5; e++) {
    console.log(`e: ${ e }`);
}

console.log(e);
// Lo que pasa aqui es que la variable let existira de la forma en la que esta definida en el conteto
// es por eso que dentro del for tiene un valor y fuera de el tiene otro.