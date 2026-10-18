import { Icon, Panel, SectionTitle } from "@/components/ui"
import { useLanguage } from "@/context"
import { CERTIFICATES } from "@/data"
import { formatIndex } from "@/utils"

export default function Certificates() {
  const { t } = useLanguage()

  return (
    <Panel
      id="certificados"
      className="mt-[22px] px-[4vw] pt-[52px] pb-[45px] max-md:px-7 max-md:py-[45px] max-sm:px-[21px] max-sm:py-10"
    >
      <div className="flex items-end justify-between gap-10 max-md:flex-col max-md:items-start max-md:gap-[18px]">
        <SectionTitle eyebrow={t.certificates.eyebrow} title={t.certificates.title} />
        <p className="copy max-w-[500px] text-[15px] leading-normal text-fg-muted">
          {t.certificates.intro}
        </p>
      </div>

      <div className="mt-[34px] grid grid-cols-3 gap-[15px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {CERTIFICATES.map((certificate, index) => {
          const text = t.certificates.items[certificate.id]
          return (
            <article
              key={certificate.id}
              className="relative min-h-[265px] overflow-hidden border border-card-line bg-card bg-linear-145 from-brand/7 to-transparent to-45% p-[26px] transition duration-200 after:absolute after:-right-9 after:-bottom-[58px] after:size-[150px] after:rounded-full after:border-[12px] after:border-dashed after:border-brand/8 after:transition after:duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_45px_rgba(0,0,0,.4)] hover:after:rotate-[15deg] hover:after:border-brand/20"
            >
              <div
                aria-hidden="true"
                className="absolute top-[17px] right-5 font-display text-5xl leading-none font-extrabold text-brand/13"
              >
                {formatIndex(index)}
              </div>
              <div className="mb-6 grid size-12 place-items-center border border-brand/35 text-brand shadow-glow-sm">
                <Icon name="layers" size={25} />
              </div>
              <span className="text-[9px] font-bold tracking-[1.5px] text-brand uppercase">
                {text.issuer}
              </span>
              <h3 className="mt-[7px] mb-2.5 font-display text-[23px] leading-[1.1] font-bold text-fg uppercase">
                {text.title}
              </h3>
              <p className="copy max-w-[340px] text-sm leading-[1.45] text-fg-muted">
                {text.description}
              </p>
              <div className="absolute inset-x-[25px] bottom-[22px] z-[1] flex items-center justify-between">
                <span className="text-[11px] tracking-[1.5px] text-fg-faint">{certificate.year}</span>
                <a
                  href={certificate.href}
                  className="flex items-center gap-[7px] text-[10px] font-bold tracking-[1px] text-brand"
                >
                  {t.certificates.credential} <Icon name="arrow" size={16} />
                </a>
              </div>
            </article>
          )
        })}
      </div>

      <p className="mt-[22px] text-[10px] tracking-[0.8px] text-fg-faint">{t.certificates.note}</p>
    </Panel>
  )
}
