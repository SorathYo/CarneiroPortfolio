import type { ReactNode } from "react"
import { cn } from "@/utils"
import Icon from "./Icon"

interface ButtonLinkProps {
  href: string
  children: ReactNode
  /** Largura mínima menor (botão do bloco de contato). */
  compact?: boolean
}

/** Botão principal: contorno vermelho, cantos recortados e seta. */
export default function ButtonLink({ href, children, compact }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative inline-flex h-[52px] items-center justify-center gap-6 border border-brand bg-brand/4 font-body text-sm leading-none font-bold tracking-[1.4px] text-brand transition clip-cut hover:bg-brand hover:text-white hover:shadow-glow max-sm:w-full",
        compact ? "min-w-[210px]" : "min-w-[220px]",
      )}
    >
      {children}
      <Icon name="arrow" />
    </a>
  )
}
