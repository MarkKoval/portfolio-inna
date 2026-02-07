"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/projects/project-card";

const PAGE_SIZE = 6;

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [year, setYear] = useState<string>("All");
  const [city, setCity] = useState<string>("All");
  const [page, setPage] = useState(1);

  const years = useMemo(() => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a), []);
  const cities = useMemo(() => Array.from(new Set(projects.map((p) => p.city))).sort(), []);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const byCategory = category === "All" || project.category.includes(category as never);
      const byYear = year === "All" || String(project.year) === year;
      const byCity = city === "All" || project.city === city;
      const byQuery = project.title.toLowerCase().includes(query.toLowerCase());
      return byCategory && byYear && byCity && byQuery;
    });
  }, [category, city, query, year]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Container className="pt-28 pb-20">
      <h1 className="font-heading text-5xl md:text-7xl">Projects</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        <input
          value={query}
          onChange={(e) => {
            setPage(1);
            setQuery(e.target.value);
          }}
          placeholder="Search by name"
          className="focus-ring rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm"
        />
        <select className="focus-ring rounded-md border border-white/20 bg-ink px-3 py-2 text-sm" value={category} onChange={(e) => { setPage(1); setCategory(e.target.value); }}>
          <option>All</option>
          {projectCategories.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="focus-ring rounded-md border border-white/20 bg-ink px-3 py-2 text-sm" value={year} onChange={(e) => { setPage(1); setYear(e.target.value); }}>
          <option>All</option>
          {years.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="focus-ring rounded-md border border-white/20 bg-ink px-3 py-2 text-sm" value={city} onChange={(e) => { setPage(1); setCity(e.target.value); }}>
          <option>All</option>
          {cities.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paged.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>

      <div className="mt-10 flex items-center gap-2">
        {Array.from({ length: pages }, (_, i) => i + 1).map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            className={`focus-ring h-9 w-9 rounded-full border text-sm ${item === page ? "border-copper text-copper" : "border-white/20 text-white/80"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </Container>
  );
}
