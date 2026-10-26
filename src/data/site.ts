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
  role: 'Fotógrafa',
  email: 'Sansanabarca08@gmail.com',
  location: 'Tu Ciudad, Tu País',
  year: 2026,

  hero: {
    kicker: 'Portafolio · 2026',
    line1: 'Capturo historias',
    accent: 'con luz',
    line2: 'mar y carácter',
    subtitle:
      'Soy Sandy, fotógrafa. Cuento historias con luz natural: retrato, moda, producto y video que se sienten cercanos y reales.',
    primaryCta: { label: 'Ver portafolio', href: '#portafolio' },
    secondaryCta: { label: 'Contáctame', href: '#contacto' },
    portraitCaption: 'Sandy Abarca — foto de ejemplo, reemplázala por tu retrato',
  },

  about: {
    kicker: 'Sobre mí',
    headingLine1: 'Hola, soy',
    headingAccent: 'Sandy',
    lead: 'Fotógrafa y productora multimedia, enamorada de la luz dorada y del mar.',
    paragraphs: [
      'Me dedico a la fotografía y la producción audiovisual: retrato, moda, producto y contenido para marcas que quieren verse auténticas. La hora dorada es mi oficina favorita.',
      'Cuando no estoy detrás de la cámara, busco locaciones junto al mar, colecciono cámaras análogas y preparo playlists para las sesiones. Creo que la mejor foto es la que se siente espontánea.',
    ],
    stats: [
      { value: '3+', label: 'años disparando' },
      { value: '25+', label: 'sesiones realizadas' },
      { value: '8', label: 'proyectos de video' },
    ],
    skills: ['Lightroom', 'Photoshop', 'Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    figureCaption: 'Mi set junto al mar — imagen de ejemplo',
  },

  contact: {
    kicker: 'Contacto',
    headingLine1: '¿Construimos',
    headingAccent: 'castillos',
    headingLine2: 'de arena juntos?',
    text: '¿Tienes una sesión, un proyecto o una idea? Escríbeme y lo planeamos con un café frente al mar.',
    note: 'Respondo antes de que baje la marea ✳',
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
