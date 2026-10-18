/**
 * Acesso seguro ao localStorage. Pode lançar exceção (modo privado, cookies
 * bloqueados, SSR), então toda leitura/escrita é protegida com try/catch.
 */

export function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Sem persistência: o app continua funcionando, só não lembra a preferência.
  }
}

/** Converte string <-> valor tipado, validando o que veio do storage. */
export interface Codec<T> {
  /** Retorna `undefined` quando o valor salvo é inválido. */
  parse: (raw: string) => T | undefined
  stringify: (value: T) => string
}

/** Codec para uniões de strings (ex.: `"dark" | "light" | "auto"`). */
export function oneOf<T extends string>(allowed: readonly T[]): Codec<T> {
  return {
    parse: (raw) => allowed.find((value) => value === raw),
    stringify: (value) => value,
  }
}

export const booleanCodec: Codec<boolean> = {
  parse: (raw) => (raw === "true" ? true : raw === "false" ? false : undefined),
  stringify: String,
}
