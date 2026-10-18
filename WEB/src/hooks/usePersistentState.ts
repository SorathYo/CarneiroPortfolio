import { useEffect, useState } from "react"
import { readStorage, writeStorage, type Codec } from "@/utils"

/**
 * `useState` que lembra o valor no localStorage.
 * Valores salvos inválidos (ou storage indisponível) caem no `fallback`.
 */
export function usePersistentState<T>(
  key: string,
  fallback: T,
  codec: Codec<T>,
) {
  const [value, setValue] = useState<T>(() => {
    const raw = readStorage(key)
    const parsed = raw === null ? undefined : codec.parse(raw)
    return parsed ?? fallback
  })

  useEffect(() => {
    writeStorage(key, codec.stringify(value))
  }, [key, codec, value])

  return [value, setValue] as const
}
