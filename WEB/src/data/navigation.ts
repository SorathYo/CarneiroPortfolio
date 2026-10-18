import type { IconName, SectionId } from "@/types"

export interface NavItem {
  id: SectionId
  icon: IconName
}

/** Ordem do menu lateral. Os rótulos vêm do i18n (`t.nav[id]`). */
export const NAV_ITEMS: readonly NavItem[] = [
  { id: "inicio", icon: "home" },
  { id: "sobre", icon: "user" },
  { id: "projetos", icon: "code" },
  { id: "habilidades", icon: "skills" },
  { id: "certificados", icon: "layers" },
  { id: "contato", icon: "mail" },
]

/** Ids na ordem do menu (referência estável, usada pelo scroll-spy). */
export const SECTION_IDS: readonly SectionId[] = NAV_ITEMS.map((item) => item.id)
