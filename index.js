const clear = require('clear')
const Figlet = require('./calculator/figlet')
const Main = require('./calculator/main')

clear();
Figlet.figlett('Wecome to Calculator!');
Main.mainFunc()