function findElements() {
    let div = document.getElementById("myDiv");
    let elements = div.querySelectorAll("*");
    console.log(elements);
    for (let element of elements) {
      if (element.tagName == "STRONG") {
        element.style.border = "10px dotted green";
      }
    }
  }