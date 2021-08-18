const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class User {
    constructor (gender) {
        this.gender = gender;
    }

    greeting = (name) => {
        this.name = name;
        const isNameContainsSpaces = this.name.includes(' ');
        const isWomanName = /[aeiouаоиеёэыуюя]/g.test(this.name.slice(-1));

        if (isNameContainsSpaces) this.name = this.name.split(' ').join('');
        if (!this.name) return console.log('Имя не может быть пустым');
        if (isWomanName) this.gender = "woman";

        const isNameSmall = this.name.length < 3;
        const isNameContainsNumbers = /\d/.test(this.name);
        const isNameContainsSymbols = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.name);
        const showUserName = this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();

        if (isNameSmall) return console.log('Имя должно содержать более 3-х букв');
        if (isNameContainsNumbers) return console.log('Имя не может содержать цифры');
        if (isNameContainsSymbols) return console.log('Имя не может содержать символы');
        if (this.gender) return console.log(`Привет, ${showUserName}! Ты такая красивая сегодня!`);
        return console.log(`Привет, ${showUserName}! Ты такой красивый сегодня!`);
    }
}

let user = new User();

readline.question(`Введите Ваше имя: `, (name) => {
    user.greeting(name);
    readline.close();
});
