const cursorGlow = document.querySelector('.cursor-glow');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const revealItems = document.querySelectorAll('.reveal');

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('mousemove', (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => observer.observe(item));
