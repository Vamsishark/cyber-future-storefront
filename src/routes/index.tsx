import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowUp, ArrowUpRight, Cpu, Crosshair, Gauge, Menu, Radio, Shield, Sparkles, X } from 'lucide-react'

const heroImage = 'https://storage.googleapis.com/blink-core-storage/projects/cyber-future-store-boetilu3/ai-images/1789837813679-bdc3dd79-8cb7-47c3-b237-2c21f7de757a.png'

const inventory = [
  { id: 'optic', code: 'CY-01', name: 'Spectral Optics', type: 'CYBERNETIC PART', detail: 'Low-light vision / 240° peripheral', price: '1,280 CR', icon: Crosshair },
  { id: 'core', code: 'CY-07', name: 'Axiom Core', type: 'NEURAL HARDWARE', detail: 'Adaptive processing / zero lag', price: '2,940 CR', icon: Cpu },
  { id: 'training', code: 'TR-02', name: 'Street Protocol', type: 'ROBOT TRAINING', detail: 'Autonomous navigation / 14 days', price: '680 CR', icon: Gauge },
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'NEXUS / Cybernetic Supply' },
      { name: 'description', content: 'Cybernetic parts and robot training for the next city.' },
    ],
  }),
  component: Home,
})

function Home() {
  const [scene, setScene] = useState<'night' | 'scan'>('night')
  const [selected, setSelected] = useState(inventory[0])
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-dvh overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 sm:px-10 sm:py-7">
        <a href="#top" className="flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-primary">
          <span className="grid size-8 place-items-center border border-primary/50 bg-background/60 shadow-[0_0_20px_color-mix(in_oklch,var(--primary)_18%,transparent)]"><Radio className="size-4" /></span>
          NEXUS<span className="text-muted-foreground">/01</span>
        </a>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute right-5 top-16 flex-col gap-5 border border-border bg-background/95 p-5 font-mono text-[10px] tracking-[0.2em] backdrop-blur-md sm:static sm:flex sm:flex-row sm:border-0 sm:bg-transparent sm:p-0`}>
          <a className="text-primary transition-colors hover:text-accent" href="#catalog">CATALOG</a>
          <a className="text-foreground/70 transition-colors hover:text-primary" href="#protocol">PROTOCOL</a>
          <a className="text-foreground/70 transition-colors hover:text-primary" href="#contact">CONTACT</a>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center border border-border bg-background/50 text-primary sm:hidden" aria-label="Toggle navigation">
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
        <div className="hidden items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground sm:flex"><span className="size-2 animate-pulse bg-accent" /> LIVE CITY FEED</div>
      </header>

      <section id="top" className="relative flex min-h-[760px] items-end overflow-hidden border-b border-border/70 lg:min-h-dvh">
        <img src={heroImage} alt="A cybernetic man walking past a hovering flying car while robots serve coffee in a futuristic city" className={`absolute inset-0 size-full object-cover transition-all duration-700 ${scene === 'scan' ? 'saturate-150 brightness-110' : 'saturate-75 brightness-75'}`} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.08_0.03_250/.92)_0%,oklch(0.08_0.03_250/.65)_38%,transparent_74%),linear-gradient(0deg,oklch(0.08_0.03_250/.95)_0%,transparent_45%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(oklch(0.8_0.1_180/.15)_1px,transparent_1px),linear-gradient(90deg,oklch(0.8_0.1_180/.15)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="relative z-10 w-full px-5 pb-12 sm:px-10 sm:pb-16 lg:pb-20">
          <div className="mb-8 flex items-center justify-between border-y border-primary/30 py-3 font-mono text-[9px] tracking-[0.2em] text-primary sm:max-w-xl">
            <span>SECTOR 07 — EASTERN PERIMETER</span><span className="flex items-center gap-2"><span className="size-1.5 bg-accent" /> {scene === 'scan' ? 'SCAN MODE' : 'NIGHT SHIFT'}</span>
          </div>
          <div className="max-w-3xl animate-fade-in">
            <p className="mb-4 font-mono text-xs tracking-[0.3em] text-accent">THE NEXT BODY IS BUILT</p>
            <h1 className="max-w-4xl font-serif text-6xl leading-[0.86] tracking-[-0.06em] text-foreground sm:text-8xl lg:text-[9.5rem]">Upgrade<br /><span className="text-primary">the human.</span></h1>
            <p className="mt-7 max-w-md text-sm leading-6 text-foreground/70 sm:text-base">Parts for people who move first. Training protocols for the machines that keep up.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#catalog" className="group flex items-center gap-3 bg-primary px-5 py-3 font-mono text-[10px] font-bold tracking-[0.18em] text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95">ENTER CATALOG <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" /></a>
              <button onClick={() => setScene(scene === 'night' ? 'scan' : 'night')} className="flex items-center gap-3 border border-primary/50 bg-background/35 px-5 py-3 font-mono text-[10px] tracking-[0.18em] text-primary backdrop-blur-sm transition-colors hover:bg-primary/10"><Sparkles className="size-3" /> {scene === 'night' ? 'ACTIVATE SCAN' : 'RETURN TO NIGHT'}</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 right-5 z-10 hidden max-w-[190px] border-l border-accent pl-4 font-mono text-[9px] leading-5 text-muted-foreground lg:block"><span className="text-accent">FIELD NOTE 001</span><br />The city has no edge. Only better hardware.</div>
      </section>

      <section id="catalog" className="relative bg-background px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-accent"><Shield className="size-4" /> VERIFIED INVENTORY</div>
            <h2 className="max-w-md font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">Parts for a city that never sleeps.</h2>
            <p className="mt-7 max-w-sm text-sm leading-6 text-muted-foreground">Precision cybernetics and field-tested protocols, sourced for the independent operator.</p>
            <div className="mt-12 border-l border-primary/50 pl-5 font-mono text-[10px] leading-5 tracking-[0.12em] text-muted-foreground"><span className="text-primary">NEXUS STANDARD</span><br />Every component is calibrated<br />for human intent.</div>
          </div>
          <div className="space-y-3">
            {inventory.map((item, index) => { const Icon = item.icon; const active = selected.id === item.id; return (
              <button key={item.id} onClick={() => setSelected(item)} className={`group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 border p-4 text-left transition-all duration-300 sm:p-6 ${active ? 'border-primary bg-primary/10 shadow-[0_0_30px_color-mix(in_oklch,var(--primary)_10%,transparent)]' : 'border-border bg-card/30 hover:border-primary/50 hover:bg-primary/5'}`}>
                <span className={`grid size-12 place-items-center border ${active ? 'border-primary text-primary' : 'border-border text-muted-foreground group-hover:text-primary'}`}><Icon className="size-5" /></span>
                <span><span className="mb-2 block font-mono text-[9px] tracking-[0.2em] text-accent">{item.code} / {item.type}</span><strong className="block font-serif text-2xl font-normal tracking-tight text-foreground">{item.name}</strong><span className="mt-1 block text-xs text-muted-foreground">{item.detail}</span></span>
                <span className="text-right"><span className="mb-3 block font-mono text-xs text-primary">{item.price}</span><ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
              </button>
            )})}
            <div className="flex items-center justify-between border-t border-border pt-5 font-mono text-[9px] tracking-[0.18em] text-muted-foreground"><span>SELECTED: {selected.name.toUpperCase()}</span><span className="text-primary">READY FOR DEPLOYMENT</span></div>
          </div>
        </div>
      </section>

      <section id="protocol" className="border-y border-border bg-card/30 px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-2"><div><p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-primary">ROBOT TRAINING / TR-02</p><h2 className="max-w-xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] sm:text-7xl">Teach the future how to pour.</h2></div><div className="lg:justify-self-end"><p className="max-w-sm text-sm leading-6 text-muted-foreground">Our field operators train service robots to read a room, find the rhythm, and make something warm in a cold city.</p><a href="#contact" className="mt-7 inline-flex items-center gap-3 border-b border-accent pb-2 font-mono text-[10px] tracking-[0.18em] text-accent transition-colors hover:text-primary">VIEW TRAINING PROTOCOL <ArrowUpRight className="size-4" /></a></div></div>
      </section>

      <footer id="contact" className="flex flex-col gap-6 px-5 py-10 font-mono text-[9px] tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10"><span>© 2088 NEXUS SUPPLY CO.</span><span className="text-accent">HUMAN / MACHINE / ONE CITY</span><span>NO SIGNAL IS FINAL <ArrowUp className="ml-1 inline size-3" /></span></footer>
    </main>
  )
}
