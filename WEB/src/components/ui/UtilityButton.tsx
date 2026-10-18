import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/utils"

interface UtilityButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Destaca o botão (ex.: menu aberto). */
  active?: boolean
  /** Versão larga, usada pelo botão de idioma (ícone + sigla). */
  wide?: boolean
}

/** Botão quadrado do dock de controles (acessibilidade, tema, idioma). */
export default function UtilityButton({
  active,
  wide,
  className,
  type = "button",
  ...props
}: UtilityButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "flex h-[38px] cursor-pointer items-center justify-center border border-transparent bg-transparent text-fg transition hover:border-brand hover:bg-brand/12 hover:text-brand focus-visible:border-brand focus-visible:bg-brand/12 focus-visible:text-brand",
        wide
          ? "w-[54px] gap-[5px] max-md:w-[49px] max-sm:w-[42px]"
          : "w-[38px] max-md:w-9 max-sm:w-[33px]",
        active && "border-brand bg-brand/12 text-brand",
        className,
      )}
      {...props}
    />
  )
}
