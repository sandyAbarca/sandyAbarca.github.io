const SELECTOR = '.btn-solid, .btn-outline, .icon-btn'
const STRENGTH = 9

/**
 * Botones magnéticos: se inclinan ligeramente hacia el cursor.
 * Delegación global para no repetir el código en cada plantilla.
 */
export function initMagnetic() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  document.addEventListener('mouseover', (e) => {
    const target = (e.target as HTMLElement).closest(SELECTOR) as HTMLElement | null
    if (!target) return
    const el = target

    function move(ev: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const x = ev.clientX - rect.left - rect.width / 2
      const y = ev.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${(x / rect.width) * STRENGTH}px, ${(y / rect.height) * STRENGTH}px)`
    }

    function leave() {
      el.style.transform = ''
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseout', leave)
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseout', leave)
  })
}
