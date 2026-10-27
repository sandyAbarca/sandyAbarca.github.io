import type { Directive } from 'vue'

type TiltElement = HTMLElement & { _tilt?: { move: (e: MouseEvent) => void; leave: () => void } }

/**
 * v-tilt → inclinación 3D sutil siguiendo el cursor (solo desktop).
 */
const tilt: Directive<HTMLElement> = {
  mounted(el) {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const max = 5.5
    let raf = 0

    function move(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transition = 'transform 0.09s ease-out'
        el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`
      })
    }

    function leave() {
      cancelAnimationFrame(raf)
      el.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)'
      el.style.transform = ''
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    ;(el as TiltElement)._tilt = { move, leave }
  },
  unmounted(el) {
    const handlers = (el as TiltElement)._tilt
    if (handlers) {
      el.removeEventListener('mousemove', handlers.move)
      el.removeEventListener('mouseleave', handlers.leave)
    }
  },
}

export default tilt
