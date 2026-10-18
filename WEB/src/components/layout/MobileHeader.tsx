import { Icon } from "@/components/ui"
import { useLanguage } from "@/context"
import { SITE } from "@/data"

/** Barra superior fixa, visível só no celular (≤ 800px). */
export default function MobileHeader() {
  const { t } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-30 hidden h-[68px] items-center justify-between border-b border-line bg-bg/90 px-5 backdrop-blur-md max-md:flex">
      <a
        className="font-display text-sm leading-none font-bold tracking-[1px]"
        href="#inicio"
      >
        <span className="mr-2 text-xl text-brand italic">{SITE.initials}</span>
        {SITE.displayName}
      </a>
      <a className="text-brand" href="#contato" aria-label={t.nav.contato}>
        <Icon name="mail" />
      </a>
    </header>
  )
}
