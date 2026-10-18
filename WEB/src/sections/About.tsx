import { Icon, Panel, SectionTitle } from "@/components/ui"
import { useLanguage } from "@/context"
import type { IconName } from "@/types"

/** Um ícone por princípio, na mesma ordem de `t.about.principles`. */
const PRINCIPLE_ICONS: readonly IconName[] = ["code", "spark", "target"]

export default function About() {
  const { t } = useLanguage()

  return (
    <Panel
      id="sobre"
      className="-mt-px grid grid-cols-[1.35fr_.8fr] gap-[7vw] px-[5vw] py-[62px] max-md:grid-cols-1 max-md:gap-9 max-md:px-7 max-md:py-[50px] max-sm:px-[21px] max-sm:py-[43px]"
    >
      <div>
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />
        <p className="copy mt-6 mb-[30px] max-w-[690px] text-[17px] leading-[1.55] text-fg-soft">
          {t.about.copy}
        </p>
        <div className="flex flex-wrap gap-3.5">
          {t.about.principles.map((principle, index) => (
            <div
              key={principle}
              className="flex min-w-[145px] items-center gap-[11px] border border-brand/20 bg-card px-[15px] py-3 text-fg-soft max-sm:w-full"
            >
              <Icon name={PRINCIPLE_ICONS[index]} className="text-brand" />
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </div>

      <article className="flex gap-[18px] self-center border-l border-brand bg-linear-90 from-brand/8 to-transparent p-[30px] max-sm:px-[18px] max-sm:py-[23px]">
        <div className="grid size-[42px] shrink-0 place-items-center border border-brand/30 text-brand">
          <Icon name="user" />
        </div>
        <div>
          <span className="font-bold tracking-[1.2px]">{t.about.journey}</span>
          <p className="copy mt-[15px] text-[15px] leading-[1.55] text-fg-muted">
            {t.about.journeyCopy}
          </p>
        </div>
      </article>
    </Panel>
  )
}
