/** 0 -> "01", 8 -> "09", 11 -> "12" (índice de lista começando em 1). */
export function formatIndex(index: number): string {
  return String(index + 1).padStart(2, "0")
}
