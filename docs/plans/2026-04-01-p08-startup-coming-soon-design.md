# P08 — Startup Coming Soon: "ShipFast"

## Concepto
Página de pre-lanzamiento para "ShipFast" — deploy en un click. Una sola pantalla centrada, 100vh, sin scroll.

## Secciones (top to bottom, centrado)
1. **Logo:** Icono ⚡ + "ShipFast" en bold
2. **Tagline:** "Deploy your code in one click" — texto grande
3. **Descripción:** "The fastest way to ship apps from your terminal to production."
4. **Countdown:** 4 bloques (days, hrs, min, sec) — números grandes monospace, target 30 días desde hoy
5. **Email capture:** Input + botón "Notify me" (visual, no funcional)
6. **Redes:** X, GitHub, Discord — iconos con hover

## Visual
- Fondo: `#050510` con gradiente radial animado (GSAP, movimiento lento)
- Grid pattern sutil y fino
- Glow orb cian-azul pulsante detrás del countdown
- Tipografía: Inter (UI) + monospace para countdown
- Accent: cian-azul (`#06b6d4` → `#3b82f6`)

## Animaciones GSAP (secuencia de entrada)
1. Logo fade in + slide down (0.3s delay)
2. Tagline caracteres uno por uno (0.5s delay)
3. Descripción fade up (1s delay)
4. Countdown scale from 0 + bounce (1.2s delay)
5. Email input fade up (1.5s delay)
6. Redes stagger fade in (1.8s delay)
7. Countdown: actualiza cada segundo con transición numérica

## Técnico
- Solo GSAP via CDN (ni Lenis, ni Swiper, ni Alpine)
- Tailwind via `./dist/css/main.css`
- Floating button "Volver al hub" esquina inferior izquierda
- `prefers-reduced-motion`: desactivar animaciones
- Archivo: `startup-coming-soon.html` en raíz
