<script setup lang="ts">
import { site } from '../../data/site'
import retrato from '../../assets/images/foto retrato.png'
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

      <div class="row g-5 align-items-center">
        <div class="col-lg-6 about-copy">
          <h2 class="section-title" v-reveal="60">
            {{ site.about.headingLine1 }} <em>{{ site.about.headingAccent }}</em>
          </h2>
          <p class="hand" v-reveal="100">{{ site.about.handNote }}</p>

          <p v-for="(paragraph, i) in site.about.paragraphs" :key="i" v-reveal="140 + i * 60">
            {{ paragraph }}
          </p>
        </div>

        <div class="col-lg-6">
          <figure class="about-figure" v-reveal="150">
            <img
              :src="retrato"
              alt="Fotografía de Sandy Abarca"
              width="800"
              height="600"
              loading="lazy"
            />
            <figcaption>{{ site.about.figureCaption }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
