import { useEffect, useState } from "react"

type Phase = "name" | "typing" | "waiting" | "deleting"

/**
 * Efeito "terminal" do Hero:
 *  1. digita o nome;
 *  2. digita um cargo, espera, apaga, e passa para o próximo (em loop).
 *
 * Reinicia quando `resetKey` muda (ex.: troca de idioma).
 * Com `prefers-reduced-motion`, mostra o texto completo sem animar.
 */
export function useTypewriter(
  fullName: string,
  roles: readonly string[],
  resetKey: string,
) {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [phase, setPhase] = useState<Phase>("name")
  const [roleIndex, setRoleIndex] = useState(0)

  // Recomeça do zero quando o idioma muda.
  useEffect(() => {
    setName("")
    setRole("")
    setPhase("name")
    setRoleIndex(0)
  }, [resetKey])

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (reducedMotion) {
      setName(fullName)
      setRole(roles[roleIndex])
      return
    }

    const currentRole = roles[roleIndex]
    let delay: number

    if (phase === "name") delay = name.length < fullName.length ? 95 : 350
    else if (phase === "typing") delay = role.length < currentRole.length ? 72 : 0
    else if (phase === "waiting") delay = 5000
    else delay = role.length ? 38 : 300 // deleting

    const timer = window.setTimeout(() => {
      if (phase === "name") {
        if (name.length < fullName.length) setName(fullName.slice(0, name.length + 1))
        else setPhase("typing")
      } else if (phase === "typing") {
        if (role.length < currentRole.length) setRole(currentRole.slice(0, role.length + 1))
        else setPhase("waiting")
      } else if (phase === "waiting") {
        setPhase("deleting")
      } else if (role.length) {
        setRole(role.slice(0, -1))
      } else {
        setRoleIndex((value) => (value + 1) % roles.length)
        setPhase("typing")
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [fullName, name, phase, role, roleIndex, roles])

  return { name, role, fullRole: roles[roleIndex] }
}
