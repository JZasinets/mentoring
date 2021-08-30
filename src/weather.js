const readline = require('./readline');
const fetch = require("node-fetch");

class Weather {
    constructor (cityName, countryСode) {
        this.cityName = cityName;
        this.countryСode = countryСode;
    }

    getWeather = (cityValue, onReturnCommand) => {
        this.cityValue = cityValue;
        const cityInfo = this.cityValue.split(',');
        this.cityName = cityInfo[0];
        this.countryСode = cityInfo[1];

        const valueTemperature = (value) => {
            return Math.round(value - 273)
        };

        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName},${this.countryСode}&lang=ru&appid=136a1286295ce51ceabf7e5462f4a04a`)
            .then(response => response.json())
            .then((data) => {
                console.log(data.weather[0]['description'][0].toUpperCase() + data.weather[0]['description'].slice(1).toLowerCase() + ';\n' +
                    'Текущая температура: '+ valueTemperature(data.main.temp) + '°C;\n' +
                    'Минимальная температура сегодня: ' + valueTemperature(data.main.temp_min) +'°C;\n' +
                    'Максимальная температура сегодня: ' + valueTemperature(data.main.temp_max) +'°C.');
                return onReturnCommand();
            })
            .catch(() => {
                console.log('Такого города не существует.');
                return showWeather(onReturnCommand);
            })
    }
}

let weather = new Weather();

const showWeather = (onReturnCommand) => {
    return readline.question(`Введите название города и код страны на английском: `, (cityValue) => {
        weather.getWeather(cityValue, onReturnCommand);
    });
}

module.exports = showWeather;
