# WebDesign Hub — Contexto del Proyecto

## Que es
Galeria visual de diseños web modernos con animaciones y transiciones. Proyecto hermano de [LayoutOS](https://develeacid.github.io/layouts-personales/). Cada entrada es una pagina web completa standalone a pantalla completa, organizada por tipo de industria.

## Stack
- **Tailwind CSS v4** — estilos (unico que requiere build: `npm run build`)
- **GSAP 3.x** — animaciones, scroll triggers, timelines (CDN)
- **Lenis** — smooth scroll (CDN)
- **Splitting.js** — animaciones de texto (CDN)
- **Swiper 11.x** — carruseles (CDN)
- **Alpine.js 3.x** — interactividad ligera (CDN)

Sin bundler. Sin transpiler. Solo Tailwind requiere build.

## Stitch (Google AI Design)
MCP server configurado a nivel user para generar diseños con IA.
- Usar para generar layouts de referencia antes de implementar cada pagina
- Herramientas: create_project, generate_screen_from_text, edit_screens, generate_variants
- Modelos: GEMINI_3_FLASH, GEMINI_3_1_PRO

## Estructura
```
index.html              ← Hub/galeria principal (dark by default)
src/pages/NOMBRE/       ← Cada pagina es un index.html standalone
src/css/main.css        ← Tailwind source
src/js/hub.js           ← Logica del hub
public/css/main.css     ← Tailwind compilado
public/img/             ← Screenshots de preview
```

## Comandos
```bash
npm run build           # Compilar Tailwind
```

## Reglas
- **Rutas relativas** siempre (./src/, ../public/) — para GitHub Pages
- **Sin botones de descarga/copia** — es puramente visual
- **Cada pagina es independiente** — su propio HTML, sus propios CDNs
- **Mobile first** — todo debe funcionar en movil
- **Commits frecuentes** — uno por pagina completada
- **Dark mode** solo en el hub, las paginas individuales tienen su propia paleta
- **Cada pagina incluye boton "Volver al hub"** discreto

## Branding del Hub
- Fondo: zinc-950 (dark by default)
- Acento: gradiente violeta-rosa (from-violet-600 to-pink-500)
- Cards: glassmorphism (bg-white/5 backdrop-blur border-white/10)
- Hover: scale + shadow + border glow

## Deploy
GitHub Pages desde branch main, directorio raiz.

## Proyecto hermano
LayoutOS: https://develeacid.github.io/layouts-personales/
Repo local: /home/eleacid/code/layouts-personales/
