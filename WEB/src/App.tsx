import { Footer, MobileHeader, Sidebar, UtilityDock } from "@/components/layout"
import { About, Certificates, Contact, Hero, Work } from "@/sections"

/** Composição da página: menu lateral + controles + seções na ordem do design. */
export default function App() {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <main className="ml-[225px] overflow-hidden max-lg:ml-[190px] max-md:ml-0">
        <MobileHeader />
        <UtilityDock />

        <Hero />
        <About />
        <Work />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
