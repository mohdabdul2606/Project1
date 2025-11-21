"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "../../types";

import MenuHeader from "../components/MenuHeader";
import MenuSearchBar from "../components/MenuSearchBar";
import CategoryPills from "../components/CategoryPills";
import MenuSection from "../components/MenuSection";

import { SECTIONS } from "../data/sections"; // optional (or paste SECTIONS inside file)

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(SECTIONS[0].id);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const map: Record<string, boolean> = {};
    SECTIONS.forEach((s) => (map[s.id] = false));
    setCollapsed(map);
  }, []);

  // scroll highlight logic
  useEffect(() => {
    const container = containerRef.current;
    const options = {
      root: container,
      rootMargin: "-40% 0px -40% 0px",
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = e.target.getAttribute("data-section-id");
        if (!id) return;

        setActive(id);

        const pill = pillsRef.current?.querySelector(
          `[data-pill-id="${id}"]`
        ) as HTMLElement;

        pill?.scrollIntoView({ inline: "center", behavior: "smooth" });
      });
    }, options);

    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const filtered = query
    ? SECTIONS.map((s) => ({
        ...s,
        items: s.items.filter((i) =>
          i.title.toLowerCase().includes(query.toLowerCase())
        ),
      }))
    : SECTIONS;

  return (
    <div className="pb-28">
      <MenuHeader />
      <MenuSearchBar query={query} setQuery={setQuery} />

      <CategoryPills
        sections={SECTIONS}
        active={active}
        pillsRef={pillsRef}
        scrollToSection={(id) => {
          const el = sectionRefs.current[id];
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <div
        ref={containerRef}
        className="overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 220px)" }}
      >
        {filtered.map((sec) => (
          <MenuSection
            key={sec.id}
            section={sec}
            collapsed={collapsed[sec.id]}
            toggle={() =>
              setCollapsed((p) => ({ ...p, [sec.id]: !p[sec.id] }))
            }
            sectionRef={(el) => (sectionRefs.current[sec.id] = el)}
          />
        ))}

        <div className="h-32" />
      </div>
    </div>
  );
}
