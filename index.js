const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class User {
    greeting = (name, gender) => {
        this.name = name;
        this.gender = gender;

        const isNameContainsSpaces = this.name.includes(' ');

        if (isNameContainsSpaces) this.name = this.name.split(' ').join('');
        if (!this.name) return console.log('Имя не может быть пустым');

        const isNameSmall = this.name.length < 3;
        const isNameContainsNumbers = /\d/.test(this.name);
        const isNameContainsSymbols = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.name);
        const isWomanName = /[aeiouаоиеёэыуюя]/g.test(this.name.slice(-1));
        const showUserName = this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();

        if (isNameSmall) return console.log('Имя должно содержать более 3-х букв');
        if (isNameContainsNumbers) return console.log('Имя не может содержать цифры');
        if (isNameContainsSymbols) return console.log('Имя не может содержать символы');
        if (isWomanName) return console.log(`Привет, ${showUserName}! Ты такая красивая сегодня!`);
        return console.log(`Привет, ${showUserName}! Ты такой красивый сегодня!`);
    }
}

let user = new User();

readline.question(`Введите Ваше имя: `, (name) => {
    user.greeting(name);
    readline.close();
});
