let number = +prompt('put a number');
let degree = +prompt('put a degree');

function equation(number, degree){
    if (degree === 0) {
        return 1;
    } else {
        return number * equation(number, degree- 1);
    }
}

let result = equation(number, degree);
console.log(result);

