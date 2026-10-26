# Portafolio de Sandy Abarca

Sitio web tipo portafolio para **Sandy Abarca, fotógrafa y productora multimedia**, construido con
**Vue 3 + Vite + TypeScript + Bootstrap 5** y publicado en **GitHub Pages**.

🔗 **Sitio en vivo:** https://sandyabarca.github.io

---

## 🖼️ ¿Cómo cambio mis textos y fotos? (sin saber programar)

Todo el contenido está separado del código, en la carpeta `src/data/`:

| Qué quieres cambiar        | Dónde se edita                          |
| -------------------------- | --------------------------------------- |
| Nombre, correo, redes      | `src/data/site.ts`                      |
| Textos del "Sobre mí"      | `src/data/site.ts` (bloque `about`)     |
| Lista de servicios         | `src/data/services.ts`                  |
| Proyectos del portafolio   | `src/data/projects.ts`                  |
| Fotos e imágenes           | `public/images/` (reemplaza los archivos) |

> 💡 Para reemplazar una imagen: sube tu foto con el **mismo nombre** del archivo
> (ej. `portrait.svg` → cámbialo por `portrait.jpg` y actualiza el nombre en `site.ts`)
> o cambia el nombre en el archivo de datos correspondiente.

Puedes editar estos archivos **directamente desde github.com** (botón ✏️ sobre el archivo).
Al guardar, el sitio se actualiza solo en unos minutos gracias a GitHub Actions.

---

## 💻 Desarrollo local (opcional)

Requisitos: [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install     # instala dependencias (solo la primera vez)
npm run dev     # abre el sitio en http://localhost:5173
npm run build   # genera la carpeta dist/ lista para publicar
```

---

## 🚀 Cómo publicar cambios

```bash
git add .
git commit -m "actualizar contenido"
git push
```

Cada `push` a la rama `main` publica el sitio automáticamente con GitHub Actions
(archivo `.github/workflows/deploy.yml`). No hay que hacer nada más.

---

## 📁 Estructura

```
sandy/
├── public/               # imágenes y favicon (se copian tal cual)
│   └── images/
├── src/
│   ├── assets/scss/      # estilos personalizados
│   ├── components/       # componentes Vue (navbar, secciones, tarjetas)
│   ├── composables/      # lógica reutilizable (modo oscuro)
│   ├── data/             # ✏️ contenido editable (textos, proyectos, servicios)
│   └── directives/       # animaciones de aparición al hacer scroll
└── .github/workflows/    # publicación automática en GitHub Pages
```

---

_Proyecto académico — hecho con ♥, Vue 3 y Bootstrap 5._
