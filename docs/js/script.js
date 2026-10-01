/* --- Javascript --- */

/* --- Mobile menu --- */

'use strict';

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});



/* --- Animate hamburger --- */

.nav-toggle .bar {
  /* ...existing width, height, background, border-radius... */
  transition: var(--transition);
}

.nav-toggle.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.nav-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
