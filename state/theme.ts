import { reactive, toRefs } from '@vue/composition-api'

const state = reactive({
  isDarkMode: false,
})

export const useTheme = () => toRefs(state)

export const setDarkMode = (s: boolean) => {
  if (s) {
    document.documentElement.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light')
  }
}
