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
