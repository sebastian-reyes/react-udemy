const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras);
console.log(numeros);

//Tarea
const useState = () => {
    return ['Goku', () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = useState();
console.log(nombre);
setNombre();