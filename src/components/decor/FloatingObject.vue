<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Tipo de objeto: cámara, claqueta, luz de estudio o carrete */
    type: 'camera' | 'clapper' | 'light' | 'reel'
    /** Velocidad del parallax (px por px de scroll) */
    speed?: number
  }>(),
  { speed: 0.16 }
)

const el = ref<HTMLElement | null>(null)
let reduced = false
let raf = 0

function onScroll() {
  if (reduced || !el.value) return
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    el.value!.style.setProperty('--py', `${window.scrollY * props.speed}px`)
  })
}

// Inclinación sutil hacia el cursor
function onMove(e: MouseEvent) {
  if (reduced || !el.value) return
  const rect = el.value.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width - 0.5
  const py = (e.clientY - rect.top) / rect.height - 0.5
  el.value.style.setProperty('--rx', `${(-py * 9).toFixed(2)}deg`)
  el.value.style.setProperty('--ry', `${(px * 9).toFixed(2)}deg`)
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return
  window.addEventListener('scroll', onScroll, { passive: true })
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', onMove, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div class="floating-obj" ref="el" aria-hidden="true">
    <div class="obj-parallax">
      <div class="obj-wobble" :class="{ 'is-spin': type === 'reel' }">
        <!-- 📷 Cámara -->
        <svg v-if="type === 'camera'" class="obj-svg" viewBox="0 0 120 90">
          <defs>
            <linearGradient id="camBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#1d4e7c" />
              <stop offset="1" stop-color="#0b2c4a" />
            </linearGradient>
            <linearGradient id="camLens" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#ffd35c" />
              <stop offset="1" stop-color="#ffac1e" />
            </linearGradient>
          </defs>
          <path d="M22 12 Q60 -14 98 12" stroke="#0f3c65" stroke-width="7" fill="none" stroke-linecap="round" />
          <rect x="42" y="6" width="34" height="14" rx="6" fill="url(#camBody)" />
          <rect x="49" y="2" width="8" height="8" rx="3" fill="#ffac1e" />
          <rect x="14" y="16" width="92" height="56" rx="14" fill="url(#camBody)" stroke="#12375c" stroke-width="2" />
          <rect x="21" y="21" width="78" height="9" rx="4.5" fill="#ffffff" opacity="0.09" />
          <circle cx="46" cy="44" r="19" fill="url(#camLens)" />
          <circle cx="46" cy="44" r="13" fill="#102f4c" />
          <circle cx="41" cy="39" r="4" fill="#fff2bb" opacity="0.9" />
          <circle cx="88" cy="32" r="6" fill="#78c0e6" />
          <circle cx="29" cy="32" r="3.5" fill="#ffac1e" />
        </svg>

        <!-- 🎬 Claqueta -->
        <svg v-else-if="type === 'clapper'" class="obj-svg" viewBox="0 0 120 100">
          <defs>
            <linearGradient id="clapTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#1d4e7c" />
              <stop offset="1" stop-color="#0b2c4a" />
            </linearGradient>
            <linearGradient id="clapSlate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#0f3c65" />
              <stop offset="1" stop-color="#0b2c4a" />
            </linearGradient>
            <clipPath id="clapTopClip">
              <rect x="14" y="6" width="92" height="26" rx="6" />
            </clipPath>
          </defs>
          <g transform="rotate(-9 60 30)">
            <rect x="14" y="6" width="92" height="26" rx="6" fill="url(#clapTop)" />
            <g clip-path="url(#clapTopClip)">
              <rect x="-14" y="6" width="30" height="26" fill="#fff2bb" transform="skewX(-24)" />
              <rect x="24" y="6" width="30" height="26" fill="#fff2bb" transform="skewX(-24)" />
              <rect x="62" y="6" width="30" height="26" fill="#fff2bb" transform="skewX(-24)" />
              <rect x="100" y="6" width="30" height="26" fill="#fff2bb" transform="skewX(-24)" />
            </g>
          </g>
          <circle cx="26" cy="36" r="4.5" fill="#ffac1e" />
          <circle cx="94" cy="32" r="4.5" fill="#ffac1e" />
          <rect x="14" y="42" width="92" height="46" rx="8" fill="url(#clapSlate)" />
          <rect x="20" y="46" width="80" height="8" rx="4" fill="#ffffff" opacity="0.08" />
          <path d="M72 48 L88 64" stroke="#ffac1e" stroke-width="5" stroke-linecap="round" />
          <path d="M34 80 H58" stroke="#78c0e6" stroke-width="4" stroke-linecap="round" opacity="0.8" />
        </svg>

        <!-- 💡 Luz de estudio -->
        <svg v-else-if="type === 'light'" class="obj-svg" viewBox="0 0 100 130">
          <defs>
            <linearGradient id="lightHead" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#0f3c65" />
              <stop offset="1" stop-color="#0b2c4a" />
            </linearGradient>
            <radialGradient id="lightGlow" cx="50%" cy="45%" r="55%">
              <stop offset="0" stop-color="#ffac1e" stop-opacity="0.4" />
              <stop offset="1" stop-color="#ffac1e" stop-opacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="42" r="46" fill="url(#lightGlow)" />
          <rect x="16" y="16" width="68" height="52" rx="10" fill="url(#lightHead)" stroke="#12375c" stroke-width="2" />
          <rect x="24" y="24" width="52" height="36" rx="6" fill="#fffce9" />
          <rect x="24" y="24" width="52" height="9" rx="4.5" fill="#ffffff" />
          <path d="M36 40 L50 33 L64 40" stroke="#78c0e6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <rect x="44" y="68" width="12" height="48" rx="5" fill="#0f3c65" />
          <rect x="30" y="116" width="40" height="9" rx="4.5" fill="#0f3c65" />
        </svg>

        <!-- 🎞️ Carrete -->
        <svg v-else class="obj-svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="reelBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#1d4e7c" />
              <stop offset="1" stop-color="#0b2c4a" />
            </linearGradient>
          </defs>
          <path d="M50 92 V80 Q50 64 64 60 H96" stroke="#0f3c65" stroke-width="9" fill="none" stroke-linecap="round" />
          <circle cx="50" cy="50" r="38" fill="url(#reelBody)" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="#12375c" stroke-width="2" />
          <g fill="#fff2bb">
            <circle cx="76" cy="50" r="5.5" />
            <circle cx="63" cy="27" r="5.5" />
            <circle cx="37" cy="27" r="5.5" />
            <circle cx="24" cy="50" r="5.5" />
            <circle cx="37" cy="73" r="5.5" />
            <circle cx="63" cy="73" r="5.5" />
          </g>
          <circle cx="50" cy="50" r="16" fill="#ffac1e" />
          <circle cx="50" cy="50" r="6" fill="#0b2c4a" />
          <path d="M22 22 A40 40 0 0 1 58 12" stroke="#ffffff" opacity="0.14" fill="none" stroke-width="6" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.floating-obj {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  --py: 0px;
  --rx: 0deg;
  --ry: 0deg;
  animation: obj-bob 7s ease-in-out infinite;
}

.obj-parallax {
  transform: translateY(var(--py)) perspective(700px) rotateX(var(--rx)) rotateY(var(--ry));
  will-change: transform;
}

.obj-wobble {
  animation: obj-wobble 9s ease-in-out infinite;
}

.obj-wobble.is-spin {
  animation: obj-spin 16s linear infinite;
}

.obj-svg {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 24px rgba(15, 60, 101, 0.28));
}

@keyframes obj-bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}

@keyframes obj-wobble {
  0%,
  100% {
    transform: rotate(-7deg);
  }
  50% {
    transform: rotate(7deg);
  }
}

@keyframes obj-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 767.98px) {
  .floating-obj {
    display: none;
  }
}
</style>
