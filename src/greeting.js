const readline = require('./readline');

class User {
    constructor (gender) {
        this.gender = gender;
    }

    greeting = (name) => {
        this.name = "Имя не распозано";
        this.gender = "Гендер не распозан";
        const isNameContainsSpaces = name.includes(' ');
        const isWomanName = /[aeiouаоиеёэыуюя]/g.test(name.slice(-1));
        this.gender = isWomanName ? "woman" : "man";

        if (isNameContainsSpaces) this.name = name.split(' ').join('');
        if (!name) return console.log('Имя не может быть пустым');
        this.name = name;

        const isNameSmall = this.name.length < 3;
        const isNameContainsNumbers = /\d/.test(this.name);
        const isNameContainsSymbols = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.name);
        const showUserName = this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();
        console.log(`Ваш пол ${this.gender}`)

        if (isNameSmall) return console.log('Имя должно содержать более 3-х букв');
        if (isNameContainsNumbers) return console.log('Имя не может содержать цифры');
        if (isNameContainsSymbols) return console.log('Имя не может содержать символы');
        if (isWomanName) return console.log(`Привет, ${showUserName}! Ты такая красивая сегодня!`);
        return console.log(`Привет, ${showUserName}! Ты такой красивый сегодня!`);
    }
}

let user = new User();

const commandWelcome = () => {
    return readline.question(`Введите Ваше имя: `, (name) => {
        user.greeting(name);
        readline.close()
    });
}

module.exports = commandWelcome;
