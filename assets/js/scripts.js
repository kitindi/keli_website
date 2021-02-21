// selecting dom elements

const toggleButton = document.getElementById('togglt-menu');
const navLinks = document.getElementById('nav-bar')
const toggleSubMenu = document.getElementById('show-submenu')
const subMenu = document.getElementById('sub-menu-links')
const thisYear = document.getElementById('year');

// function to show and hide navbar
const showMobileNavBar =()=> navLinks.classList.toggle('nav-bar_toggle');
toggleButton.addEventListener('click', showMobileNavBar);
// function to show and hide submenu
const showSubmenu =()=> {subMenu.classList.toggle('sub-menu-toggle')};
toggleSubMenu.addEventListener('click', showSubmenu, showMobileNavBar);

// Automatic updated date

const date = new Date();
thisYear.textContent = date.getFullYear()