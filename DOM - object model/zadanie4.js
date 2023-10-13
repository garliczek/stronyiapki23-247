function showText(e) {
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
}