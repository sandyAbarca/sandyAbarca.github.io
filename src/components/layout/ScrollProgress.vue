<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const bar = ref<HTMLElement | null>(null)
let raf = 0

function update() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    const root = document.documentElement
    const max = root.scrollHeight - root.clientHeight
    const progress = max > 0 ? window.scrollY / max : 0
    if (bar.value) bar.value.style.transform = `scaleX(${progress})`
  })
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
})

onUnmounted(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div class="scroll-progress" aria-hidden="true">
    <span ref="bar" class="scroll-progress-bar"></span>
  </div>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 1100;
  pointer-events: none;
}

.scroll-progress-bar {
  display: block;
  height: 100%;
  width: 100%;
  transform-origin: left;
  transform: scaleX(0);
  background: linear-gradient(90deg, var(--sun), #ffc34d, var(--sun-deep));
}
</style>
