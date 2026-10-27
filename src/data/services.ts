export type ServiceIcon = 'fotografia' | 'video' | 'diseno'

export interface Service {
  id: number
  icon: ServiceIcon
  title: string
  description: string
}

/**
 * ✏️ EDITA AQUÍ la lista de servicios y los programas que manejas.
 */
export const services: Service[] = [
  {
    id: 1,
    icon: 'fotografia',
    title: 'Fotografía',
    description:
      'Captura de momentos, retratos e historias con intención visual y manejo estratégico de la luz natural y de estudio.',
  },
  {
    id: 2,
    icon: 'video',
    title: 'Audiovisual',
    description:
      'Edición, dirección y producción de video enfocadas en transmitir emociones y conectar con la audiencia.',
  },
  {
    id: 3,
    icon: 'diseno',
    title: 'Diseño',
    description:
      'Creación de identidad visual, piezas gráficas y maquetación listas para destacar en medios digitales e impresos.',
  },
]

export const programs = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe Lightroom',
  'Adobe InDesign',
  'Adobe Premiere',
  'Adobe Audition',
]
