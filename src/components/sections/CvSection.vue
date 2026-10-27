<script setup lang="ts">
import { site } from '../../data/site'
import cvUrl from '../../assets/images/Curriculum Vitae CV Sandy Abarca (1).pdf'
import FloatingObject from '../decor/FloatingObject.vue'
</script>

<template>
  <section id="hoja-de-vida" class="section">
    <!-- Carrete flotante -->
    <FloatingObject type="reel" class="is-cv-reel" />

    <div class="container">
      <div class="section-head" v-reveal>
        <span class="num">04</span>
        <span class="kicker">Hoja de vida</span>
        <span class="rule"></span>
      </div>

      <div class="row g-5 align-items-center">
        <div class="col-lg-7">
          <h2 class="section-title" v-reveal="60">
            Mi <em>experiencia</em> en una página
          </h2>
          <p class="lead" v-reveal="120">
            Formación, habilidades y trayectoria en fotografía, audiovisual y diseño.
            Descarga mi CV para conocer todos los detalles.
          </p>
          <div v-reveal="180">
            <a class="btn-solid" :href="cvUrl" download="CV Sandy Abarca.pdf">
              Descargar CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="cv-card pattern-bg" v-reveal="150">
            <p class="hand cv-hand">curriculum vitae ✳</p>
            <h3>{{ site.name }}</h3>
            <p class="cv-role">{{ site.role }}</p>
            <ul>
              <li>Estudiante de Ciencias de la Comunicación — Universidad Don Bosco</li>
              <li>Fotografía · Audiovisual · Diseño</li>
              <li>Adobe Photoshop · Illustrator · Lightroom · InDesign · Premiere · Audition</li>
            </ul>
            <a class="btn-outline" :href="cvUrl" target="_blank" rel="noopener noreferrer">
              Ver PDF ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
