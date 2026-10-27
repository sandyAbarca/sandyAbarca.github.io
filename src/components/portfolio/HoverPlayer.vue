<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Project } from '../../data/projects'

const props = defineProps<{ project: Project }>()

const playing = ref(false)
const videoEl = ref<HTMLVideoElement | null>(null)

const embedSrc = computed(() => {
  switch (props.project.kind) {
    case 'youtube':
      return `https://www.youtube-nocookie.com/embed/${props.project.embedId}?autoplay=1&mute=1&rel=0&modestbranding=1`
    case 'drive':
      return `${props.project.embedUrl}&autoplay=1`
    case 'soundcloud':
      return `https://w.soundcloud.com/player/?url=${encodeURIComponent(
        props.project.embedUrl ?? ''
      )}&auto_play=true&color=%23ffac1e&visual=true&hide_related=true&show_comments=false`
    default:
      return ''
  }
})

const isLocalVideo = computed(() => props.project.kind === 'video' && Boolean(props.project.src))
const canPlay = computed(() => isLocalVideo.value || Boolean(embedSrc.value))

function start() {
  if (!canPlay.value) return
  playing.value = true
  if (isLocalVideo.value) {
    videoEl.value?.play().catch(() => {})
  }
}

function stop() {
  playing.value = false
  if (isLocalVideo.value) {
    videoEl.value?.pause()
    if (videoEl.value) videoEl.value.currentTime = 0
  }
}

function toggle() {
  if (playing.value) stop()
  else start()
}
</script>

<template>
  <div
    class="hover-player"
    :class="{ 'is-playing': playing }"
    role="button"
    tabindex="0"
    :aria-label="`Reproducir ${project.title}`"
    @mouseenter="start"
    @mouseleave="stop"
    @click="toggle"
    @keydown.enter="toggle"
  >
    <!-- Video local: se reproduce solo al pasar el cursor -->
    <video
      v-if="isLocalVideo"
      ref="videoEl"
      class="embed-video"
      :src="project.src"
      :poster="project.cover"
      muted
      playsinline
      loop
      preload="none"
    ></video>

    <!-- Embeds: iframe con autoplay al hacer hover -->
    <iframe
      v-else-if="playing && embedSrc"
      class="embed-frame"
      :src="embedSrc"
      :title="`Reproductor de ${project.title}`"
      allow="autoplay; fullscreen; encrypted-media"
      allowfullscreen
    ></iframe>

    <!-- Portada -->
    <div v-if="!playing" class="player-cover">
      <img
        v-if="project.cover"
        :src="project.cover"
        :alt="project.title"
        loading="lazy"
      />
      <div v-else class="cover-placeholder">
        <svg
          v-if="project.kind === 'soundcloud'"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
        <svg
          v-else-if="project.kind === 'youtube' || project.kind === 'drive'"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <path d="m10 8 4 3-4 3Z" />
        </svg>
        <svg
          v-else
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
        <span>{{ project.comingSoon ? 'próximamente' : project.title }}</span>
      </div>

      <span v-if="!project.comingSoon" class="play-badge" aria-hidden="true">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5.14v13.72L19 12 8 5.14z" />
        </svg>
      </span>
    </div>
  </div>
</template>
