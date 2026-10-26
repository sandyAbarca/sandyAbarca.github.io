<script setup lang="ts">
import { computed } from 'vue'
import { site } from '../../data/site'
import { img } from '../../utils/assets'

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
                </defs>
                <circle cx="60" cy="60" r="58" :fill="`var(--accent)`" />
                <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(255,246,234,.45)" stroke-width="1" stroke-dasharray="2 4" />
                <text
                  font-family="Archivo, sans-serif"
                  font-size="12"
                  font-weight="600"
                  letter-spacing="2"
                  fill="#fff6ea"
                >
                  <textPath href="#stamp-circle" textLength="278">
                    PORTAFOLIO ✳ 2026 ✳ DISEÑO GRÁFICO
                  </textPath>
                </text>
                <path
                  d="M60 44 L63 56 L75 60 L63 64 L60 76 L57 64 L45 60 L57 56 Z"
                  fill="#fff6ea"
                />
              </svg>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span v-for="(item, i) in marqueeLoop" :key="i">{{ item }}</span>
      </div>
    </div>
  </section>
</template>
