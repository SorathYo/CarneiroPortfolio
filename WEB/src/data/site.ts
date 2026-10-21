/**
 * Informações pessoais e links. Troque pelos seus dados reais.
 * (E-mail e redes abaixo são os placeholders do design.)
 */
export const SITE = {
  name: "Caio Carneiro",
  /** Nome em caixa-alta usado no efeito de digitação do Hero. */
  displayName: "CAIO CARNEIRO",
  initials: "CC",
  email: "caiocarneirobastos2005@gmail.com",
  portraits: {
    dark: "/assets/ImagemNoite.png",
    darkMobile: "/assets/caio-portrait.jpg",
    light: "/assets/ImagemDia.png",
    lightMobile: "/assets/caio-portrait-2.jpeg",
  },
  social: {
    github: { label: "GitHub", url: "https://github.com/SorathYo" },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/caio-carneiro-bastos",
      handle: "/in/caio-carneiro-bastos",
    },
    instagram: {
      label: "Instagram",
      url: "https://www.instagram.com/caio.bcarneiro",
      handle: "@caio.bcarneiro",
    },
    whatsapp: {
      label: "WhatsApp",
      url: "https://wa.me/5521967032968",
      handle: "+55 21 96703-2968",
    },
  },
} as const
