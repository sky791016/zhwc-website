import { ref, computed } from 'vue'

type Lang = 'zh' | 'en'

// Singleton shared across all components
const lang = ref<Lang>('en')

export function useLang() {
  const isEn = computed(() => lang.value === 'en')

  function toggleLang() {
    lang.value = lang.value === 'zh' ? 'en' : 'zh'
  }

  function setLang(l: Lang) {
    lang.value = l
  }

  /** Pick the right string from a bilingual object */
  function t(obj: { zh: string; en: string }): string {
    return lang.value === 'zh' ? obj.zh : obj.en
  }

  return { lang, isEn, toggleLang, setLang, t }
}
