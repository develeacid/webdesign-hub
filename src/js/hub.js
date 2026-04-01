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

  // Hero: text reveal — solo split en lineas sin gradient-text
  const heroLines = document.querySelectorAll('.hero-line');
  heroLines.forEach(line => {
    if (line.classList.contains('gradient-text')) {
      // Gradient lines: animar como bloque (background-clip:text se rompe con spans)
      line.style.opacity = '0';
      line.style.transform = 'translateY(40px)';
    } else {
      // Lineas normales: split caracter por caracter
      const text = line.textContent;
      line.textContent = '';
      text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(40px)';
        line.appendChild(span);
      });
    }
  });

  // Animar caracteres de lineas normales
  const heroChars = document.querySelectorAll('.hero-line:not(.gradient-text) span');
  if (heroChars.length) {
    gsap.to(heroChars, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.015,
      ease: 'power3.out',
      delay: 0.2,
    });
  }

  // Animar lineas gradient como bloques
  const gradientLines = document.querySelectorAll('.hero-line.gradient-text');
  if (gradientLines.length) {
    gsap.to(gradientLines, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.5,
    });
  }

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

  // Cards: animar cada vez que Alpine re-renderiza (filtro cambia)
  function animateCards() {
    const cards = document.querySelectorAll('.card-reveal');
    if (cards.length === 0) return;

    cards.forEach((card, i) => {
      // Reset: asegurar que empieza invisible
      gsap.set(card, { opacity: 0, y: 30 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.08,
        ease: 'power2.out',
      });
    });
  }

  // Observar cambios en el grid para re-animar cuando Alpine actualiza
  const cardGrid = document.querySelector('.card-reveal')?.closest('section');
  if (cardGrid) {
    const observer = new MutationObserver(() => {
      animateCards();
    });
    observer.observe(cardGrid, { childList: true, subtree: true });
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
