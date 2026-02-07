'use client';

import { useEffect, useMemo, useState } from 'react';
import { Flame, Shield, Zap } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap-config';

const sampleVideo = 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-snowy-forest-1579/1080p.mp4';
const truckVideo = 'https://cdn.coverr.co/videos/coverr-truck-drives-on-a-mountain-road-4631/1080p.mp4';

const products = [
  { id: 'wsx45', name: 'Revitex WSX45', temp: '-70ºC to +210ºC' },
  { id: 'vsc25', name: 'Revitex VSC25', temp: '-40ºC to +180ºC' },
  { id: 'vsctf', name: 'Revitex VSCTF', temp: '-30ºC to +160ºC' }
];

const otherIndustries = [
  { id: 'ovens', name: 'Ovens', text: 'Engineered for safety and durability in high temperature environments.' },
  { id: 'industrial', name: 'Industrial', text: 'Reliable sleeving for demanding industrial operations.' },
  { id: 'railway', name: 'Railway', text: 'Protection where vibration and heat resistance are critical.' }
];

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeIndustry, setActiveIndustry] = useState(otherIndustries[0]);
  const [showSolutions, setShowSolutions] = useState(false);

  const tiles = useMemo(() => Array.from({ length: 7 }), []);

  useEffect(() => {
    gsap.from('.hero-title span', { y: 80, opacity: 0, stagger: 0.08, duration: 0.8 });
    gsap.to('.scroll-indicator', {
      opacity: 0,
      scrollTrigger: { trigger: '#full-view', start: 'top top', end: 'bottom top', scrub: 1 }
    });
    gsap.from('.video-tile', {
      opacity: 0,
      scale: 0.95,
      stagger: 0.12,
      scrollTrigger: { trigger: '#overview', start: 'top 70%' }
    });
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      gsap.to('.horizontal-track', {
        x: () => -(document.querySelector('.horizontal-track')!.scrollWidth - window.innerWidth + 64),
        ease: 'none',
        scrollTrigger: { trigger: '.horizontal-wrap', pin: true, scrub: 1, end: '+=1800' }
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      mm.revert();
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <nav className="fixed right-0 top-0 z-50 p-8 text-sm">
        <ul className="flex gap-6 rounded-full border border-white/20 bg-black/30 px-5 py-3 backdrop-blur-md">
          <li><a href="#full-view">Full view</a></li>
          <li><a href="#overview">Overview</a></li>
        </ul>
      </nav>

      <section id="full-view" className="h-screen">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover"><source src={sampleVideo} /></video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <h1 className="hero-title mb-8 text-5xl font-light md:text-8xl">
            {'Protection sleeves for the mobility of tomorrow'.split(' ').map((w) => <span key={w} className="inline-block mr-3">{w}</span>)}
          </h1>
          <div className="scroll-indicator absolute bottom-16">
            <p className="text-sm">Scroll down</p><div className="mx-auto mt-4 h-16 w-px bg-white/50" />
          </div>
        </div>
      </section>

      <section id="overview" className="bg-black px-6 py-24 md:px-12">
        <h2 className="mb-16 text-center text-4xl md:text-7xl">Your 360º partner for safety<br/>in electromobility</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {tiles.map((_, i) => (
            <div key={i} className={`video-tile overflow-hidden rounded-lg ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <video autoPlay muted loop playsInline className="aspect-video h-full w-full object-cover transition duration-700 hover:scale-110"><source src={sampleVideo} /></video>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-12">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-30"><source src={sampleVideo} /></video>
        <div className="relative z-10">
          <div className="mb-14 flex justify-center gap-12 text-center">
            <div><p className="text-5xl font-bold">1,000ºC</p><p>Up to</p></div>
            <div><Flame className="mx-auto h-14 w-14" /><p>Flammability</p></div>
            <div><Zap className="mx-auto h-14 w-14" /><p>Electrical insulation</p></div>
          </div>
          <h3 className="mb-8 text-center text-orange-500">E-mobility solutions</h3>
          <div className="mb-12 flex flex-wrap justify-center gap-4">{products.map((p)=><button key={p.id} onClick={()=>setActiveProduct(p)} className={`product-tab ${activeProduct.id===p.id?'active':''}`}>{p.name}</button>)}</div>
          <div key={activeProduct.id} className="mx-auto max-w-5xl animate-pulse">
              <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-3">{Array.from({length:3}).map((_,i)=><img key={i} src={`https://picsum.photos/800/500?random=${i+2}`} className="rounded-lg" alt="product"/>)}</div>
              <p className="text-center text-2xl">{activeProduct.temp}</p>
            </div>
        </div>
      </section>

      <section className="horizontal-wrap px-6 py-24">
        <h2 className="mb-20 text-center text-5xl">We make mobility safer across all industries</h2>
        <div className="horizontal-track flex gap-8">
          {['Construction', 'Hybrid & Electric', 'Buses & Trucks', 'Railway', 'Agriculture'].map((name) => (
            <div key={name} className="industry-card relative min-w-[420px] overflow-hidden rounded-xl">
              <video autoPlay muted loop playsInline className="h-[560px] w-full object-cover"><source src={sampleVideo} /></video>
              <div className="absolute bottom-0 z-10 p-8"><h3 className="text-3xl">{name}</h3><p className="mt-3 max-w-sm text-sm text-white/80">PLAS8 NA · Operating temperature -70ºC to +150ºC.</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover"><source src={sampleVideo} /></video>
        <div className="flex items-center bg-black p-12"><div><h2 className="mb-4 text-6xl">Periflex DURA HA</h2><h3 className="mb-8 text-2xl text-orange-500">Ahead of the curve, everywhere it counts</h3><p className="text-2xl">-70ºC to +125ºC</p></div></div>
      </section>

      <section className="px-6 py-24">
        <h2 className="mb-12 text-center text-5xl">Other industries</h2>
        <div className="mb-10 flex justify-center gap-4">{otherIndustries.map((i)=><button key={i.id} className={`rounded-lg border px-4 py-2 ${activeIndustry.id===i.id?'border-orange-500 text-orange-500':'border-white/30'}`} onClick={()=>setActiveIndustry(i)}>{i.name}</button>)}</div>
        <div key={activeIndustry.id} className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2"><img src="https://picsum.photos/900/600" alt="industry" className="rounded-lg"/><p className="text-lg text-white/80">{activeIndustry.text}</p></div>
      </section>

      <section className="relative h-screen">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover"><source src={truckVideo} /></video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex h-full flex-col items-center justify-center">
          <h2 className="mb-8 text-center text-6xl">Where power meets protection</h2>
          <button onClick={() => setShowSolutions((v) => !v)} className="rounded-full border-2 px-8 py-4">Discover what&apos;s inside</button>
          {showSolutions && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/90 p-10">
              <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">{['Electrical', 'EMI', 'Fire', 'Heat', 'Impact', 'Mechanical', 'Noise', 'Thermal'].map((s)=><div key={s}><Shield className="mx-auto mb-2"/><p>{s}</p></div>)}</div>
            </div>
          )}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <video autoPlay muted loop playsInline className="h-[500px] w-full object-cover"><source src={sampleVideo} /></video>
        <div className="flex h-[500px] items-center justify-center bg-emerald-900 p-12 text-center"><div><p className="mb-4 inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-black">COMING SOON</p><h2 className="mb-6 text-5xl">Sustainability Commitment</h2></div></div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="mb-8 text-6xl">Innovating worldwide</h2>
        <p className="mx-auto mb-10 max-w-3xl text-2xl text-white/80">Relats is ahead of the curve in achieving sustainable change across the globe.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="world" className="mx-auto mb-16 w-full max-w-5xl"/>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">{[['4','continents'],['55','countries'],['5','plants'],['1200+','people']].map(([n,t])=><div key={t}><p className="text-5xl text-orange-500">{n}</p><p>{t}</p></div>)}</div>
      </section>

      <section className="relative h-screen">
        <div className="absolute inset-0 flex"><video autoPlay muted loop playsInline className="h-full w-1/2 object-cover"><source src={sampleVideo} /></video><video autoPlay muted loop playsInline className="h-full w-1/2 object-cover"><source src={truckVideo} /></video></div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex h-full flex-col items-center justify-center"><h2 className="mb-8 text-7xl">Join the ride</h2><div className="flex gap-4"><a className="rounded-full bg-orange-500 px-8 py-3" href="#">Browse catalog</a><a className="rounded-full border px-8 py-3" href="#">Request information</a></div></div>
      </section>

      <footer className="border-t border-white/15 px-6 py-14 text-sm md:px-12"><div className="flex flex-col items-center justify-between gap-6 md:flex-row"><div><p>relatshq@relats.com</p><p>+34 93 862 7510</p></div><p className="text-white/60">RELATS © 2026</p></div></footer>
    </main>
  );
}
