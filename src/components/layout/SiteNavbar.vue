<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import logoUrl from '../../assets/images/Logo.png'

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'hoja-de-vida', label: 'Hoja de vida' },
  { id: 'contacto', label: 'Contáctame' },
]

const scrolled = ref(false)
const menuOpen = ref(false)
const activeId = ref('inicio')

let sectionsObserver: IntersectionObserver | null = null

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Resalta el enlace del menú según la sección visible
  sectionsObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeId.value = entry.target.id
      }
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )
  for (const link of links) {
    const el = document.getElementById(link.id)
    if (el) sectionsObserver.observe(el)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  sectionsObserver?.disconnect()
})
</script>

<template>
  <header class="site-navbar" :class="{ 'is-scrolled': scrolled }">
    <div class="container d-flex align-items-center justify-content-between gap-3">
      <a class="brand" href="#inicio" @click="closeMenu" aria-label="Sandy Abarca — Inicio">
        <img class="brand-logo" :src="logoUrl" alt="Logo de Sandy Abarca" />
      </a>

      <nav class="d-none d-lg-flex align-items-center gap-4" aria-label="Principal">
        <a
          v-for="link in links"
          :key="link.id"
          class="nav-link"
          :class="{ 'is-active': activeId === link.id }"
          :href="`#${link.id}`"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="d-flex align-items-center gap-2">
        <button
          class="icon-btn burger d-lg-none"
          :class="{ 'is-open': menuOpen }"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Abrir menú"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-if="menuOpen" class="mobile-menu d-lg-none" aria-label="Móvil">
        <a v-for="(link, i) in links" :key="link.id" :href="`#${link.id}`" @click="closeMenu">
          <em>0{{ i + 1 }}</em>{{ link.label }}
        </a>
      </nav>
    </Transition>
  </header>
</template>
