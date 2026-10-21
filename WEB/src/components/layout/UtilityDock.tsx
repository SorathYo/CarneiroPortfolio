import { Icon, UtilityButton } from "@/components/ui"
import { useLanguage, useTheme } from "@/context"
import type { IconName, Theme } from "@/types"

const THEME_ICONS: Record<Theme, IconName> = {
  dark: "moon",
  light: "sun",
  auto: "monitor",
}

/** Barra flutuante no canto superior direito: tema e idioma. */
export default function UtilityDock() {
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, cycleTheme } = useTheme()
  const themeLabel = `${t.controls.theme}: ${t.controls.themes[theme]}`

  return (
    <div
      role="group"
      aria-label="Site controls"
      className="fixed top-[18px] right-[22px] z-50 flex gap-[7px] border border-line bg-control p-[5px] shadow-[0_12px_35px_rgba(0,0,0,.28)] backdrop-blur-[15px] clip-cut-sm max-md:top-3 max-md:right-[58px] max-md:z-40 max-md:p-0.5 max-md:shadow-none max-sm:right-[49px]"
    >
      <UtilityButton onClick={cycleTheme} aria-label={themeLabel} title={themeLabel}>
        <Icon name={THEME_ICONS[theme]} />
      </UtilityButton>

      <UtilityButton
        wide
        onClick={toggleLanguage}
        aria-label={t.controls.language}
        title={t.controls.language}
      >
        <Icon name="language" className="max-sm:hidden" />
        <span className="text-[10px] font-bold tracking-[0.6px]">{language.toUpperCase()}</span>
      </UtilityButton>
    </div>
  )
}
