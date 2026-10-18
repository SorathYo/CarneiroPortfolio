import { useLanguage } from "@/context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="flex justify-between px-[3vw] pt-7 pb-[35px] text-[9px] tracking-[1.6px] text-fg-faint max-sm:flex-col max-sm:gap-[18px] max-sm:px-[22px]">
      <span>{t.footer[0]}</span>
      <span>{t.footer[1]}</span>
    </footer>
  )
}
