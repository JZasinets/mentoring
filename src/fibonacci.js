const process = require('process');

let fibonacciNumbers = (onReturnCommand) => {
    let a = 1;
    let b = 1;

    let timerFibonacci = setInterval(() => {
        let c = a + b;
        a = b;
        b = c;
        console.log(b);
        // if(...) {
        //     clearInterval(timerFibonacci);
        //     return onReturnCommand();
        // }
    }, 1000);
}

const commandFibonacci = (onReturnCommand) => {
    fibonacciNumbers(onReturnCommand);
    process.openStdin().on('SIGINT', () => {
        console.log('Process stopped');
        return onReturnCommand();
    })
}

module.exports = commandFibonacci;

