import { SectionTitle } from "@/components/ui"
import { useLanguage } from "@/context"
import { SKILLS } from "@/data"
import { formatIndex } from "@/utils"

/** Grade de tecnologias. Renderizada dentro de <Work /> (coluna da esquerda). */
export default function Skills() {
  const { t } = useLanguage()

  return (
    <div
      id="habilidades"
      className="border-r border-brand/20 pr-[3vw] max-lg:border-r-0 max-lg:border-b max-lg:pr-0 max-lg:pb-9"
    >
      <SectionTitle eyebrow={t.stack.eyebrow} title={t.stack.title} />
      <div className="mt-[27px] grid grid-cols-2 gap-2.5 max-lg:grid-cols-4 max-sm:grid-cols-2">
        {SKILLS.map((skill, index) => (
          <div
            key={skill}
            className="relative flex min-h-[74px] flex-col justify-end overflow-hidden border border-brand/18 bg-card p-[13px] transition hover:-translate-y-0.5 hover:border-brand"
          >
            <span
              aria-hidden="true"
              className="absolute top-[3px] right-2 font-display text-[32px] leading-none font-extrabold text-brand/16"
            >
              {formatIndex(index)}
            </span>
            <strong className="z-[1] text-sm font-semibold text-fg-soft">{skill}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
