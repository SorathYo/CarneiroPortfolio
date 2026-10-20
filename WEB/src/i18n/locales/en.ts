import type { Translations } from "../types"

export const en: Translations = {
  nav: {
    inicio: "Home",
    sobre: "About",
    projetos: "Projects",
    habilidades: "Skills",
    certificados: "Certificates",
    contato: "Contact",
  },
  navLabel: "Main navigation",
  closeMenu: "Close menu",
  role: "FULL STACK DEVELOPER",
  quote: "“Discipline is what turns potential into results.”",
  accessibility: {
    open: "Open accessibility options",
    title: "Accessibility",
    contrast: "High contrast",
    font: "Increase font size",
    close: "Close accessibility options",
  },
  controls: {
    theme: "Theme",
    language: "Mudar idioma para português",
    themes: { dark: "dark", light: "light", auto: "automatic" },
  },
  hero: {
    kicker: "< PORTFOLIO />",
    roles: ["Full Stack Developer", "future software engineer"],
    copy: "I turn ideas into efficient, modern digital solutions built with purpose.",
    projects: "VIEW PROJECTS",
    journey: "DISCOVER MY JOURNEY",
    values: ["FOCUS", "DISCIPLINE", "GROWTH", "RESULTS"],
    valuesLabel: "Professional values",
    scroll: "SCROLL",
    photoAlt: "Caio Carneiro in front of an illuminated Ferris wheel",
  },
  about: {
    eyebrow: "01 / ABOUT",
    title: "I build solutions that make a difference.",
    copy: "I'm Caio Carneiro, a full stack developer passionate about turning complex challenges into simple digital experiences. I enjoy combining clean code, functional design, and result-oriented decisions.",
    principles: ["Clean code", "Creative solutions", "Results focused"],
    journey: "MY JOURNEY",
    journeyCopy:
      "Since starting in technology, I have been driven by curiosity and a desire to grow. Today, I seek new challenges to sharpen my skills and contribute to amazing projects.",
  },
  stack: { eyebrow: "02 / STACK", title: "Skills" },
  work: {
    eyebrow: "03 / WORK",
    title: "Featured projects",
    details: "VIEW DETAILS",
    projects: {
      "nexus-dashboard": {
        title: "Nexus Dashboard",
        category: "MANAGEMENT SYSTEM",
        description: "A complete platform for managing tasks, data, and teams.",
      },
      "arc-store": {
        title: "Arc Store",
        category: "E-COMMERCE",
        description:
          "A fast, responsive shopping experience focused on conversion.",
      },
      "personal-portfolio": {
        title: "Personal Portfolio",
        category: "DIGITAL IDENTITY",
        description:
          "A digital presence designed to showcase work and personality.",
      },
      "madu-marketplace": {
        title: "Madu Marketplace",
        category: "WEB PLATFORM",
        description: "A web platform created to showcase a tattoo artist's work.",
      },
    },
  },
  certificates: {
    eyebrow: "04 / ACHIEVEMENTS",
    title: "Certificates",
    intro:
      "Continuous learning turned into practical knowledge. Here are some of the courses that are part of my journey.",
    credential: "VIEW CREDENTIAL",
    note: "Explore the Full Stack program, its microcertificates, and other courses.",
    viewerLabel: "Certificate viewer",
    closeViewer: "Close viewer",
    viewMicroCertificates: "VIEW MICROCERTIFICATES",
    hideMicroCertificates: "HIDE MICROCERTIFICATES",
    viewOtherCourses: "VIEW OTHER COURSES",
    hideOtherCourses: "HIDE OTHER COURSES",
    fullScreen: "VIEW FULL SCREEN",
    exitFullScreen: "EXIT FULL SCREEN",
    previousPage: "Previous page",
    nextPage: "Next page",
    loadingPdf: "Loading certificate...",
    pdfError: "Could not load this certificate. Please try again later.",
    pageCount: (page, count) => `PAGE ${page} OF ${count}`,
    otherCourseGroups: {
      other: "Additional courses",
      java: "Java",
      "programming-logic": "Programming logic",
    },
    items: {
      "full-stack": {
        title: "Full Stack Program",
        issuer: "Educational institution",
        description: "Building modern applications from front end to back end.",
      },
      "other-courses": {
        title: "Other courses",
        issuer: "Courses and microcertificates",
        description:
          "Additional training in Java, programming logic, design, and software practices.",
      },
    },
  },
  contact: {
    eyebrow: "05 / CONTACT",
    title: "Let's create something amazing?",
    copy: "I'm open to new opportunities, collaborations, and ambitious projects.",
    email: "EMAIL",
    button: "GET IN TOUCH",
  },
  footer: [
    "BUILT WITH DEDICATION AND LOTS OF COFFEE",
    "CAIO CARNEIRO / PORTFOLIO / 2025",
  ],
}
