import { ButtonLink, Gear } from "@/components/ui"
import { useLanguage, useTheme } from "@/context"
import { SITE } from "@/data"
import { useTypewriter } from "@/hooks"

/** Primeira dobra: nome/cargo digitados, texto de apresentação, foto e valores. */
export default function Hero() {
  const { t, language } = useLanguage()
  const { resolvedTheme } = useTheme()
  const typed = useTypewriter(SITE.displayName, t.hero.roles, language)
  const isDark = resolvedTheme === "dark"

  return (
    <section
      id="inicio"
      className="relative min-h-[690px] overflow-hidden border-b border-line bg-hero max-md:min-h-[760px] max-md:pt-[68px] max-sm:min-h-[720px]"
    >
      <div className="hero-grid" aria-hidden="true" />
      <Gear className="right-[4%] -bottom-12 z-[1] w-[350px] opacity-65 max-md:hidden" />
      <Gear className="top-[35px] right-[18%] z-[1] w-40 opacity-25 [animation-direction:reverse] max-md:hidden" />

      <div className="relative z-[6] w-[min(610px,55%)] pt-[140px] pb-[90px] pl-[5vw] max-lg:w-3/5 max-lg:pl-[4vw] max-md:absolute max-md:inset-x-[22px] max-md:top-auto max-md:bottom-[58px] max-md:w-auto max-md:p-0">
        <p className="mb-3 font-display text-[17px] font-bold tracking-[2px] text-brand">
          {t.hero.kicker}
        </p>

        {/* O texto digitado é decorativo; leitores de tela recebem o nome completo. */}
        <h1
          aria-label={SITE.displayName}
          className="font-display text-[clamp(56px,6.2vw,98px)] leading-[.88] font-black tracking-[-2px] text-brand uppercase [text-shadow:0_0_30px_color-mix(in_srgb,var(--brand)_20%,transparent)] max-lg:text-[clamp(52px,6.5vw,77px)] max-md:text-[clamp(54px,16vw,82px)] max-sm:tracking-[-1px]"
        >
          <span aria-hidden="true" className="text-fg">
            {typed.name.slice(0, 4)}
          </span>
          <span aria-hidden="true">{typed.name.slice(4)}</span>
        </h1>

        <h2
          aria-label={typed.fullRole}
          className="mt-[19px] mb-[25px] min-h-[1em] font-display text-[clamp(20px,2.1vw,30px)] leading-none font-bold tracking-[4px] text-fg/90 max-md:text-xl max-md:tracking-[2.5px]"
        >
          {typed.role}
          <span aria-hidden="true" className="terminal-cursor" />
        </h2>

        <p className="copy max-w-[470px] text-lg leading-normal text-fg-soft max-md:max-w-[510px] max-md:text-base">
          {t.hero.copy}
        </p>

        <div className="mt-[38px] flex items-center gap-[30px] max-md:mt-7 max-sm:flex-col max-sm:items-start max-sm:gap-[18px]">
          <ButtonLink href="#projetos">{t.hero.projects}</ButtonLink>
          <a
            className="border-b border-fg/25 text-xs font-semibold tracking-[1.4px] text-fg-muted"
            href="#sobre"
          >
            {t.hero.journey}
          </a>
        </div>
      </div>

      <div className="hero-photo absolute inset-0 z-[1] max-md:top-[68px]">
        <picture
          className={`hero-photo-image hero-photo-image--dark ${isDark ? "opacity-100" : "opacity-0"}`}
        >
          <source media="(max-width: 800px)" srcSet={SITE.portraits.darkMobile} />
          <img
            src={SITE.portraits.dark}
            alt={t.hero.photoAlt}
            className="hero-photo-mobile-image h-full w-full object-cover object-[75%_50%] saturate-[.75] contrast-[1.16] max-md:object-[50%_25%]"
          />
        </picture>
        <picture
          className={`hero-photo-image hero-photo-image--light ${isDark ? "opacity-0" : "opacity-100"}`}
        >
          <source media="(max-width: 800px)" srcSet={SITE.portraits.lightMobile} />
          <img
            src={SITE.portraits.light}
            alt=""
            aria-hidden="true"
            className="hero-photo-mobile-image h-full w-full object-cover object-[75%_50%] max-md:object-[100%_50%]"
          />
        </picture>
      </div>

      <div
        aria-label={t.hero.valuesLabel}
        className="absolute top-[170px] right-[2vw] z-[7] flex flex-col gap-[3px] border-l border-brand bg-hero/50 px-[17px] py-[18px] font-display text-xs leading-[1.1] font-bold tracking-[1.5px] text-brand max-lg:hidden"
      >
        {t.hero.values.map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>

      <div className="absolute right-[25px] bottom-8 z-[8] flex rotate-90 items-center gap-2.5 text-[9px] tracking-[2px] text-fg-muted max-md:hidden">
        {t.hero.scroll}
        <span className="h-px w-[35px] bg-brand" />
      </div>

      <div className="hero-fade" aria-hidden="true" />
    </section>
  )
}
