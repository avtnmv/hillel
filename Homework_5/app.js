let firstNumber = prompt('Введите первое число: ')
firstNumber = Number(firstNumber)

let secondNumber = prompt('Введите второе число: ')
secondNumber = Number(secondNumber)


    
    let operator = prompt('Выберете операцию add, sub, div, mult')
    
    switch(operator){
    case 'add':
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
    break

    case 'sub':
    alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
    break

    case 'div':
    alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
    break

    case 'mult':
    alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
    break

    default:
    alert('Не существует такого оператора!')
}
