import type { CertificateId } from "@/types"

export interface Certificate {
  id: CertificateId
  year: string
  /** Link da credencial oficial (por enquanto leva ao contato). */
  href: string
}

/** Dados neutros ao idioma. Título/instituição/descrição ficam em `i18n/locales`. */
export const CERTIFICATES: readonly Certificate[] = [
  { id: "full-stack", year: "2025", href: "#contato" },
  { id: "react-typescript", year: "2025", href: "#contato" },
  { id: "databases", year: "2024", href: "#contato" },
]
