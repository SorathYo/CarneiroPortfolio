import type { ProjectId, ProjectVariant } from "@/types"

export interface Project {
  id: ProjectId
  /** Define qual mockup é desenhado no card. */
  variant: ProjectVariant
  /** Screenshot exibido no lugar do mockup decorativo, quando disponível. */
  image?: string
  /** Link do botão "Ver detalhes" (por enquanto leva ao contato). */
  href: string
}

/** Dados neutros ao idioma. Título/categoria/descrição ficam em `i18n/locales`. */
export const PROJECTS: readonly Project[] = [
  {
    id: "madu-marketplace",
    variant: "marketplace",
    image: "/assets/projects/MaduProject.png",
    href: "https://madu-marketplace.vercel.app/",
  },
]
