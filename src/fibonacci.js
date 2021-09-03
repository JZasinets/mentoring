const readline = require('./readline');

class FibonacciNumbers {
    backCommands = (onReturnCommand, stopFibonacci) => {
            let a = 0;
            let b = 1;

            let timeFibonacci = setInterval(() => {
                let c = a + b;
                a = b;
                b = c;
                console.log(b);
                readline.question('', (stopFibonacci) => {
                    if(stopFibonacci === 'стоп') {
                        clearInterval(timeFibonacci);
                        onReturnCommand();
                    }
                })
            }, 1000);

    }
}

let fibonacciNumbers = new FibonacciNumbers();

const commandFibonacci = (onReturnCommand) => {
        fibonacciNumbers.backCommands(onReturnCommand);
}

module.exports = commandFibonacci;

