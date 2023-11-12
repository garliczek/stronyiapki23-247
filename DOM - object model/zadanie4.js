function showText(e) {
<<<<<<< HEAD
    let = textToShow = document.querySelector("#paragraph" + e);
    textToShow.style.display = "none";
    let arrow = document.querySelector("#strzalka" + e);
    if (textToShow.style.display === "none") {
        textToShow.style.display = "block";
        arrow.innerHTML = "&#8615";
    } else {
        textToShow.style.display = "none";
        arrow.innerHTML = "&#8615";
    }
=======
let = textToShow = document.querySelector("#paragraph" + e);
textToShow.style.display = "none";
let arrow = document.querySelector("#strzalka" + e);
if (textToShow.style.display === "none")
>>>>>>> bf5faeee1cd5f375d52eb6268088135aa8d6381f
}