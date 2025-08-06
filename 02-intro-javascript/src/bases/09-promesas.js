import { getHeroById } from "./08-imp-exp";

const promesa = new Promise((resolve, reject) => {
    const heroe = getHeroById(1);
    setTimeout(() => {
        resolve(heroe);
    }, 2000);
});

promesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error('Error:', error);
});
console.log('Fin del script');

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        const heroe = getHeroById(id);
        if (heroe) {
            resolve(heroe);
        } else {
            reject('Hero not found');
        }
    });
}

getHeroByIdAsync(122)
    .then(console.log)
    .catch(console.error);