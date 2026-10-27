<script setup lang="ts">
import { ref } from 'vue'
import { site } from '../../data/site'

const bubbles = [
  { left: '6%', size: 16, dur: 12, delay: 0, sun: false },
  { left: '14%', size: 10, dur: 9, delay: -3, sun: true },
  { left: '24%', size: 22, dur: 14, delay: -6, sun: false },
  { left: '38%', size: 12, dur: 10, delay: -1, sun: false },
  { left: '52%', size: 18, dur: 13, delay: -8, sun: true },
  { left: '63%', size: 9, dur: 8, delay: -2, sun: false },
  { left: '74%', size: 20, dur: 15, delay: -5, sun: false },
  { left: '86%', size: 13, dur: 11, delay: -9, sun: true },
  { left: '93%', size: 17, dur: 12, delay: -4, sun: false },
]

const name = ref('')
const email = ref('')
const message = ref('')
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function onSubmit() {
  status.value = 'sending'
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${site.contact.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
        _subject: 'Nuevo mensaje desde el portafolio ✳',
        _template: 'table',
        _captcha: 'false',
      }),
    })
    if (!res.ok) throw new Error('error')
    status.value = 'sent'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="contacto" class="section section-soft section-contact">
    <!-- Burbujas marinas -->
    <div class="bubbles" aria-hidden="true">
      <span
        v-for="(bubble, i) in bubbles"
        :key="i"
        class="bubble"
        :class="{ 'is-sun': bubble.sun }"
        :style="{
          left: bubble.left,
          width: `${bubble.size}px`,
          height: `${bubble.size}px`,
          animationDuration: `${bubble.dur}s`,
          animationDelay: `${bubble.delay}s`,
        }"
      ></span>
    </div>

    <div class="container position-relative">
      <div class="section-head justify-content-center" v-reveal>
        <span class="num">06</span>
        <span class="kicker">{{ site.contact.kicker }}</span>
        <span class="rule"></span>
      </div>

      <h2 class="contact-title" v-reveal="60">
        {{ site.contact.headingLine1 }} <em>{{ site.contact.headingAccent }}</em>
        {{ site.contact.headingLine2 }}
      </h2>

      <p class="contact-text" v-reveal="120">{{ site.contact.text }}</p>
      <p class="contact-note" v-reveal="140">{{ site.contact.note }}</p>

      <div class="row g-4 text-start justify-content-center">
        <!-- Medios de contacto -->
        <div class="col-lg-5">
          <div class="d-flex flex-column gap-3" v-reveal="180">
            <a class="info-card" :href="`mailto:${site.contact.email}`">
              <span class="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span>
                <strong>Correo</strong>
                <span class="info-value">{{ site.contact.email }}</span>
              </span>
            </a>

            <a class="info-card" :href="site.contact.whatsappLink" target="_blank" rel="noopener noreferrer">
              <span class="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>
                <strong>Teléfono / WhatsApp</strong>
                <span class="info-value">{{ site.contact.whatsappDisplay }}</span>
              </span>
            </a>

            <div class="info-card">
              <span class="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>
                <strong>Ubicación</strong>
                <span class="info-value">{{ site.contact.location }}</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <div class="col-lg-7">
          <form class="form-card" v-reveal="220" @submit.prevent="onSubmit">
            <p class="hand form-hand">cuéntame tu idea ✳</p>

            <div v-if="status === 'sent'" class="form-alert is-ok">
              ¡Mensaje enviado! Te respondo antes de que baje la marea ✳
            </div>
            <div v-else-if="status === 'error'" class="form-alert is-error">
              Algo salió mal. Escríbeme directo a {{ site.contact.email }}
            </div>

            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label" for="f-name">Nombre</label>
                <input
                  id="f-name"
                  v-model="name"
                  class="form-input"
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div class="col-md-6">
                <label class="form-label" for="f-email">Correo</label>
                <input
                  id="f-email"
                  v-model="email"
                  class="form-input"
                  type="email"
                  name="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
              <div class="col-12">
                <label class="form-label" for="f-message">Mensaje</label>
                <textarea
                  id="f-message"
                  v-model="message"
                  class="form-input"
                  name="message"
                  rows="5"
                  placeholder="Hola Sandy, quiero contarte sobre mi proyecto..."
                  required
                ></textarea>
              </div>
              <div class="col-12">
                <input type="text" name="_honey" style="display: none" tabindex="-1" autocomplete="off" />
                <button class="btn-solid w-100 justify-content-center" type="submit" :disabled="status === 'sending'">
                  {{ status === 'sending' ? 'Enviando...' : 'Enviar mensaje ✳' }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
