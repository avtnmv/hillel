//Задача 1
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// let sum = 0;
// let count = 0;

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] > 0){
//         sum = sum + arr[i]
//         count++
//     }
// }
// console.log(`Сумма положительных элементов = ${sum}`)
// console.log(`Кол-во положительных элементов = ${count}`)

//Задача 2 

// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// let minNum = 0
// let count = 0

// for(let i = 0; i < arr.length; i++){
//     if(minNum > arr[i]){
//         minNum = arr[i]
//         count = i
//     }
// }
// console.log(`Минимальный эелемент массива = ${minNum}\nПорядковый номер = ${count}`)

//Задача 3
// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// let minNum = 0
// let count = 0

// for(let i = 0; i < arr.length; i++){
//     if(minNum < arr[i]){
//         minNum = arr[i]
//         count = i
//     }
// }
// console.log(`Максимальный эелемент массива = ${minNum}\nПорядковый номер = ${count}`)

//Задача 4

// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// let sum = 0;


// for(let i = 0; i < arr.length; i++){

//     if(arr[i] < 0){
//         sum = sum + arr[i]
//     }
// }
// console.log(`Сумма негативных элементов = ${sum}`)

//Задача 5

// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// count = 0

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] > 0 && arr[i] % 2 != 0){
//         count++
//     }
// }
// console.log(count)

//Задача 6

// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// count = 0

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] > 0 && arr[i] % 2 === 0){
//         count++
//     }
// }
// console.log(count)

//Задача 7

// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// sum = 0

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] > 0 && arr[i] % 2 === 0){
//         sum += arr[i]
//     }
// }
// console.log(sum)

//Задача 8

// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// let sum = 1

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] > 0 ){
//         sum = sum * arr[i]
//         console.log(sum)
//     }
// }
// console.log(sum)

// Задача 9

// let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// let maxNum = 0

// for(let i = 0; i < arr.length; i++){
//     if(maxNum < arr[i]){
//         maxNum = arr[i]
//     }
// }

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== maxNum){
//         arr[i] = 0
//     }
// }
// console.log(`Мaксимальный элемент массива = ${maxNum}\n\n`+`Обнуленный массив: `, arr)

