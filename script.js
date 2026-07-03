// ===== YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const iconMoon = document.getElementById('iconMoon');
const iconSun = document.getElementById('iconSun');
const root = document.documentElement;

function applyTheme(theme){
  if(theme === 'dark'){
    root.setAttribute('data-theme', 'dark');
    iconMoon.style.display = 'none';
    iconSun.style.display = 'block';
  } else {
    root.removeAttribute('data-theme');
    iconMoon.style.display = 'block';
    iconSun.style.display = 'none';
  }
}

const savedTheme = localStorage.getItem('portfolio-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('portfolio-theme', next);
});

// ===== MOBILE NAV =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('[data-nav]');

function setActiveLink(){
  let current = '';
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    if(scrollPos >= section.offsetTop){
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('active');
    }
  });
}

// ===== SCROLL TOP BUTTON =====
const scrollTopBtn = document.getElementById('scrollTop');

function toggleScrollTop(){
  if(window.scrollY > 400){
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  setActiveLink();
  toggleScrollTop();
});

// ===== SCROLL REVEAL ANIMATIONS =====
const revealTargets = document.querySelectorAll(
  '.exp-card, .fico-card, .edu-card, .contact-item, .skill-col, .about-text, .resume-box'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// init on load
setActiveLink();
toggleScrollTop();
