import { cn } from "@/utils"

/**
 * Engrenagem decorativa girando devagar.
 * O tamanho e a posição vêm de quem usa (`className`), ex.: "w-[350px] right-[4%]".
 */
export default function Gear({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "decorative-gear pointer-events-none absolute aspect-square animate-gear motion-reduce:animate-none",
        className,
      )}
    />
  )
}
