const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  });

readline.question(`Введите команду: `, (commandName) => {
    const handler = this.commands.find((item) => item.name === commandName);
    handler.callback();
});

module.exports = readline();
