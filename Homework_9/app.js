let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(){

    case null:
        console.log('Вы отменили')
        break;

    case numOrStr.trim(''):
        console.log('Пустая строка')
        break;
        
    case Number.isNaN(+numOrStr):
        console.log('number is Ba_Nan')
        break;

    default:
        console.log('OK!')
        break;
}


