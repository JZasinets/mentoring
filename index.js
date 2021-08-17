const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class User {
    constructor (name, gender) {
        this.name = name;
        this.gender = gender;
    }

    // userGender() {
    //     if (/[aeiouаоиеёэыуюя]/g.test(this.name.slice(-1))) {
    //         this.gender = "woman";
    //     } else {
    //         this.gender = "man";
    //     }
    // }

    sayHello() {
        (this.name.length < 3) ? console.log('Имя должно содержать более 3-х букв') :
            (this.name.includes(' ')) ? console.log(`Привет, ${this.name.split(' ').join('').toUpperCase()}`) :
                (/\d/.test(this.name)) ? console.log('Имя не может содержать цифры') :
                    (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.name)) ? console.log('Имя не может содержать символы') :
                        (/[aeiouаоиеёэыуюя]/g.test(this.name.slice(-1))) ? console.log(`Привет, ${this.name[0].toUpperCase() + this.name.slice(1).toLowerCase()}! Ты такая красивая сегодня!`) :
                            console.log(`Привет, ${this.name[0].toUpperCase() + this.name.slice(1).toLowerCase()}! Ты такой красивый сегодня!`);
    }
}

readline.question(`Введите Ваше имя: `, function(name) {
    new User(name).sayHello();
    readline.close();
});
