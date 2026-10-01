/* --- Javascript --- */

'use strict';

/* --- Mobile menu --- */

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

function closeMenu() {
  mainNav.classList.remove('open');
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});



/* --- Close menu when a link is tapped --- */

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});



/* --- Close menu when clicking outside --- */

document.addEventListener('click', (event) => {
  const isClickInsideNav = mainNav.contains(event.target) || navToggle.contains(event.target);

  if (!isClickInsideNav && mainNav.classList.contains('open')) {
    closeMenu();
  }
});



/* --- Close menu with the Escape key --- */

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mainNav.classList.contains('open')) {
    closeMenu();
    navToggle.focus(); // return keyboard users to the button they opened it with
  }
});



/* --- Auto-update footer year --- */

document.getElementById('current-year').textContent = new Date().getFullYear();
