<script setup lang="ts">
import { computed, ref } from 'vue'
import { categories, projects } from '../../data/projects'
import ProjectCard from '../portfolio/ProjectCard.vue'
import WaveDivider from '../layout/WaveDivider.vue'

const activeCategory = ref<(typeof categories)[number]>('Todos')

const filteredProjects = computed(() =>
  activeCategory.value === 'Todos'
    ? projects
    : projects.filter((project) => project.category === activeCategory.value)
)
</script>

<template>
  <section id="portafolio" class="section section-soft">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="num">03</span>
        <span class="kicker">Portafolio</span>
        <span class="rule"></span>
      </div>

      <h2 class="section-title" v-reveal="60">Trabajos <em>seleccionados</em></h2>
      <p class="hand" v-reveal="100">con arena entre los dedos ✳</p>

      <div class="pills-row" role="group" aria-label="Filtrar proyectos" v-reveal="120">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="pill"
          :class="{ 'is-active': activeCategory === category }"
          :aria-pressed="activeCategory === category"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="row g-4">
        <div
          v-for="(project, i) in filteredProjects"
          :key="project.id"
          class="col-sm-6 col-lg-4"
          v-reveal="80 + (i % 3) * 90"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

      <p class="projects-count">
        Mostrando <strong>{{ filteredProjects.length }}</strong> de {{ projects.length }} proyectos
      </p>
    </div>

    <!-- Ola hacia la sección de contacto -->
    <WaveDivider front="var(--bg)" back="rgba(120, 192, 230, 0.5)" duration="20s" />
  </section>
</template>
