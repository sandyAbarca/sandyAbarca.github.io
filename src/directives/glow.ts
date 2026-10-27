import type { Directive } from 'vue'

type GlowElement = HTMLElement & { _glow?: (e: MouseEvent) => void }

/**
 * v-glow → resplandor radial que sigue el cursor sobre la tarjeta.
 * Usa las variables CSS --mx / --my que consume .glow-card.
 */
const glow: Directive<HTMLElement> = {
  mounted(el) {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    el.classList.add('glow-card')

    function move(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }

    el.addEventListener('mousemove', move)
    ;(el as GlowElement)._glow = move
  },
  unmounted(el) {
    const handler = (el as GlowElement)._glow
    if (handler) el.removeEventListener('mousemove', handler)
  },
}

export default glow
