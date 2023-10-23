function toggleDisabled() {
    let input = document.getElementById("myInput");
    input.toggleAttribute("disabled");
    let button = document.getElementById("myButton");
    if (input.hasAttribute("disabled")) {
      button.textContent = "Edycja jest teraz niemożliwa";
    } else {
      button.textContent = "Można edytować";
    }
}
  