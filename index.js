import App from "./src/app.js";
import User from "./src/greeting.js";

let app = new App();
app.registerCommand("приветственнаяКоманда", User.greeting);
