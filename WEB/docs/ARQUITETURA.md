# Arquitetura

## Princípios

1. **Conteúdo separado de apresentação.** Textos vivem em `i18n/`, dados neutros em `data/`, visual em `components/` e `sections/`.
2. **Estado global mínimo**, via Context API: tema, idioma e acessibilidade. Nada mais precisa ser global.
3. **Componentes pequenos e tipados.** Cada arquivo tem uma responsabilidade; pastas expõem um `index.ts` (barrel) para imports limpos.
4. **Alias `@/`** aponta para `src/` (configurado em `vite.config.ts` e `tsconfig.json`).

## Pastas

| Pasta | Responsabilidade |
| --- | --- |
| `components/ui` | Blocos visuais sem regra de negócio: `Icon`, `Panel`, `SectionTitle`, `ButtonLink`, `Gear`, `UtilityButton`. |
| `components/layout` | Estrutura fixa da página: `Sidebar` responsiva, `SidebarNavigation` compartilhada, `MobileHeader`, `UtilityDock`, `Footer`. |
| `components/accessibility` | `AccessibilityMenu` (popover) e `SwitchRow` (interruptor `role="switch"`). |
| `sections` | Uma seção da página por arquivo. `Work` agrupa `Skills` + `Projects` num painel duplo. |
| `context` | `ThemeContext`, `LanguageContext`, `AccessibilityContext` + `AppProviders`. |
| `hooks` | Lógica reutilizável (ver abaixo). |
| `i18n` | `types.ts` (contrato `Translations`) e `locales/pt.ts`, `locales/en.ts`. |
| `data` | `site`, `navigation`, `skills`, `projects`, `certificates`. |
| `constants` | Chaves do `localStorage`, listas de idiomas/temas, mapeamento do `<html lang>`. |
| `types` | `Language`, `Theme`, `SectionId`, `IconName`, `ProjectId`... |
| `utils` | `cn` (junta classes), `storage` (localStorage seguro + codecs), `format`. |
| `styles` | `theme.css`, `base.css`, `components.css` (ver [Estilização](ESTILIZACAO.md)). |

## Fluxo de dados

```
main.tsx
 └─ <AppProviders>                  Language → Theme → Accessibility
     └─ <App>
         ├─ Sidebar / UtilityDock / MobileHeader / Footer
         └─ Hero, About, Work, Certificates, Contact
              │  useLanguage() → t (textos do idioma atual)
              └─ data/* → ids, ordem e valores neutros ao idioma
```

- Componentes leem textos com `const { t } = useLanguage()` e dados com `import { PROJECTS } from "@/data"`.
- Projetos e certificados combinam as duas fontes: `data/` traz `id`, `variant`, `year`, `href`; `i18n/` traz título, categoria e descrição pelo mesmo `id`.

## Contexts

| Hook | Expõe | Efeito colateral |
| --- | --- | --- |
| `useLanguage()` | `language`, `setLanguage`, `toggleLanguage`, `t` | Atualiza `<html lang>` e salva no `localStorage`. |
| `useTheme()` | `theme`, `setTheme`, `cycleTheme` | Define `<html data-theme="dark|light">`; em `auto` segue o sistema. |
| `useAccessibility()` | `highContrast`, `largeText`, toggles | Liga as classes `high-contrast` / `large-text` no `<html>`. |

Todos lançam erro claro se usados fora do provider. Preferências persistem via `usePersistentState` (valores inválidos no storage são descartados).

## Hooks

- `usePersistentState(key, fallback, codec)` — `useState` + `localStorage` validado.
- `useTypewriter(nome, cargos, resetKey)` — efeito de digitação do Hero; respeita `prefers-reduced-motion`.
- `useDismiss(ref, onDismiss, active)` — fecha popover ao clicar fora ou apertar Esc.
- `useActiveSection(ids)` — destaca a última seção que alcançou a linha de leitura ao rolar ou redimensionar a página.

No celular, o `MobileHeader` abre a mesma navegação da sidebar em um painel deslizante; selecionar um item navega até a seção e fecha o painel.

## Convenções

- Componentes: `export default`, um por arquivo, nome em PascalCase.
- Imports sempre via `@/...`; dentro da mesma pasta, relativo.
- Classes condicionais com `cn(...)`. **Não passe classes conflitantes** (ex.: `w-4` + `w-8`): não há `tailwind-merge`; use props/variantes.
- Texto visível nunca fica hard-coded no componente — vai para `i18n/locales`.
- Novo ícone: adicione o nome em `types/IconName` e o SVG em `components/ui/Icon.tsx`.

## Adicionando uma seção

1. Crie `src/sections/MinhaSecao.tsx` usando `<Panel id="minha-secao">`.
2. Adicione o id em `types/SectionId`, o item em `data/navigation.ts` e o rótulo em `nav` nos dois locales.
3. Renderize em `App.tsx` e exporte em `sections/index.ts`.
