export interface SocialLink {
  label: string
  handle: string
  url: string
}

/**
 * ✏️ EDITA AQUÍ los datos generales del sitio.
 * Cambia textos, correo, redes y frases sin tocar el código de los componentes.
 */
export const site = {
  name: 'Sandy Abarca',
  firstName: 'Sandy',
  role: 'Diseñadora Gráfica',
  email: 'Sansanabarca08@gmail.com',
  location: 'Tu Ciudad, Tu País',
  year: 2026,

  hero: {
    kicker: 'Portafolio · 2026',
    line1: 'Diseño con',
    accent: 'carácter',
    line2: 'y calidez',
    subtitle:
      'Soy Sandy, diseñadora gráfica. Convierto ideas en identidades visuales memorables: marcas, editorial, ilustración y contenido para redes sociales.',
    primaryCta: { label: 'Ver portafolio', href: '#portafolio' },
    secondaryCta: { label: 'Contáctame', href: '#contacto' },
    portraitCaption: 'Sandy Abarca — retrato de ejemplo, reemplázalo por tu foto',
  },

  about: {
    kicker: 'Sobre mí',
    headingLine1: 'Hola, soy',
    headingAccent: 'Sandy',
    lead: 'Diseñadora gráfica apasionada por las historias que se cuentan con color, letras y forma.',
    paragraphs: [
      'Estudio diseño gráfico y trabajo en proyectos de branding, editorial e ilustración. Me gusta empezar cada proyecto escuchando: entender qué hace única a una marca y traducirlo en imágenes que la gente recuerda.',
      'Fuera de la pantalla, me inspiran los mercados, la papelería antigua y las portadas de discos. Creo que el buen diseño es el que se siente cercano, cálido y hecho con intención.',
    ],
    stats: [
      { value: '3+', label: 'años diseñando' },
      { value: '20+', label: 'proyectos realizados' },
      { value: '12', label: 'clientes felices' },
    ],
    skills: ['Photoshop', 'Illustrator', 'InDesign', 'Figma', 'After Effects'],
    figureCaption: 'Mi rincón creativo — imagen de ejemplo',
  },

  contact: {
    kicker: 'Contacto',
    headingLine1: '¿Hacemos algo',
    headingAccent: 'hermoso',
    headingLine2: 'juntos?',
    text: '¿Tienes un proyecto, una idea o solo quieres saludar? Escríbeme y lo conversamos con un café (o un té, también vale).',
    note: 'Respondo en un máximo de 48 horas.',
  },

  socials: [
    {
      label: 'Instagram',
      handle: '@sandy.abarca',
      url: 'https://www.instagram.com/',
    },
    {
      label: 'Behance',
      handle: '/sandyabarca',
      url: 'https://www.behance.net/',
    },
    {
      label: 'LinkedIn',
      handle: '/in/sandyabarca',
      url: 'https://www.linkedin.com/',
    },
  ] as SocialLink[],
}
