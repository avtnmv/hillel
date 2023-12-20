//Задача №1
// result = ''
// for(let i = 20; i <= 30; i = i+ 0.5){
//     result = `${result + i}, `
// }
// console.log(result)

//Задача №2

// for(let i = 10; i <= 100; i = i + 10){
//     console.log(`${i} долларов = ${i * 27} грн.`)
// }

//Задача №3

// let userNumber = prompt('inpun number: ')
// userNumber = Number(userNumber)

// for(let i = 1; i <= 100; i++){
//     console.log(i)
    
//     i = i * i
//     if(i > userNumber){
//         break
//     }
// }

//Задача №4

// let userNumber = prompt('input your number')
// userNumber = Number(userNumber)

// if(userNumber === 2){
//     console.log(`Число ${userNumber} - простое!`)
// }

// for (let i = 2; i < userNumber; i++) {

//      if (userNumber % i === 0) {
//         console.log(`Число ${userNumber} - не есть простым`)
//         break
//     }

//     console.log(`Число ${userNumber} - простое!`)
// }

// Задача №5
// let userNumber = prompt('input your number')
// userNumber = Number(userNumber)

// let CopyNumber = userNumber //Используем ссылку на переменную чтобы вывести то что ввел user в консоль

// let count = 0;

// while (userNumber % 3 === 0) {
//     count++
//     userNumber /= 3;
// }
// if(userNumber === 1){
//     console.log(`Число ${CopyNumber} это 3 в ${count} степени.`)
// }
// else{
//     console.log('Число не является степенью числа 3.')
// }
