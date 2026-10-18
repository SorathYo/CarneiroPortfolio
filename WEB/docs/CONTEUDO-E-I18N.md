# Conteúdo e i18n

## Onde editar cada coisa

| O que | Onde |
| --- | --- |
| E-mail, GitHub, LinkedIn, nome, foto | `src/data/site.ts` |
| Habilidades (tecnologias) | `src/data/skills.ts` |
| Ordem/ícones do menu | `src/data/navigation.ts` |
| Projetos: id, mockup, link | `src/data/projects.ts` |
| Certificados: id, ano, link | `src/data/certificates.ts` |
| Todos os textos visíveis | `src/i18n/locales/pt.ts` e `en.ts` |
| Foto | `public/assets/caio-portrait.jpg` |
| Título/descrição da aba e SEO | `index.html` |

## Adicionar um projeto

1. Inclua o id em `types/index.ts` → `ProjectId`.
2. Adicione em `data/projects.ts`:
   ```ts
   { id: "meu-app", variant: "dashboard", href: "https://github.com/voce/meu-app" }
   ```
   `variant`: `dashboard`, `store` ou `portfolio` (mockup do card).
3. Adicione o texto nos **dois** locales em `work.projects`:
   ```ts
   "meu-app": { title: "Meu App", category: "WEB APP", description: "..." }
   ```
O TypeScript acusa erro se faltar o texto em algum idioma.

## Adicionar um certificado

Mesmo fluxo: `CertificateId` em `types`, item em `data/certificates.ts` (`year`, `href` da credencial) e texto (`title`, `issuer`, `description`) em `certificates.items` nos dois locales. Antes de publicar, apague o texto de rascunho `certificates.note` nos locales (e o parágrafo que o exibe em `sections/Certificates.tsx`).

## Adicionar uma habilidade

Inclua a string em `data/skills.ts`. A numeração (`01`, `02`...) é automática.

## Adicionar um idioma

1. `types/index.ts`: `export type Language = "pt" | "en" | "es"`
2. Crie `i18n/locales/es.ts` com `export const es: Translations = {...}` (copie `en.ts`).
3. `i18n/index.ts`: inclua `es` em `translations`.
4. `constants/index.ts`: adicione em `LANGUAGES` e em `HTML_LANG` (`es: "es"`).
5. O botão de idioma hoje **alterna entre dois** (`toggleLanguage` em `LanguageContext.tsx`). Para 3+ idiomas, troque por um seletor ou faça o toggle percorrer `LANGUAGES`.

## Efeito de digitação

Nome vem de `SITE.displayName`; os cargos alternados vêm de `hero.roles` em cada locale (quantos quiser).

## Atenção

- Âncoras (`#sobre`, `#projetos`...) são os `SectionId` e não mudam com o idioma.
- Rodapé traz o ano fixo (`2025`) nos locales — atualize em `footer`.
