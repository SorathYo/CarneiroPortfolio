import type { CertificateId, ProjectId, SectionId, Theme } from "@/types"

/** Contrato de tradução: todo idioma precisa implementar exatamente esta forma. */
export interface Translations {
  nav: Record<SectionId, string>
  navLabel: string
  closeMenu: string
  role: string
  quote: string
  accessibility: {
    open: string
    title: string
    contrast: string
    font: string
    close: string
  }
  controls: {
    theme: string
    /** Texto do botão que troca para o OUTRO idioma. */
    language: string
    themes: Record<Theme, string>
  }
  hero: {
    kicker: string
    /** Cargos que se alternam no efeito de digitação. */
    roles: readonly string[]
    copy: string
    projects: string
    journey: string
    values: readonly string[]
    valuesLabel: string
    scroll: string
    photoAlt: string
  }
  about: {
    eyebrow: string
    title: string
    copy: string
    /** Exatamente 3 itens (code, spark, target). */
    principles: readonly [string, string, string]
    journey: string
    journeyCopy: string
  }
  stack: { eyebrow: string; title: string }
  work: {
    eyebrow: string
    title: string
    details: string
    projects: Record<
      ProjectId,
      { title: string; category: string; description: string }
    >
  }
  certificates: {
    eyebrow: string
    title: string
    intro: string
    credential: string
    note: string
    viewerLabel: string
    closeViewer: string
    viewMicroCertificates: string
    hideMicroCertificates: string
    viewOtherCourses: string
    hideOtherCourses: string
    fullScreen: string
    exitFullScreen: string
    previousPage: string
    nextPage: string
    loadingPdf: string
    pdfError: string
    pageCount: (page: number, count: number) => string
    items: Record<
      CertificateId,
      { title: string; issuer: string; description: string }
    >
    otherCourseGroups: Record<"other" | "java" | "programming-logic", string>
  }
  contact: {
    eyebrow: string
    title: string
    copy: string
    email: string
    linkedin: string
    instagram: string
    whatsapp: string
  }
  footer: readonly [string, string]
}
