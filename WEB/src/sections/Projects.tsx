import { Icon, SectionTitle } from "@/components/ui"
import { useLanguage } from "@/context"
import { PROJECTS } from "@/data"

/** Cards de projetos. Renderizada dentro de <Work /> (coluna da direita). */
export default function Projects() {
  const { t } = useLanguage()

  return (
    <div id="projetos" className="pl-[3vw] max-lg:pt-[38px] max-lg:pl-0">
      <SectionTitle eyebrow={t.work.eyebrow} title={t.work.title} />
      <div className="mt-[27px] grid grid-cols-3 gap-3.5 max-md:grid-cols-1">
        {PROJECTS.map((project) => {
          const text = t.work.projects[project.id]
          return (
            <article
              key={project.id}
              className="overflow-hidden border border-brand/35 bg-card transition duration-200 hover:-translate-y-[5px] hover:border-brand hover:shadow-[0_14px_40px_rgba(0,0,0,.5)] max-md:grid max-md:grid-cols-[.85fr_1.15fr] max-sm:block"
            >
              {/* Mockup decorativo — estilos em styles/components.css */}
              <div className="project-preview" data-variant={project.variant} aria-hidden="true">
                <div className="preview-top">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="preview-sidebar" />
                <div className="preview-content">
                  <b />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="p-[18px]">
                <span className="text-[9px] font-bold tracking-[1.4px] text-brand">
                  {text.category}
                </span>
                <h3 className="mt-[7px] mb-2 font-display text-[19px] leading-[1.1] font-bold text-fg uppercase">
                  {text.title}
                </h3>
                <p className="copy min-h-[54px] text-[13px] leading-[1.4] text-fg-muted max-sm:min-h-0">
                  {text.description}
                </p>
                <a
                  href={project.href}
                  className="mt-[15px] flex items-center gap-[7px] text-[11px] font-bold tracking-[1px] text-brand"
                >
                  {t.work.details} <Icon name="arrow" size={17} />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
