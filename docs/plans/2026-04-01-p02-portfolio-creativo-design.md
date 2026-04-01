# P02 — Portfolio Creativo: "Tomás Kael"

## Concepto
Portfolio de director de arte & branding. Editorial, asimétrico, tipografía monumental como diseño. Mucho espacio negativo. Monocromático con un solo accent.

## Tipografía
- Display: Clash Display (monumental, editorial)
- Body: General Sans / Sora fallback

## Paleta
- Fondo: `#f5f5f0` (off-white cálido)
- Text: `#1a1a1a`
- Muted: `#999`
- Accent: `#ff4d00` (naranja brutalista)
- Bordes: `#1a1a1a`

## Secciones
1. **Nav:** "TK" logo | Contact link
2. **Hero (100vh):** "TOMÁS" gigante (30vw), "KAEL" offset derecha, subtitle "Art Director & Branding", línea horizontal animada, scroll indicator
3. **Selected Work:** 4 proyectos en grid asimétrico, imágenes Unsplash, hover reveal, categorías
4. **About:** Split layout — izq bio + stats, der foto con parallax
5. **Contact:** "Let's create something" grande, email con hover underline, redes
6. **Footer:** Mínimo © 2026

## Animaciones GSAP
- Hero: nombre letra por letra con translateY, línea se dibuja (scaleX)
- Work: imágenes clip-path reveal al scroll
- About: texto fade in, foto parallax
- Contact: scale up sutil

## Técnico
- Solo GSAP + Lenis via CDN
- Tailwind via `./dist/css/main.css`
- Floating button "Volver al hub"
- `prefers-reduced-motion` respetado
- Archivo: `portfolio-creativo.html` en raíz
