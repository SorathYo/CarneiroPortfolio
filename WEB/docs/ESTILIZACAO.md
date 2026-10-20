# Estilização

O projeto usa **Tailwind CSS v4** (plugin `@tailwindcss/vite`, sem `tailwind.config.js`). A configuração do tema é feita em CSS.

## Arquivos

| Arquivo | Papel |
| --- | --- |
| `styles/index.css` | Importa o Tailwind e os demais arquivos. |
| `styles/theme.css` | **Tokens**: cores por tema, fontes, breakpoints, animação, sombras. |
| `styles/base.css` | Estilos globais (`html`, `body`, foco) e o modo "fonte maior". |
| `styles/components.css` | Visuais especiais: cantos recortados, overlays do Hero, mockups de projeto. |

## Tokens de cor

As cores são variáveis CSS que mudam conforme o tema e viram utilitários (`bg-bg`, `text-fg`, `border-line`...) via `@theme inline`.

| Utilitário | Uso |
| --- | --- |
| `brand` | Vermelho de destaque (`text-brand`, `border-brand/40`) |
| `bg`, `sidebar`, `panel`, `hero`, `card`, `control`, `track` | Superfícies |
| `fg`, `fg-soft`, `fg-muted`, `fg-faint` | Texto: título → parágrafo → secundário → rótulo pequeno |
| `line`, `card-line` | Bordas de seção e de cards |
| `nav` | Links do menu lateral |

Para mudar a identidade visual, edite só o bloco `:root` (escuro) e `:root[data-theme="light"]` em `theme.css`.

## Temas

- `ThemeContext` define `data-theme="dark|light"` no `<html>`. A escolha `auto` segue o sistema.
- O Hero usa `ImagemNoite.png` no tema escuro e `ImagemDia.png` no tema claro em telas maiores; em celulares usa `caio-portrait.jpg` no tema escuro e `caio-portrait-2.jpeg` no tema claro. A troca faz crossfade e respeita movimento reduzido.
- **Alto contraste** (`.high-contrast`) reforça `brand`, bordas e cores de texto — funciona em ambos os temas.
- **Fonte maior** (`.large-text`) aumenta o `rem` (112,5%) e as classes `.copy` (parágrafos de leitura). Se criar um novo parágrafo de leitura, adicione a classe `copy`.

## Breakpoints

O design foi desenhado desktop-first, então o projeto usa variantes `max-*`:

| Variante | Largura | Mudança principal |
| --- | --- | --- |
| `max-lg:` | ≤ 1180px | Sidebar estreita (190px), colunas empilham |
| `max-md:` | ≤ 800px | Sidebar some, entra `MobileHeader`, layout de celular |
| `max-sm:` | ≤ 540px | Cards e botões em coluna única |

## Tipografia

- **Barlow Condensed** (`font-display`) — títulos, rótulos, marca.
- **Rajdhani** (`font-body`) — texto corrido (padrão do `html`).
- Carregadas por `<link>` no `index.html` (Google Fonts).

## Quando usar `components.css`

Prefira utilitários no JSX. Use CSS próprio apenas para o que é ilegível/impossível em utilitários:
`clip-cut`, `clip-cut-sm`, `clip-panel` (cantos recortados), `.hero-photo` / `.hero-grid` / `.hero-fade` (gradientes sobrepostos) e `.project-preview` (mockups, por `data-variant`).

## Diferenças em relação ao arquivo do design

Mantive o visual; só corrigi o que estava quebrado:

- **Tema claro:** no design original o nome e o cargo do Hero e a citação da sidebar continuavam em cores claras e ficavam ilegíveis; agora seguem os tokens do tema.
- **Foco visível** (`:focus-visible`) em todos os elementos interativos.
- **Menu lateral** destaca a seção atual durante a rolagem (antes "Início" ficava sempre ativo).
- O `h2` do cargo mantém altura mínima enquanto digita (evita "pulo" de layout).
- Valores salvos no `localStorage` agora são validados.
- Removidos os plugins específicos do Figma Make (`vite.config.ts`, `.figma/`). O `noindex` do `site.json` original também não foi levado: o site é indexável.
