// написала на JSON'е для удобства, а потом перевела в строку
// сделать экранирование на пробелах в строках
// подписать ключи

class Hero {
    constructor(name, universe, alterEgo, occupation, friends, superpowers, img) {
        this.name = name,
            this.universe = universe,
            this.alterEgo = alterEgo,
            this.occupation = occupation,
            this.friends = friends,
            this.superpowers = superpowers,
            this.img = img
    }
}

let heroBatman = new Hero('Бэтмен', 'DC Comics', 'Брюс Уэйн', ['борец с преступностью', 'филантроп', 'миллиардер'], ['Робин', 'Бэтгерл'], ['интеллект', 'обширные познания', 'знания боевых искусств', 'ловкость'], './images/batman.jpg');

let heroSuperman = new Hero(
    'Супермен', 'DC Comics', 'Кларк Кент', 'борец за справедливость', 'собака Крипто', ['непробиваемость', 'суперсила', 'полет', 'самоисцеление', 'суперзрение и суперслух', 'классный костюм'], './images/sumerman.jpg'
)

let arrHeroes = [];
arrHeroes.push(heroBatman, heroSuperman);
console.log(arrHeroes);

document.addEventListener('DOMContentLoaded', function (event) {
    let heroesContent = '';
    for (let hero of arrHeroes) {
        heroesContent += `<div class='hero'> 
        <h2>${hero.name}</h2>
        <div>${hero.universe}</div>
        <div>${hero.alterEgo}</div>
        <div>${hero.occupation}</div>
        <div>${hero.friends}</div>
        <div>${hero.superpowers}</div>
        <img src=${hero.img}>

    </div>`
    }
    document.querySelector('body').innerHTML = heroesContent;
});


// console.log(heroBatman);
// console.log(heroSuperman);