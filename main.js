document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const overlay = document.querySelector('.nav-overlay');

  function toggleMenu() {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  toggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
});
