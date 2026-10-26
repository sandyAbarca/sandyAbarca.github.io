import { ref, watchEffect } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'sandy-theme'

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    /* localStorage no disponible */
  }
  return 'light'
}

// Estado a nivel de módulo → se comparte entre todos los componentes
const theme = ref<Theme>(getInitialTheme())

export function useTheme() {
  watchEffect(() => {
    document.documentElement.dataset.theme = theme.value
    try {
      localStorage.setItem(STORAGE_KEY, theme.value)
    } catch {
      /* sin persistencia */
    }
  })

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return { theme, toggleTheme }
}
