const readline = require('./readline');

class FibonacciNumbers {
    backCommands = (onReturnCommand, stopFibonacci) => {
            let previousNumberFibonacci = 0;
            let currentNumberFibonacci = 1;

            let timeFibonacci = setInterval(() => {
                let nextNumberFibonacci = previousNumberFibonacci + currentNumberFibonacci;
                previousNumberFibonacci = currentNumberFibonacci;
                currentNumberFibonacci = nextNumberFibonacci;
                console.log(currentNumberFibonacci);
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

