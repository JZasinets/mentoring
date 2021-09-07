let unlimitedArguments = (...arguments) => {
    console.log('Первое задание');
    const argumentsArray = [...arguments];

    for (let i = 0; i < argumentsArray.length; i++) {
        console.log(`Тип переменной: ${typeof(argumentsArray[i])}, значение переменной: ${argumentsArray[i]};`);
    }
};

let namedArguments = ({ parameterA, parameterB, parameterC = {} }) => {
    console.log('\nВторое задание');
    const parametersArray = [parameterA, parameterB, parameterC];

    for (let i = 0; i < parametersArray.length; i++) {
        console.log(`Тип именнованного параметра: ${typeof(parametersArray[i])}, значение именованного параметра: ${parametersArray[i]};`);
    }
}

let noNamedArguments = (firstArgument, secondArgument, ...otherArguments) => {
    console.log('\nТретье задание');
    let showArguments = (numberArguments) => {
        console.log('Значение: ' + numberArguments)
    }

    showArguments(firstArgument);
    showArguments(secondArgument);
    unlimitedArguments(...otherArguments);
}

let addNameArguments = (firstPar, secondPar, thirdPar) => {
    console.log('\nЧетвёртое задание');
    namedArguments({ parameterA: firstPar, parameterB: secondPar, parameterC: thirdPar });
}

unlimitedArguments(1, true, 'параметр', null, undefined);
namedArguments({ parameterA: 'параметр a', parameterB: true, parameterC: 1 });
noNamedArguments('первый параметр', 'второй параметр', 'третий параметр', 123, true);
addNameArguments('первый параметр задания 4', 2, 'ТРЕТИЙ параметр задания 4');
