// const readline = require('readline');

// const celToFar = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// celToFar.question('Please enter temperature in Celcius ', (answer) => {
//   // TODO: Log the answer in a database
// //   console.log(`Thank you for your valuable feedback: ${answer}`);
//     var cel = answer;

//     var far = (cel * 9/5) + 32

//     console.log(far)
//   celToFar.close();
// });
const chalk = require('chalk')
function celToFar(cel){
    var far = (cel * 9/5) + 32
    console.log(chalk.blue(far))
    console.log(chalk.blue.bgYellow('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
    console.log(chalk.red(chalk.bold('Hello'), chalk.blue.underline('world') + '!'));
    console.log(chalk.keyword('blue')('Hello this is blue keyword!'));

}
celToFar(60)


