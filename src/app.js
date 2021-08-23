export default class App {
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
    readline.question(`Введите команду: `, (commandName) => {
        const handler = this.commands.find((item) => item.name === commandName);
        handler.callback();
        if(!handler) {
                return console.log('Такой команды нет, попробуйте ещё раз')
        }
    });
  };

  start = () => {
    this.registerCommand("приветственнаяКоманда1", User.greeting);
    this.registerCommand("приветственнаяКоманда2", User.greeting);

    this.listenToCommand();
  };
}
