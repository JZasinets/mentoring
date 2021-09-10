const readline = require('./readline');

class ChangeArray {
    getUniqueValue = (stringValue, onReturnCommand) => {
        const arrayValue = stringValue.replace(/\s+/g,"").split(',');
        const isContainsNumbers = arrayValue.every((result, val) => result && typeof val === 'number');

        if (isContainsNumbers) {
            const uniqueValue = [...new Set(arrayValue)];
            console.log(`Уникальные значения: ${uniqueValue}`);
            return onReturnCommand();
        } else {
            console.log('Нужно ввести только числа')
            return commandArray(onReturnCommand);
        }
    }
}

let changeArray = new ChangeArray();

const commandArray = (onReturnCommand) => {
    return readline.question(`Введите массив чисел через запятую: `, (stringValue) => {
        changeArray.getUniqueValue(stringValue, onReturnCommand);
    });
}

module.exports = commandArray;
