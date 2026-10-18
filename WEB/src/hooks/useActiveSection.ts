import { useEffect, useState } from "react"
import type { SectionId } from "@/types"

/**
 * Descobre qual seção está cruzando a "linha de leitura" (um pouco acima do
 * meio da tela) para destacar o item correspondente no menu.
 *
 * `ids` deve estar na ordem do menu. Quando duas seções ficam visíveis ao
 * mesmo tempo (Habilidades e Projetos são lado a lado), vence a primeira da lista.
 */
export function useActiveSection(ids: readonly SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return

    const visible = new Set<SectionId>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as SectionId
          if (entry.isIntersecting) visible.add(id)
          else visible.delete(id)
        }
        const next = ids.find((id) => visible.has(id))
        if (next) setActive(next)
      },
      // Faixa fina entre 40% e 45% da altura da viewport.
      { rootMargin: "-40% 0px -55% 0px" },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
