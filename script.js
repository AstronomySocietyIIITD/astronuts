
var preloader = document.getElementById('loading');
function myLoader(){
    preloader.style.display = 'none';
}

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

window.addEventListener('scroll', function () {
	let header = document.querySelector('.container');
	let windowPosition = window.scrollY > 500;
	header.classList.toggle('scrolling-active', windowPosition);
  });