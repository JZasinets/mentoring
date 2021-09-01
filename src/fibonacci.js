let fibonacciNumbers = () => {
    let timer = setInterval(function() {
        let a = 1;
        let b = 1;

        for (let i = 3; ; i++) {
            let c = a + b;
            a = b;
            b = c;
        }

        console.log(с);
    }, 1000);
}

const commandFibonacci = (onReturnCommand) => {
    fibonacciNumbers();
//     process.on('STOP', () => {
//       fibonacciNumbers.close(() => {
//         console.log('Process stoped');
//         return onReturnCommand();
//       })
//     })
}

module.exports = commandFibonacci;

