document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");

    for (var i = 1; i <= 100; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.id = "input" + i;
        input.name = "input" + i;
        input.placeholder = "Element numer " + i;
        input.style.margin = "10px";
        input.style.boxShadow = "5px 5px lightblue";

    

        var columnNumber = Math.ceil(i / 20);

        input.style.marginRight = (columnNumber < 5) ? "10px" : "0";

        form.appendChild(input);
    }
});
