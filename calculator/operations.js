const inquirer = require('inquirer')
const Result = require('../fileOne')

function add() {
    let a = 0;
    let b = 0;
    let items = []
    inquirer.prompt({
        message: "First Element",
        type: "text",
        name: "question2"
    }).then(function (answer) {
        items.push(parseInt(answer.question2[0]))
        inquirer.prompt({
            message: "Second Element",
            type: "text",
            name: "question3"
        }).then(function (answer) {
            items.push(parseInt(answer.question3[0]))
            addAnother(items);
            
        })
    })
}

function subtract() {
    let a = 0;
    let b = 0;
    let items = []
    inquirer.prompt({
        message: "First Element",
        type: "text",
        name: "question2"
    }).then(function (answer) {
        items.push(parseInt(answer.question2[0]))
        inquirer.prompt({
            message: "Second Element",
            type: "text",
            name: "question3"
        }).then(function (answer) {
            items.push(parseInt(answer.question3[0]))
            //Result.subtract(items)
            subtractAnother(items)
        })
    })
}

function multiply() {
    let a = 0;
    let b = 0;
    let items = []
    inquirer.prompt({
        message: "First Element",
        type: "text",
        name: "question2"
    }).then(function (answer) {
        items.push(parseInt(answer.question2[0]))
        inquirer.prompt({
            message: "Second Element",
            type: "text",
            name: "question3"
        }).then(function (answer) {
            items.push(parseInt(answer.question3[0]))
            //Result.multiply(items)
            multiplyAnother(items)
        })
    })
}

function divide() {
    let a = 0;
    let b = 0;
    let items = []
    inquirer.prompt({
        message: "First Element",
        type: "text",
        name: "question2"
    }).then(function (answer) {
        items.push(parseInt(answer.question2[0]))
        inquirer.prompt({
            message: "Second Element",
            type: "text",
            name: "question3"
        }).then(function (answer) {
            items.push(parseInt(answer.question3[0]))
            Result.divide(items)
        })
    })
}
function squareRoot() {
    let a = 0;
    let b = 0;
    let items = []
    inquirer.prompt({
        message: "First Element",
        type: "text",
        name: "question2"
    }).then(function (answer) {
        items.push(parseInt(answer.question2[0]))
        Result.squareRoot(items)
    })
}

function addAnother(items){
    inquirer.prompt({
        message: "Want to add another number?",
        type: "checkbox",
        name: "question2",
        choices: ["Yes", "No"]
    }).then(function (answer) {
        if(answer.question2 == "Yes"){
            inquirer.prompt({
                message: "New Element",
                type: "text",
                name: "question2"
            }).then(function (answer) {
                items.push(parseInt(answer.question2[0]))
                addAnother(items)
            })      
        }
        else{
            Result.add(items)
        }
    })
}

function subtractAnother(items){
    inquirer.prompt({
        message: "Want to subtract another number?",
        type: "checkbox",
        name: "question2",
        choices: ["Yes", "No"]
    }).then(function (answer) {
        if(answer.question2 == "Yes"){
            inquirer.prompt({
                message: "New Element",
                type: "text",
                name: "question2"
            }).then(function (answer) {
                items.push(parseInt(answer.question2[0]))
                subtractAnother(items)
            })      
        }
        else{
            Result.subtract(items)
        }
    })
}

function multiplyAnother(items){
    inquirer.prompt({
        message: "Want to multiply another number?",
        type: "checkbox",
        name: "question2",
        choices: ["Yes", "No"]
    }).then(function (answer) {
        if(answer.question2 == "Yes"){
            inquirer.prompt({
                message: "New Element",
                type: "text",
                name: "question2"
            }).then(function (answer) {
                items.push(parseInt(answer.question2[0]))
                multiplyAnother(items)
            })      
        }
        else{
            Result.multiply(items)
        }
    })
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot
}