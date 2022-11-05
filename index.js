// написала на JSON'е для удобства, а потом перевела в строку
// сделать экранирование на пробелах в строках
// подписать ключи
// поставить герою личную оценку (сохраняем значения в localStorage)
// например, 10/10 или 2/10, как рейтинг

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

let heroBatman = new Hero('Бетмен', 'DC Comics', 'Брюс Уэйн', ['борец с преступностью', 'филантроп', 'миллиардер'], ['Робин', 'Бэтгерл'], [' интеллект', ' обширные познания', ' знания боевых искусств', ' ловкость'], './images/batman.jpg');

let heroSuperman = new Hero('Супермен', 'DC Comics', 'Кларк Кент', 'борец за справедливость', 'собака Крипто', [' непробиваемость', ' суперсила', ' полет', ' самоисцеление', ' суперзрение и суперслух', ' классный костюм'], './images/sumerman.jpg')

let arrHeroes = [];
arrHeroes.push(heroBatman, heroSuperman);
console.log(arrHeroes);

document.addEventListener('DOMContentLoaded', function (event) {
    let heroesContent = '';
    for (let hero of arrHeroes) {
        heroesContent += `<div class='hero'> 
        <h2>${hero.name}</h2>
        <div>Всеенная: ${hero.universe}</div>
        <div>${hero.alterEgo}</div>
        <div>${hero.occupation}</div>
        <div>${hero.friends}</div>
        <div>${hero.superpowers}</div>
        <div><img src=${hero.img}></div>
        <div>
        Выберите рейтинг героя от 1 до 10:
        <select id='${hero.name}'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
<button onclick="getRatingResult('${hero.name}')">Отправить</button>
        </div>
    </div>`
    }

    document.querySelector('body').innerHTML = heroesContent;
});

let arrHeroesRatings = [];

function getRatingResult(heroName) {
    const heroRatingId = document.getElementById(heroName).value;
    arrHeroesRatings.push(heroRatingId);
    localStorage.setItem(`${heroName}`, arrHeroesRatings);
};