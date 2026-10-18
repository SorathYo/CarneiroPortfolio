interface SwitchRowProps {
  label: string
  checked: boolean
  onToggle: () => void
}

/** Linha com rótulo + interruptor (role="switch"), usada no menu de acessibilidade. */
export default function SwitchRow({ label, checked, onToggle }: SwitchRowProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onToggle}
      className="group copy flex w-full cursor-pointer items-center justify-between border-t border-line bg-transparent px-[11px] py-[13px] text-left font-body text-sm font-semibold text-fg"
    >
      <span>{label}</span>
      {/* Trilho + bolinha. Estado "ligado" vem do aria-checked do botão pai. */}
      <i
        aria-hidden="true"
        className="relative h-[18px] w-[34px] rounded-full border border-fg-faint bg-track transition after:absolute after:top-[3px] after:left-[3px] after:size-2.5 after:rounded-full after:bg-fg-muted after:transition-all group-aria-checked:border-brand group-aria-checked:bg-brand/20 group-aria-checked:after:left-[19px] group-aria-checked:after:bg-brand group-aria-checked:after:shadow-[0_0_8px_var(--brand)]"
      />
    </button>
  )
}
