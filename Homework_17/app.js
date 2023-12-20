// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// const arr = [2, 'hello', 4, 'world', 8, '!']
// let result = 0
// let count = 0

// function averageSum(){
//     for(let i = 0; i < arr.length; i++){
        
//         if (typeof arr[i] === 'number') {
//             result += arr[i];
//             count++;
//         }
//     }
//     console.log(result)
// }

// averageSum()

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// function doMath(x, znak, y){
//     switch(znak){
//         case '+':
//             return (x + y)

//         case '-':
//             return (x - y)

//         case '*':
//             return (x * y)
        
//         case '/':
//             return (x / y)

//         case '%':
//             return (x % y)

//         case '^':
//             return (x ** y)
//     }
// }

// const result = doMath(5, '^', 5)
// console.log(result)

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// function fillArray(rows, cols) {
//     let mainArray = [];

//     for (let i = 0; i < rows; i++) {
//         let innerArray = [];

//         for (let j = 0; j < cols; j++) {
//             let userInput = prompt(`Введіть значення для елементу [${i}][${j}]:`);
//             innerArray.push(userInput);
//         }

//         mainArray.push(innerArray);
//     }

//     return mainArray;
// }

// const rows = prompt("Введіть кількість рядків:");
// const cols = prompt("Введіть кількість стовпців:");

// const resultArray = fillArray(rows, cols);
// console.log(resultArray);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// function deleteSymbols(string, symbols) {
//     for (let i = 0; i < symbols.length; i++) {
//         string = string.split(symbols[i]).join('');
//     }
//     return string;
// }

// const inputString = prompt('Введіть рядок:');
// const symbolsToRemove = prompt('Введіть символи, які потрібно видалити з рядка:').split(' ');

// const removedString = deleteSymbols(inputString, symbolsToRemove);
// console.log(removedString);

