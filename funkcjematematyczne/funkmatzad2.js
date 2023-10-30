function generateRandomNumbers() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * (y - x + 1)) + parseInt(x));
    }
    let randomNumbersRow = document.getElementById("randomNumbers");
    for (let i = 0; i < numbers.length; i++) {
        randomNumbersRow.cells[i].innerHTML = numbers[i];
    }
}
