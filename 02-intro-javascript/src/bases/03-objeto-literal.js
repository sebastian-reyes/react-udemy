
const persona = {
    nombre: 'Sebastian',
    apellido: 'Reyes',
    edad: 20,
    direccion: {
        ciudad: 'Lima',
        zip: 123456,
        lat: 12.3456,
        lng: -12.3456
    }
}

const persona2 = { ...persona };
persona2.nombre = 'Juan';

console.log(persona);
console.log(persona2);