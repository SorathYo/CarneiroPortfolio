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
        "pointer-events-none absolute aspect-square animate-gear rounded-full border-[18px] border-dashed border-brand/40 motion-reduce:animate-none",
        "drop-shadow-[0_0_10px_color-mix(in_srgb,var(--brand)_35%,transparent)]",
        className,
      )}
    >
      <div className="absolute inset-1/4 rounded-full border-[3px] border-brand/45 shadow-[0_0_0_15px_color-mix(in_srgb,var(--brand)_6%,transparent)]" />
    </div>
  )
}
