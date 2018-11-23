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

// Слайдер туризм
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
// Слайдер приключения
var slideIndexextrim = 1;
showSlidesextrim(slideIndexextrim);

function plusSlidesextrim(n) {
	showSlidesextrim(slideIndexextrim += n);
}

function currentSlideextrim(n) {
	showSlidesextrim(slideIndexextrim = n);
}

function showSlidesextrim(n) {
	var j;
	var slidesextrim = document.getElementsByClassName("mySlidesextrim");
	var dotsextrim = document.getElementsByClassName("dotextrim");

	if (n > slidesextrim.length) {
		slideIndexextrim = 1
	}
	if (n < 1) {
		slideIndexextrim = slidesextrim.length
	}
	for (j = 0; j < slidesextrim.length; j++) {
		slidesextrim[j].style.display = "none";
	}
	for (j = 0; j < dotsextrim.length; j++) {
		dotsextrim[j].className = dotsextrim[j].className.replace(" active", "");
	}
	slidesextrim[slideIndexextrim - 1].style.display = "block";
	dotsextrim[slideIndexextrim - 1].className += " active";
}

// Слайдер КВН
var slideIndexkvn = 1;
showSlideskvn(slideIndexkvn);

function plusSlideskvn(n) {
	showSlideskvn(slideIndexkvn += n);
}

function currentSlidekvn(n) {
	showSlideskvn(slideIndexkvn = n);
}

function showSlideskvn(n) {
	var f;
	var slideskvn = document.getElementsByClassName("mySlideskvn");
	var dotskvn = document.getElementsByClassName("dotkvn");

	if (n > slideskvn.length) {
		slideIndexkvn = 1
	}
	if (n < 1) {
		slideIndexkvn = slideskvn.length
	}
	for (f = 0; f < slideskvn.length; f++) {
		slideskvn[f].style.display = "none";
	}
	for (f = 0; f < dotskvn.length; f++) {
		dotskvn[f].className = dotskvn[f].className.replace(" active", "");
	}
	slideskvn[slideIndexkvn - 1].style.display = "block";
	dotskvn[slideIndexkvn - 1].className += " active";
}

// Слайдер Путешествия
var slideIndextravel = 1;
showSlidestravel(slideIndextravel);

function plusSlidestravel(n) {
	showSlidestravel(slideIndextravel += n);
}

function currentSlidetravel(n) {
	showSlidestravel(slideIndextravel = n);
}

function showSlidestravel(n) {
	var g;
	var slidestravel = document.getElementsByClassName("mySlidestravel");
	var dotstravel = document.getElementsByClassName("dottravel");

	if (n > slidestravel.length) {
		slideIndextravel = 1
	}
	if (n < 1) {
		slideIndextravel = slidestravel.length
	}
	for (g = 0; g < slidestravel.length; g++) {
		slidestravel[g].style.display = "none";
	}
	for (g = 0; g < dotstravel.length; g++) {
		dotstravel[g].className = dotstravel[g].className.replace(" active", "");
	}
	slidestravel[slideIndextravel - 1].style.display = "block";
	dotstravel[slideIndextravel - 1].className += " active";
}
// Слайдер Вникни

var slideIndexvnikni = 1;
showSlidesvnikni(slideIndexvnikni);

function plusSlidesvnikni(n) {
	showSlidesvnikni(slideIndexvnikni += n);
}

function currentSlidevnikni(n) {
	showSlidesvnikni(slideIndexvnikni = n);
}

function showSlidesvnikni(n) {
	var gg;
	var slidesvnikni = document.getElementsByClassName("mySlidesvnikni");
	var dotsvnikni = document.getElementsByClassName("dotvnikni");

	if (n > slidesvnikni.length) {
		slideIndexvnikni = 1
	}
	if (n < 1) {
		slideIndexvnikni = slidesvnikni.length
	}
	for (gg = 0; gg < slidesvnikni.length; gg++) {
		slidesvnikni[gg].style.display = "none";
	}
	for (gg = 0; gg < dotsvnikni.length; gg++) {
		dotsvnikni[gg].className = dotsvnikni[gg].className.replace(" active", "");
	}
	slidesvnikni[slideIndexvnikni - 1].style.display = "block";
	dotsvnikni[slideIndexvnikni - 1].className += " active";
}

// Слайдер Рок-Н-Ролл

var slideIndexrock = 1;
showSlidesrock(slideIndexrock);

function plusSlidesrock(n) {
	showSlidesrock(slideIndexrock += n);
}

function currentSliderock(n) {
	showSlidesrock(slideIndexrock = n);
}

function showSlidesrock(n) {
	var ch;
	var slidesrock = document.getElementsByClassName("mySlidesrock");
	var dotsrock = document.getElementsByClassName("dotrock");

	if (n > slidesrock.length) {
		slideIndexrock = 1
	}
	if (n < 1) {
		slideIndexrock = slidesrock.length
	}
	for (ch = 0; ch < slidesrock.length; ch++) {
		slidesrock[ch].style.display = "none";
	}
	for (ch = 0; ch < dotsrock.length; ch++) {
		dotsrock[ch].className = dotsrock[ch].className.replace(" active", "");
	}
	slidesrock[slideIndexrock - 1].style.display = "block";
	dotsrock[slideIndexrock - 1].className += " active";
}

// Слайдер Спорт

var slideIndexsport = 1;
showSlidessport(slideIndexsport);

function plusSlidessport(n) {
	showSlidessport(slideIndexsport += n);
}

function currentSlidesport(n) {
	showSlidessport(slideIndexsport = n);
}

function showSlidessport(n) {
	var mg;
	var slidessport = document.getElementsByClassName("mySlidessport");
	var dotssport = document.getElementsByClassName("dotsport");

	if (n > slidessport.length) {
		slideIndexsport = 1
	}
	if (n < 1) {
		slideIndexsport = slidessport.length
	}
	for (mg = 0; mg < slidessport.length; mg++) {
		slidessport[mg].style.display = "none";
	}
	for (mg = 0; mg < dotssport.length; mg++) {
		dotssport[mg].className = dotssport[mg].className.replace(" active", "");
	}
	slidessport[slideIndexsport - 1].style.display = "block";
	dotssport[slideIndexsport - 1].className += " active";
}

// Слайдер Футбол

var slideIndexfootball = 1;
showSlidesfootball(slideIndexfootball);

function plusSlidesfootball(n) {
	showSlidesfootball(slideIndexfootball += n);
}

function currentSlidefootball(n) {
	showSlidesfootball(slideIndexfootball = n);
}

function showSlidesfootball(n) {
	var tch;
	var slidesfootball = document.getElementsByClassName("mySlidesfootball");
	var dotsfootball = document.getElementsByClassName("dotfootball");

	if (n > slidesfootball.length) {
		slideIndexfootball = 1
	}
	if (n < 1) {
		slideIndexfootball = slidesfootball.length
	}
	for (tch = 0; tch < slidesfootball.length; tch++) {
		slidesfootball[tch].style.display = "none";
	}
	for (tch = 0; tch < dotsfootball.length; tch++) {
		dotsfootball[tch].className = dotsfootball[tch].className.replace(" active", "");
	}
	slidesfootball[slideIndexfootball - 1].style.display = "block";
	dotsfootball[slideIndexfootball - 1].className += " active";
}

// Слайдер Разработка

var slideIndexweb_dev = 1;
showSlidesweb_dev(slideIndexweb_dev);

function plusSlidesweb_dev(n) {
	showSlidesweb_dev(slideIndexweb_dev += n);
}

function currentSlideweb_dev(n) {
	showSlidesweb_dev(slideIndexweb_dev = n);
}

function showSlidesweb_dev(n) {
	var wd;
	var slidesweb_dev = document.getElementsByClassName("mySlidesweb_dev");
	var dotsweb_dev = document.getElementsByClassName("dotweb_dev");

	if (n > slidesweb_dev.length) {
		slideIndexweb_dev = 1
	}
	if (n < 1) {
		slideIndexweb_dev = slidesweb_dev.length
	}
	for (wd = 0; wd < slidesweb_dev.length; wd++) {
		slidesweb_dev[wd].style.display = "none";
	}
	for (wd = 0; wd < dotsweb_dev.length; wd++) {
		dotsweb_dev[wd].className = dotsweb_dev[wd].className.replace(" active", "");
	}
	slidesweb_dev[slideIndexweb_dev - 1].style.display = "block";
	dotsweb_dev[slideIndexweb_dev - 1].className += " active";
}
