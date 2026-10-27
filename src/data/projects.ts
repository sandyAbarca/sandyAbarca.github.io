import sushi1 from '../assets/images/restaurante_sushi/54873999520_311cd2b22c_b (1).jpg'
import sushi2 from '../assets/images/restaurante_sushi/54873941053_81c4ac6f15_b (1).jpg'
import sushi3 from '../assets/images/restaurante_sushi/54873698681_ee702a62d7_b (1).jpg'
import monster1 from '../assets/images/monster_energy/54889766360_1cc5719787_b.jpg'
import monster2 from '../assets/images/monster_energy/54889717189_59728816d6_b.jpg'
import monster3 from '../assets/images/monster_energy/54889714809_c49591e3b2_b.jpg'
import monster4 from '../assets/images/monster_energy/54889713574_378f8a2a45_b.jpg'
import monster5 from '../assets/images/monster_energy/54889471631_f2bb172ddf_b.jpg'
import monsterVideo from '../assets/images/monster_energy/MONSTER ENERGY.mp4'

export type Category = 'Fotografía' | 'Audiovisual' | 'Diseño' | 'Audio'

export type ProjectKind =
  | 'carousel'
  | 'video'
  | 'youtube'
  | 'drive'
  | 'soundcloud'
  | 'design'

export interface CarouselSlide {
  image?: string
  label: string
}

export interface Project {
  id: number
  title: string
  kind: ProjectKind
  category: Category
  description: string
  role?: string
  comingSoon?: boolean
  /** Carrusel: lista de fotos */
  slides?: CarouselSlide[]
  /** Video local (se reproduce al pasar el cursor) */
  src?: string
  /** Portada externa (miniatura) */
  cover?: string
  /** Embeds: URL del recurso */
  embedUrl?: string
  /** YouTube: ID del video */
  embedId?: string
  /** Página externa para ver el proyecto completo */
  externalUrl?: string
  /** Texto del botón externo */
  externalLabel?: string
}

/**
 * ✏️ EDITA AQUÍ tus proyectos.
 * Proyectos principales (aparecen primero).
 */
export const mainProjects: Project[] = [
  {
    id: 1,
    title: 'Monster Energy',
    kind: 'carousel',
    category: 'Fotografía',
    description:
      'Fotografía de producto | Iluminación de alto contraste, tonos oscuros y destellos fluorescentes para transmitir energía y movimiento.',
    slides: [
      { image: monster1, label: 'Monster Energy — foto 1' },
      { image: monster2, label: 'Monster Energy — foto 2' },
      { image: monster3, label: 'Monster Energy — foto 3' },
      { image: monster4, label: 'Monster Energy — foto 4' },
      { image: monster5, label: 'Monster Energy — foto 5' },
    ],
  },
  {
    id: 2,
    title: 'Restaurante de Sushi',
    kind: 'carousel',
    category: 'Fotografía',
    description:
      'Fotografía gastronómica | Encuadres limpios y luz suave para destacar la frescura, texturas y elegancia de cada platillo.',
    slides: [
      { image: sushi1, label: 'Sushi — foto 1' },
      { image: sushi2, label: 'Sushi — foto 2' },
      { image: sushi3, label: 'Sushi — foto 3' },
    ],
  },
  {
    id: 3,
    title: 'Monster Energy — Concepto Audiovisual',
    kind: 'video',
    category: 'Audiovisual',
    description:
      'Capturar la adrenalina, el impacto urbano y la energía pura de la marca.',
    src: monsterVideo,
  },
  {
    id: 4,
    title: 'Fender E-Commerce',
    kind: 'design',
    category: 'Diseño',
    description:
      'Diseño | Interfaz intuitiva y visualmente potente que combina la esencia del rock con una navegación de compra fluida.',
    comingSoon: true,
  },
]

/**
 * ✏️ Otros proyectos (aparecen al final).
 */
export const otherProjects: Project[] = [
  {
    id: 5,
    title: 'Cortometraje',
    kind: 'drive',
    category: 'Audiovisual',
    description: 'Cortometraje académico.',
    role: 'Cámara, Directora Musical y CM',
    embedUrl: 'https://drive.google.com/file/d/1ZHlSs61e-jrxRQClfLIuheq3fs30Kvkq/preview',
    externalUrl: 'https://drive.google.com/file/d/1ZHlSs61e-jrxRQClfLIuheq3fs30Kvkq/view',
    externalLabel: 'Ver en Drive',
  },
  {
    id: 6,
    title: 'Doblaje de Voz — Los Increíbles',
    kind: 'youtube',
    category: 'Audio',
    description: 'Doblaje de voz del personaje de Edna Moda, con edición de audio.',
    role: 'Voz de Edna Moda y Edición',
    embedId: 'mfoXyCzwbvs',
    cover: 'https://i.ytimg.com/vi/mfoXyCzwbvs/hqdefault.jpg',
    externalUrl: 'https://www.youtube.com/watch?v=mfoXyCzwbvs',
    externalLabel: 'Ver en YouTube',
  },
  {
    id: 7,
    title: 'Demo de Voz',
    kind: 'soundcloud',
    category: 'Audio',
    description: 'Demo de voz para locución y doblaje.',
    embedUrl:
      'https://soundcloud.com/sandy-abarca-303840986/demo-de-voz-sandy-abarca-mp3',
    externalUrl:
      'https://soundcloud.com/sandy-abarca-303840986/demo-de-voz-sandy-abarca-mp3?ref=clipboard&p=i&c=1&si=3E2D986950AF49F0869C08D5D5999BA8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    externalLabel: 'Ver en SoundCloud',
  },
]
