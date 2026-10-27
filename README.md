# Portafolio de Sandy Abarca

Sitio web tipo portafolio para **Sandy Abarca, Productora Multimedia**, construido con
**Vue 3 + Vite + TypeScript + Bootstrap 5** y publicado en **GitHub Pages**.

🔗 **Sitio en vivo:** https://sandyabarca.github.io

---

## 🖼️ ¿Cómo cambio mis textos y fotos? (sin saber programar)

Todo el contenido está separado del código, en la carpeta `src/data/`:

| Qué quieres cambiar        | Dónde se edita                          |
| -------------------------- | --------------------------------------- |
| Nombre, correo, teléfono   | `src/data/site.ts`                      |
| Textos del "Sobre mí"      | `src/data/site.ts` (bloque `about`)     |
| Servicios y programas      | `src/data/services.ts`                  |
| Proyectos y "otros"        | `src/data/projects.ts`                  |
| Fotos, videos, CV, logo    | `src/assets/images/` (reemplaza los archivos) |

> 💡 Las fotos de los carruseles y los videos se importan desde
> `src/assets/images/` (carpetas `monster_energy/` y `restaurante_sushi/`).
> Para cambiar una foto: reemplaza el archivo con el mismo nombre, o edita
> la importación en `src/data/projects.ts`.

El formulario de contacto envía los mensajes al correo mediante
[FormSubmit.co](https://formsubmit.co) (gratuito). La primera vez que alguien
escriba, FormSubmit enviará un correo de activación a `sansanabarca08@gmail.com`.

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
