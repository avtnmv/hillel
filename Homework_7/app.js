let userDateOfBirth = prompt('Введи свой год рождения: ')

let userTown = prompt('Введи название города, в котором ты живешь: ')
if(userTown != null){
    userTown = userTown.toLowerCase()
} 

let userSport = prompt('Введи свой любимый вид спорта: ')
if(userSport != null){
    userSport = userSport.toLowerCase()
} 

let city = {
    kyiv: 'Киев',
    washington: 'Вашингтон',
    london: 'Лондон'
}
let sport = {
    box: 'Бокс',
    football: 'Футбол',
    bascketball: 'Баскетбол'
}

let resultCity = ''
let resultSport = ''
let yearsOld = ''

switch(true){
    case userDateOfBirth == null || userDateOfBirth == '':
        yearsOld = 'Жаль что вы не захотели ввести Ваш возраст'
        break;
    
    case Number.isNaN( +userDateOfBirth):
        yearsOld = 'Введите пожалуйста числовое значение!'
        break;
    
    default:
        yearsOld = `Ваш возраст: ${2023 - Number(userDateOfBirth)}`
        break;
}

switch(userTown){
    case city.kyiv.toLowerCase():
        resultCity = `Ты живешь в столице Украины`
        break;

    case city.washington.toLowerCase():
        resultCity = `Ты живешь в столице Америки`
        break;

    case city.london.toLowerCase():
        resultCity = `Ты живешь в столице Великобритании`
        break;

    case '':
        resultCity = 'Жаль что вы не захотели ввести свой город'
        break;

    case null:
        resultCity = 'Жаль что вы не захотели ввести свой город'
        break;

    default: 
        resultCity = `Ты живешь городе ${userTown}`
}

switch(userSport){
    case sport.box.toLowerCase():
        resultSport = `Круто, хочешь быть как Виталий Кличко?`
        break;

    case sport.football.toLowerCase():
        resultSport = `Круто, хочешь быть как Лионель Месси?`
        break;

    case sport.bascketball.toLowerCase():
        resultSport = `Круто, хочешь быть как Майкл Джордан?`
        break;
    
    case '':
        resultSport = 'Жаль что вы не захотели ввести свой вид спорта'
        break;
    
    case null:
        resultSport = 'Жаль что вы не захотели ввести свой вид спорта'
        break;

    default: 
        resultSport = `Твой вид спорта ${userSport}`
}

alert(`${yearsOld}\n${resultCity}\n${resultSport}`)