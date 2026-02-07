'use client';

import { useEffect } from 'react';
import { Flame, Shield, Thermometer, Mail, Phone } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap-config';
import { industries, navItems } from '@/data/content';

const sections = [
  'hero',
  'intro',
  'products',
  'industries',
  'sustainability',
  'periflex',
  'other',
  'truck',
  'commitment',
  'worldwide',
  'join',
];

export function MainPage() {
  useEffect(() => {
    gsap.from('.hero-title span', { opacity: 0, y: 30, stagger: 0.08, duration: 0.8 });
    gsap.to('.hero-scroll', {
      opacity: 0,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
    });
    sections.forEach((id) => {
      gsap.from(`#${id} .reveal`, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: { trigger: `#${id}`, start: 'top 75%' },
      });
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main>
      <nav className="nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <section id="hero" className="section hero">
        <video autoPlay muted loop playsInline className="bg-video" src="https://cdn.coverr.co/videos/coverr-electric-car-charging-1579/1080p.mp4" />
        <div className="overlay" />
        <h1 className="hero-title reveal">
          {'Protection sleeves for the mobility of tomorrow'.split(' ').map((w) => <span key={w}>{w} </span>)}
        </h1>
        <div className="hero-scroll">Scroll down</div>
      </section>

      <section id="overview" className="section black">
        <h2 className="reveal">Your 360º partner for safety in electromobility</h2>
        <div className="grid reveal">{Array.from({ length: 7 }).map((_, i) => <div key={i} className="tile" />)}</div>
      </section>

      <section id="products" className="section black">
        <h3 className="reveal accent">E-mobility solutions</h3>
        <div className="stats reveal">
          <div><div>1,000ºC</div><small>Up to</small></div>
          <div><Flame /><small>Flammability</small></div>
          <div><Shield /><small>Electrical Insulation</small></div>
        </div>
      </section>

      <section id="industries" className="section black">
        <h2 className="reveal">We make mobility safer across all industries</h2>
        <div className="horizontal reveal">{industries.map((i) => <article key={i}>{i}</article>)}</div>
      </section>

      <section id="sustainability" className="section image">
        <h2 className="reveal">Relats produces</h2>
        <p className="counter reveal">1,000,000</p>
        <h3 className="reveal">meters of sleeving per year</h3>
      </section>

      <section id="periflex" className="section split">
        <div className="left"><video autoPlay muted loop playsInline className="bg-video" src="https://cdn.coverr.co/videos/coverr-electric-bus-ride-5777/1080p.mp4" /></div>
        <div className="right reveal"><h2>Periflex DURA HA</h2><p className="accent">Ahead of the curve, everywhere it counts</p></div>
      </section>

      <section id="other" className="section black"><h2 className="reveal">Other industries</h2></section>
      <section id="truck" className="section hero"><h2 className="reveal">Where power meets protection</h2></section>
      <section id="commitment" className="section split"><div className="left"/><div className="right reveal"><h2>Sustainability Commitment</h2></div></section>
      <section id="worldwide" className="section black"><h2 className="reveal">Innovating worldwide</h2></section>
      <section id="join" className="section hero"><h2 className="reveal">Join the ride</h2></section>

      <footer className="footer">
        <a href="mailto:relatshq@relats.com"><Mail size={18} />relatshq@relats.com</a>
        <a href="tel:+34938627510"><Phone size={18} />+34 93 862 7510</a>
      </footer>
    </main>
  );
}
