import { Icon } from "@/components/ui"
import { useLanguage } from "@/context"
import { NAV_ITEMS, SECTION_IDS } from "@/data"
import { useActiveSection } from "@/hooks"
import { cn } from "@/utils"

const navLink =
  "copy sidebar-nav-link relative flex shrink-0 items-center gap-4 px-[30px] text-base text-nav transition before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-brand before:opacity-0 before:shadow-[0_0_12px_var(--brand)] hover:bg-linear-90 hover:from-brand/25 hover:to-transparent hover:text-fg hover:before:opacity-100"

const navLinkActive = "bg-linear-90 from-brand/25 to-transparent text-fg before:opacity-100"

interface SidebarNavigationProps {
  onNavigate?: () => void
}

export default function SidebarNavigation({ onNavigate }: SidebarNavigationProps) {
  const { t } = useLanguage()
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <nav aria-label={t.navLabel} className="flex shrink-0 flex-col py-[17px]">
      {NAV_ITEMS.map((item) => {
        const isActive = item.id === activeId
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? "location" : undefined}
            className={cn(navLink, isActive && navLinkActive)}
            onClick={onNavigate}
          >
            <Icon name={item.icon} className="text-brand" />
            <span>{t.nav[item.id]}</span>
          </a>
        )
      })}
    </nav>
  )
}
