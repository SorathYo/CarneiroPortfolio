type ClassValue = string | false | null | undefined

/**
 * Junta classes ignorando valores "falsos", para condicionais legíveis:
 *
 *   cn("base", isActive && "text-brand")
 *
 * Importante: não resolve conflitos entre utilitários do Tailwind
 * (ex.: `w-4` + `w-8`). Evite passar classes conflitantes — use variantes/props.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ")
}
