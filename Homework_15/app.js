const arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, item) {
    
    const index = arr.indexOf(item);//

    if (index !== -1) { 
        arr.splice(index, 1);
    }
    else{
        console.log('Элемента нет в массиве!')
    }
}

removeElement(arr, 19);
console.log(arr)
