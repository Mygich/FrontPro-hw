//1
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}
console.log('end 1');

//2

const dollars = 27;

for (let i = 0; i <= 100; i += 10) {
    const inUah = i * dollars;
    console.log(`Вартість ${i} доларів: ${inUah} грн`);
}
console.log('end 2');

//3

const userNumber = parseInt(prompt("Введіть ціле число: "));

for (let i = 1; i <= 100; i++) {
    const squareNumber = i * i;
    if (squareNumber <= userNumber) {
        console.log(i);
    }
}
console.log('end 3');

//4

function falseTrue(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const userNumber2 = +(prompt("Введіть ціле число: "));

const checkNumber = falseTrue(userNumber2);

if (checkNumber) {
    console.log("Число", userNumber2, "є простим");
} else {
    console.log("Число", userNumber2, "не є простим");
}

console.log('end 4');

//5

function divisibleByThree(number) {
    if (number <= 0 || number % 3 !== 0) {
        return false;
    }

    while (number % 3 === 0) {
        number /= 3;
    }

    return number === 1;
}

const userNumber3 = +(prompt("Введіть ціле число: "));

const divisibleByThree1 = divisibleByThree(userNumber3);

if (divisibleByThree1) {
    console.log("Число", userNumber3, "можливо отримати шляхом взведення 3 у ступінь");
} else {
    console.log("Число", userNumber3, "неможливо отримати шляхом взведення 3 у ступінь");
}
console.log('end 5');