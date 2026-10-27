import { createApp } from 'vue'
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/main.scss'
import App from './App.vue'
import reveal from './directives/reveal'
import patternUrl from './assets/images/patron fondo.png'

// Patrón de logos disponible para fondos oceánicos (CSS)
document.documentElement.style.setProperty('--pattern-url', `url(${patternUrl})`)

createApp(App).directive('reveal', reveal).mount('#app')
