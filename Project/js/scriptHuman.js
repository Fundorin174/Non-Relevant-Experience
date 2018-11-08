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

// Слайдер детство
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
	
	if (n > slides.length){slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++){
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(" active","");
		}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
}
// Слайдер Муж
var slideIndexhusband = 1;
showSlideshusband(slideIndexhusband);

function plusSlideshusband(n) {
	showSlideshusband(slideIndexhusband += n);
}

function currentSlidehusband(n) {
	showSlideshusband(slideIndexhusband = n);
}

function showSlideshusband(n) {
	var j;
	var slideshusband = document.getElementsByClassName("mySlideshusband");
	var dotshusband = document.getElementsByClassName("dothusband");

	if (n > slideshusband.length){slideIndexhusband = 1}
		if (n < 1) {slideIndexhusband = slideshusband.length}
		for (j = 0; j < slideshusband.length; j++){
			slideshusband[j].style.display = "none";
		}
		for (j = 0; j < dotshusband.length; j++){
			dotshusband[j].className = dotshusband[j].className.replace(" active","");
		}
		slideshusband[slideIndexhusband-1].style.display = "block";
		dotshusband[slideIndexhusband-1].className += " active";
}

// Слайдер Хозяин
var slideIndexOwner = 1;
showSlidesOwner(slideIndexOwner);

function plusSlidesOwner(n) {
	showSlidesOwner(slideIndexOwner += n);
}

function currentSlideOwner(n) {
	showSlidesOwner(slideIndexOwner = n);
}

function showSlidesOwner(n) {
	var f;
	var slidesOwner = document.getElementsByClassName("mySlidesOwner");
	var dotsOwner = document.getElementsByClassName("dotOwner");

	if (n > slidesOwner.length){slideIndexOwner = 1}
		if (n < 1) {slideIndexOwner = slidesOwner.length}
		for (f = 0; f < slidesOwner.length; f++){
			slidesOwner[f].style.display = "none";
		}
		for (f = 0; f < dotsOwner.length; f++){
			dotsOwner[f].className = dotsOwner[f].className.replace(" active","");
		}
		slidesOwner[slideIndexOwner-1].style.display = "block";
		dotsOwner[slideIndexOwner-1].className += " active";
}

// Слайдер Отец
var slideIndexfather = 1;
showSlidesfather(slideIndexfather);

function plusSlidesfather(n) {
	showSlidesfather(slideIndexfather += n);
}

function currentSlidefather(n) {
	showSlidesfather(slideIndexfather = n);
}

function showSlidesfather(n) {
	var g;
	var slidesfather = document.getElementsByClassName("mySlidesfather");
	var dotsfather = document.getElementsByClassName("dotfather");

	if (n > slidesfather.length){slideIndexfather = 1}
		if (n < 1) {slideIndexfather = slidesfather.length}
		for (g = 0; g < slidesfather.length; g++){
			slidesfather[g].style.display = "none";
		}
		for (g = 0; g < dotsfather.length; g++){
			dotsfather[g].className = dotsfather[g].className.replace(" active","");
		}
		slidesfather[slideIndexfather-1].style.display = "block";
		dotsfather[slideIndexfather-1].className += " active";
}
// Слайдер Планёр

var slideIndexSchedule = 1;
showSlidesSchedule(slideIndexSchedule);

function plusSlidesSchedule(n) {
	showSlidesSchedule(slideIndexSchedule += n);
}

function currentSlideSchedule(n) {
	showSlidesSchedule(slideIndexSchedule = n);
}

function showSlidesSchedule(n) {
	var gg;
	var slidesSchedule = document.getElementsByClassName("mySlidesSchedule");
	var dotsSchedule = document.getElementsByClassName("dotSchedule");

	if (n > slidesSchedule.length){slideIndexSchedule = 1}
		if (n < 1) {slideIndexSchedule = slidesSchedule.length}
		for (gg = 0; gg < slidesSchedule.length; gg++){
			slidesSchedule[gg].style.display = "none";
		}
		for (gg = 0; gg < dotsSchedule.length; gg++){
			dotsSchedule[gg].className = dotsSchedule[gg].className.replace(" active","");
		}
		slidesSchedule[slideIndexSchedule-1].style.display = "block";
		dotsSchedule[slideIndexSchedule-1].className += " active";
}

// Слайдер Старпом

var slideIndexChiefHelper = 1;
showSlidesChiefHelper(slideIndexChiefHelper);

function plusSlidesChiefHelper(n) {
	showSlidesChiefHelper(slideIndexChiefHelper += n);
}

function currentSlideChiefHelper(n) {
	showSlidesChiefHelper(slideIndexChiefHelper = n);
}

function showSlidesChiefHelper(n) {
	var ch;
	var slidesChiefHelper = document.getElementsByClassName("mySlidesChiefHelper");
	var dotsChiefHelper = document.getElementsByClassName("dotChiefHelper");

	if (n > slidesChiefHelper.length){slideIndexChiefHelper = 1}
		if (n < 1) {slideIndexChiefHelper = slidesChiefHelper.length}
		for (ch = 0; ch < slidesChiefHelper.length; ch++){
			slidesChiefHelper[ch].style.display = "none";
		}
		for (ch = 0; ch < dotsChiefHelper.length; ch++){
			dotsChiefHelper[ch].className = dotsChiefHelper[ch].className.replace(" active","");
		}
		slidesChiefHelper[slideIndexChiefHelper-1].style.display = "block";
		dotsChiefHelper[slideIndexChiefHelper-1].className += " active";
}

// Слайдер Магистр

var slideIndexMagistr = 1;
showSlidesMagistr(slideIndexMagistr);

function plusSlidesMagistr(n) {
	showSlidesMagistr(slideIndexMagistr += n);
}

function currentSlideMagistr(n) {
	showSlidesMagistr(slideIndexMagistr = n);
}

function showSlidesMagistr(n) {
	var mg;
	var slidesMagistr = document.getElementsByClassName("mySlidesMagistr");
	var dotsMagistr = document.getElementsByClassName("dotMagistr");

	if (n > slidesMagistr.length){slideIndexMagistr = 1}
		if (n < 1) {slideIndexMagistr = slidesMagistr.length}
		for (mg = 0; mg < slidesMagistr.length; mg++){
			slidesMagistr[mg].style.display = "none";
		}
		for (mg = 0; mg < dotsMagistr.length; mg++){
			dotsMagistr[mg].className = dotsMagistr[mg].className.replace(" active","");
		}
		slidesMagistr[slideIndexMagistr-1].style.display = "block";
		dotsMagistr[slideIndexMagistr-1].className += " active";
}

// Слайдер Преподаватель

var slideIndexTeacher = 1;
showSlidesTeacher(slideIndexTeacher);

function plusSlidesTeacher(n) {
	showSlidesTeacher(slideIndexTeacher += n);
}

function currentSlideTeacher(n) {
	showSlidesTeacher(slideIndexTeacher = n);
}

function showSlidesTeacher(n) {
	var tch;
	var slidesTeacher = document.getElementsByClassName("mySlidesTeacher");
	var dotsTeacher = document.getElementsByClassName("dotTeacher");

	if (n > slidesTeacher.length){slideIndexTeacher = 1}
		if (n < 1) {slideIndexTeacher = slidesTeacher.length}
		for (tch = 0; tch < slidesTeacher.length; tch++){
			slidesTeacher[tch].style.display = "none";
		}
		for (tch = 0; tch < dotsTeacher.length; tch++){
			dotsTeacher[tch].className = dotsTeacher[tch].className.replace(" active","");
		}
		slidesTeacher[slideIndexTeacher-1].style.display = "block";
		dotsTeacher[slideIndexTeacher-1].className += " active";
}
