function generate() {
    //Переводимо отриману інформацію у строки
    const line1 = document.getElementById('line1').value;
    const line2 = document.getElementById('line2').value;
    const line3 = document.getElementById('line3').value;

    //ствуорюємо масив строк
    const lines = [line1, line2, line3];

    // Перемішуємо рядки
    lines.sort(() => Math.random() - 0.5);

    //Виводимо на сторінку
    const outputElement = document.getElementById("output");
    outputElement.textContent = lines.join(", ");
}

// 2

function validate() {

    const numberInput = document.getElementById("number-input");
    const number = +(numberInput.value);

    // Перевірка, чи є число 5-значним
    if (isNaN(number) || number.toString().length !== 5) {
        const outputElement = document.getElementById("output");
        outputElement.textContent = "Введіть 5-значне число!";
        return;
    }

    // Розбиття числа на цифри
    const digits = number.toString().split("");

    // Перемішуємо рядки
    digits.sort(() => Math.random() - 0.5);

    // Виведення цифр через пробіл
    const outputElement = document.getElementById("output-numbers");
    outputElement.textContent = digits.join(" ");
}
