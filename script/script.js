
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const solutionCards = document.querySelectorAll('.solution-card');

function selectSolution(card) {
  solutionCards.forEach((item) => {
    const selected = item === card;
    item.classList.toggle('is-selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
}

solutionCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    selectSolution(card);
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectSolution(card);
    }
  });
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealSelector = [
  '.solution-card', '.home-product-feature', '.security-items > div', '.home-product-shot',
  '.stats > div', '.tech-tags span', '.product-feature', '.security-grid article',
  '.platform-grid > div', '.product-points > div', '.product-shot',
].join(',');

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
      setTimeout(() => {
        entry.target.classList.remove('reveal', 'in');
        entry.target.style.transitionDelay = '';
      }, 1000);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(revealSelector).forEach((el) => {
    const idx = Array.from(el.parentElement.children).indexOf(el);
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(idx, 7) * 70}ms`;
    io.observe(el);
  });
}
