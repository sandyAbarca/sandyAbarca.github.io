<script setup lang="ts">
import { programs, services } from '../../data/services'
</script>

<template>
  <section id="servicios" class="section">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="num">02</span>
        <span class="kicker">Servicios y áreas</span>
        <span class="rule"></span>
      </div>

      <h2 class="section-title" v-reveal="60">Lo que hago <em>mejor</em></h2>
      <p class="hand" v-reveal="100">hecho con cariño ✳</p>

      <div class="row g-4">
        <div
          v-for="(service, i) in services"
          :key="service.id"
          class="col-md-4"
          v-reveal="100 + i * 90"
        >
          <article class="service-card" v-glow v-tilt>
            <span class="num" aria-hidden="true">0{{ service.id }}</span>

            <span class="service-icon" aria-hidden="true">
              <!-- Fotografía: cámara -->
              <svg
                v-if="service.icon === 'fotografia'"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>

              <!-- Audiovisual: claqueta -->
              <svg
                v-else-if="service.icon === 'video'"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
                <path d="m6.2 5.3 3.1 3.9" />
                <path d="m12.4 3.4 3.1 4" />
                <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
              </svg>

              <!-- Diseño: pluma -->
              <svg
                v-else
                width="26"
                height="26"
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
            </span>

            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>
      </div>

      <div class="programs-block" v-reveal="200">
        <p class="hand">manejo de programas ✳</p>
        <div class="d-flex flex-wrap">
          <span v-for="program in programs" :key="program" class="skill-chip">
            {{ program }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programs-block {
  margin-top: 3.5rem;
}
</style>
