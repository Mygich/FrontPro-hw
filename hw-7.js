
//1
let numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
numbers.join(',');
console.log(numbers);

console.log('finish 1');

// 2

for (let i = 10; i<= 20; i++){
    console.log(`Квадрат числа ${i} = ${i * i}`)
}

console.log('finish 2');

// 3
for (let i = 1; i <=5; i++){
    for ( let j = 7; j <=9; j++){
        console.log(`${j} = ${i * j}`);
    }
}

console.log('finish 3');

// 4
let sum = 0;

for (let i = 1; i <= 15; i++){
    sum += i;
}
console.log(sum);

console.log('finish 4');

// 5
let product = 1;

for (let i = 15; i <= 35; i++){
    product *= i;
}
console.log(product);

console.log('finish 5');

// 6
let add = 0;
for (let i = 1; i<= 500; i++){
    add += i;
}

console.log(add / 500);

console.log('finish 6');

// 7
let count = 0;
for (let i = 30; i <= 80; i++){
    if (i % 2 === 0){
        count++;
    }
}
console.log(count);

console.log('finish 7');

// 8

for (let i = 100; i <= 200; i++){
    if (i % 3 === 0){
        console.log(i);
    }
}

console.log('finish 8');

// 9

let x = 35;

for (let i = 1; i <= x; i++){
    if (x % i === 0){
        console.log(i)
    }
}
console.log('finish 9');

// 10
let z = 50;
let counter = 0;

for (let i = 1; i <=z; i ++) {
    if (z % i === 0){
        if (i % 2 === 0){
            counter++;
        }
    }
}
console.log(counter);
console.log('finish 10');

// 11

let c = 50;
let array = [];
let addition = 0;

for (let i = 1; i <=c; i ++) {
    if (c % i === 0){
        if (c % 2 === 0){
            array.push(i);
        }
        addition +=i;
    }
}
console.log(addition);

console.log('finish 11');

/// 12

function multiplicationTable(table) {
    for (let i = 1; i <= 10; i++) {
        let multiplier = table * i;

        console.log(`${table} * ${i} = ${multiplier}`);
    }
}
for (let i = 1; i <= 10; i++) {
    multiplicationTable(i);
}

console.log('finish 12');