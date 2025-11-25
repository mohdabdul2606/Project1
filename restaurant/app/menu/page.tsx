"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import SearchAndFilters from "../components/SearchAndFilters";
import CategoryPills from "../components/CategoryPills";
import MenuSection from "../components/MenuSection";
import { SECTIONS } from "../data/sections";
import type { Section } from "../../types"; 

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>(SECTIONS?.[0]?.id ?? "");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  // Map of section id -> DOM element
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pillsRef = useRef<HTMLDivElement | null>(null);

  // initialize collapsed map once
  useEffect(() => {
    const map: Record<string, boolean> = {};
    SECTIONS.forEach((s) => (map[s.id] = false));
    setCollapsed(map);
  }, []);

  // intersection observer to update active pill on scroll
  useEffect(() => {
    // only run in browser
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    const options: IntersectionObserverInit = {
      root: null,
      // detect section roughly in middle of viewport
      rootMargin: "-55% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("data-section-id");
        if (!id) return;

        setActive(id);

        // auto-scroll pills so active pill stays visible
        const pillContainer = pillsRef.current;
        const pill = pillContainer?.querySelector(
          `[data-pill-id="${id}"]`
        ) as HTMLElement | null;

        if (pill && pillContainer) {
          const pillRect = pill.getBoundingClientRect();
          const contRect = pillContainer.getBoundingClientRect();

          if (pillRect.left < contRect.left || pillRect.right > contRect.right) {
            pill.scrollIntoView({ behavior: "smooth", inline: "center" });
          }
        }
      });
    }, options);

    // observe currently registered section DOM nodes
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el || typeof window === "undefined") return;
    const y = el.getBoundingClientRect().top + window.scrollY - 140; // offset for sticky header/search
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const filteredSections: Section[] = query
    ? SECTIONS.map((s) => ({
        ...s,
        items: s.items.filter((i) =>
          `${i.title} ${i.desc ?? ""}`.toLowerCase().includes(query.toLowerCase())
        ),
      })).filter((s) => s.items.length > 0)
    : SECTIONS;

  return (
    <main className="min-h-screen bg-[#faf9f7] flex justify-center">
      <div className="w-full max-w-md bg-[#faf9f7] pb-24">
        {/* Header */}
        <Header count={7} />

        {/* Sticky search + pills */}
        <div className="sticky top-0 z-40 bg-[#faf9f7]">
          <SearchAndFilters query={query} setQuery={setQuery} selectedFilter={"all"} setSelectedFilter={function (v: "all" | "veg" | "nonveg" | "egg"): void {
            throw new Error("Function not implemented.");
          } } />
          <CategoryPills
            sections={SECTIONS}
            active={active}
            onClick={scrollToSection}
            pillsRef={pillsRef}
          />
        </div>

        {/* Sections */}
        <div className="mt-2">
          {filteredSections.map((sec) => (
            <div
              key={sec.id}
              // keep a stable function ref (works fine for lists)
              ref={(el) => {
                sectionRefs.current[sec.id] = el;
              }}
              data-section-id={sec.id}
            >
              <MenuSection
                section={sec}
                collapsed={!!collapsed[sec.id]}
                toggleCollapsed={() =>
                  setCollapsed((p) => ({ ...p, [sec.id]: !p[sec.id] }))
                }
              />
            </div>
          ))}

          <div className="h-24" />
        </div>
      </div>
    </main>
  );
}
