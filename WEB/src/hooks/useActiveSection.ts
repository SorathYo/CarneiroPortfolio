import { useEffect, useState } from "react"
import type { SectionId } from "@/types"

/**
 * Marca a última seção que já chegou à linha de leitura, evitando que uma seção
 * anterior e alta continue ativa enquanto a pessoa percorre as seções seguintes.
 */
export function useActiveSection(ids: readonly SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    let frame = 0

    const updateActiveSection = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const readingLine = window.innerHeight * 0.6
        let next = ids[0]
        let closestTop = Number.NEGATIVE_INFINITY

        for (const id of ids) {
          const element = document.getElementById(id)
          if (!element) continue

          const top = element.getBoundingClientRect().top
          if (top <= readingLine && top > closestTop) {
            next = id
            closestTop = top
          }
        }

        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
          next = ids.at(-1) ?? next
        }

        setActive((current) => (current === next ? current : next))
      })
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [ids])

  return active
}
