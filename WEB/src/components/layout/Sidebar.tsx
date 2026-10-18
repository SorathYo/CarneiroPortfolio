import { Gear, Icon } from "@/components/ui"
import { useLanguage } from "@/context"
import { NAV_ITEMS, SECTION_IDS, SITE } from "@/data"
import { useActiveSection } from "@/hooks"
import { cn } from "@/utils"

const navLink =
  "copy relative flex h-[52px] items-center gap-4 px-[30px] text-base text-nav transition before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-brand before:opacity-0 before:shadow-[0_0_12px_var(--brand)] hover:bg-linear-90 hover:from-brand/25 hover:to-transparent hover:text-fg hover:before:opacity-100"

const navLinkActive =
  "bg-linear-90 from-brand/25 to-transparent text-fg before:opacity-100"

/** Menu lateral fixo (desktop e tablet). No celular ele some e entra o MobileHeader. */
export default function Sidebar() {
  const { t } = useLanguage()
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-[225px] flex-col overflow-hidden border-r border-line bg-sidebar bg-linear-to-b from-brand/12 to-transparent to-28% max-lg:w-[190px] max-md:hidden">
      <a
        className="flex min-h-[190px] flex-col items-center justify-center border-b border-brand/20 bg-linear-145 from-brand/10 to-transparent to-55%"
        href="#inicio"
        aria-label={`${SITE.name}, ${t.nav.inicio}`}
      >
        <span className="font-display text-[44px] leading-[.95] font-black tracking-[-5px] text-brand italic -skew-x-7 drop-shadow-brand">
          {SITE.initials}
        </span>
        <strong className="mt-[18px] font-display text-[17px] leading-none font-bold tracking-[1px] text-fg">
          {SITE.displayName}
        </strong>
        <small className="mt-[7px] text-[8px] tracking-[2px] text-fg-faint">{t.role}</small>
      </a>

      <nav aria-label={t.navLabel} className="flex flex-col py-[17px]">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeId
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={cn(navLink, isActive && navLinkActive)}
            >
              <Icon name={item.icon} className="text-brand" />
              <span>{t.nav[item.id]}</span>
            </a>
          )
        })}
      </nav>

      <blockquote className="copy mx-[27px] mt-[52px] border-l border-brand pl-[15px] text-sm leading-[1.45] text-fg-muted italic">
        {t.quote}
        <cite className="mt-[11px] block text-brand not-italic">— {SITE.name}</cite>
      </blockquote>

      <div className="relative z-[2] mt-auto flex gap-4 p-7 text-brand">
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

      <Gear className="right-20 -bottom-[100px] w-[190px] opacity-50" />
    </aside>
  )
}
