# P06 — Restaurante: "Osteria Nonna"

## Concepto
Restaurante italiano rústico premium. Dark cálido, tipografía serif elegante, fotografía gastronómica.

## Tipografía
- Headings: Playfair Display (serif elegante)
- Body: Lora (serif legible)

## Paleta
- Fondo: `#1a110a`
- Surface: `#241a10`
- Text: `#f5ebe0` (crema)
- Muted: `#a08d7a`
- Accent: `#c8702a` (terracota)
- Gold: `#d4a853`

## Secciones
1. Nav: "Osteria Nonna" | Reserve a Table
2. Hero 100vh: foto fullscreen oscurecida, "Where tradition meets craft"
3. Story: split — texto bio + firma, foto interior parallax
4. Menu: 4 platos, estilo carta clásica (líneas punteadas)
5. Gallery: Swiper fullwidth, 4 fotos
6. Reservas: centrado, teléfono, horario
7. Footer: dirección, redes, © 2026

## Técnico
- GSAP + ScrollTrigger + Swiper via CDN
- Tailwind via ./dist/css/main.css
- Floating button "Volver al hub"
- prefers-reduced-motion respetado
- Archivo: restaurante.html en raíz
