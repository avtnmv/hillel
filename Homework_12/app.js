let lengthArr =  prompt('Введите длину массива: ') 
lengthArr = Number(lengthArr)

let arr = []

for(let i = 0; i < lengthArr; i++){
    let element = prompt(`Введите элемент масива по индексу ${i}`) 

    if (!isNaN(element)) { //Проверка являетсся ли введенный элемент числом, если да то делаем явное преобразование типа в числовой
        arr.push(Number(element));
    } 
    else {
        arr.push(element);
    }
}

console.log('Исходный массив: ', arr)

let copiedArr = arr.slice(0) // Делаем копию массива чтобы избежать мутации исходного массива
console.log( 'Отсортированный массив: ', copiedArr.sort())


copiedArr.splice(1, 3) // Удаляем с индекса 1 (2 элемент) по индекс 3(4 элемент включительно)

console.log('Массив с без элементов со 2-го по 4-ый(включительно) ', copiedArr)

