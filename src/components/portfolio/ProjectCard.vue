<script setup lang="ts">
import type { Project } from '../../data/projects'
import { img } from '../../utils/assets'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-media">
      <img
        :src="img(project.image)"
        :alt="`Proyecto ${project.title} — ${project.category}`"
        loading="lazy"
        width="1200"
        height="900"
      />
      <span class="corner-frame" aria-hidden="true"></span>
      <span class="project-badge category">{{ project.category }}</span>
      <span class="project-badge year">{{ project.year }}</span>
    </div>

    <div class="project-body">
      <h3>
        {{ project.title }}
        <span class="arrow" aria-hidden="true">↗</span>
      </h3>
      <p>{{ project.description }}</p>
      <p class="project-exif">{{ project.exif }}</p>
    </div>
  </article>
</template>
