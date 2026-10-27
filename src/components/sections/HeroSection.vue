<script setup lang="ts">
import { computed } from 'vue'
import { site } from '../../data/site'
import WaveDivider from '../layout/WaveDivider.vue'
import logoUrl from '../../assets/images/Logo.png'

const marqueeItems = [
  'Fotografía',
  'Audiovisual',
  'Diseño',
  'Productora Multimedia',
  'Retrato',
  'Video marca',
]

// Contenido duplicado para que la cinta se mueva sin cortes
const marqueeLoop = computed(() => [...marqueeItems, ...marqueeItems])
</script>

<template>
  <section id="inicio" class="section section-hero">
    <!-- Nubes a la deriva -->
    <div class="clouds" aria-hidden="true">
      <svg class="cloud c1" viewBox="0 0 200 70">
        <path
          d="M35 55 a22 22 0 0 1 0-44 a28 28 0 0 1 54-9 a20 20 0 0 1 33 11 a22 22 0 0 1 0 42 Z"
        />
      </svg>
      <svg class="cloud c2" viewBox="0 0 200 70">
        <path
          d="M35 55 a22 22 0 0 1 0-44 a28 28 0 0 1 54-9 a20 20 0 0 1 33 11 a22 22 0 0 1 0 42 Z"
        />
      </svg>
      <svg class="cloud c3" viewBox="0 0 200 70">
        <path
          d="M35 55 a22 22 0 0 1 0-44 a28 28 0 0 1 54-9 a20 20 0 0 1 33 11 a22 22 0 0 1 0 42 Z"
        />
      </svg>
    </div>

    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <span class="hero-kicker">{{ site.hero.kicker }}</span>
          <br>  
          <!-- Logo sobre fondo oceánico con patrón -->
          <div class="hero-logo-card pattern-bg" v-reveal="80">
            <img class="hero-logo" :src="logoUrl" alt="Logo de Sandy Abarca" />
          </div>

          <p class="hero-sub">{{ site.hero.subtitle }}</p>

          <div class="d-flex flex-wrap gap-3">
            <a class="btn-solid" :href="site.hero.primaryCta.href">
              {{ site.hero.primaryCta.label }}
              <span aria-hidden="true">↓</span>
            </a>
            <a class="btn-outline" :href="site.hero.secondaryCta.href">
              {{ site.hero.secondaryCta.label }}
            </a>
          </div>
        </div>

        <div class="col-lg-6">
          <figure class="hero-video-figure" v-reveal="150">
            <span class="hand-note" aria-hidden="true">¡hola! soy Sandy ✳</span>

            <!-- Video de presentación (se activa cuando envíen el archivo) -->
            <div class="video-card pattern-bg" aria-hidden="true">
              <span class="video-rec">
                <span class="rec-dot"></span>
                REC
              </span>
              <span class="play-badge">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </div>
            <figcaption class="video-caption">{{ site.hero.videoNote }}</figcaption>

            <!-- Diafragma giratorio -->
            <div class="hero-stamp" aria-hidden="true">
              <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path
                    id="stamp-circle"
                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  />
                </defs>
                <g fill="#ffac1e">
                  <path d="M60 60 L86 44 L82 78 Z" />
                  <path d="M60 60 L86 44 L82 78 Z" transform="rotate(45 60 60)" />
                  <path d="M60 60 L86 44 L82 78 Z" transform="rotate(90 60 60)" />
                  <path d="M60 60 L86 44 L82 78 Z" transform="rotate(135 60 60)" />
                  <path d="M60 60 L86 44 L82 78 Z" transform="rotate(180 60 60)" />
                  <path d="M60 60 L86 44 L82 78 Z" transform="rotate(225 60 60)" />
                  <path d="M60 60 L86 44 L82 78 Z" transform="rotate(270 60 60)" />
                  <path d="M60 60 L86 44 L82 78 Z" transform="rotate(315 60 60)" />
                </g>
                <circle
                  cx="60"
                  cy="60"
                  r="17"
                  fill="none"
                  stroke="#0f3c65"
                  stroke-width="4"
                />
                <text
                  font-family="Archivo, sans-serif"
                  font-size="11"
                  font-weight="700"
                  letter-spacing="1.6"
                  fill="#0f3c65"
                >
                  <textPath href="#stamp-circle" textLength="276">
                    SANDY ABARCA ✳ PRODUCTORA MULTIMEDIA ✳ 2026
                  </textPath>
                </text>
                <path
                  d="M60 42 L62 50 L70 52 L62 54 L60 62 L58 54 L50 52 L58 50 Z"
                  fill="#fff2bb"
                />
              </svg>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!-- Tira de película -->
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="(item, i) in marqueeLoop" :key="i">{{ item }}</span>
      </div>
    </div>

    <!-- Ola hacia la siguiente sección -->
    <WaveDivider front="var(--bg-soft)" back="rgba(120, 192, 230, 0.5)" duration="20s" />
  </section>
</template>
