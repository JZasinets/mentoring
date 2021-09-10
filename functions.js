let unlimitedArguments = (...arguments) => {
    console.log('Первое задание');

    for (let i = 0; i < arguments.length; i++) {
        console.log(`Тип переменной: ${typeof(arguments[i])}, значение переменной: ${arguments[i]};`);
    }
};

let namedArguments = ({ first, second, third }) => {
    console.log('\nВторое задание');
    const parametersArray = [first, second, third];

    for (let i = 0; i < parametersArray.length; i++) {
        console.log(`Тип именнованного параметра: ${typeof(parametersArray[i])}, значение именованного параметра: ${parametersArray[i]};`);
    }
}

let noNamedArguments = (first, second, ...other) => {
    console.log('\nТретье задание');
    let showArguments = (numberArguments) => {
        console.log('Значение: ' + numberArguments)
    }

    showArguments(first);
    showArguments(second);
    unlimitedArguments(...other);
}

let addNameArguments = (one, two, three) => {
    console.log('\nЧетвёртое задание');
    namedArguments({ first: one, second: two, third: three });
}

unlimitedArguments(1, true, 'параметр', null, undefined);
namedArguments({ first: 'параметр a', second: true, third: 1 });
noNamedArguments('первый параметр', 'второй параметр', 'третий параметр', 123, true);
addNameArguments('первый параметр задания 4', 2, 'ТРЕТИЙ параметр задания 4');
