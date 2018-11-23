menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav')

	if (x.className === "links") {
		x.className += " responsive";
	} else {
		x.className = "links";
	}
	var y = document.getElementById('header_stand')

	if (y.className === "header_stand") {
		y.className += " responsive";
	} else {
		y.className = "header_stand";
	}
}