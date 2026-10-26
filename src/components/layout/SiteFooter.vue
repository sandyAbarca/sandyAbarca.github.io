<script setup lang="ts">
import { site } from '../../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <p class="footer-wordmark" aria-hidden="true">
        Sandy <em>Abarca</em><span class="text-accent">.</span>
      </p>

      <nav class="footer-links" aria-label="Pie de página">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#servicios">Servicios</a>
        <a href="#portafolio">Portafolio</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div class="footer-bottom">
        <span>© {{ year }} {{ site.name }} — Diseñadora Gráfica</span>
        <span>
          Hecho con <span class="heart">♥</span> y Vue&nbsp;3 + Bootstrap&nbsp;5
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.text-accent {
  color: var(--accent);
}
</style>
