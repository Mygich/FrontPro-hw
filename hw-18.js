const tableElement = document.getElementById("multiplication-table");

for (let i = 1; i <= 10; i++) {
    const rowElements = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
        const cellElement = document.createElement("td");
        cellElement.textContent = i * j;
        rowElements.appendChild(cellElement);
    }

    tableElement.appendChild(rowElements);
}