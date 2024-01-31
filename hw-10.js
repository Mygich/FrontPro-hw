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

let min = arr[0];

for(let i = 1; i < arr.length; i++){
    if (arr[i] < min){
        min = arr [i];
    }
}
console.log(min);
console.log(arr.indexOf(min));
console.log('end 2');

// 3
let max = arr[0];

for(let i = 1; i < arr.length; i++){
    if (arr[i] > max){
        max = arr [i];
    }
}
console.log(max);
console.log(arr.indexOf(max));
console.log('end 3');

// 4

let negativeCount = 0;

for (let i = 1; i < arr.length; i++){
    if (arr[i] < 0 ){
        negativeCount++;
    }
}
console.log(negativeCount);
console.log('end 4');

// 5
let unpairedPositiveCount = 0;

for (let i = 1; i < arr.length; i++){
    if (arr[i] > 0 && arr[i] %2 === 1){
        unpairedPositiveCount++;
    }
}
console.log(unpairedPositiveCount);
console.log('end 5');

// 6

let doublePositiveCount = 0;

for (let i = 1; i < arr.length; i++){
    if (arr[i] > 0 && arr[i] %2 === 0){
        doublePositiveCount++;
    }
}
console.log(doublePositiveCount);
console.log('end 6');

// 7

let doublePositiveSum = arr.reduce(function (accumulator, currentValue){
    if(currentValue > 0 && currentValue %2 === 0){
        return accumulator + currentValue;
    } else {
        return accumulator;
    }
},0);
console.log(doublePositiveSum);
console.log('end 7');

// 8
let unpairedPositiveSum = arr.reduce(function (accumulator, currentValue){
    if (currentValue > 0 && currentValue %2 === 1){
        return accumulator + currentValue;
    } else {
        return accumulator;
    }
}, 0);
console.log(unpairedPositiveSum);
console.log('end 8');

// 9
let positiveProduct = arr.reduce(function (accumulator,currentValue){
    if (currentValue >= 1){
        return accumulator * currentValue;
    } else {
        return accumulator;
    }
}, 1);
console.log(positiveProduct);
console.log('end 9');

// 10

let maxValue = 0;

for(let i = 0; i < arr.length; i++){
    if (maxValue < arr[i]){
        maxValue = arr[i];
    }
}
console.log(maxValue);

for (let i = 0; i < arr.length; i++){
    if (arr [i] !== maxValue){
        arr [i] = 0;
    }
}

console.log(arr);

console.log('end 10');