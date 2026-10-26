export type Category = 'Branding' | 'Editorial' | 'Ilustración' | 'Social Media'

export interface Project {
  id: number
  title: string
  category: Category
  year: number
  description: string
  image: string
  tags: string[]
}

export const categories: Array<'Todos' | Category> = [
  'Todos',
  'Branding',
  'Editorial',
  'Ilustración',
  'Social Media',
]

/**
 * ✏️ EDITA AQUÍ tus proyectos.
 * Las imágenes van en `public/images/projects/` (solo cambia el nombre del archivo).
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'Sol de Maíz',
    category: 'Branding',
    year: 2025,
    description:
      'Identidad completa para una marca de productos de maíz orgánico: logotipo, paleta solar y empaque.',
    image: 'images/projects/proyecto-01.svg',
    tags: ['Identidad', 'Packaging'],
  },
  {
    id: 2,
    title: 'Revista Páginas',
    category: 'Editorial',
    year: 2024,
    description:
      'Diseño editorial y dirección de arte para una revista cultural independiente. Tres números publicados.',
    image: 'images/projects/proyecto-02.svg',
    tags: ['Dirección de arte', 'Maquetación'],
  },
  {
    id: 3,
    title: 'Botánica',
    category: 'Ilustración',
    year: 2025,
    description:
      'Serie de ilustraciones botánicas vectoriales para papelería, murales y piezas de estación.',
    image: 'images/projects/proyecto-03.svg',
    tags: ['Vectorial', 'Serie'],
  },
  {
    id: 4,
    title: 'Dulce Origen',
    category: 'Branding',
    year: 2024,
    description:
      'Packaging y sistema visual para una pastelería artesanal con aire de mercado local y recetas de casa.',
    image: 'images/projects/proyecto-04.svg',
    tags: ['Packaging', 'Identidad'],
  },
  {
    id: 5,
    title: 'Café Norte',
    category: 'Social Media',
    year: 2026,
    description:
      'Parrilla mensual y piezas para la campaña de lanzamiento de una cafetería de especialidad.',
    image: 'images/projects/proyecto-05.svg',
    tags: ['Campaña', 'Contenido'],
  },
  {
    id: 6,
    title: 'Festival K’awil',
    category: 'Ilustración',
    year: 2024,
    description:
      'Cartel e ilustración principal para un festival de arte y cultura. Versión impresa y digital.',
    image: 'images/projects/proyecto-06.svg',
    tags: ['Cartel', 'Ilustración'],
  },
]
