'use client'

import { ArrowUpRight, ChevronRight, CircleCheck, Menu, MoveRight, ShieldCheck, X } from 'lucide-react'
import { useState } from 'react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const services = [
  { number: '01', title: 'Transport, Haulage & Logistics', text: 'Moving critical cargo with precision across Nigeria and beyond.', tag: 'End-to-end movement', image: '/images/lowbed.jpg', alt: 'Lowbed truck and trailer' },
  { number: '02', title: 'Equipment Leasing', text: 'Access well-maintained heavy equipment that keeps your operation moving.', tag: 'Ready when you are', image: '/images/crane.png', alt: 'Mobile crane on site' },
  { number: '03', title: 'Oil & Gas Procurement', text: 'Sourcing the materials and expertise your energy projects depend on.', tag: 'Built for industry', image: '/images/haulage-hero.png', alt: 'Transport serving industrial infrastructure' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section id="top" className="relative isolate min-h-[720px] bg-primary text-primary-foreground">
        <img src={`${BASE}/images/haulage-hero.png`} alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,14,14,.92)_0%,rgba(14,14,14,.78)_50%,rgba(14,14,14,.35)_100%)]" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col px-6 lg:px-10">
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
              <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[.22em] text-primary-foreground/80"><span className="h-px w-10 bg-accent" /> 01 / Transport & logistics</p>
              <h1 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[.96] tracking-[-.045em] sm:text-7xl lg:text-8xl">Big moves.<br />Solid support.<br /><span className="text-primary-foreground/75">Built for industry.</span></h1>
              <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-primary-foreground/70 sm:text-lg">Heavy haulage, equipment leasing and procurement. Practical support for energy and infrastructure projects across Nigeria.</p>
              <div className="mt-10 flex flex-wrap gap-4"><a href="#contact" className="flex items-center gap-3 bg-accent px-6 py-4 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">Request a quote <MoveRight size={17} /></a><a href="#services" className="flex items-center gap-2 px-4 py-4 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground">Our services <ChevronRight size={16} /></a></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-5 border-t border-primary-foreground/20 py-6 text-xs uppercase tracking-wider text-primary-foreground/55"><span>Based in Nigeria</span><span>Serving energy & infrastructure</span><span>Dependable by design</span></div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-accent">What we do</p><h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-.035em] sm:text-5xl">The right support.<br />From start to finish.</h2></div><p className="max-w-sm text-pretty leading-7 text-muted-foreground">From the first mile to the final delivery, we bring clarity, care and control to complex operations.</p></div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="service-card group flex flex-col bg-white">
              <div className="relative overflow-hidden">
                <img src={`${BASE}${service.image}`} alt={service.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                <span className="absolute bottom-0 left-0 bg-accent px-5 py-3 font-mono text-sm text-white">{service.number}</span>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{service.tag}</p>
                <h3 className="text-2xl font-bold leading-tight tracking-tight">{service.title}</h3>
                <p className="mb-8 mt-4 leading-7 text-muted-foreground">{service.text}</p>
                <a href={`mailto:sealandhaulage@gmail.com?subject=${encodeURIComponent(service.title + ' enquiry')}`} className="mt-auto flex items-center justify-between border-t border-border pt-5 text-sm font-bold">Enquire about this service <ArrowUpRight size={18} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="company" className="bg-secondary"><div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-24"><div><p className="mb-5 font-mono text-xs uppercase tracking-[.2em] text-accent">The Sealand standard</p><h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl">A steady hand in a demanding world.</h2><p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">The work we support doesn&apos;t wait. That&apos;s why our approach is grounded in preparation, accountability and the practical realities of the field.</p><a href="#contact" className="mt-9 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-accent hover:gap-4">Work with us <MoveRight size={17} /></a></div><div className="grid content-center gap-7 sm:grid-cols-2"><div className="border-l-2 border-accent pl-5 transition-all duration-200 ease-out hover:bg-background hover:shadow-sm"><ShieldCheck className="mb-4 text-accent" size={22} /><p className="font-semibold">Safety-minded</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Responsible operations from planning through delivery.</p></div><div className="border-l-2 border-accent pl-5 transition-all duration-200 ease-out hover:bg-background hover:shadow-sm"><CircleCheck className="mb-4 text-accent" size={22} /><p className="font-semibold">Consistently dependable</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Clear communication and delivery you can plan around.</p></div></div></div></section>

      <section id="fleet" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-14"><p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-accent">Our fleet</p><h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Built to carry.<br />Ready to lift.</h2></div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {[
            { src: '/images/lowbed.jpg', title: 'Lowbed trucks', text: 'Heavy plant, rig components and out-of-gauge loads.' },
            { src: '/images/crane.png', title: 'Mobile cranes', text: 'Loading, offloading and lift support on site.' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Liebherr_crane_truck.jpg/1280px-Liebherr_crane_truck.jpg', title: 'Motor cranes', text: 'Truck-mounted cranes that travel to wherever the lift is.' },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2009-07-05_Chatham_Steel_Freightliner.jpg/1280px-2009-07-05_Chatham_Steel_Freightliner.jpg', title: 'Extended flatbeds', text: 'Long-deck trailers for pipes and full-length cargo.' },
          ].map((item) => (
            <figure key={item.title} className="group border border-border bg-white">
              <div className="overflow-hidden"><img src={item.src.startsWith('http') ? item.src : `${BASE}${item.src}`} alt={item.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]" /></div>
              <figcaption className="p-6 lg:p-8"><div className="flex items-start justify-between gap-4"><p className="text-2xl font-bold tracking-tight">{item.title}</p><span className="mt-1 h-2 w-2 shrink-0 bg-accent" /></div><p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Suitable for</p><p className="mt-2 leading-7 text-muted-foreground">{item.text}</p><a href={`mailto:sealandhaulage@gmail.com?subject=${encodeURIComponent(item.title + ' enquiry')}`} className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-accent">Discuss your requirements <ArrowUpRight size={17} /></a></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground" aria-labelledby="planning-title">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-72 lg:min-h-[520px]">
            <img src={`${BASE}/images/lowbed.jpg`} alt="Lowbed transport equipment" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute bottom-6 left-6 bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider">Heavy transport / Equipment support</span>
          </div>
          <div className="px-6 py-16 lg:p-16">
            <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-primary-foreground/65">Plan your next move</p>
            <h2 id="planning-title" className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Every job starts<br />with the details.</h2>
            <p className="mt-6 max-w-md leading-7 text-primary-foreground/70">Help us understand the load, the route and the work ahead. Share your requirements so we can discuss the right transport or equipment support.</p>
            <div className="mt-8 divide-y divide-white/20 border-y border-white/20">{['Cargo or equipment requirements', 'Pickup and delivery locations', 'Preferred dates and site conditions'].map((step, i) => <p key={step} className="flex gap-5 py-4 text-sm"><span className="font-mono text-primary-foreground/50">0{i + 1}</span>{step}</p>)}</div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-accent text-accent-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-10 lg:py-24">
          <div><p className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/80">Let’s get moving</p><h2 className="text-5xl font-bold leading-none tracking-tight sm:text-6xl">Your next project.<br />Let’s talk.</h2><p className="mt-6 max-w-md leading-7 text-white/85">Tell us what you need moved, supplied or supported. Start your enquiry by email or call our team.</p></div>
          <div className="grid gap-4"><a href="mailto:sealandhaulage@gmail.com?subject=Project%20quote%20enquiry" className="flex items-center justify-between gap-4 bg-white px-6 py-5 font-bold text-primary transition-colors hover:bg-white/90">Request a quote by email <ArrowUpRight size={22} /></a><a href="tel:+2348033563716" className="flex items-center justify-between gap-4 border border-white/50 px-6 py-5 font-bold transition-colors hover:bg-black/10">Call +234 803 356 3716 <ArrowUpRight size={22} /></a></div>
        </div>
      </section>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] lg:px-10">
          <div><a href="#top" className="text-xl font-bold tracking-tight">SEALAND<span className="text-accent">.</span></a><p className="mt-3 text-sm text-white/70">Haulage Limited</p><p className="mt-5 max-w-xs text-sm leading-7 text-white/60">Transport, equipment and procurement support for industry across Nigeria.</p></div>
          <nav aria-label="Footer navigation"><p className="mb-5 text-xs font-bold uppercase tracking-wider text-white/50">Explore</p><div className="grid gap-3 text-sm"><a href="#services">Our services</a><a href="#company">Our company</a><a href="#fleet">Our fleet</a><a href="#contact">Request a quote</a></div></nav>
          <div><p className="mb-5 text-xs font-bold uppercase tracking-wider text-white/50">Get in touch</p><div className="grid gap-3 text-sm"><a className="break-all" href="mailto:sealandhaulage@gmail.com">sealandhaulage@gmail.com</a><a href="tel:+2348033563716">+234 803 356 3716</a><p className="text-white/60">Nigeria</p></div></div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-white/15 px-6 py-6 text-xs text-white/50 lg:px-10"><p>© 2026 Sealand Haulage Limited. All rights reserved.</p><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}
