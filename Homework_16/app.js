const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let result = ''

function generateKey(value){
    for (let i = 0; i < value; i++) {
       const randomIndex =  Math.floor(Math.random() * characters.length);
       result = result + characters[randomIndex]
    }
    console.log(result)
}

generateKey(10000000) 

w
