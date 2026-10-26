export type ServiceIcon = 'fotografia' | 'video' | 'edicion' | 'arte'

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
    icon: 'fotografia',
    title: 'Fotografía',
    description:
      'Retrato, moda y producto con luz natural. Sesiones que se sienten cercanas, reales y con mucha personalidad.',
    tags: ['Retrato', 'Moda', 'Producto'],
  },
  {
    id: 2,
    icon: 'video',
    title: 'Producción Audiovisual',
    description:
      'Video y cobertura de eventos: del storyboard al montaje final, con ritmo, emoción y buena música.',
    tags: ['Coberturas', 'Video marca', 'Storyboard'],
  },
  {
    id: 3,
    icon: 'edicion',
    title: 'Edición y Postproducción',
    description:
      'Edición de video, color y retoque fotográfico: el acabado que hace brillar cada toma.',
    tags: ['Edición', 'Color', 'Retoque'],
  },
  {
    id: 4,
    icon: 'arte',
    title: 'Dirección de Arte',
    description:
      'Concepto visual para sesiones y campañas: locaciones, props, iluminación y estética de principio a fin.',
    tags: ['Campañas', 'Set', 'Look & feel'],
  },
]
