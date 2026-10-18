import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react"
import { STORAGE_KEYS } from "@/constants"
import { usePersistentState } from "@/hooks"
import { booleanCodec } from "@/utils"

interface AccessibilityContextValue {
  highContrast: boolean
  largeText: boolean
  toggleHighContrast: () => void
  toggleLargeText: () => void
}

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null)

/**
 * Opções de acessibilidade escolhidas pelo visitante. Aplica as classes
 * `high-contrast` e `large-text` no `<html>`; o efeito visual está em
 * `styles/theme.css` e `styles/base.css`.
 */
export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [highContrast, setHighContrast] = usePersistentState(
    STORAGE_KEYS.highContrast,
    false,
    booleanCodec,
  )
  const [largeText, setLargeText] = usePersistentState(
    STORAGE_KEYS.largeText,
    false,
    booleanCodec,
  )

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast)
  }, [highContrast])

  useEffect(() => {
    document.documentElement.classList.toggle("large-text", largeText)
  }, [largeText])

  const toggleHighContrast = useCallback(
    () => setHighContrast((value) => !value),
    [setHighContrast],
  )
  const toggleLargeText = useCallback(
    () => setLargeText((value) => !value),
    [setLargeText],
  )

  const value = useMemo(
    () => ({ highContrast, largeText, toggleHighContrast, toggleLargeText }),
    [highContrast, largeText, toggleHighContrast, toggleLargeText],
  )

  return (
    <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
  )
}

export function useAccessibility(): AccessibilityContextValue {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error("useAccessibility deve ser usado dentro de <AccessibilityProvider>")
  }
  return context
}
