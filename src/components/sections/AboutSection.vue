<script setup lang="ts">
import { site } from '../../data/site'
import { img } from '../../utils/assets'
</script>

<template>
  <section id="sobre-mi" class="section section-soft">
    <span class="ghost-word" aria-hidden="true">SA</span>

    <div class="container position-relative">
      <div class="section-head" v-reveal>
        <span class="num">01</span>
        <span class="kicker">{{ site.about.kicker }}</span>
        <span class="rule"></span>
      </div>

      <div class="row g-5 align-items-start">
        <div class="col-lg-6 about-copy">
          <h2 class="section-title" v-reveal="60">
            {{ site.about.headingLine1 }} <em>{{ site.about.headingAccent }}</em>
          </h2>
          <p class="hand" v-reveal="100">siempre cerca del mar ✳</p>
          <p class="lead" v-reveal="120">{{ site.about.lead }}</p>

          <p v-for="(paragraph, i) in site.about.paragraphs" :key="i" v-reveal="140 + i * 60">
            {{ paragraph }}
          </p>

          <div class="about-stats" v-reveal="200">
            <div v-for="stat in site.about.stats" :key="stat.label">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>

          <div v-reveal="260">
            <span v-for="skill in site.about.skills" :key="skill" class="skill-chip">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="col-lg-6">
          <figure class="about-figure" v-reveal="150">
            <img
              :src="img('images/studio.svg')"
              alt="Ilustración de ejemplo del estudio de diseño de Sandy"
              width="900"
              height="700"
              loading="lazy"
            />
            <figcaption>{{ site.about.figureCaption }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
