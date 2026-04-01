# WebDesign Hub — Contexto del Proyecto

## Que es
Galeria visual de diseños web modernos con animaciones y transiciones. Proyecto hermano de [LayoutOS](https://develeacid.github.io/layouts-personales/). Cada entrada es una pagina web completa standalone a pantalla completa, organizada por tipo de industria.

## Stack
- **Tailwind CSS v4** — estilos con `@theme` y `@custom-variant` (unico que requiere build: `npm run build`)
- **GSAP 3.x + ScrollTrigger** — animaciones, scroll triggers, timelines (CDN)
- **Lenis** — smooth scroll (CDN)
- **Swiper 11.x** — carruseles (CDN)
- **Alpine.js 3.x** — interactividad ligera (CDN)

Sin bundler. Sin transpiler. Sin Splitting.js (text split con vanilla JS). Solo Tailwind requiere build.

## Skills para diseño
En lugar de Stitch MCP, usar skills de Claude Code para cada pagina:
1. `brainstorming` — explorar direccion visual antes de implementar
2. `frontend-design` — generar paginas con alto nivel de diseño
3. `verification-before-completion` — validar antes de commit
4. `dispatching-parallel-agents` / `subagent-driven-development` — paralelizar paginas

## Estructura
```
index.html              ← Hub/galeria principal (dark by default)
*.html                  ← Paginas standalone en raiz (rutas planas)
src/css/main.css        ← Tailwind source con @theme
src/js/hub.js           ← Logica del hub
dist/css/main.css       ← Tailwind compilado
assets/img/             ← Screenshots de preview
```

## Comandos
```bash
npm run build           # Compilar Tailwind (minificado)
npm run dev             # Tailwind en modo watch
```

## Reglas
- **HTMLs en raiz** — rutas planas, siempre `./dist/css/main.css`
- **Sin botones de descarga/copia** — es puramente visual
- **Cada pagina es independiente** — su propio HTML, solo sus CDNs necesarios
- **Mobile first** — todo debe funcionar en movil
- **Commits frecuentes** — uno por pagina completada
- **Dark mode** solo en el hub (clase `.dark` en `<html>` + localStorage)
- **Floating button "Volver al hub"** en cada pagina (esquina inferior izquierda)
- **`prefers-reduced-motion`** — respetado en todas las paginas
- **Links externos** con `target="_blank" rel="noopener"`
- **Imagenes** via Unsplash con `?w=800&q=80`
- **Max 3-4 items** por seccion repetible (productos, articulos, case studies)

## Branding del Hub
- Fondo: zinc-950 con dot grid sutil + hero glow orb
- Acento: gradiente violeta-rosa (#7c3aed → #ec4899)
- Cards: glassmorphism + texturas unicas por pagina
- Hover: scale(1.02) + shadow + border glow violeta
- Dark/light mode con transicion suave (0.4s)

## Deploy
GitHub Pages desde branch main, directorio raiz.

## Proyecto hermano
LayoutOS: https://develeacid.github.io/layouts-personales/
Repo local: /home/eleacid/code/layouts-personales/
