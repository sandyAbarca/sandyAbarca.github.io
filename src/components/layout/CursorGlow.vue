<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const dot = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)
const hover = ref(false)

const enabled =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

let mx = -100
let my = -100
let rx = -100
let ry = -100
let raf = 0

function onMove(e: MouseEvent) {
  mx = e.clientX
  my = e.clientY
  if (dot.value) dot.value.style.transform = `translate(${mx}px, ${my}px)`
  follow()
}

function follow() {
  rx += (mx - rx) * 0.18
  ry += (my - ry) * 0.18
  if (ring.value) ring.value.style.transform = `translate(${rx}px, ${ry}px)`
  if (Math.abs(mx - rx) > 0.4 || Math.abs(my - ry) > 0.4) {
    raf = requestAnimationFrame(follow)
  }
}

function onOver(e: MouseEvent) {
  const target = e.target as HTMLElement
  hover.value = Boolean(
    target.closest(
      'a, button, [role="button"], input, textarea, select, label, .project-card, .service-card, .video-card'
    )
  )
}

onMounted(() => {
  if (!enabled) return
  document.body.classList.add('has-cursor')
  window.addEventListener('mousemove', onMove, { passive: true })
  document.addEventListener('mouseover', onOver, { passive: true })
})

onUnmounted(() => {
  if (!enabled) return
  document.body.classList.remove('has-cursor')
  window.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseover', onOver)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div v-if="enabled" class="cursor-glow" aria-hidden="true">
    <span ref="ring" class="cursor-ring" :class="{ 'is-hover': hover }"></span>
    <span ref="dot" class="cursor-dot" :class="{ 'is-hover': hover }"></span>
  </div>
</template>

<style scoped>
.cursor-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 3002;
}

.cursor-dot,
.cursor-ring {
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform, scale;
}

.cursor-dot {
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--sun);
  box-shadow: 0 0 12px rgba(255, 172, 30, 0.6);
  transition: scale 0.25s ease;
}

.cursor-ring {
  width: 38px;
  height: 38px;
  margin: -19px;
  border-radius: 50%;
  border: 1.5px solid var(--sun-deep);
  transition: scale 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.cursor-ring.is-hover {
  scale: 1.55;
  border-color: var(--sun);
  background: rgba(255, 172, 30, 0.1);
}

.cursor-dot.is-hover {
  scale: 0.55;
}
</style>
