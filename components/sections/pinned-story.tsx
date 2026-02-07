"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsapContext } from "@/lib/useGsapContext";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const scenes = [
  { title: "Context", text: "Each project starts by mapping climate, flows, and social routines.", image: "/demo/project-06.svg" },
  { title: "Material", text: "We test roughness, tactility, and longevity through iterative mockups.", image: "/demo/project-03.svg" },
  { title: "Atmosphere", text: "Light choreography defines the emotional rhythm of each interior.", image: "/demo/project-10.svg" }
];

export const PinnedStory = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapContext(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const panels = gsap.utils.toArray<HTMLElement>("[data-panel]");
    panels.forEach((panel, index) => {
      gsap.fromTo(
        panel.querySelector("[data-title]"),
        { yPercent: 40, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: panel,
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );

      gsap.fromTo(
        panel.querySelector("[data-image]"),
        { scale: 1.2, clipPath: "inset(15% 15% 15% 15%)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          scrollTrigger: {
            trigger: panel,
            start: "top 75%",
            end: "bottom 20%",
            scrub: true,
            pin: index !== scenes.length - 1
          }
        }
      );
    });

    ScrollTrigger.refresh();
  }, sectionRef);

  return (
    <section ref={sectionRef} className="space-y-28 py-20">
      {scenes.map((scene) => (
        <article key={scene.title} data-panel className="grid min-h-[85vh] items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper">Process</p>
            <h2 data-title className="mt-4 font-heading text-4xl md:text-6xl">{scene.title}</h2>
            <p className="mt-6 max-w-xl text-white/70">{scene.text}</p>
          </div>
          <div data-image className="relative h-[55vh] overflow-hidden rounded-2xl">
            <Image src={scene.image} alt={scene.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </article>
      ))}
    </section>
  );
};
