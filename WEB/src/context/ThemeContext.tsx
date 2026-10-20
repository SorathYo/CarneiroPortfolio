import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { DEFAULT_THEME, STORAGE_KEYS, THEMES } from "@/constants"
import { usePersistentState } from "@/hooks"
import type { ResolvedTheme, Theme } from "@/types"
import { oneOf } from "@/utils"

interface ThemeContextValue {
  /** Preferência escolhida (inclui `auto`). */
  theme: Theme
  /** Tema efetivamente aplicado, resolvendo `auto` pela preferência do sistema. */
  resolvedTheme: ResolvedTheme
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
const DAY_THEME_START_HOUR = 6
const NIGHT_THEME_START_HOUR = 18

function getTimeBasedTheme(date = new Date()): ResolvedTheme {
  const hour = date.getHours()
  return hour >= DAY_THEME_START_HOUR && hour < NIGHT_THEME_START_HOUR
    ? "light"
    : "dark"
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Guarda a preferência de tema e a aplica em `<html data-theme="dark|light">`.
 * Em `auto`, usa o tema claro das 6h às 18h e o escuro no restante do dia.
 * Os tokens de cor de cada tema vivem em `styles/theme.css`.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = usePersistentState<Theme>(
    STORAGE_KEYS.theme,
    DEFAULT_THEME,
    themeCodec,
  )
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    if (theme !== "auto") return theme
    return getTimeBasedTheme()
  })

  useEffect(() => {
    const root = document.documentElement
    let timeoutId: number | undefined

    const apply = () => {
      const now = new Date()
      const resolved = theme === "auto" ? getTimeBasedTheme(now) : theme
      setResolvedTheme(resolved)
      root.dataset.theme = resolved

      if (theme === "auto") {
        const nextTransition = new Date(now)
        if (now.getHours() < DAY_THEME_START_HOUR) {
          nextTransition.setHours(DAY_THEME_START_HOUR, 0, 0, 0)
        } else if (now.getHours() < NIGHT_THEME_START_HOUR) {
          nextTransition.setHours(NIGHT_THEME_START_HOUR, 0, 0, 0)
        } else {
          nextTransition.setDate(nextTransition.getDate() + 1)
          nextTransition.setHours(DAY_THEME_START_HOUR, 0, 0, 0)
        }
        timeoutId = window.setTimeout(apply, nextTransition.getTime() - now.getTime())
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        if (timeoutId !== undefined) window.clearTimeout(timeoutId)
        apply()
      }
    }

    apply()
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [theme])

  const cycleTheme = useCallback(
    () => setTheme((current) => NEXT_THEME[current]),
    [setTheme],
  )

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme, cycleTheme }),
    [theme, resolvedTheme, setTheme, cycleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme deve ser usado dentro de <ThemeProvider>")
  return context
}
