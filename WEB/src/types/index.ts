/** Idiomas suportados. Para adicionar um novo, veja docs/CONTEUDO-E-I18N.md */
export type Language = "pt" | "en"

/** Preferência de tema escolhida pelo usuário. `auto` segue o sistema operacional. */
export type Theme = "dark" | "light" | "auto"

/** Tema efetivamente aplicado no `<html data-theme>`. */
export type ResolvedTheme = Exclude<Theme, "auto">

/** Ids das seções — também são as âncoras (`#inicio`, `#sobre`, ...). */
export type SectionId =
  | "inicio"
  | "sobre"
  | "projetos"
  | "habilidades"
  | "certificados"
  | "contato"

export type IconName =
  | "home"
  | "user"
  | "code"
  | "skills"
  | "mail"
  | "arrow"
  | "github"
  | "linkedin"
  | "target"
  | "spark"
  | "layers"
  | "accessibility"
  | "sun"
  | "moon"
  | "monitor"
  | "language"
  | "close"
  | "maximize"
  | "minimize"

/** Variante visual do mockup de cada projeto (ver `styles/components.css`). */
export type ProjectVariant = "dashboard" | "store" | "portfolio"

export type ProjectId = "nexus-dashboard" | "arc-store" | "personal-portfolio"

export type CertificateId = "full-stack" | "other-courses"
