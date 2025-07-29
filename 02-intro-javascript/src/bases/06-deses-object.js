

const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Ingeniero',
};

const { edad, nombre, profesion } = persona;

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

const retornaPersona = ({ nombre, edad, profesion }) => {
    return `Nombre: ${nombre}, Edad: ${edad}, Profesión: ${profesion}`;
}

/*
    * Desestructuración de objetos
    * Ejercicio
*/

const useContext = ({ nombre, edad, profesion, rango = 'Senior' }) => {
    return {
        nombreClave: nombre,
        anios: edad,
        latlng:{
            lat: 14.1234,
            lng: -12.1234
        }
    }
}

const { nombreClave, anios, latlng } = useContext(persona);
console.log(nombreClave, anios);
console.log(latlng);

