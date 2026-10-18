# Deploy

O build é 100% estático (`pnpm build` → pasta `dist/`).

## Vercel / Netlify

- Build command: `pnpm build` (ou `npm run build`)
- Output directory: `dist`
- Node: 22

Não há rotas client-side, então não precisa de regra de rewrite.

## GitHub Pages

1. Se o site ficar em `https://usuario.github.io/repositorio/`, defina `base: "/repositorio/"` em `vite.config.ts`.
2. Os caminhos de `public/` usados no código (`SITE.portrait = "/assets/..."`, favicon em `index.html`) precisam respeitar essa base — use `import.meta.env.BASE_URL` como prefixo.
3. Publique o conteúdo de `dist/` (ex.: GitHub Action `actions/deploy-pages`).

## Checklist antes de publicar

- [ ] E-mail e links reais em `data/site.ts`
- [ ] Nota de rascunho dos certificados removida
- [ ] Projetos e certificados com links reais
- [ ] `title`, `description` e `og:*` revisados em `index.html`
- [ ] Imagem Open Graph (opcional): adicione `<meta property="og:image">`
- [ ] Foto otimizada (hoje ~750 KB; considere WebP/AVIF)
- [ ] Testado nos temas claro/escuro e em celular
