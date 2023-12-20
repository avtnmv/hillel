// Задача №1, вариант 1.
// let result = ''
// for(let i = 10; i <= 20; i++){
//     result = `${result + i}, `
// }
// console.log(result.slice(0, -2)) //-2 так как удаляем два символа: пробел и запятую в конце

// Задача №1, вариант 2.
// let result = ''
// for(let i = 10; i <= 20; i++){
//     result += i;

//     if(i < 20){
//     result += ','
// }
// }
// console.log(result.slice(0, -2))

// Задача №2

// let result = ''
// for(let i = 10; i <= 20; i++){
//     result = `${result + i * i}, `
// }
// console.log(result.slice(0, -2))

// Задача 3
// let result = ''
// for(let i = 1; i <= 10; i++){
//     result += `7 * ${i} = ${i * 7}\n`
// }
// console.log(result.slice(0, -1))

// Задача №4
// let sum = 0;

// for (let i = 1; i <= 15; i++) {
//   sum += i;
// }
// console.log(sum)

// console.log(sum);

// Задача №5
// let product = 1;

// for (let i = 15; i <= 35; i++) {
//   product *= i;
// }
// console.log(product)

// Задача №6
// let sum = 0;
// let count = 0

// for (let i = 1; i <= 500; i++) {
//   sum = sum + i;
//   count++
// }
// console.log(sum / count)

// Задача №7
// let sum = 0;
// for (let i = 30; i <= 80; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//     console.log(sum);
//   }
// }   
// Задача №8
// let result = '';
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0) {
//     result = `${result + i}, `
//   }
// }   
// console.log(result.slice(0, -2))

// Задача №9
// let userNumber = prompt('Введите число: ')
// userNumber = Number(userNumber)

// let result = ''

// for(let i = 1; i <= userNumber; i++){
//     if(userNumber % i === 0)
//     {
//         result = `${result + i}, `
//     }
// }
// console.log(result.slice(0, -2))

// Задача №10
// let userNumber = prompt('Введите число: ')
// userNumber = Number(userNumber)

// let result = ''
// let count = 0
// for(let i = 1; i <= userNumber; i++){
//     if(i % 2 === 0)
//     {
//         result = `${result + i}`
//         count++
//     }
// }
// console.log('Количество четных делитлей: ' + count)

// Задача №11
// let userNumber = prompt('Введите число: ')
// userNumber = Number(userNumber)

// let result = 0

// for(let i = 1; i <= userNumber; i++){
//     if(i % 2 === 0)
//     {
//       result =  (result + i)
//     }
// }
// console.log('Сумма четных делитлей: ' + result)

// Задача №12

// for(let i = 1; i <= 10; i++){
  
//   for(let j = 1; j <= 10; j++){
//     console.log(`${i} * ${j} = ` + `${i * j}`)
// } 
//     console.log('\n') //чтобы после каждой итерации певрого цикла была пустая строка, для лучшего чтения
// }
    