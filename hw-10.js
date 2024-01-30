let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1

let newArr = arr.filter(function (element){
    return element % 2 === 0 && element > 0;
});

let count = 0;

let sum = newArr.reduce(function (acc, currentValue){
    return acc + currentValue;
}, 0);
console.log(sum);

arr.forEach(function (element) {
    if (element % 2 === 0 && element > 0){
        count++;
    }
})
console.log(count);
console.log('end 1');

// 2