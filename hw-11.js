

function generateKey(length, characters){
    let min = 0;
    let max = characters.length;
    let result = '';

    for (let i = 0; i < length; i++){
        let randomInd = Math.floor(Math.random() * (max - min + 1)) + min;
        result += characters[randomInd];
    }
    return result
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);

