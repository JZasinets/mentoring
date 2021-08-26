const readline = require('./readline');

class User {
    constructor (gender) {
        this.gender = gender;
    }

    greeting = (name, onReturnCommand) => {
        this.name = "Имя не распозано";
        this.gender = "Гендер не распозан";
        const isNameContainsSpaces = name.includes(' ');
        const isWomanName = /[aeiouаоиеёэыуюя]/g.test(name.slice(-1));
        this.gender = isWomanName ? "woman" : "man";

        if (isNameContainsSpaces) this.name = name.split(' ').join('');
        if (!name) {
            console.log('Имя не может быть пустым');
            return commandWelcome();
        }
        this.name = name;

        const isNameSmall = this.name.length < 3;
        const isNameContainsNumbers = /\d/.test(this.name);
        const isNameContainsSymbols = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.name);
        const showUserName = this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();

        if (isNameSmall) {
            console.log('Имя должно содержать более 3-х букв');
            return commandWelcome();
        }
        if (isNameContainsNumbers) {
            console.log('Имя не может содержать цифры');
            return commandWelcome();
        }
        if (isNameContainsSymbols) {
            console.log('Имя не может содержать символы');
            return commandWelcome();
        }
        console.log(`Ваш пол ${this.gender}`)
        if (isWomanName) {
            console.log(`Привет, ${showUserName}! Ты такая красивая сегодня!`);
        } else {
            console.log(`Привет, ${showUserName}! Ты такой красивый сегодня!`);
        }
        return onReturnCommand();
    }
}

let user = new User();

const commandWelcome = (onReturnCommand) => {
    return readline.question(`Введите Ваше имя: `, (name) => {
        user.greeting(name, onReturnCommand);
    });
}

module.exports = commandWelcome;
