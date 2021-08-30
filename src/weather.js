const readline = require('./readline');
const fetch = require("node-fetch");

class Weather {
    getWeather = (cityValue, onReturnCommand) => {
        const valueTemperature = (value) => {
            return Math.round(value - 273)
        };

        if (cityValue.includes(' ')) cityValue = cityValue.split(' ').join('');
        if (/\d/.test(cityValue) || /[~`!#$%\^&*+=\[\]\\';/{}|\\":<>\?]/g.test(cityValue) || !cityValue.includes(',')) {
            console.log(`Проверьте корректность введённых данных данных`);
            return showWeather(onReturnCommand);
        }

        const cityInfo = cityValue.split(',');
        if (!cityInfo[0] || !cityInfo[1] || cityInfo[1] !== cityInfo[1].toUpperCase()) {
            console.log('Проверьте корректность кода страны');
            return showWeather(onReturnCommand);
        } else {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInfo[0]},${cityInfo[1]}&lang=ru&appid=136a1286295ce51ceabf7e5462f4a04a`)
                .then(response => response.json())
                .then((data) => {
                    console.log('Ваш город и код страны: ' + cityInfo + ';\n' +
                        data.weather[0]['description'][0].toUpperCase() + data.weather[0]['description'].slice(1).toLowerCase() + ';\n' +
                        'Текущая температура: ' + valueTemperature(data.main.temp) + '°C;\n' +
                        'Минимальная температура сегодня: ' + valueTemperature(data.main.temp_min) + '°C;\n' +
                        'Максимальная температура сегодня: ' + valueTemperature(data.main.temp_max) + '°C.');
                    return onReturnCommand();
                })
                .catch(() => {
                    console.log('Такого города не существует.');
                    return showWeather(onReturnCommand);
                })
        }
    }
}

let weather = new Weather();

const showWeather = (onReturnCommand) => {
    return readline.question(`Введите название города и код страны на английском: `, (cityValue) => {
        weather.getWeather(cityValue, onReturnCommand);
    });
}

module.exports = showWeather;
