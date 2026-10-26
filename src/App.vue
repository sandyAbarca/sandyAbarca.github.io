<script setup lang="ts">
import SiteNavbar from './components/layout/SiteNavbar.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import PortfolioSection from './components/sections/PortfolioSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <SiteNavbar />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
