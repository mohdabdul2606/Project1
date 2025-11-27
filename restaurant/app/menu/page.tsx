"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../components/Header";
import SearchAndFilters from "../components/SearchAndFilters";
import CategoryPills from "../components/CategoryPills";
import MenuSection from "../components/MenuSection";
import { SECTIONS } from "../data/sections";
import type { Section, Item } from "../../types";

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  veg?: boolean;
  image?: string;
};

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "veg" | "nonveg" | "egg"
  >("all");

  const [active, setActive] = useState<string>(SECTIONS?.[0]?.id ?? "");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [isGroupOrder, setIsGroupOrder] = useState(false);

  const [cart, setCart] = useState<Record<string, CartItem>>({});

  // Map of section id -> DOM element
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pillsRef = useRef<HTMLDivElement | null>(null);

  // init collapsed map
  useEffect(() => {
    const map: Record<string, boolean> = {};
    SECTIONS.forEach((s) => (map[s.id] = false));
    setCollapsed(map);
  }, []);

  // load cart from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("cart");
    if (!saved) return;
    try {
      const obj = JSON.parse(saved) as Record<string, CartItem>;
      setCart(obj);
    } catch {
      // ignore
    }
  }, []);

  // save cart to localStorage on change
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // intersection observer for active category pill
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-55% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("data-section-id");
        if (!id) return;

        setActive(id);

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
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // lookup item by id in SECTIONS
  const findItemById = (id: string): Item | undefined => {
    for (const sec of SECTIONS) {
      const found = sec.items.find((i) => i.id === id);
      if (found) return found;
    }
    return undefined;
  };

  // 🔥 swiggy-style quantity change handler
  const handleChangeItemQty = (itemId: string, delta: number) => {
    const baseItem = findItemById(itemId);
    if (!baseItem) return;

    setCart((prev) => {
      const existing = prev[itemId];
      const currentQty = existing?.qty ?? 0;

      // group order: add 2 at a time (optional), here we keep 1 per tap
      const newQty = currentQty + delta;

      if (newQty <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [itemId]: {
          id: baseItem.id,
          title: baseItem.title,
          price: baseItem.price,
          veg: baseItem.veg,
          image: baseItem.image,
          qty: newQty,
        },
      };
    });
  };

  const totalItems = useMemo(
    () => Object.values(cart).reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  // search + filter
  const filteredSections: Section[] = useMemo(() => {
    const q = query.toLowerCase();

    return SECTIONS.map((s) => ({
      ...s,
      items: s.items.filter((i: any) => {
        const text = `${i.title} ${i.desc ?? ""}`.toLowerCase();
        if (q && !text.includes(q)) return false;

        if (selectedFilter !== "all") {
          const diet: "veg" | "nonveg" | "egg" | undefined = i.type;
          if (diet !== selectedFilter) return false;
        }

        return true;
      }),
    })).filter((s) => s.items.length > 0);
  }, [query, selectedFilter]);

  return (
    <main className="min-h-screen bg-[#faf9f7] flex justify-center">
      <div className="w-full max-w-md bg-[#faf9f7] pb-24">
        {/* Header */}
        <Header
          count={totalItems}
          isGroupOrder={isGroupOrder}
          onToggleGroupOrder={() => setIsGroupOrder((prev) => !prev)}
        />

        {/* Sticky search + pills */}
        <div className="sticky top-0 z-40 bg-[#faf9f7]">
          <SearchAndFilters
            query={query}
            setQuery={setQuery}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
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
                cart={cart}
                onChangeItemQty={handleChangeItemQty}
              />
            </div>
          ))}

          <div className="h-24" />
        </div>
      </div>
    </main>
  );
}
