function toggleDisabled() {
    let input = document.getElementById("myInput");
    input.toggleAttribute("disabled");
    let button = document.getElementById("myButton");
    if (input.hasAttribute("disabled")) {
      button.textContent = "Pokaż wynik";
      input.value = "Oblicz log2 64 ="
    } else {
        input.ariaValueText = "Oblicz log2 64 = 6"
      button.textContent = "Ukryj wynik";
    }
}
  