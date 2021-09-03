let timerLogOut = () => {
    let timeLeft = 5;
    let cases = [2, 0, 1, 1, 1, 2];

    function countFormatter (numberSeconds, unitName) {
        return console.log(timeLeft + ' ' + unitName[ (numberSeconds % 100 > 4 && numberSeconds % 100 < 20) ? 2 : cases[(numberSeconds % 10 < 5) ? numberSeconds % 10 : 5] ]);
    }

    let timer = setInterval(function() {
        if(timeLeft === 0) {
            clearInterval(timer);
            console.log('Увидимся!');
            return process.exit()
        }

        countFormatter(timeLeft, ['секунда', 'секунды', 'секунд'])
        timeLeft--;
    }, 1000)
}

const logOut = () => {
    console.log(`Осталось:`);
    timerLogOut();
}

module.exports = logOut;
