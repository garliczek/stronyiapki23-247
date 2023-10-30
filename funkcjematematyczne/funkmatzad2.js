let x = prompt("Podaj dolną granicę przedziału:");
let y = prompt("Podaj górną granicę przedziału:");
let numbers = [];
for (let i = 0; i < 10; i++) {
numbers.push(Math.floor(Math.random() * (y - x + 1)) + parseInt(x));
}
document.write(numbers.join(", "));