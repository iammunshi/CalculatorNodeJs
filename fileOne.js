const chalk = require('chalk')


function getSum(total, num) {
    return total + num;
}
function add(items){
    const result = items.reduce(getSum)
    console.log("Sum of the numbers provided is : "+chalk.green(result))
}

function subtract(items){
    let a = items[0]
    let sum = items.reduce(getSum)
    let left = sum - a;
    let result = a - left;
    console.log("Subtraction of numbers provided is : "+chalk.green(result))
}

function mult(items){
    let a = items[0]
    var result = 0
    for(var i = 1; i<items.length; i++){
        result = a * items[i]
        a = result
    }
    return result;
}
function multiply(items){
    console.log("Multiplication of numbers provided is : "+chalk.green(mult(items)))
}

function divide(items){
    let a = items[0];
    let b = items[1]
    let result = a/b;
    console.log("Division of numbers provided is : "+chalk.green(result))
}

function squareRoot(items){
    console.log("Square root of provided number is : "+ chalk.green(Math.sqrt(items[0])))
}

module.exports={
    add,
    subtract,
    multiply,
    divide,
    squareRoot
}


// function add(val1, val2){
//     console.log("\n"+chalk.blue("Adding "+chalk.bgYellow(val1)+" and "+chalk.bgYellow(val2)))
//     console.log(val1+val2)
// }
// function subtract(val1, val2){
//     console.log("\n"+chalk.green("Subtracting "+chalk.bgRed(val2)+" from "+chalk.bgRed(val1)))
//     console.log(val1-val2)
// }
// function multiply(val1, val2){
//     console.log("\n"+chalk.red("Multiplying "+chalk.bgGreen(val1)+" and "+chalk.bgGreen(val2)))
//     console.log(val1*val2)
// }
// function divide(val1, val2){
//     console.log("\n"+chalk.yellow("Dividing "+chalk.bgBlue(val1)+" by "+chalk.bgBlue(val2)))
//     console.log(val1/val2)
// }
// function squareRoot(val1){
//     console.log("\n"+chalk.magenta("Square root of "+chalk.bgCyan(val1)))
//     console.log(Math.sqrt(val1))
// }