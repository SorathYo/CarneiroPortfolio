import { useEffect, useRef, useState } from "react"
import { Icon } from "@/components/ui"
import { useLanguage } from "@/context"
import { SITE } from "@/data"
import SidebarNavigation from "./SidebarNavigation"

/** Barra superior fixa, visível só no celular (≤ 800px). */
export default function MobileHeader() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 801px)")
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }

    desktopViewport.addEventListener("change", closeOnDesktop)
    return () => desktopViewport.removeEventListener("change", closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus({ preventScroll: true })
      }
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus({ preventScroll: true })
  }

  const closeMenuAfterNavigation = () => {
    window.setTimeout(closeMenu, 0)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 hidden h-[68px] items-center gap-3 border-b border-line bg-bg/90 px-4 backdrop-blur-md max-md:flex">
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isMenuOpen ? t.closeMenu : t.navLabel}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-sidebar-navigation"
          className="flex size-10 shrink-0 items-center justify-center border border-brand/35 bg-brand/5 transition hover:bg-brand/15 focus-visible:outline-2"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="mobile-menu-icon size-6" />
        </button>
        <a className="min-w-0 truncate font-display text-sm leading-none font-bold tracking-[1px]" href="#inicio">
          <span className="mr-2 text-xl text-brand italic">{SITE.initials}</span>
          <span className="max-sm:hidden">{SITE.displayName}</span>
        </a>
      </header>

      {isMenuOpen && (
        <>
          <button
            type="button"
            aria-label={t.closeMenu}
            className="fixed inset-x-0 top-[68px] bottom-0 z-[35] bg-black/65 max-md:block"
            onClick={closeMenu}
          />
          <aside
            id="mobile-sidebar-navigation"
            className="fixed top-[68px] bottom-0 left-0 z-40 flex w-[min(300px,85vw)] flex-col overflow-y-auto border-r border-line bg-sidebar bg-linear-to-b from-brand/12 to-transparent to-28% shadow-[12px_0_40px_rgba(0,0,0,.5)]"
          >
            <a
              className="flex min-h-[145px] shrink-0 flex-col items-center justify-center border-b border-brand/20 bg-linear-145 from-brand/10 to-transparent to-55%"
              href="#inicio"
              aria-label={`${SITE.name}, ${t.nav.inicio}`}
              onClick={closeMenuAfterNavigation}
            >
              <span className="font-display text-[40px] leading-[.95] font-black tracking-[-5px] text-brand italic -skew-x-7 drop-shadow-brand">
                {SITE.initials}
              </span>
              <strong className="mt-3 font-display text-base leading-none font-bold tracking-[1px] text-fg">
                {SITE.displayName}
              </strong>
              <small className="mt-[7px] text-[8px] tracking-[2px] text-fg-faint">{t.role}</small>
            </a>
            <SidebarNavigation onNavigate={closeMenuAfterNavigation} />
            <blockquote className="copy mx-[27px] mt-auto mb-7 border-l border-brand pl-[15px] text-sm leading-[1.45] text-fg-muted italic">
              {t.quote}
              <cite className="mt-[11px] block text-brand not-italic">— {SITE.name}</cite>
            </blockquote>
            <div className="flex gap-4 px-7 pb-7 text-brand">
              <a
                className="transition hover:-translate-y-0.5 hover:text-fg"
                href={SITE.social.github.url}
                target="_blank"
                rel="noreferrer"
                aria-label={SITE.social.github.label}
              >
                <Icon name="github" />
              </a>
              <a
                className="transition hover:-translate-y-0.5 hover:text-fg"
                href={SITE.social.linkedin.url}
                target="_blank"
                rel="noreferrer"
                aria-label={SITE.social.linkedin.label}
              >
                <Icon name="linkedin" />
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  )
}
