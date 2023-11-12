const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    const color = prompt('Wpisz kolor sufitu');
    if (color) {
        alert(`Twój sufit ma kolor ${color}!`);
    } else {
        alert(`Anulowałeś akcję, a okienko zwróciło ${color}`);
    }
})