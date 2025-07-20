/* ---- THEME TOGGLE ---- */
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', theme);
};

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});

/* ---- MOBILE MENU ---- */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ---- CLOSE MENU ON LINK CLICK ---- */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---- FOOTER YEAR ---- */
document.getElementById('year').textContent = new Date().getFullYear();