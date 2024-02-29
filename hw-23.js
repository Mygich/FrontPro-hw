const arrayLengthInput = document.getElementById('array-length');
const arrayElementsInput = document.getElementById('array-elements');
const arrayContainer = document.getElementById('array-container');

//створення масиву на основі введених елементів
function createArray() {
    const length = +(arrayLengthInput.value);
    const elements = arrayElementsInput.value.split(',');
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(elements[i]);
    }

    //Сортування за зростанням
    array.sort((a, b) => a - b);

    // Видалення елементів з 2 по 4 (включно)
    array.splice(1, 4);

    updateArrayContainer(array);
}

//відновлення даних на сторінці
function updateArrayContainer(array) {
    arrayContainer.innerHTML = '';
    for (const element of array) {
        const elementSpan = document.createElement('span');
        elementSpan.textContent = element;
        arrayContainer.appendChild(elementSpan);
    }
}
