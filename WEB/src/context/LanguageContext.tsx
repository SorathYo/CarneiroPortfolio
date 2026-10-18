import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react"
import { DEFAULT_LANGUAGE, HTML_LANG, LANGUAGES, STORAGE_KEYS } from "@/constants"
import { usePersistentState } from "@/hooks"
import { translations, type Translations } from "@/i18n"
import type { Language } from "@/types"
import { oneOf } from "@/utils"

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  /** Textos do idioma atual. */
  t: Translations
}

const languageCodec = oneOf(LANGUAGES)

const LanguageContext = createContext<LanguageContextValue | null>(null)

/** Idioma atual + textos traduzidos. Também mantém `<html lang>` em sincronia. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = usePersistentState<Language>(
    STORAGE_KEYS.language,
    DEFAULT_LANGUAGE,
    languageCodec,
  )

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language]
  }, [language])

  const toggleLanguage = useCallback(
    () => setLanguage((current) => (current === "pt" ? "en" : "pt")),
    [setLanguage],
  )

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t: translations[language] }),
    [language, setLanguage, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage deve ser usado dentro de <LanguageProvider>")
  return context
}
