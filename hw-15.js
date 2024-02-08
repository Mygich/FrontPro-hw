//1

let array = [1, 2, 'fgbdgbd', 9, 'c', 'trhh'];

function calculateAverage(arr) {
    const numbers = arr.filter(item => typeof item === 'number');

    if (numbers.length === 0) {
        return
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;

    return average;
}

const result = calculateAverage(array);

console.log(result);

console.log('end 1');

// 2

function doMath(x, znak, y) {

    x = +(x);
    y = +(y);

    if (isNaN(x) || isNaN(y)) {
        return console.log("Введені значення не є числами");
    }

    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y === 0) {
                return "Ділення на нуль неможливе";
            }
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return "Неможлива операція";
    }
}

let x = prompt("Введіть перше число:");
let znak = prompt("Введіть математичну операцію (+, -, *, /, %, ^):");
let y = prompt("Введіть друге число:");

let result2 = doMath(x, znak, y);

console.log(result2);
alert(`${result2}`);

console.log('end 2');

// 3