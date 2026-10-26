/**
 * Devuelve la ruta pública de un archivo de `public/`.
 * Usa BASE_URL de Vite → funciona en GitHub Pages aunque el sitio
 * esté en una subruta (ej. /usuario.github.io/...).
 */
export function img(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`
}
