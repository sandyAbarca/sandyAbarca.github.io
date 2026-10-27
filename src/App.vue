<script setup lang="ts">
import SiteIntro from './components/layout/SiteIntro.vue'
import ScrollProgress from './components/layout/ScrollProgress.vue'
import CursorGlow from './components/layout/CursorGlow.vue'
import SiteNavbar from './components/layout/SiteNavbar.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import PortfolioSection from './components/sections/PortfolioSection.vue'
import CvSection from './components/sections/CvSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <SiteIntro />
  <ScrollProgress />
  <CursorGlow />
  <SiteNavbar />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <CvSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
