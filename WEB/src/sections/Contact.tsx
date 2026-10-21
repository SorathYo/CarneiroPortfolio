import { Icon, Panel, SectionTitle } from "@/components/ui"
import { useLanguage } from "@/context"
import { SITE } from "@/data"

export default function Contact() {
  const { t } = useLanguage()
  const contacts = [
    {
      label: t.contact.email,
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      icon: "mail",
      external: false,
    },
    {
      label: t.contact.linkedin,
      value: SITE.social.linkedin.handle,
      href: SITE.social.linkedin.url,
      icon: "linkedin",
      external: true,
    },
    {
      label: t.contact.instagram,
      value: SITE.social.instagram.handle,
      href: SITE.social.instagram.url,
      icon: "instagram",
      external: true,
    },
    {
      label: t.contact.whatsapp,
      value: SITE.social.whatsapp.handle,
      href: SITE.social.whatsapp.url,
      icon: "whatsapp",
      external: true,
    },
  ] as const

  return (
    <Panel
      id="contato"
      className="mt-[22px] grid grid-cols-[1.1fr_1fr] items-center gap-[4vw] px-[4vw] py-[38px] max-lg:grid-cols-1 max-sm:px-[22px] max-sm:py-8"
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

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 max-sm:gap-x-4">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            className="flex min-w-0 items-center gap-[13px] text-[13px] text-fg-soft"
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noreferrer" : undefined}
          >
            <Icon name={contact.icon} className="shrink-0 text-brand" />
            <span className="flex min-w-0 flex-col">
              <small className="mb-[3px] text-[8px] tracking-[1.5px] text-fg-faint">
                {contact.label}
              </small>
              <span className="break-all">{contact.value}</span>
            </span>
          </a>
        ))}
      </div>
    </Panel>
  )
}
