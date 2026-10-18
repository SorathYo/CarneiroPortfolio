# Portfólio — Caio Carneiro

Portfólio pessoal one-page, bilíngue (PT/EN), com tema escuro/claro/automático e opções de acessibilidade.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4

## Começando

Requisitos: Node 22+ (veja `.mise.toml`) e pnpm ou npm.

```bash
pnpm install        # ou: npm install
pnpm dev            # http://localhost:5173
pnpm build          # checa tipos e gera /dist
pnpm preview        # serve o build local
```

| Script      | O que faz                              |
| ----------- | -------------------------------------- |
| `dev`       | Servidor de desenvolvimento com HMR    |
| `build`     | `tsc --noEmit` + `vite build`          |
| `preview`   | Serve o build de produção localmente   |
| `typecheck` | Só a checagem de tipos                 |
| `format`    | Formata o código (oxfmt)               |

## Estrutura

```
src/
├── main.tsx              Entrada: providers + estilos
├── App.tsx               Composição da página
├── components/
│   ├── ui/               Peças reutilizáveis (Icon, Panel, ButtonLink, Gear...)
│   ├── layout/           Sidebar, MobileHeader, UtilityDock, Footer
│   └── accessibility/    Menu de acessibilidade e switch
├── sections/             Hero, About, Work (Skills + Projects), Certificates, Contact
├── context/              Theme, Language e Accessibility (estado global)
├── hooks/                usePersistentState, useTypewriter, useDismiss, useActiveSection
├── i18n/                 Contrato de tradução + locales/pt.ts e en.ts
├── data/                 Conteúdo neutro ao idioma (projetos, skills, site, menu)
├── constants/            Chaves do localStorage, idiomas, temas
├── types/                Tipos compartilhados
├── utils/                cn, storage, format
└── styles/               theme.css (tokens), base.css, components.css
```

## Documentação

- [Arquitetura](docs/ARQUITETURA.md) — pastas, fluxo de dados, convenções
- [Estilização](docs/ESTILIZACAO.md) — tokens, temas, breakpoints, Tailwind v4
- [Conteúdo e i18n](docs/CONTEUDO-E-I18N.md) — como editar textos, projetos, certificados e idiomas
- [Deploy](docs/DEPLOY.md) — publicar na Vercel, Netlify ou GitHub Pages

## Para personalizar primeiro

1. `src/data/site.ts` — e-mail, GitHub e LinkedIn (hoje são placeholders).
2. `src/i18n/locales/*.ts` — textos, projetos e certificados reais.
3. `public/assets/caio-portrait.jpg` — sua foto.
4. `src/i18n/locales/*.ts` → `certificates.note` — remova essa nota de rascunho antes de publicar.
5. `index.html` — título e descrição (SEO).
