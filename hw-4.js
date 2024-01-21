let number1 = +prompt('first number');
let number2 = +prompt('second number');
let sign = prompt('Введіть операцію');

if (sign === '+'){
    console.log(number1 + number2);
} else if (sign === '-'){
    console.log(number1 - number2);
} else if (sign === '*'){
    console.log(number1 * number2);
} else if (sign === '/'){
    console.log(number1 / number2);
} else {
    console.log('Ви ввели не знак');
}