const readline = require('./readline');
const fetch = require("node-fetch");

class Weather {
    getWeather = async (cityValue, onReturnCommand) => {
        const isContainsSymbols = /[~`!#$%\^&*+=\[\]\\';/{}|\\":<>\?]/g.test(cityValue);
        const isContainsNumbers = /\d/.test(cityValue);
        const isContainsComma = cityValue.includes(',');
        const valueTemperature = (value) => {
            return Math.round(value - 273);
        };

        if (isContainsNumbers || isContainsSymbols || !isContainsComma) {
            console.log(`Проверьте корректность введённых данных данных`);
            return showWeather(onReturnCommand);
        }

        const cityInfo = cityValue.split(' ').join('').split(',');
        if (!cityInfo[0] || !cityInfo[1] || cityInfo[1] !== cityInfo[1].toUpperCase()) {
            console.log('Проверьте корректность данных');
            return showWeather(onReturnCommand);
        }
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInfo[0]},${cityInfo[1]}&lang=ru&appid=136a1286295ce51ceabf7e5462f4a04a`);
        try {
            const data = await response.json()
            console.log('Ваш город и код страны: ' + cityInfo + ';\n' +
                data.weather[0]['description'][0].toUpperCase() + data.weather[0]['description'].slice(1).toLowerCase() + ';\n' +
                'Текущая температура: ' + valueTemperature(data.main.temp) + '°C;\n' +
                'Минимальная температура сегодня: ' + valueTemperature(data.main.temp_min) + '°C;\n' +
                'Максимальная температура сегодня: ' + valueTemperature(data.main.temp_max) + '°C.')
            return onReturnCommand();
        } catch (error) {
                console.log('Такого города не существует.');
                return showWeather(onReturnCommand);
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
