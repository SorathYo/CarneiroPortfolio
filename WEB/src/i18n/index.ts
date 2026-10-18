import type { Language } from "@/types"
import { en } from "./locales/en"
import { pt } from "./locales/pt"
import type { Translations } from "./types"

export const translations: Record<Language, Translations> = { pt, en }

export type { Translations }
