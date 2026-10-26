<script setup lang="ts">
import { services } from '../../data/services'
</script>

<template>
  <section id="servicios" class="section">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="num">02</span>
        <span class="kicker">Servicios</span>
        <span class="rule"></span>
      </div>

      <h2 class="section-title" v-reveal="60">Lo que hago <em>mejor</em></h2>
      <p class="hand" v-reveal="100">hecho con cariño ✳</p>

      <div class="row g-4">
        <div
          v-for="(service, i) in services"
          :key="service.id"
          class="col-md-6"
          v-reveal="100 + i * 90"
        >
          <article class="service-card">
            <span class="num" aria-hidden="true">0{{ service.id }}</span>

            <span class="service-icon" aria-hidden="true">
              <!-- Branding: pluma -->
              <svg
                v-if="service.icon === 'branding'"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>

              <!-- Editorial: libro abierto -->
              <svg
                v-else-if="service.icon === 'editorial'"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
                <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
              </svg>

              <!-- Ilustración: hoja -->
              <svg
                v-else-if="service.icon === 'ilustracion'"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>

              <!-- Redes: corazón de like -->
              <svg
                v-else
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                />
              </svg>
            </span>

            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>

            <div>
              <span v-for="tag in service.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
