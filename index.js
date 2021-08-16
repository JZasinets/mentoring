const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Введите Ваше имя: `, function(name) {
    console.log(`Привет, ${name.toUpperCase()}`);
    readline.close();
});
