function createSumFunction() {
    let sum = 0;

    return function (value) {
        sum += value;
        return sum;
    };
}

let sumFunction = createSumFunction();

console.log(sumFunction(3));
console.log(sumFunction(5));
console.log(sumFunction(20));