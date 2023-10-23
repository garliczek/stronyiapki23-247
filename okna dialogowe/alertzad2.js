var myButton = document.getElementById("myButton");
	myButton.addEventListener("click", function() {
		oknoConfirm();
});
function oknoConfirm() {
	var result = confirm("Czy jesteś pewien, że chcesz kontynuować?");
		if (result == true) {
			alert("No to kontynuuj...");
		} else {
			alert("Przykro mi, że nie chcesz kontynuować...");
	}
}
