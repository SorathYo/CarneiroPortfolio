import type { ReactNode } from "react"
import { AccessibilityProvider } from "./AccessibilityContext"
import { LanguageProvider } from "./LanguageContext"
import { ThemeProvider } from "./ThemeContext"

export { useAccessibility } from "./AccessibilityContext"
export { useLanguage } from "./LanguageContext"
export { useTheme } from "./ThemeContext"

/** Todos os providers globais em um só lugar. Usado em `main.tsx`. */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AccessibilityProvider>{children}</AccessibilityProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
