let timerLogOut = () => {
    let timeLeft = 5;

    let timer = setInterval(function() {
        if (timeLeft == 5) console.log(`${timeLeft} секунд,`);
        if (timeLeft > 1 && timeLeft < 5) console.log(`${timeLeft} секунды,`);
        if (timeLeft == 1) console.log(`${timeLeft} секунда`);

        if(timeLeft == 0) {
            clearInterval(timer);
            console.log('Увидимся!');
            return process.exit()
        }
        timeLeft--;
    }, 1000)
}

const logOut = () => {
    console.log(`Осталось:`);
    timerLogOut();
}

module.exports = logOut;
