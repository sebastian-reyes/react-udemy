const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludarFlecha = (nombre) => {
    return `Hola ${nombre}`;
}

const saludarFlecha2 = (nombre) => `Hola ${nombre}`;

const saludarFlecha3 = () => `Hola mundo`;


console.log(saludar('Juan'));
console.log(saludarFlecha('Sebastián'));
console.log(saludarFlecha2('Luis'));
console.log(saludarFlecha3());

/* Ejercicio
1.- Transformar a una función de flecha
2.- Retornar un objeto implícito
3.- Pruebas
*/

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC123',
        username: nombre
    }
}

const getUsuarioActivoEjercicio = (nombre) => ({uid: 'ABC567', username: nombre});

const usuarioActivo = getUsuarioActivoEjercicio('Sebastian');
console.log(usuarioActivo);