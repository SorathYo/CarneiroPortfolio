import type { Translations } from "../types"

export const pt: Translations = {
  nav: {
    inicio: "Início",
    sobre: "Sobre",
    projetos: "Projetos",
    habilidades: "Habilidades",
    certificados: "Certificados",
    contato: "Contato",
  },
  navLabel: "Navegação principal",
  role: "DESENVOLVEDOR FULL STACK",
  quote: "“Disciplina é o que transforma potencial em resultado.”",
  accessibility: {
    open: "Abrir opções de acessibilidade",
    title: "Acessibilidade",
    contrast: "Alto contraste",
    font: "Aumentar fonte",
    close: "Fechar opções de acessibilidade",
  },
  controls: {
    theme: "Tema",
    language: "Alterar idioma para inglês",
    themes: { dark: "escuro", light: "claro", auto: "automático" },
  },
  hero: {
    kicker: "< PORTFÓLIO />",
    roles: ["Desenvolvedor Full Stack", "futuro engenheiro de software"],
    copy: "Transformo ideias em soluções digitais eficientes, modernas e construídas com propósito.",
    projects: "VER PROJETOS",
    journey: "CONHEÇA MINHA JORNADA",
    values: ["FOCO", "DISCIPLINA", "EVOLUÇÃO", "RESULTADOS"],
    valuesLabel: "Valores profissionais",
    scroll: "ROLAR",
    photoAlt: "Caio Carneiro em frente a uma roda-gigante iluminada",
  },
  about: {
    eyebrow: "01 / SOBRE",
    title: "Construo soluções que fazem a diferença.",
    copy: "Sou Caio Carneiro, desenvolvedor full stack apaixonado por transformar desafios complexos em experiências digitais simples. Gosto de unir código limpo, design funcional e decisões orientadas a resultado.",
    principles: ["Código limpo", "Soluções criativas", "Foco em resultados"],
    journey: "MINHA JORNADA",
    journeyCopy:
      "Desde que comecei na tecnologia, sou movido por curiosidade e vontade de evoluir. Hoje busco novos desafios para aprimorar minhas habilidades e contribuir com projetos incríveis.",
  },
  stack: { eyebrow: "02 / STACK", title: "Habilidades" },
  work: {
    eyebrow: "03 / TRABALHOS",
    title: "Projetos em destaque",
    details: "VER DETALHES",
    projects: {
      "nexus-dashboard": {
        title: "Nexus Dashboard",
        category: "SISTEMA DE GESTÃO",
        description:
          "Plataforma completa para gerenciamento de tarefas, dados e equipes.",
      },
      "arc-store": {
        title: "Arc Store",
        category: "E-COMMERCE",
        description:
          "Experiência de compra rápida, responsiva e focada em conversão.",
      },
      "personal-portfolio": {
        title: "Portfólio Pessoal",
        category: "IDENTIDADE DIGITAL",
        description:
          "Uma presença digital criada para apresentar trabalho e personalidade.",
      },
    },
  },
  certificates: {
    eyebrow: "04 / CONQUISTAS",
    title: "Certificados",
    intro:
      "Aprendizado contínuo transformado em conhecimento prático. Aqui estão algumas das formações que fazem parte da minha jornada.",
    credential: "VER CREDENCIAL",
    note: "Consulte a formação Full Stack, seus microcertificados e outros cursos.",
    viewerLabel: "Visualizador de certificado",
    closeViewer: "Fechar visualizador",
    viewMicroCertificates: "VER MICROCERTIFICADOS",
    hideMicroCertificates: "OCULTAR MICROCERTIFICADOS",
    viewOtherCourses: "VER OUTROS CURSOS",
    hideOtherCourses: "OCULTAR OUTROS CURSOS",
    fullScreen: "VER EM TELA CHEIA",
    exitFullScreen: "SAIR DA TELA CHEIA",
    previousPage: "Página anterior",
    nextPage: "Próxima página",
    loadingPdf: "Carregando certificado...",
    pdfError: "Não foi possível carregar este certificado. Tente novamente mais tarde.",
    pageCount: (page, count) => `PÁGINA ${page} DE ${count}`,
    otherCourseGroups: {
      other: "Cursos complementares",
      java: "Java",
      "programming-logic": "Lógica de programação",
    },
    items: {
      "full-stack": {
        title: "Formação Full Stack",
        issuer: "Instituição de ensino",
        description:
          "Desenvolvimento de aplicações modernas do front-end ao back-end.",
      },
      "other-courses": {
        title: "Outros cursos",
        issuer: "Cursos e microcertificados",
        description:
          "Formações complementares em Java, lógica de programação, design e boas práticas.",
      },
    },
  },
  contact: {
    eyebrow: "05 / CONTATO",
    title: "Vamos criar algo incrível?",
    copy: "Estou aberto a novas oportunidades, colaborações e projetos ambiciosos.",
    email: "E-MAIL",
    button: "ENTRAR EM CONTATO",
  },
  footer: [
    "DESENVOLVIDO COM DEDICAÇÃO E MUITO CAFÉ",
    "CAIO CARNEIRO / PORTFÓLIO / 2025",
  ],
}
