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
      <section id="top" className="relative isolate min-h-[640px] bg-primary text-primary-foreground">
        <img src={`${BASE}/images/haulage-hero.png`} alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,14,14,.92)_0%,rgba(14,14,14,.78)_50%,rgba(14,14,14,.35)_100%)]" />
        <div className="relative mx-auto flex min-h-[640px] max-w-7xl flex-col px-6 lg:px-10">
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
            <a href="#contact" className="hidden items-center gap-2 border border-primary-foreground/35 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-primary-foreground hover:text-primary sm:flex">Request a quote <ArrowUpRight size={15} /></a>
            <button type="button" className="flex h-11 w-11 shrink-0 items-center justify-center md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          </header>
          {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-5 border-b border-primary-foreground/20 py-5 text-sm md:hidden"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#company" onClick={() => setMenuOpen(false)}>Our company</a><a href="#fleet" onClick={() => setMenuOpen(false)}>Fleet</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}
          <div className="flex flex-1 items-center py-20 lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[.22em] text-primary-foreground/80"><span className="h-px w-10 bg-accent" /> Sealand Haulage Limited</p>
              <h1 className="max-w-3xl text-balance font-sans text-5xl font-semibold leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-7xl">Heavy haulage.<br />Equipment support.<br /><span className="text-primary-foreground/75">Across Nigeria.</span></h1>
              <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-primary-foreground/70 sm:text-lg">Moving what matters. Transport, equipment leasing and procurement support for energy and infrastructure projects.</p>
              <div className="mt-10 flex flex-wrap gap-4"><a href="#contact" className="flex items-center gap-3 bg-accent px-6 py-4 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">Request a quote <MoveRight size={17} /></a><a href="#services" className="flex items-center gap-2 px-4 py-4 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground">Our services <ChevronRight size={16} /></a></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-5 border-t border-primary-foreground/20 py-6 text-xs uppercase tracking-wider text-primary-foreground/55"><span>Based in Nigeria</span><span>Serving energy & infrastructure</span><span>Dependable by design</span></div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-accent">What we do</p><h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Capability that keeps industry in motion.</h2></div><p className="max-w-sm text-pretty leading-7 text-muted-foreground">From the first mile to the final delivery, we bring clarity, care and control to complex operations.</p></div>
        <div className="grid border-t border-border md:grid-cols-3">{services.map((service) => <article key={service.number} className="group border-b border-border py-8 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-secondary md:border-b-0 md:border-r md:px-8 md:py-10 first:md:pl-0 last:md:border-r-0"><div className="mb-16 flex items-start justify-between"><span className="font-mono text-sm text-accent">{service.number}</span><ArrowUpRight className="text-muted-foreground transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" size={20} /></div><p className="mb-4 font-mono text-[11px] uppercase tracking-[.15em] text-muted-foreground">{service.tag}</p><h3 className="max-w-xs text-2xl font-semibold leading-tight tracking-[-.02em]">{service.title}</h3><p className="mt-5 max-w-xs leading-7 text-muted-foreground">{service.text}</p></article>)}</div>
      </section>

      <section id="company" className="bg-secondary"><div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-24"><div><p className="mb-5 font-mono text-xs uppercase tracking-[.2em] text-accent">The Sealand standard</p><h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">A steady hand in a demanding world.</h2><p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">The work we support doesn&apos;t wait. That&apos;s why our approach is grounded in preparation, accountability and the practical realities of the field.</p><a href="#contact" className="mt-9 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-accent hover:gap-4">Work with us <MoveRight size={17} /></a></div><div className="grid content-center gap-7 sm:grid-cols-2"><div className="border-l-2 border-accent pl-5 transition-all duration-200 ease-out hover:bg-background hover:shadow-sm"><ShieldCheck className="mb-4 text-accent" size={22} /><p className="font-semibold">Safety-minded</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Responsible operations from planning through delivery.</p></div><div className="border-l-2 border-accent pl-5 transition-all duration-200 ease-out hover:bg-background hover:shadow-sm"><CircleCheck className="mb-4 text-accent" size={22} /><p className="font-semibold">Consistently dependable</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Clear communication and delivery you can plan around.</p></div></div></div></section>

      <section id="fleet" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-14"><p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-accent">Our fleet</p><h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-.035em] sm:text-5xl">The equipment behind every move.</h2></div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {[
            { src: '/images/lowbed.jpg', title: 'Lowbed trucks', text: 'Heavy plant, rig components and out-of-gauge loads.' },
            { src: '/images/crane.png', title: 'Mobile cranes', text: 'Loading, offloading and lift support on site.' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Liebherr_crane_truck.jpg/1280px-Liebherr_crane_truck.jpg', title: 'Motor cranes', text: 'Truck-mounted cranes that travel to wherever the lift is.' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2009-07-05_Chatham_Steel_Freightliner.jpg/1280px-2009-07-05_Chatham_Steel_Freightliner.jpg', title: 'Extended flatbeds', text: 'Long-deck trailers for pipes and full-length cargo.' },
          ].map((item) => (
            <figure key={item.title} className="group">
              <div className="overflow-hidden"><img src={item.src.startsWith('http') ? item.src : `${BASE}${item.src}`} alt={item.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]" /></div>
              <figcaption className="mt-5 border-l-2 border-accent pl-4 transition-all duration-200 ease-out "><p className="font-semibold">{item.title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-accent text-accent-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center lg:px-10"><div><p className="font-mono text-xs uppercase tracking-[.2em] opacity-70">Let&apos;s get moving</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.03em] sm:text-4xl">Request a quote.</h2><p className="mt-4 max-w-md text-sm leading-6 text-accent-foreground/90">Tell us what you need moved, your pickup and delivery locations, and your preferred date. For equipment enquiries, share the job requirements.</p></div><div className="flex flex-col gap-3 sm:items-end"><a href="mailto:sealandhaulage@gmail.com?subject=Project%20quote%20enquiry" className="flex items-center gap-3 border border-accent-foreground/40 px-6 py-4 text-sm font-bold transition-all duration-200 ease-out hover:bg-accent-foreground hover:text-accent">sealandhaulage@gmail.com <ArrowUpRight size={17} /></a><a href="tel:+2348033563716" className="flex items-center gap-3 border border-accent-foreground/40 px-6 py-4 text-sm font-bold transition-all duration-200 ease-out hover:bg-accent-foreground hover:text-accent">+234 803 356 3716 <ArrowUpRight size={17} /></a></div></div></section>
      <footer className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2026 Sealand Haulage Limited. All rights reserved.</p><p className="font-mono uppercase tracking-wider">Transport · Equipment · Procurement</p></div></footer>
    </main>
  )
}
