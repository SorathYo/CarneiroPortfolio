import { Panel } from "@/components/ui"
import Projects from "./Projects"
import Skills from "./Skills"

/**
 * Painel duplo: Habilidades (esquerda) + Projetos (direita).
 * Em telas ≤ 1180px as colunas empilham.
 */
export default function Work() {
  return (
    <Panel className="mt-[22px] grid grid-cols-[.62fr_1.38fr] px-[3vw] pt-12 pb-[55px] max-lg:grid-cols-1 max-md:px-6 max-md:py-[45px]">
      <Skills />
      <Projects />
    </Panel>
  )
}
