import { useCallback, useRef, useState } from "react"
import { Icon, UtilityButton } from "@/components/ui"
import { useAccessibility, useLanguage } from "@/context"
import { useDismiss } from "@/hooks"
import SwitchRow from "./SwitchRow"

/** Botão + popover com as opções de acessibilidade (alto contraste, fonte maior). */
export default function AccessibilityMenu() {
  const { t } = useLanguage()
  const { highContrast, largeText, toggleHighContrast, toggleLargeText } = useAccessibility()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setOpen(false), [])
  useDismiss(containerRef, close, open)

  return (
    <div className="relative" ref={containerRef}>
      <UtilityButton
        active={open}
        onClick={() => setOpen((value) => !value)}
        aria-label={t.accessibility.open}
        aria-expanded={open}
        aria-controls="accessibility-menu"
      >
        <Icon name="accessibility" />
      </UtilityButton>

      {open && (
        <div
          id="accessibility-menu"
          role="dialog"
          aria-label={t.accessibility.title}
          className="absolute top-[calc(100%+13px)] right-0 w-[270px] border border-brand bg-control p-2 text-fg shadow-[0_20px_50px_rgba(0,0,0,.5),0_0_22px_color-mix(in_srgb,var(--brand)_12%,transparent)] clip-cut max-md:-right-[94px]"
        >
          <div className="flex items-center justify-between px-2.5 pt-[9px] pb-3 font-display text-xs leading-none font-bold tracking-[1.5px] text-brand uppercase">
            <span>{t.accessibility.title}</span>
            <button
              type="button"
              className="grid cursor-pointer place-items-center bg-transparent p-1 text-inherit"
              onClick={close}
              aria-label={t.accessibility.close}
            >
              <Icon name="close" size={16} />
            </button>
          </div>

          <SwitchRow
            label={t.accessibility.contrast}
            checked={highContrast}
            onToggle={toggleHighContrast}
          />
          <SwitchRow
            label={t.accessibility.font}
            checked={largeText}
            onToggle={toggleLargeText}
          />
        </div>
      )}
    </div>
  )
}
