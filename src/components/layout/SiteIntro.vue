<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import logoUrl from '../../assets/images/Logo.png'

const visible = ref(true)
const leaving = ref(false)

let timerLeave = 0
let timerHide = 0

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Sin intro solo si el usuario prefiere menos movimiento
  if (reduced) {
    visible.value = false
    return
  }

  // Se reproduce en cada carga y recarga de la página (~2 s en total)
  timerLeave = window.setTimeout(() => {
    leaving.value = true
  }, 1600)

  timerHide = window.setTimeout(() => {
    visible.value = false
  }, 2100)
})

onUnmounted(() => {
  clearTimeout(timerLeave)
  clearTimeout(timerHide)
})
</script>

<template>
  <div v-if="visible" class="site-intro pattern-bg" :class="{ 'is-leaving': leaving }" aria-hidden="true">
    <div class="intro-center">
      <img class="intro-logo" :src="logoUrl" alt="" />
      <span class="intro-sun">
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="18" fill="#ffac1e" />
          <g stroke="#ffac1e" stroke-width="5" stroke-linecap="round">
            <path d="M32 4 V 12" />
            <path d="M32 52 V 60" />
            <path d="M4 32 H 12" />
            <path d="M52 32 H 60" />
          </g>
        </svg>
      </span>
    </div>

    <!-- Olas que suben y cubren la pantalla -->
    <div class="intro-waves">
      <svg class="wave w1" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,180 C240,80 480,80 720,180 C960,280 1200,280 1440,180 L1440,320 L0,320 Z" fill="#78c0e6" />
      </svg>
      <svg class="wave w2" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,140 C240,240 480,240 720,140 C960,40 1200,40 1440,140 L1440,320 L0,320 Z" fill="#4a9ccb" />
      </svg>
      <svg class="wave w3" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,190 C240,90 480,90 720,190 C960,290 1200,290 1440,190 L1440,320 L0,320 Z" fill="#0f3c65" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.site-intro {
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: linear-gradient(160deg, var(--ocean) 0%, #0b2c4a 100%);
  overflow: hidden;
  transition: opacity 0.5s ease;
}

.site-intro.is-leaving {
  opacity: 0;
  pointer-events: none;
}

.intro-center {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
}

.intro-logo {
  height: clamp(70px, 12vw, 150px);
  width: auto;
  max-width: 70vw;
  animation: logo-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both 0.1s;
}

.intro-sun {
  width: 52px;
  height: 52px;
  animation: sun-spin 6s linear infinite;
}

.intro-sun svg {
  width: 100%;
  height: 100%;
}

@keyframes logo-in {
  from {
    opacity: 0;
    transform: translateY(22px) scale(0.94);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes sun-spin {
  to {
    transform: rotate(360deg);
  }
}

.intro-waves {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.intro-waves .wave {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 48vh;
  transform: translateY(135%);
  animation: wave-rise 1.25s cubic-bezier(0.45, 0.05, 0.35, 1) forwards;
}

.intro-waves .wave.w1 {
  animation-delay: 0.15s;
  opacity: 0.55;
}

.intro-waves .wave.w2 {
  animation-delay: 0.38s;
  opacity: 0.8;
}

.intro-waves .wave.w3 {
  animation-delay: 0.62s;
}

@keyframes wave-rise {
  to {
    transform: translateY(-150%);
  }
}
</style>
