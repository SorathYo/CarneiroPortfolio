import type { ProjectId, ProjectVariant } from "@/types"

export interface Project {
  id: ProjectId
  /** Define qual mockup é desenhado no card. */
  variant: ProjectVariant
  /** Link do botão "Ver detalhes" (por enquanto leva ao contato). */
  href: string
}

/** Dados neutros ao idioma. Título/categoria/descrição ficam em `i18n/locales`. */
export const PROJECTS: readonly Project[] = [
  { id: "nexus-dashboard", variant: "dashboard", href: "#contato" },
  { id: "arc-store", variant: "store", href: "#contato" },
  { id: "personal-portfolio", variant: "portfolio", href: "#contato" },
]
