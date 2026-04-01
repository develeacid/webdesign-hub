# P01 — SaaS Landing: "Metrix"

## Concepto
Landing page para "Metrix" — real-time analytics for modern teams. Tema light, profesional, gradientes indigo-violeta. Múltiples secciones con scroll.

## Tipografía
- Headings: Satoshi (geometric, premium)
- Body: DM Sans (limpio, legible)

## Paleta
- Fondo: `#fafbff` (blanco azulado)
- Surface: `#ffffff`
- Text: `#0f172a` (slate-900)
- Muted: `#64748b`
- Primary gradient: `#6366f1` → `#8b5cf6` (indigo-violet)
- Accent: `#06b6d4` (cyan, highlights de datos)
- Border: `rgba(99, 102, 241, 0.1)`

## Secciones
1. **Nav:** Logo "Metrix" | Features, Pricing links | CTA button
2. **Hero:** Badge "Now with AI-powered insights", H1 "Analytics that move as fast as you", subtitle, 2 botones, dashboard mockup CSS puro flotante con glow, stats (10K+ teams, 99.9% uptime, <50ms)
3. **Features:** 3 cards (Real-time, Custom dashboards, Team sharing) con icono, título, descripción. Reveal on scroll.
4. **Pricing:** Toggle mensual/anual (JS vanilla). 3 planes: Free, Pro $29 (destacado con border gradient), Team $79. Cards slide up stagger.
5. **Testimonials:** 3 quotes con avatar placeholder, nombre, empresa.
6. **CTA Final:** "Ready to see your data clearly?" + botón grande + fondo gradiente.
7. **Footer:** Links, Metrix © 2026.

## Dashboard mockup (hero)
Div estilizado simulando dashboard con:
- Barras de gráfico CSS puras (heights variados)
- Números/métricas decorativas
- Mini line chart CSS
- Glow violeta detrás
- Parallax sutil al hacer scroll

## Animaciones
- GSAP + ScrollTrigger para reveal on scroll
- Lenis para smooth scroll
- Hero: badge → h1 words stagger → subtitle → botones → dashboard float in
- Features: cards reveal stagger desde abajo
- Pricing: cards slide up stagger
- Testimonials: fade in lateral stagger
- CTA: scale up sutil

## Técnico
- GSAP + ScrollTrigger + Lenis via CDN
- Tailwind via `./dist/css/main.css`
- Floating button "Volver al hub"
- `prefers-reduced-motion` respetado
- Archivo: `saas-landing.html` en raíz
