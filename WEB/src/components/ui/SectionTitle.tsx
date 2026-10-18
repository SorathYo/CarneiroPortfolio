interface SectionTitleProps {
  /** Rótulo pequeno acima do título, ex.: "01 / SOBRE". */
  eyebrow?: string
  title: string
}

export default function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div>
      {eyebrow && (
        <span className="block font-display text-xs leading-none font-bold tracking-[2px] text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-[9px] font-display text-[clamp(25px,2.4vw,36px)] leading-[1.1] font-bold tracking-[1px] text-fg uppercase">
        {title}
      </h2>
    </div>
  )
}
