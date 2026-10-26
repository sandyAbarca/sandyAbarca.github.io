export type ServiceIcon = 'branding' | 'editorial' | 'ilustracion' | 'social'

export interface Service {
  id: number
  icon: ServiceIcon
  title: string
  description: string
  tags: string[]
}

/**
 * ✏️ EDITA AQUÍ la lista de servicios.
 */
export const services: Service[] = [
  {
    id: 1,
    icon: 'branding',
    title: 'Branding e Identidad',
    description:
      'Logotipos, paletas de color y sistemas visuales completos que cuentan la historia de tu marca con coherencia.',
    tags: ['Logotipo', 'Manual de marca', 'Papelería'],
  },
  {
    id: 2,
    icon: 'editorial',
    title: 'Diseño Editorial',
    description:
      'Revistas, libros y publicaciones con ritmo, jerarquía y amor por el detalle: de la retícula a la portada.',
    tags: ['Revistas', 'Libros', 'Catálogos'],
  },
  {
    id: 3,
    icon: 'ilustracion',
    title: 'Ilustración',
    description:
      'Ilustraciones con personalidad para campañas, empaques y piezas editoriales, en estilo vectorial o a mano.',
    tags: ['Digital', 'Vectorial', 'Botánica'],
  },
  {
    id: 4,
    icon: 'social',
    title: 'Redes Sociales',
    description:
      'Parrillas, banners y piezas que mantienen tu feed con una misma voz visual, clara y reconocible.',
    tags: ['Feed', 'Banners', 'Campañas'],
  },
]
