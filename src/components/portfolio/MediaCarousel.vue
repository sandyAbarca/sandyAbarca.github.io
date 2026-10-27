<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Project } from '../../data/projects'

const props = defineProps<{ project: Project }>()

const slides = computed(() => props.project.slides ?? [])
const index = ref(0)

function prev() {
  index.value = (index.value - 1 + slides.value.length) % slides.value.length
}

function next() {
  index.value = (index.value + 1) % slides.value.length
}

// Deslizar con el dedo en móvil
let startX = 0
function onTouchStart(e: TouchEvent) {
  startX = e.touches[0].clientX
}
function onTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - startX
  if (dx > 45) prev()
  else if (dx < -45) next()
}
</script>

<template>
  <div
    class="media-carousel"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <div
      v-for="(slide, i) in slides"
      :key="i"
      class="slide"
      :class="{ 'is-active': i === index }"
    >
      <img
        v-if="slide.image"
        :src="slide.image"
        :alt="slide.label"
        loading="lazy"
        width="1200"
        height="900"
      />
      <div v-else class="slide-placeholder">
        <svg
          width="46"
          height="46"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
        <span>{{ slide.label }}</span>
        <small>foto próximamente</small>
      </div>
    </div>

    <span class="slide-count">{{ index + 1 }}/{{ slides.length }}</span>

    <button class="carousel-btn prev" type="button" aria-label="Foto anterior" @click="prev">
      ‹
    </button>
    <button class="carousel-btn next" type="button" aria-label="Foto siguiente" @click="next">
      ›
    </button>

    <div class="carousel-dots" role="tablist" aria-label="Fotos">
      <button
        v-for="(slide, i) in slides"
        :key="i"
        type="button"
        class="dot"
        :class="{ 'is-active': i === index }"
        :aria-label="`Ir a ${slide.label}`"
        @click="index = i"
      ></button>
    </div>
  </div>
</template>
