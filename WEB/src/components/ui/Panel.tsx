import type { ReactNode } from "react"
import { cn } from "@/utils"

interface PanelProps {
  id?: string
  className?: string
  children: ReactNode
}

/**
 * Cartão de seção: borda vermelha fina, fundo translúcido e canto superior
 * direito recortado. Espaçamento interno e grid ficam por conta de `className`.
 */
export default function Panel({ id, className, children }: PanelProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-[2.4vw] border border-line bg-panel bg-linear-135 from-brand/5 to-transparent to-24% clip-panel max-md:mx-3.5",
        className,
      )}
    >
      {children}
    </section>
  )
}
