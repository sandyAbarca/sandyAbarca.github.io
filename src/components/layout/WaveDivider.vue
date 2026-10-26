<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Color de la ola frontal (relleno inferior) */
    front?: string
    /** Color de la espuma trasera */
    back?: string
    /** Duración del ciclo en segundos */
    duration?: string
  }>(),
  {
    front: 'var(--sky)',
    back: 'rgba(120, 192, 230, 0.4)',
    duration: '18s',
  }
)
</script>

<template>
  <div
    class="wave-divider"
    :style="{
      '--wave-front': front,
      '--wave-back': back,
      '--wave-dur': duration,
    }"
    aria-hidden="true"
  >
    <svg class="wave-back" viewBox="0 0 2880 90" preserveAspectRatio="none">
      <path
        d="M0,62 C240,14 480,14 720,62 C960,110 1200,110 1440,62 C1680,14 1920,14 2160,62 C2400,110 2640,110 2880,62 L2880,90 L0,90 Z"
      />
    </svg>
    <svg class="wave-front" viewBox="0 0 2880 90" preserveAspectRatio="none">
      <path
        d="M0,48 C240,4 480,4 720,48 C960,92 1200,92 1440,48 C1680,4 1920,4 2160,48 C2400,92 2640,92 2880,48 L2880,90 L0,90 Z"
      />
    </svg>
  </div>
</template>
