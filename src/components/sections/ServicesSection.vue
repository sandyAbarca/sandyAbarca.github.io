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
              <!-- Fotografía: cámara -->
              <svg
                v-if="service.icon === 'fotografia'"
                width="24"
                height="24"
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

              <!-- Producción: claqueta -->
              <svg
                v-else-if="service.icon === 'video'"
                width="24"
                height="24"
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

              <!-- Edición: monitor con play y timeline -->
              <svg
                v-else-if="service.icon === 'edicion'"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="4" width="20" height="14" rx="2" />
                <path d="m10 8 4 3-4 3Z" />
                <path d="M6 21h4" />
                <path d="M14 21h4" />
              </svg>

              <!-- Dirección de arte: paleta -->
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
                <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
                <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
                <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
                <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
                <path
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
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
