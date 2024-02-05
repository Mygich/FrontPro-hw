

function generateKey(length, characters){
    let result = '';

    for (let i = 0; i < length; i++){
        let randomInd = Math.floor(Math.random() * (characters.length + 1));
        result += characters[randomInd];
    }
    return result
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(5, characters);
console.log(key);

