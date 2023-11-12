var obrazek = document.getElementById("obrazek");
var przycisk = document.getElementById("przycisk");

var stan = true;

function podmienObrazek() {
  if (stan) {
    obrazek.innerHTML = "<img src='obrazek2.jpg' alt='Obrazek 2'>";
    stan = false;
  } else {
    obrazek.innerHTML = "<img src='obrazek1.jpg' alt='Obrazek 1'>";
    stan = true;
  }
}
przycisk.addEventListener("click", podmienObrazek);
