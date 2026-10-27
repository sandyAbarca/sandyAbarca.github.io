<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '../../data/projects'
import MediaCarousel from './MediaCarousel.vue'
import HoverPlayer from './HoverPlayer.vue'

const props = defineProps<{ project: Project }>()

const isCarousel = computed(() => props.project.kind === 'carousel')
const usesPlayer = computed(() =>
  ['video', 'youtube', 'drive', 'soundcloud'].includes(props.project.kind)
)
</script>

<template>
  <article class="project-card" v-glow v-tilt>
    <div class="project-media" :class="`is-${project.kind}`">
      <MediaCarousel v-if="isCarousel" :project="project" />
      <HoverPlayer v-else-if="usesPlayer" :project="project" />
      <div v-else class="media-design-placeholder" aria-hidden="true">
        <svg
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="m6 8 4 3-4 3Z" opacity="0" />
          <circle cx="15.5" cy="8" r="0.5" fill="currentColor" />
          <circle cx="18" cy="10" r="0.5" fill="currentColor" />
          <circle cx="6.5" cy="8" r="0.5" fill="currentColor" />
        </svg>
        <span>interfaz próximamente</span>
      </div>

      <span class="project-badge category">{{ project.category }}</span>
      <span v-if="project.comingSoon" class="project-badge soon">próximamente</span>
    </div>

    <div class="project-body">
      <h3>
        {{ project.title }}
        <span class="arrow" aria-hidden="true">↗</span>
      </h3>
      <p>{{ project.description }}</p>
      <p v-if="project.role" class="project-role">Rol · {{ project.role }}</p>
      <a
        v-if="project.externalUrl"
        class="btn-outline project-link"
        :href="project.externalUrl"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${project.externalLabel ?? 'Ver más'} (se abre en una pestaña nueva)`"
      >
        {{ project.externalLabel ?? 'Ver más' }} <span aria-hidden="true">↗</span>
      </a>
    </div>
  </article>
</template>
