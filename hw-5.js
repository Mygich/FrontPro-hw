function calculator() {
    let operation;

    operation = prompt("Виберіть операцію: add(+), sub(-), mult(*), div(/):");

    if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
        alert("Невірно вибрана операція!");
        return;
    }

    let number1 = +prompt("Введіть перше число:");
    let number2 = +prompt("Введіть друге число:");

    let result;
    switch (operation) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
    }

    alert(`${number1} ${operation} ${number2} = ${result}`);
}
calculator();
