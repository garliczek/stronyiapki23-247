//1
let przycisk1 = document.getElementById("zmiana1"); 
let mojnaglowek1 = document.getElementById("tekst1"); 

przycisk1.addEventListener("click", function() { 
  mojnaglowek1.innerHTML = "<i>Świetnie!</i>"; 
});
//2
let przycisk2 = document.getElementById("zmiana2"); 
let mojnaglowek2 = document.getElementById("tekst2"); 

przycisk2.addEventListener("click", function() { 
  mojnaglowek2.innerText = "<i>Świetnie!</i>";
}); 
//3
let przycisk3 = document.getElementById("zmiana3"); 
let kontener1 = document.getElementById("mojdiv");

przycisk3.addEventListener("click", function() { 
  let elementy = kontener1.children; 
  console.log(elementy); 
  let wybrany = elementy[3].firstChild;
  console.log(wybrany.tagName); 
  wybrany.style.border = "10px dotted green"; 
});
//4
function showTitle() {
    var pp = document.getElementById("przyklad1"); 
    var title = pp.getAttribute("title"); 
    alert(title); 
}
//5 
function changeDir() {
    var p = document.getElementById("przyklad2");
    p.setAttribute("dir", "rtl"); 
}
//6
function toggleDisabled() {
    var input = document.getElementById("przyklad3"); 
    input.toggleAttribute("disabled"); 
    var button = document.getElementById("zmiana6"); 
    if (input.hasAttribute("disabled")) { 
      button.textContent = "Można edytować"; 
    } else {
      button.textContent = "Nie można edytować"; 
    }
}
//7
function usunAtrybuty() {
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  var a1 = document.getElementById("a1");

  p1.removeAttribute("style");
  p2.removeAttribute("href");
  a1.removeAttribute("href");
}
//8
function pokazAttributes() {
  let nag3 = document.querySelector("h3");
  console.log(nag3.dataset);
  console.log(nag3.attributes);
  let div = document.getElementById("dataset-attributes-container");
  div.innerHTML = ""; 
  for (let attr of nag3.attributes) {
    let pppp = document.createElement("p");
    pppp.innerHTML = `Atrybut: <b>${attr.name}</b> ma wartość: ${attr.value}`;
    div.appendChild(pppp);
  }
}
//9
function generateColor() {
  let hexDigits = "0123456789ABCDEF";
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexDigits.length);
    let randomDigit = hexDigits[randomIndex];
    colorCode += randomDigit;
  }
  console.log(colorCode);
  let textarea = document.getElementById("textarea");
  textarea.style.backgroundColor = colorCode;
}