/**
 * WebDesign Hub — Interactividad principal
 * Dark mode toggle, Lenis smooth scroll, GSAP animations
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Dark Mode Toggle ────────────────────────────────────
(function initDarkMode() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
})();

// ── Lenis Smooth Scroll ─────────────────────────────────
(function initLenis() {
  if (prefersReducedMotion) return;
  if (typeof Lenis === 'undefined') return;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();

// ── GSAP Animations ─────────────────────────────────────
(function initAnimations() {
  if (prefersReducedMotion) {
    // Si reduced motion, mostrar todo sin animación
    document.querySelectorAll('.card-reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero: text reveal caracter por caracter
  const heroLines = document.querySelectorAll('.hero-line');
  heroLines.forEach(line => {
    const text = line.textContent;
    const classes = line.className.replace('hero-line', '').trim();
    line.textContent = '';
    // Mantener clases originales (gradient-text, etc)
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(40px)';
      line.appendChild(span);
    });
  });

  const heroChars = document.querySelectorAll('.hero-line span');
  gsap.to(heroChars, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.015,
    ease: 'power3.out',
    delay: 0.2,
  });

  // Hero subtitle + stats fade in
  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8,
    ease: 'power2.out',
  });

  gsap.from('.hero-stats', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
    ease: 'power2.out',
  });

  // Cards: staggered reveal on scroll
  // Usamos MutationObserver para esperar a que Alpine renderice las cards
  function animateCards() {
    const cards = document.querySelectorAll('.card-reveal');
    if (cards.length === 0) return false;

    cards.forEach((card, i) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
      });
    });
    return true;
  }

  // Intentar animar las cards — si Alpine aún no renderizó, observar cambios
  if (!animateCards()) {
    const observer = new MutationObserver(() => {
      if (animateCards()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Tech stack cards: fade up on scroll
  gsap.from('.tech-card', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.tech-card',
      start: 'top 85%',
      once: true,
    },
  });

  // Gradient dividers: width reveal
  gsap.from('.gradient-divider', {
    scaleX: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.gradient-divider',
      start: 'top 90%',
      once: true,
    },
  });
})();
