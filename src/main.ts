import { createApp } from 'vue'
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/main.scss'
import App from './App.vue'
import reveal from './directives/reveal'
import tilt from './directives/tilt'
import glow from './directives/glow'
import { initMagnetic } from './utils/magnetic'
import patternUrl from './assets/images/patron fondo.png'

// Patrón de logos disponible para fondos oceánicos (CSS)
document.documentElement.style.setProperty('--pattern-url', `url(${patternUrl})`)

const app = createApp(App)
app.directive('reveal', reveal)
app.directive('tilt', tilt)
app.directive('glow', glow)
app.mount('#app')

// Botones magnéticos (delegación global, solo desktop)
initMagnetic()
