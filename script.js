// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.about-grid, .skill-group, .timeline-item, .project-card, .contact-link, .about-stats .stat'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Stagger children of grids
document.querySelectorAll('.skills-grid, .projects-grid, .contact-links').forEach(grid => {
  grid.querySelectorAll('.fade-in').forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
});
