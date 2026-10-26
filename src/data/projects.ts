export type Category = 'Fotografía' | 'Video' | 'Producción' | 'Editorial'

export interface Project {
  id: number
  title: string
  category: Category
  year: number
  description: string
  image: string
  /** Datos técnicos estilo EXIF, le dan toque de fotógrafa a cada tarjeta */
  exif: string
}

export const categories: Array<'Todos' | Category> = [
  'Todos',
  'Fotografía',
  'Video',
  'Producción',
  'Editorial',
]

/**
 * ✏️ EDITA AQUÍ tus proyectos.
 * Las imágenes van en `public/images/projects/` (solo cambia el nombre del archivo).
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'Sesión Playa Dorada',
    category: 'Fotografía',
    year: 2025,
    description:
      'Retrato en hora dorada junto al mar: luz natural, brisa y piel al sol.',
    image: 'images/projects/proyecto-01.svg',
    exif: 'f/1.8 · 1/500s · ISO 100 · 85mm',
  },
  {
    id: 2,
    title: 'Lookbook Verano',
    category: 'Editorial',
    year: 2025,
    description:
      'Lookbook de moda para una marca de ropa playera, con dirección de arte y retoque.',
    image: 'images/projects/proyecto-02.svg',
    exif: 'f/2.8 · 1/250s · ISO 200 · 50mm',
  },
  {
    id: 3,
    title: 'Documental Costero',
    category: 'Video',
    year: 2024,
    description:
      'Mini documental sobre la vida de las y los pescadores del puerto al amanecer.',
    image: 'images/projects/proyecto-03.svg',
    exif: '4K · 24fps · S-Log3',
  },
  {
    id: 4,
    title: 'Café Norte',
    category: 'Fotografía',
    year: 2026,
    description:
      'Fotografía de producto para una cafetería de especialidad: tazas, grano y vapor.',
    image: 'images/projects/proyecto-04.svg',
    exif: 'f/5.6 · 1/125s · ISO 400 · 100mm',
  },
  {
    id: 5,
    title: 'Cobertura Festival K’awil',
    category: 'Producción',
    year: 2024,
    description:
      'Cobertura de foto y video de un festival de arte: escenario, público y backstage.',
    image: 'images/projects/proyecto-05.svg',
    exif: 'f/2.8 · 1/1000s · ISO 800 · 24-70mm',
  },
  {
    id: 6,
    title: 'Campaña Social',
    category: 'Producción',
    year: 2026,
    description:
      'Producción de contenido vertical para la campaña de lanzamiento de una marca local.',
    image: 'images/projects/proyecto-06.svg',
    exif: '9:16 · 30fps · Color grade',
  },
]
