const App = require('./src/app.js')
const User = require('./src/greeting.js')

let app = new App();
app.registerCommand("приветственнаяКоманда", User.greeting);
