<script setup lang="ts">
import { site } from '../../data/site'

const bubbles = [
  { left: '6%', size: 16, dur: 12, delay: 0, sun: false },
  { left: '14%', size: 10, dur: 9, delay: -3, sun: true },
  { left: '24%', size: 22, dur: 14, delay: -6, sun: false },
  { left: '38%', size: 12, dur: 10, delay: -1, sun: false },
  { left: '52%', size: 18, dur: 13, delay: -8, sun: true },
  { left: '63%', size: 9, dur: 8, delay: -2, sun: false },
  { left: '74%', size: 20, dur: 15, delay: -5, sun: false },
  { left: '86%', size: 13, dur: 11, delay: -9, sun: true },
  { left: '93%', size: 17, dur: 12, delay: -4, sun: false },
]
</script>

<template>
  <section id="contacto" class="section section-contact">
    <!-- Burbujas marinas -->
    <div class="bubbles" aria-hidden="true">
      <span
        v-for="(bubble, i) in bubbles"
        :key="i"
        class="bubble"
        :class="{ 'is-sun': bubble.sun }"
        :style="{
          left: bubble.left,
          width: `${bubble.size}px`,
          height: `${bubble.size}px`,
          animationDuration: `${bubble.dur}s`,
          animationDelay: `${bubble.delay}s`,
        }"
      ></span>
    </div>

    <div class="container position-relative">
      <div class="section-head justify-content-center" v-reveal>
        <span class="num">04</span>
        <span class="kicker">{{ site.contact.kicker }}</span>
        <span class="rule"></span>
      </div>

      <h2 class="contact-title" v-reveal="60">
        {{ site.contact.headingLine1 }} <em>{{ site.contact.headingAccent }}</em>
        {{ site.contact.headingLine2 }}
      </h2>

      <p class="contact-text" v-reveal="120">{{ site.contact.text }}</p>

      <div v-reveal="180">
        <a class="contact-email" :href="`mailto:${site.email}`">{{ site.email }}</a>
        <p class="contact-note">{{ site.contact.note }}</p>
      </div>

      <div class="social-row" v-reveal="240">
        <a
          v-for="social in site.socials"
          :key="social.label"
          class="social-link"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${social.label} de Sandy Abarca (se abre en una pestaña nueva)`"
        >
          <svg
            v-if="social.label === 'Instagram'"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>

          <svg
            v-else-if="social.label === 'Behance'"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          >
            <path d="M2 7h5.5c2 0 3.5 1.2 3.5 3s-1.5 3-3.5 3H2zM2 13h6c2 0 3.5 1.3 3.5 3.2S10 19.5 8 19.5H2z" />
            <path d="M14 9h7" />
            <path d="M14.5 15c1.5 1.5 3.5 3.2 6 3.2 2.6 0 3.8-1.7 3.8-3.4 0-2.3-2.6-3.1-4.5-3.6-.9-.2-1.6-.5-1.6-1.4 0-1 .8-1.5 1.8-1.5 1.6 0 2.6.8 2.6.8" />
          </svg>

          <svg
            v-else
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v1.5" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>

          <span>{{ social.label }}</span>
          <span class="handle">{{ social.handle }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
