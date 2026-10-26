import { createApp } from 'vue'
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/main.scss'
import App from './App.vue'
import reveal from './directives/reveal'

createApp(App).directive('reveal', reveal).mount('#app')
