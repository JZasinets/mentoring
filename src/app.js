const User = require('./greeting.js');
const LogOut = require('./logOut.js');
const readline = require('./readline');

class App {
  constructor() {
    this.commands = [];
  }

  registerCommand = (name, callback) => {
    this.commands = [...this.commands, { name, callback }];
  };

  showCommands = () => {
    return `Привет, я чат-бот! Список моих команд: ${this.commands
      .map((item) => item.name)
      .join(", ")}`;
  };

  listenToCommand = () => {
    readline.question();
  };

  start = () => {
    this.registerCommand("приветственнаяКоманда", User.greeting);
    this.registerCommand("командаОтключения", LogOut.output);
    console.log(this.showCommands(this.commands));

    this.listenToCommand();
  };
}

module.exports = App;
