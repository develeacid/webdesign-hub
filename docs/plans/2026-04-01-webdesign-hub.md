# WebDesign Hub — Plan de Proyecto

> Galeria visual de diseños web modernos con animaciones y transiciones.
> Proyecto hermano de LayoutOS, enfocado en paginas publicas de impacto.

---

## Objetivo

Crear un hub/galeria que contenga paginas web completas organizadas por tipo/industria. Cada pagina es una experiencia standalone a pantalla completa con animaciones, transiciones y diseño visual avanzado. El hub en si mismo es una pieza de diseño.

**No incluye:** Botones de descarga, copia de codigo, ni funcionalidad de sistema de diseño. Es puramente visual y demostrativo.

---

## Stack Tecnico

| Herramienta | Version | Proposito | Carga |
|-------------|---------|-----------|-------|
| Tailwind CSS | v4 | Base de estilos (config via `@theme` en CSS) | Build (npm) |
| GSAP | 3.x | Animaciones, scroll triggers, timelines | CDN |
| Lenis | latest | Smooth scroll | CDN |
| Swiper | 11.x | Carruseles premium | CDN |
| Alpine.js | 3.x | Interactividad ligera (filtros, toggles) | CDN |

Sin bundler, sin transpiler. Solo Tailwind requiere build. Todo lo demas via CDN.

**Notas de stack:**
- **Sin Splitting.js** — el efecto caracter por caracter se logra con ~10 lineas de JS vanilla + GSAP. Un CDN menos.
- **Tailwind v4** usa `@theme` en CSS para configuracion, no `tailwind.config.js`.
- **CDNs condicionales** — cada pagina solo carga las librerias que necesita. Si P08 solo usa GSAP, no carga Swiper ni Alpine.

---

## Estructura de Archivos

```
webdesign-hub/
├── index.html                    ← Hub/galeria principal
├── saas-landing.html             ← Paginas en raiz (rutas planas)
├── portfolio-creativo.html
├── agencia-digital.html
├── ecommerce-store.html
├── blog-magazine.html
├── restaurante.html
├── fitness-wellness.html
├── startup-coming-soon.html
├── evento-conferencia.html
├── package.json
├── src/
│   ├── css/
│   │   └── main.css              ← Tailwind source + @theme config
│   └── js/
│       └── hub.js                ← Logica del hub (filtros, animaciones del grid)
├── dist/
│   └── css/
│       └── main.css              ← Tailwind compilado
├── assets/
│   ├── img/                      ← Screenshots de preview y fotos compartidas
│   └── fonts/                    ← (Opcional) Fuentes locales
├── docs/
│   ├── BRANDING.md
│   └── plans/
└── README.md
```

**Razon del cambio:** HTMLs en raiz = rutas simples (`./dist/css/main.css` desde cualquier pagina). Evita el infierno de `../../../` que causaba `src/pages/NOMBRE/`. Esto es critico para GitHub Pages.

---

## Arquitectura del Hub (index.html)

### Layout

```
┌─────────────────────────────────────────────────────┐
│  Nav: Logo + Links internos                         │
├─────────────────────────────────────────────────────┤
│                                                     │
│  HERO                                               │
│  Texto animado (JS vanilla split + GSAP)            │
│  "Coleccion de diseños web modernos"                │
│  Subtitulo + stats (9 paginas, X librerias)         │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  FILTROS                                            │
│  [Todos] [Landing] [Portfolio] [E-commerce] [...]   │
│  Alpine.js para filtrado reactivo                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  GRID DE CARDS (2-3 columnas)                       │
│  Cada card:                                         │
│  ┌──────────────────────┐                           │
│  │  Screenshot preview  │ ← aspect-video            │
│  │  (hover: zoom sutil) │                           │
│  ├──────────────────────┤                           │
│  │  Nombre              │                           │
│  │  Descripcion corta   │                           │
│  │  Tags: GSAP, Lenis   │                           │
│  │  [Ver pagina ↗]      │ ← target="_blank"         │
│  └──────────────────────┘                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  SECCION TECH STACK                                 │
│  Cards de las librerias usadas con descripcion      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  FOOTER                                             │
│  eleacid · Link a LayoutOS · 2026                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Interactividad del hub
- **Filtros:** Alpine.js filtra las cards por categoria
- **Hero:** Texto se revela caracter por caracter (JS vanilla split + GSAP)
- **Cards:** Hover con scale + shadow transition (CSS puro)
- **Cards links:** `target="_blank" rel="noopener"` para no perder estado de filtros Alpine
- **Scroll:** Smooth scroll con Lenis
- **Fondo:** Grid pattern sutil sobre zinc-950 (radial-gradient dots, opacity 0.05) — look "dev tool"

### Accesibilidad
- **`prefers-reduced-motion`:** Detectar globalmente y desactivar GSAP timelines + Lenis si el usuario lo prefiere
- **Indicador visual ↗** en links de cards para indicar que abre nueva pestaña

```js
// Snippet base para todas las paginas
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  // Desactivar Lenis, cancelar GSAP timelines, etc.
}
```

---

## Catalogo de Paginas (9 iniciales)

### Limites de contenido (aplica a todas)
Para mantener las paginas como mockups demostrativos y reducir HTML:
- **E-commerce:** Max 4 productos
- **Blog:** Max 3 articulos
- **Agencia:** Max 3 case studies
- **Imagenes:** Unsplash con parametros de tamaño (`?w=800&q=80`)

### P01 — SaaS Landing
- **Industria:** Tecnologia / Software
- **Librerias:** GSAP (scroll trigger), Lenis (smooth scroll)
- **Secciones:** Hero con gradiente animado, features con reveal on scroll, pricing con toggle mensual/anual, testimonials carousel, CTA final, footer
- **Patron visual:** Limpio, profesional, gradientes azul-violeta

### P02 — Portfolio Creativo
- **Industria:** Diseño / Fotografia
- **Librerias:** GSAP (page transitions, text split)
- **Secciones:** Hero con nombre grande animado, galeria de trabajos con hover effect, about con parallax, contacto
- **Patron visual:** Minimalista, tipografia grande, mucho espacio blanco

### P03 — Agencia Digital
- **Industria:** Marketing / Agencia
- **Librerias:** GSAP (horizontal scroll), Lenis
- **Secciones:** Hero con video/gradiente, servicios, case studies (max 3) con horizontal scroll section, equipo, contacto
- **Patron visual:** Bold, oscuro, texto grande, contrastes fuertes

### P04 — E-commerce Storefront
- **Industria:** Retail / Moda
- **Librerias:** Swiper (carrusel de productos), GSAP
- **Secciones:** Hero con producto destacado, categorias con grid animado, productos (max 4) con quick view, newsletter, footer
- **Patron visual:** Elegante, fotografico, tipografia serif para titulos

### P05 — Blog / Magazine
- **Industria:** Medios / Editorial
- **Librerias:** Lenis, GSAP (reading progress)
- **Secciones:** Header editorial, featured article con imagen grande, grid de articulos (max 3), sidebar con categorias, footer
- **Patron visual:** Tipografia editorial (serif), layout asimetrico, reading progress bar

### P06 — Restaurante
- **Industria:** Gastronomia / Hospitalidad
- **Librerias:** GSAP (parallax), Swiper (galeria)
- **Secciones:** Hero con foto a pantalla completa, menu interactivo, galeria de fotos, reservas, ubicacion, footer
- **Patron visual:** Calido, fotografico, tipografia elegante, colores tierra

### P07 — Fitness / Wellness
- **Industria:** Salud / Deporte
- **Librerias:** GSAP (counters animados, scroll reveals)
- **Secciones:** Hero con video de fondo, planes/membresías, entrenadores, stats con counters animados, testimonials, CTA
- **Patron visual:** Energetico, colores vivos (verde/naranja), tipografia bold

### P08 — Startup Coming Soon
- **Industria:** Startup / Pre-lanzamiento
- **Librerias:** GSAP (countdown, gradiente animado)
- **Secciones:** Pagina unica: logo, countdown animado, descripcion breve, email capture, redes sociales
- **Patron visual:** Oscuro, gradiente animado de fondo, minimalista, centrado

### P09 — Evento / Conferencia
- **Industria:** Eventos / Educacion
- **Librerias:** GSAP (timeline animada), Swiper (speakers)
- **Secciones:** Hero con fecha destacada, speakers carousel, schedule/agenda interactiva, sponsors, tickets CTA, footer
- **Patron visual:** Vibrante, gradientes, cards con glassmorphism

---

## Boton "Volver al Hub"

En lugar de un boton estatico en la esquina que rompe el diseño de cada pagina, usar un **floating button fijo** en la esquina inferior izquierda:
- Icono sutil (flecha ← o logo del hub)
- Aparece tras hacer scroll (similar a "back to top")
- Semi-transparente, se opaca en hover
- No interfiere con el diseño de la pagina

---

## Fases de Implementacion

### Fase 1: Scaffolding
1. ~~Crear directorio y repo `webdesign-hub`~~ ✅
2. `npm init -y`
3. Instalar Tailwind CSS v4
4. Crear `src/css/main.css` con `@theme` (config de Tailwind v4 via CSS)
5. Crear estructura de carpetas (`dist/`, `assets/img/`, `assets/fonts/`, `src/js/`)
6. Build inicial de Tailwind (`npm run build`)
7. Crear script de captura de screenshots (`capture.js` con puppeteer)
8. Deploy inicial a GitHub Pages (pagina vacia)

### Fase 2: Hub Principal
9. Crear `index.html` con layout base (nav, hero, grid, footer)
10. Implementar hero con animacion de texto (JS vanilla split + GSAP)
11. Implementar grid de cards con datos hardcodeados
12. Implementar filtros con Alpine.js
13. Fondo con grid pattern sutil (dot grid sobre zinc-950)
14. Smooth scroll con Lenis + respeto a `prefers-reduced-motion`
15. Responsive design (mobile first)
16. Cards con screenshots placeholder (gradientes de color hasta tener las paginas)
17. Links con `target="_blank" rel="noopener"` e icono ↗

### Fase 3: Paginas (1 por 1, orden sugerido)
18. P08 — Startup Coming Soon (la mas simple, buen warmup — solo GSAP)
19. P01 — SaaS Landing (patron mas comun, establece base — GSAP + Lenis)
20. P02 — Portfolio Creativo (text split vanilla + GSAP)
21. P06 — Restaurante (introduce Swiper — GSAP + Swiper)
22. P03 — Agencia Digital (introduce horizontal scroll — GSAP + Lenis)
23. P05 — Blog / Magazine (layout editorial — Lenis + GSAP)
24. P07 — Fitness / Wellness (counters, video — GSAP)
25. P04 — E-commerce Storefront (grid complejo — Swiper + GSAP)
26. P09 — Evento / Conferencia (glassmorphism, timeline — GSAP + Swiper)

Cada pagina incluye:
- Solo los CDNs que necesita
- Floating button "Volver al hub"
- Respeto a `prefers-reduced-motion`
- Imagenes de Unsplash con parametros de tamaño

### Fase 4: Polish
27. Ejecutar `npm run capture` para screenshots automaticos
28. Optimizar imagenes (compression)
29. Meta tags y SEO basico
30. Performance audit (Lighthouse)
31. Deploy final

---

## Convenciones

- **HTMLs en raiz** — rutas planas, siempre `./dist/css/main.css`
- **Cada pagina es independiente** — su propio HTML, solo sus CDNs necesarios
- **No hay SPA router** — navegacion directa entre paginas
- **Dark mode** solo en el hub, las paginas individuales tienen su propia paleta
- **Sin botones de descarga/copia** — es puramente visual
- **Floating button "Volver al hub"** en cada pagina (esquina inferior izquierda, aparece con scroll)
- **Mobile first** — todas las paginas deben funcionar en movil
- **Commits frecuentes** — uno por pagina completada
- **`prefers-reduced-motion`** — respetado en todas las paginas
- **Links externos** con `target="_blank" rel="noopener"`
- **Imagenes** via Unsplash con `?w=800&q=80`
- **Limites de contenido** — max 3-4 items por seccion repetible

---

## Branding del Hub

El hub usa una paleta distinta a LayoutOS para diferenciarse:

- **Fondo:** zinc-950 con grid pattern sutil (radial-gradient dots, opacity 0.05) — look "dev tool / Figma"
- **Acento:** Gradiente violeta-rosa (`from-violet-600 to-pink-500`)
- **Tipografia:** System font para UI, pero permite serif/display en paginas individuales
- **Cards:** Glassmorphism sutil (`bg-white/5 backdrop-blur border-white/10`)
- **Hover:** Scale + shadow + border glow sutil

---

*Este documento es el plan maestro del proyecto WebDesign Hub.*
*Se actualiza conforme se completen las fases.*
