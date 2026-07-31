// Mobile nav toggle
const burger = document.getElementById('navBurger');
const links = document.getElementById('navLinks');
if (burger && links) {
  burger.addEventListener('click', () => {
    links.classList.toggle('is-open');
  });
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => links.classList.remove('is-open'));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
