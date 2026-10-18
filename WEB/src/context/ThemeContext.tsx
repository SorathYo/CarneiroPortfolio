import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react"
import { DEFAULT_THEME, STORAGE_KEYS, THEMES } from "@/constants"
import { usePersistentState } from "@/hooks"
import type { ResolvedTheme, Theme } from "@/types"
import { oneOf } from "@/utils"

interface ThemeContextValue {
  /** Preferência escolhida (inclui `auto`). */
  theme: Theme
  setTheme: (theme: Theme) => void
  /** Ciclo do botão: dark → light → auto → dark. */
  cycleTheme: () => void
}

const themeCodec = oneOf(THEMES)
const NEXT_THEME: Record<Theme, Theme> = {
  dark: "light",
  light: "auto",
  auto: "dark",
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Guarda a preferência de tema e a aplica em `<html data-theme="dark|light">`.
 * Em `auto`, acompanha o `prefers-color-scheme` do sistema em tempo real.
 * Os tokens de cor de cada tema vivem em `styles/theme.css`.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = usePersistentState<Theme>(
    STORAGE_KEYS.theme,
    DEFAULT_THEME,
    themeCodec,
  )

  useEffect(() => {
    const root = document.documentElement
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const apply = () => {
      const resolved: ResolvedTheme =
        theme === "auto" ? (media.matches ? "dark" : "light") : theme
      root.dataset.theme = resolved
    }
    apply()
    media.addEventListener("change", apply)
    return () => media.removeEventListener("change", apply)
  }, [theme])

  const cycleTheme = useCallback(
    () => setTheme((current) => NEXT_THEME[current]),
    [setTheme],
  )

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme }),
    [theme, setTheme, cycleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme deve ser usado dentro de <ThemeProvider>")
  return context
}
