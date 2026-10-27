<script setup lang="ts">
import { site } from '../../data/site'
import WaveDivider from './WaveDivider.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div style="background: var(--bg)">
      <WaveDivider
        front="var(--ocean)"
        back="rgba(120, 192, 230, 0.55)"
        duration="22s"
      />
    </div>

    <div class="container">
      <p class="footer-wordmark" aria-hidden="true">
        Sandy <em>Abarca</em><span class="text-accent">.</span>
      </p>

      <nav class="footer-links" aria-label="Pie de página">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#hoja-de-vida">Hoja de vida</a>
        <a href="#contacto">Contáctame</a>
      </nav>

      <div class="footer-bottom">
        <span>© {{ year }} {{ site.name }} — {{ site.role }}</span>
        <span>
          Hecho con <span class="heart">♥</span> a la orilla del mar · Vue&nbsp;3 + Bootstrap&nbsp;5
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.text-accent {
  color: var(--sun);
}
</style>
