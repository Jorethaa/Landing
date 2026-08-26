'use client'

import { ArrowUpRight, ChevronRight, CircleCheck, Menu, MoveRight, ShieldCheck, X } from 'lucide-react'
import { useState } from 'react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const services = [
  { number: '01', title: 'Transport, Haulage & Logistics', text: 'Moving critical cargo with precision across Nigeria and beyond.', tag: 'End-to-end movement' },
  { number: '02', title: 'Equipment Leasing', text: 'Access well-maintained heavy equipment that keeps your operation moving.', tag: 'Ready when you are' },
  { number: '03', title: 'Oil & Gas Procurement', text: 'Sourcing the materials and expertise your energy projects depend on.', tag: 'Built for industry' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[680px] bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,14,14,.96)_0%,rgba(14,14,14,.79)_42%,rgba(14,14,14,.2)_100%)]" />
        <img src={`${BASE}/images/haulage-hero.png`} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-80 mix-blend-screen" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col px-6 lg:px-10">
          <header className="flex items-center justify-between border-b border-primary-foreground/20 py-6">
            <a href="#top" className="flex items-center gap-3" aria-label="Sealand Haulage home">
              <span className="flex h-10 w-12 items-center justify-center bg-black leading-none ring-1 ring-white/25">
                <span className="pr-0.5 text-lg font-black italic tracking-tight text-[#d92027]">ShL</span>
              </span>
              <span className="text-sm font-semibold uppercase tracking-[.18em]"><span className="text-[#d92027]">S</span>ealand<br /><span className="font-normal text-primary-foreground/60"><span className="font-semibold text-[#d92027]">H</span>aulage <span className="font-semibold text-[#d92027]">L</span>imited</span></span>
            </a>
            <nav className="hidden items-center gap-9 text-sm text-primary-foreground/70 md:flex" aria-label="Main navigation">
              <a className="transition-colors hover:text-primary-foreground" href="#services">Services</a>
              <a className="transition-colors hover:text-primary-foreground" href="#company">Our company</a>
              <a className="transition-colors hover:text-primary-foreground" href="#fleet">Fleet</a>
              <a className="transition-colors hover:text-primary-foreground" href="#contact">Contact</a>
            </nav>
            <a href="#contact" className="hidden items-center gap-2 border border-primary-foreground/35 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-primary-foreground hover:text-primary sm:flex">Start a conversation <ArrowUpRight size={15} /></a>
            <button className="md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          </header>
          {menuOpen && <nav className="flex flex-col gap-5 border-b border-primary-foreground/20 py-5 text-sm md:hidden"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#company" onClick={() => setMenuOpen(false)}>Our company</a><a href="#fleet" onClick={() => setMenuOpen(false)}>Fleet</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}
          <div className="flex flex-1 items-center py-24 lg:py-32">
            <div className="max-w-3xl">
              <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[.22em] text-accent"><span className="h-px w-10 bg-accent" /> Infrastructure that delivers</p>
              <h1 className="max-w-3xl text-balance font-sans text-5xl font-semibold leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-8xl">Moving what matters.<br /><span className="text-accent">Building what&apos;s next.</span></h1>
              <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-primary-foreground/70 sm:text-lg">Sealand Haulage Limited is a dependable partner for the movement, supply and support of critical infrastructure across Nigeria.</p>
              <div className="mt-10 flex flex-wrap gap-4"><a href="#services" className="flex items-center gap-3 bg-accent px-6 py-4 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">Explore our services <MoveRight size={17} /></a><a href="#company" className="flex items-center gap-2 px-4 py-4 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground">Why Sealand <ChevronRight size={16} /></a></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-5 border-t border-primary-foreground/20 py-6 text-xs uppercase tracking-wider text-primary-foreground/55"><span>Based in Nigeria</span><span>Serving energy & infrastructure</span><span>Dependable by design</span></div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-accent">What we do</p><h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Capability that keeps industry in motion.</h2></div><p className="max-w-sm text-pretty leading-7 text-muted-foreground">From the first mile to the final delivery, we bring clarity, care and control to complex operations.</p></div>
        <div className="grid border-t border-border md:grid-cols-3">{services.map((service) => <article key={service.number} className="group border-b border-border py-8 transition-all duration-1000 ease-out hover:-translate-y-1.5 hover:bg-secondary md:border-b-0 md:border-r md:px-8 md:py-10 first:md:pl-0 last:md:border-r-0"><div className="mb-16 flex items-start justify-between"><span className="font-mono text-sm text-accent">{service.number}</span><ArrowUpRight className="text-muted-foreground transition-all duration-1000 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" size={20} /></div><p className="mb-4 font-mono text-[11px] uppercase tracking-[.15em] text-muted-foreground">{service.tag}</p><h3 className="max-w-xs text-2xl font-semibold leading-tight tracking-[-.02em]">{service.title}</h3><p className="mt-5 max-w-xs leading-7 text-muted-foreground">{service.text}</p></article>)}</div>
      </section>

      <section id="company" className="bg-secondary"><div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-32"><div><p className="mb-5 font-mono text-xs uppercase tracking-[.2em] text-accent">The Sealand standard</p><h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">A steady hand in a demanding world.</h2><p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">The work we support doesn&apos;t wait. That&apos;s why our approach is grounded in preparation, accountability and the practical realities of the field.</p><a href="#contact" className="mt-9 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-accent hover:gap-4">Work with us <MoveRight size={17} /></a></div><div className="grid content-center gap-7 sm:grid-cols-2"><div className="border-l-2 border-accent pl-5 transition-all duration-1000 ease-out hover:bg-background hover:pl-7 hover:shadow-sm"><ShieldCheck className="mb-4 text-accent" size={22} /><p className="font-semibold">Safety-minded</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Responsible operations from planning through delivery.</p></div><div className="border-l-2 border-accent pl-5 transition-all duration-1000 ease-out hover:bg-background hover:pl-7 hover:shadow-sm"><CircleCheck className="mb-4 text-accent" size={22} /><p className="font-semibold">Consistently dependable</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Clear communication and delivery you can plan around.</p></div></div></div></section>

      <section id="fleet" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-14"><p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-accent">Our fleet</p><h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-.035em] sm:text-5xl">The equipment behind every move.</h2></div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { src: '/images/lowbed.jpg', title: 'Lowbed trucks', text: 'Heavy plant, rig components and out-of-gauge loads.' },
            { src: '/images/flatbed.jpg', title: 'Flatbed trucks', text: 'Pipes, casing and general oilfield cargo.' },
            { src: '/images/crane.png', title: 'Mobile cranes', text: 'Loading, offloading and lift support on site.' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Liebherr_crane_truck.jpg/1280px-Liebherr_crane_truck.jpg', title: 'Motor cranes', text: 'Truck-mounted cranes that travel to wherever the lift is.' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2009-07-05_Chatham_Steel_Freightliner.jpg/1280px-2009-07-05_Chatham_Steel_Freightliner.jpg', title: 'Extended flatbeds', text: 'Long-deck trailers for pipes and full-length cargo.' },
          ].map((item) => (
            <figure key={item.title} className="group">
              <div className="overflow-hidden"><img src={item.src.startsWith('http') ? item.src : `${BASE}${item.src}`} alt={item.title} loading="lazy" className="h-60 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" /></div>
              <figcaption className="mt-5 border-l-2 border-accent pl-4 transition-all duration-1000 ease-out group-hover:pl-6"><p className="font-semibold">{item.title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p></figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground/70">Extended flatbed photo <a className="underline" href="https://commons.wikimedia.org/wiki/File:2009-07-05_Chatham_Steel_Freightliner.jpg" target="_blank" rel="noopener">via Wikimedia Commons</a> (CC BY-SA 4.0). Representative imagery.</p>
      </section>

      <section id="contact" className="bg-accent text-accent-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center lg:px-10"><div><p className="font-mono text-xs uppercase tracking-[.2em] opacity-70">Let&apos;s get moving</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">Have a project in mind?</h2></div><div className="flex flex-col gap-3 sm:items-end"><a href="mailto:sealandhaulage@gmail.com" className="flex items-center gap-3 border border-accent-foreground/40 px-6 py-4 text-sm font-bold transition-all duration-1000 ease-out hover:bg-accent-foreground hover:text-accent">sealandhaulage@gmail.com <ArrowUpRight size={17} /></a><a href="tel:+2348033563716" className="flex items-center gap-3 border border-accent-foreground/40 px-6 py-4 text-sm font-bold transition-all duration-1000 ease-out hover:bg-accent-foreground hover:text-accent">+234 803 356 3716 <ArrowUpRight size={17} /></a></div></div></section>
      <footer className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2026 Sealand Haulage Limited. All rights reserved.</p><p className="font-mono uppercase tracking-wider">Transport · Equipment · Procurement</p></div></footer>
    </main>
  )
}
