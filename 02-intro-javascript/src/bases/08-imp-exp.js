import  heroes, {owners}  from '../data/heroes';

console.log(heroes);
console.log(owners);

const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}

console.log(getHeroById(2));

const getHeroesByOwner = (owner) => {
    console.log(`Heroes de ${owner}`);
    return heroes.filter(hero => hero.owner === owner);
}

console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('Marvel'));


