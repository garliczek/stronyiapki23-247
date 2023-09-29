//1
heder = document.querySelector('header');
heder.style.backgroundColor= "yellow";
//2
pream = document.getElementById('naglowek');
pream.style.fontFamily= 'Arial Black';
pream.innerHTML = 'Preambuła';
//3
sekcja = document.getElementsByTagName("section");
for (const el of sekcja) {
    el.style.border= "2px solid brown";
}
glowna = document.getElementsByClassName('main_column');
//4
const myColumn = document.querySelector('section.main_column');
const h1Element = myColumn.querySelector('h1');
console.log(h1Element);
h1Element.innerText = 'Specjalność szefa';
//5
const mainColumn = document.querySelector('.main_column');
const pElement = document.createElement('p');
pElement.textContent = 'Kebab na frytkach';
mainColumn.appendChild(pElement);
//6
const footerElement = document.querySelector('footer');
const divElement = document.createElement('div');
divElement.style.backgroundColor = 'pink';
const Elementp = document.createElement('p');
Elementp.style.textAlign = 'center';
Elementp.textContent = '&copy;';
divElement.appendChild(Elementp);
footerElement.appendChild(divElement);
//7
const mojaColumna = document.querySelector('section.main_column');
const Elementh1 = mainColumn.querySelector('h1');
Elementh1.remove();
//8
const nagElement = document.querySelector('header');

const pElement1 = document.createElement('p');
pElement1.innerHTML = '<i>Pochylony tekst</i>';

const pElement2 = document.createElement('p');
pElement2.innerText = '<i>Pochylony tekst</i>';

nagElement.appendChild(pElement1);
nagElement.appendChild(pElement2);
//9
const sectionElement = document.createElement('section');
sectionElement.style.border = '2px dotted blue';
sectionElement.style.padding = '10px 20px';
sectionElement.textContent = 'Zderzak';

document.body.appendChild(sectionElement);
