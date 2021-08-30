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

        if (!name) {
            console.log('Имя не может быть пустым');
            return commandWelcome(onReturnCommand);
        }
        this.name = name;
        if (isNameContainsSpaces) this.name = name.split(' ').join('');

        const isNameSmall = this.name.length < 3;
        const isNameContainsNumbers = /\d/.test(this.name);
        const isNameContainsSymbols = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.name);
        const showUserName = this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();

        const handlerError = (error, text) => {
            if (error) {
                console.log(text);
                return commandWelcome(onReturnCommand);
            }
        }

        if (isNameSmall || isNameContainsNumbers || isNameContainsSymbols) {
            handlerError(isNameSmall, 'Имя должно содержать более 3-х букв');
            handlerError(isNameContainsNumbers, 'Имя не может содержать цифры');
            handlerError(isNameContainsSymbols, 'Имя не может содержать символы');
        } else {
            if (isWomanName) {
                console.log(`Ваш пол ${this.gender}.\nПривет, ${showUserName}! Ты такая красивая сегодня!`);
                return onReturnCommand();
            } else {
                console.log(`Ваш пол ${this.gender}.\nПривет, ${showUserName}! Ты такой красивый сегодня!`);
                return onReturnCommand();
            }
        }
    }
}

let user = new User();

const commandWelcome = (onReturnCommand) => {
    return readline.question(`Введите Ваше имя: `, (name) => {
        user.greeting(name, onReturnCommand);
    });
}

module.exports = commandWelcome;
