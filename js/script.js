$(document).ready(function () {
	$('.menu__burger').click(function(event) {
		$('.menu__burger,.nav__menu').toggleClass('active__1');
	});
});

new Swiper('.slider__image');

// const dots = document.getElementsByClassName('dot'),
// 	  dotsArea = document.getElementsByClassName('slider__dots')[0],
// 	  slides = document.getElementsByClassName('slider__image'),
// 	  prevBtn = document.getElementsByClassName('prev'),
// 	  nextBtn = document.getElementsByClassName('next'),
// 	  slideIndex = 1;

// showSlides(slideIndex);

// function showSlides (n) {
// 	if (n < 1) {
// 		slideIndex = slides.length;
// 	} else if (n > slides.length) {
// 		slideIndex = 1;
// 	}
// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].style.display = 'none';
// 	}
// 	for (let i = 0; i < dots.length; i++) {
// 		dots[i].classList.remove('active');
// 	}
// 	slides[slideIndex - 1].style.display = 'block';
// 	dots[slideIndex - 1].classList.add('active');
// }

// function plusSlides (n) {
// 	showSlides(slideIndex += n);
// }

// function currentSlide (n) {
// 	showSlides(slideIndex = n);
// }

// prevBtn.onclick = function () {
// 	plusSlides(-1);
// }

// nextBtn.onclick = function () {
// 	plusSlides(1);
// }

// dotsArea.onclick = function (e) {
// 	for (let i = 0; i < dots.length + 1; i++) {
// 		if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
// 			currentSlide(i);
// 		}
// 	}
// }