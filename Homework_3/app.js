// // Задача №1

let resultFirstTask = ''; //Инициализируем переменную с пустой строкой которая будет хранить результат склейки(конкатенации).

//Создадим цикл, который будет прибавлять строку к строке, до момента пока не отработает 3 раза.
for (let i = 0; i <= 2 ; i++){
    let i = prompt('Введите строку: ')
    resultFirstTask += i 
}
alert(resultFirstTask) 

//Задача №2
let userNumber = prompt('Введите число;')


alert(`${(parseInt(userNumber / 10000)) % 10} ${(parseInt(userNumber / 1000)) % 10} ${(parseInt(userNumber / 100)) % 10} ${(parseInt(userNumber / 10)) % 10} ${parseInt(userNumber) % 10} `)





