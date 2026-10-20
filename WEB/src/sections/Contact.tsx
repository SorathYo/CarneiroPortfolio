import { ButtonLink, Icon, Panel, SectionTitle } from "@/components/ui"
import { useLanguage } from "@/context"
import { SITE } from "@/data"

export default function Contact() {
  const { t } = useLanguage()
  const mailto = `mailto:${SITE.email}`

  return (
    <Panel
      id="contato"
      className="mt-[22px] grid grid-cols-[1.1fr_.8fr_auto] items-center gap-[4vw] px-[4vw] py-[38px] max-lg:grid-cols-[1fr_auto] max-md:grid-cols-1 max-md:justify-items-start max-sm:px-[22px] max-sm:py-8"
    >
      <div className="flex items-center gap-6 max-sm:flex-col max-sm:items-start">
        <div className="grid size-[76px] shrink-0 place-items-center rounded-full border border-brand text-brand shadow-[0_0_0_6px_color-mix(in_srgb,var(--brand)_7%,transparent),0_0_30px_color-mix(in_srgb,var(--brand)_18%,transparent)]">
          <Icon name="skills" size={35} />
        </div>
        <div>
          <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} />
          <p className="copy mt-[13px] text-fg-muted">{t.contact.copy}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 max-lg:hidden">
        <div className="flex items-center gap-[13px] text-[13px] text-fg-soft">
          <Icon name="mail" className="text-brand" />
          <span className="flex flex-col">
            <small className="mb-[3px] text-[8px] tracking-[1.5px] text-fg-faint">
              {t.contact.email}
            </small>
            {SITE.email}
          </span>
        </div>
        <a
          className="flex items-center gap-[13px] text-[13px] text-fg-soft"
          href={SITE.social.linkedin.url}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="linkedin" className="text-brand" />
          <span className="flex flex-col">
            <small className="mb-[3px] text-[8px] tracking-[1.5px] text-fg-faint">LINKEDIN</small>
            {SITE.social.linkedin.handle}
          </span>
        </a>
      </div>

      <ButtonLink href={mailto} compact>
        {t.contact.button}
      </ButtonLink>
    </Panel>
  )
}
