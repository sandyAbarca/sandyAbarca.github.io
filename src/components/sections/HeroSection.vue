<script setup lang="ts">
import { computed } from 'vue'
import { site } from '../../data/site'
import { img } from '../../utils/assets'
import WaveDivider from '../layout/WaveDivider.vue'

const marqueeItems = [
  'Branding',
  'Diseño editorial',
  'Ilustración',
  'Redes sociales',
  'Packaging',
  'Dirección de arte',
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
        <div class="col-lg-7">
          <span class="hero-kicker">{{ site.hero.kicker }}</span>
          <h1 class="hero-title">
            {{ site.hero.line1 }}<br />
            <em>{{ site.hero.accent }}</em> {{ site.hero.line2 }}
          </h1>
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

        <div class="col-lg-5">
          <figure class="hero-figure" v-reveal="150">
            <span class="hand-note" aria-hidden="true">¡hola! soy Sandy ✳</span>
            <span class="tape" aria-hidden="true"></span>
            <div class="hero-frame">
              <img
                :src="img('images/portrait.svg')"
                alt="Retrato de ejemplo de Sandy Abarca"
                width="800"
                height="1000"
              />
              <figcaption class="frame-caption">
                <span class="dot" aria-hidden="true"></span>
                <span>{{ site.name }}</span>
                <span>{{ site.role }}</span>
              </figcaption>
            </div>

            <div class="hero-stamp" aria-hidden="true">
              <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path
                    id="stamp-circle"
                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  />
                  <radialGradient id="sun-grad" cx="50%" cy="42%" r="72%">
                    <stop offset="0%" stop-color="#ffd35c" />
                    <stop offset="100%" stop-color="#ffac1e" />
                  </radialGradient>
                </defs>
                <g fill="#78c0e6">
                  <path d="M60 4 L67 24 L60 32 L53 24 Z" />
                  <path d="M60 4 L67 24 L60 32 L53 24 Z" transform="rotate(45 60 60)" />
                  <path d="M60 4 L67 24 L60 32 L53 24 Z" transform="rotate(90 60 60)" />
                  <path d="M60 4 L67 24 L60 32 L53 24 Z" transform="rotate(135 60 60)" />
                  <path d="M60 4 L67 24 L60 32 L53 24 Z" transform="rotate(180 60 60)" />
                  <path d="M60 4 L67 24 L60 32 L53 24 Z" transform="rotate(225 60 60)" />
                  <path d="M60 4 L67 24 L60 32 L53 24 Z" transform="rotate(270 60 60)" />
                  <path d="M60 4 L67 24 L60 32 L53 24 Z" transform="rotate(315 60 60)" />
                </g>
                <circle cx="60" cy="60" r="40" fill="url(#sun-grad)" />
                <circle
                  cx="60"
                  cy="60"
                  r="31"
                  fill="none"
                  stroke="rgba(15,60,101,.25)"
                  stroke-width="1"
                  stroke-dasharray="2 4"
                />
                <text
                  font-family="Archivo, sans-serif"
                  font-size="11"
                  font-weight="700"
                  letter-spacing="1.6"
                  fill="#0f3c65"
                >
                  <textPath href="#stamp-circle" textLength="278">
                    SOL ✳ MAR ✳ ARENA ✳ 2026
                  </textPath>
                </text>
                <path
                  d="M60 47 L62.5 55.5 L71 58 L62.5 60.5 L60 69 L57.5 60.5 L49 58 L57.5 55.5 Z"
                  fill="#fff2bb"
                />
              </svg>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!-- Línea de marea -->
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="(item, i) in marqueeLoop" :key="i">{{ item }}</span>
      </div>
    </div>

    <!-- Ola hacia la siguiente sección -->
    <WaveDivider front="var(--bg-soft)" back="rgba(120, 192, 230, 0.5)" duration="20s" />
  </section>
</template>
