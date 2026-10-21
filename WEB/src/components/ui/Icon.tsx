import type { ReactNode } from "react"
import type { IconName } from "@/types"

/** Caminhos SVG (viewBox 24x24, traço) de cada ícone do design. */
const ICON_PATHS: Record<IconName, ReactNode> = {
  home: <path d="m3 10 9-7 9 7v10h-6v-6H9v6H3Z" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12" />,
  skills: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 7 9-7" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.6a13.4 13.4 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 3.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 19c-3 .9-3-1.5-4.2-2" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="9" width="4" height="12" />
      <circle cx="5" cy="5" r="2" />
      <path d="M11 21v-7a5 5 0 0 1 10 0v7m-10-12v12" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z" />
      <path d="M8.5 8.4c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4-.1.6.6 1 1.4 1.8 2.5 2.4.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.3.6-.1.7-.5 1.2-1.1 1.5-.7.4-1.6.3-2.5 0-1.1-.4-2.3-1.2-3.4-2.3s-1.9-2.3-2.3-3.4c-.3-.8-.3-1.5-.1-1.8Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="m15 9 6-6m-4 0h4v4" />
    </>
  ),
  spark: (
    <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8Zm7 15 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7Z" />
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5Z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="12" cy="4" r="2" />
      <path d="M5 8h14m-7 0v5m0 0-4 8m4-8 4 8" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z" />,
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="1" />
      <path d="M8 22h8m-4-4v4" />
    </>
  ),
  language: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  maximize: (
    <>
      <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" />
    </>
  ),
  minimize: (
    <>
      <path d="M8 3v5H3m13-5v5h5M3 16h5v5m13-5h-5v5" />
    </>
  ),
}

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

/** Ícone decorativo (aria-hidden). O texto acessível fica no elemento pai. */
export default function Icon({ name, size = 20, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICON_PATHS[name]}
    </svg>
  )
}
