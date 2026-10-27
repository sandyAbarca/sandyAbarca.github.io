<script setup lang="ts">
import { computed } from 'vue'
import { mainProjects, otherProjects } from '../../data/projects'
import ProjectCard from '../portfolio/ProjectCard.vue'
import WaveDivider from '../layout/WaveDivider.vue'

const carousels = computed(() => mainProjects.filter((p) => p.kind === 'carousel'))
const mediaCards = computed(() => mainProjects.filter((p) => p.kind !== 'carousel'))
</script>

<template>
  <section id="proyectos" class="section section-soft">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="num">03</span>
        <span class="kicker">Proyectos</span>
        <span class="rule"></span>
      </div>

      <h2 class="section-title" v-reveal="60">Trabajos <em>destacados</em></h2>
      <p class="hand" v-reveal="100">hecho con cariño ✳</p>

      <!-- Carruseles de fotografía -->
      <div class="row g-4">
        <div v-for="project in carousels" :key="project.id" class="col-md-6" v-reveal="120">
          <ProjectCard :project="project" />
        </div>
      </div>

      <!-- Videos y diseño -->
      <div class="row g-4 mt-1">
        <div
          v-for="(project, i) in mediaCards"
          :key="project.id"
          class="col-md-4"
          v-reveal="140 + i * 90"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

      <!-- Otros proyectos -->
      <div class="section-head others-head" v-reveal>
        <span class="num">✦</span>
        <span class="kicker">Otros proyectos</span>
        <span class="rule"></span>
      </div>

      <p class="hand" v-reveal="100">un poquito más de mí ✳</p>

      <div class="row g-4">
        <div
          v-for="(project, i) in otherProjects"
          :key="project.id"
          class="col-md-4"
          v-reveal="120 + i * 90"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>

    <!-- Ola hacia la siguiente sección -->
    <WaveDivider front="var(--bg)" back="rgba(120, 192, 230, 0.5)" duration="20s" />
  </section>
</template>

<style scoped>
.others-head {
  margin-top: 5.5rem;
}
</style>
