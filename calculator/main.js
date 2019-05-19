const Operations = require('./operations')
const inquirer = require('inquirer')

function mainFunc(){
    var questions = {
        message: "What do you want to do?",
        type: "checkbox",
        name: "question1",
        choices: ["Add", "Subtract", "Multiply", "Divide", "Square Root"]
    }
    inquirer.prompt(questions)
        .then(function (answers) {
            // console.log(answers.question1)
            if (answers.question1 == "Add") {
                Operations.add();
            }
            else if (answers.question1 == "Subtract") {
                Operations.subtract();
            }
            else if (answers.question1 == "Multiply") {
                Operations.multiply();
            }
            else if (answers.question1 == "Divide") {
                Operations.divide();
            }
            else if (answers.question1 == "Square Root") {
                Operations.squareRoot();
            }
        }
    );
}

module.exports = {
    mainFunc
}
