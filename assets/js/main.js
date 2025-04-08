/*========= MENU =======*/

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle');

/* Menu Show - hidden*/
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
});

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Active work */

/*=============== RESUME ===============*/

/*=============== TESTIMONIALS SWIPER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.getElementById('style-switcher'),
    switcherToggle = document.getElementById('switcher-toggle'),
    switcherClose = document.getElementById('switcher-close');

/* Switcher show */
switcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('show-switcher');
});

/* Switcher hidden */
switcherClose.addEventListener('click', () => {
    styleSwitcher.classList.remove('show-switcher');
});

/*=============== THEME COLORS ===============*/

/*=============== LIGHT/DARK MODE ===============*/
