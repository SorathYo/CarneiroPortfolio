import type { Language, Theme } from "@/types"

export { STORAGE_KEYS } from "./storage"

export const LANGUAGES: readonly Language[] = ["pt", "en"]
export const THEMES: readonly Theme[] = ["dark", "light", "auto"]

export const DEFAULT_LANGUAGE: Language = "pt"
export const DEFAULT_THEME: Theme = "auto"

/** Mapeia o idioma da interface para o valor do atributo `<html lang>`. */
export const HTML_LANG: Record<Language, string> = {
  pt: "pt-BR",
  en: "en",
}
