const commandWelcome = require('./greeting.js');
const logOut = require('./logOut.js');
const readline = require('./readline');

class App {
  constructor() {
    this.commands = [];
  }

  registerCommand = (commandName, callback) => {
    this.commands = [...this.commands, { commandName, callback }];
  };

  showCommands = () => {
    return `Привет, я чат-бот! Список моих команд: ${this.commands
      .map((item) => item.commandName)
      .join(", ")}`;
  };

  listenToCommand = (commands) => {
    readline.question(`Введите команду: `, (inputCommandName) => {
      const handler = this.commands.find((item) => item.commandName === inputCommandName);
      if(!handler) return console.log('Такой команды нет, попробуйте еще раз');
      handler.callback();
    });
  };

  start = () => {
    this.registerCommand("приветствие", commandWelcome);
    this.registerCommand("выход", logOut);
    console.log(this.showCommands(this.commands));

    this.listenToCommand(this.commands);
  };
}

module.exports = App;
