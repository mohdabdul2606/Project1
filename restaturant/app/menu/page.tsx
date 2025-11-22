"use client";

import { useEffect, useRef, useState } from "react";

type Item = {
  id: string;
  title: string;
  price: number;
  desc?: string;
  veg?: boolean;
  image?: string;
};

type Section = {
  id: string;
  title: string;
  items: Item[];
};

// ----------------- STATIC MENU DATA -----------------
const SECTIONS: Section[] = [
  {
    id: "todays-special",
    title: "Todays Special",
    items: [
      {
        id: "ts1",
        title: "Traditional Moroccan Shakshuka",
        price: 350,
        desc: "Eggs gently poached in a rich tomato & pepper sauce...",
        veg: false,
        image: "/menu/shakshuka.jpg",
      },
      {
        id: "ts2",
        title: "Scrambled Egg Labneh Toast",
        price: 270,
        desc: "Perfectly cooked scrambled egg on creamy labneh toast...",
        veg: false,
        image: "/menu/labneh-toast.jpg",
      },
    ],
  },
  {
    id: "pastry-breads",
    title: "Pastry And Breads",
    items: [
      {
        id: "pb1",
        title: "Croissant",
        price: 120,
        desc: "Rich flaky and buttery croissant, the quintessential breakfast pastry...",
        veg: true,
        image: "/menu/croissant.jpg",
      },
      {
        id: "pb2",
        title: "Almond Croissant",
        price: 160,
        desc: "Filled with almond cream, topped with toasted almonds...",
        veg: true,
        image: "/menu/almond-croissant.jpg",
      },
    ],
  },
  {
    id: "food",
    title: "Food",
    items: [
      {
        id: "f1",
        title: "Eggs Benedict",
        price: 330,
        desc: "Toasted English muffin topped with ham, poached eggs & hollandaise...",
        veg: false,
        image: "/menu/eggs-benedict.jpg",
      },
      {
        id: "f2",
        title: "English Breakfast",
        price: 390,
        desc: "Hearty breakfast with eggs, sausages, baked beans & toast...",
        veg: false,
        image: "/menu/english-breakfast.jpg",
      },
      {
        id: "f3",
        title: "Stuffed Omelette",
        price: 250,
        desc: "Chicken sausage and caramelized onion stuffed in fluffy omelette...",
        veg: false,
        image: "/menu/stuffed-omelette.jpg",
      },
    ],
  },
  {
    id: "cold-bev",
    title: "Cold Beverage",
    items: [
      {
        id: "cb1",
        title: "Iced Latte",
        price: 180,
        desc: "Espresso over ice with chilled milk...",
        veg: true,
        image: "/menu/iced-latte.jpg",
      },
      {
        id: "cb2",
        title: "Cold Brew",
        price: 200,
        desc: "Slow-steeped cold brew coffee, smooth and bold...",
        veg: true,
        image: "/menu/cold-brew.jpg",
      },
    ],
  },
  {
    id: "hot-bev",
    title: "Hot Beverage",
    items: [
      {
        id: "hb1",
        title: "Cappuccino",
        price: 160,
        desc: "Espresso with steamed milk and thick foam...",
        veg: true,
        image: "/menu/cappuccino.jpg",
      },
      {
        id: "hb2",
        title: "Masala Chai",
        price: 90,
        desc: "Traditional Indian spiced tea with milk...",
        veg: true,
        image: "/menu/masala-chai.jpg",
      },
    ],
  },
  {
    id: "cold-pressed",
    title: "Cold Pressed Juice",
    items: [
      {
        id: "cp1",
        title: "Detox Green",
        price: 220,
        desc: "Spinach, cucumber, apple and lemon cold pressed juice...",
        veg: true,
        image: "/menu/green-juice.jpg",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        id: "d1",
        title: "Tiramisu Jar",
        price: 260,
        desc: "Coffee soaked sponge layered with mascarpone cream...",
        veg: true,
        image: "/menu/tiramisu.jpg",
      },
    ],
  },
  {
    id: "baked-cheesecake",
    title: "Baked Cheesecake",
    items: [
      {
        id: "bc1",
        title: "New York Cheesecake",
        price: 280,
        desc: "Classic baked cheesecake with buttery biscuit base...",
        veg: true,
        image: "/menu/cheesecake.jpg",
      },
    ],
  },
  {
    id: "kombucha",
    title: "Kombucha",
    items: [
      {
        id: "k1",
        title: "Ginger Lemon Kombucha",
        price: 220,
        desc: "Fermented tea infused with ginger and lemon...",
        veg: true,
        image: "/menu/kombucha.jpg",
      },
    ],
  },
  {
    id: "mini-cakes",
    title: "Mini Cakes",
    items: [
      {
        id: "mc1",
        title: "Mini Chocolate Truffle Cake",
        price: 250,
        desc: "Dense chocolate cake with truffle ganache...",
        veg: true,
        image: "/menu/mini-choco.jpg",
      },
    ],
  },
  {
    id: "cake-tubs",
    title: "Cake Tubs",
    items: [
      {
        id: "ct1",
        title: "Red Velvet Cake Tub",
        price: 300,
        desc: "Layers of moist red velvet cake with cream cheese frosting...",
        veg: true,
        image: "/menu/red-velvet.jpg",
      },
    ],
  },
  {
    id: "macarons",
    title: "Macarons",
    items: [
      {
        id: "m1",
        title: "Assorted Macarons (6 pcs)",
        price: 320,
        desc: "Delicate almond cookies with assorted fillings...",
        veg: true,
        image: "/menu/macarons.jpg",
      },
    ],
  },
  {
    id: "brownie",
    title: "Brownie",
    items: [
      {
        id: "b1",
        title: "Fudge Brownie",
        price: 150,
        desc: "Intensely fudgy chocolate brownie...",
        veg: true,
        image: "/menu/brownie.jpg",
      },
    ],
  },
  {
    id: "cupcakes",
    title: "Cupcakes",
    items: [
      {
        id: "cc1",
        title: "Vanilla Cupcake",
        price: 120,
        desc: "Soft vanilla sponge with buttercream frosting...",
        veg: true,
        image: "/menu/vanilla-cupcake.jpg",
      },
    ],
  },
  {
    id: "cakes",
    title: "Cakes",
    items: [
      {
        id: "c1",
        title: "Nutella Cake 500g",
        price: 800,
        desc: "Moist chocolate cake layered with Nutella ganache...",
        veg: true,
        image: "/menu/nutella-cake.jpg",
      },
    ],
  },
];

// ----------------------------------------------------

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const pillsRef = useRef<HTMLDivElement | null>(null);

  // init collapsed state
  useEffect(() => {
    const map: Record<string, boolean> = {};
    SECTIONS.forEach((s) => (map[s.id] = false));
    setCollapsed(map);
  }, []);

  // intersection observer to update active pill on scroll
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-55% 0px -40% 0px", // detect section around middle of screen
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

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 140; // offset for sticky search+pills
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
        {/* HEADER (scrolls with page) */}
        <header className="bg-white px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.avif"
                alt="Capella Bakery"
                className="w-10 h-10 rounded-md object-cover"
              />
              <div>
                <h1 className="text-sm font-semibold">Capella Bakery</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-xs text-black bg-gray-200 px-3 py-1 rounded-full">
                7
              </div>
              <button className="text-xs text-black bg-gray-200 px-3 py-1 rounded-full">
                Group Order
              </button>
            </div>
          </div>
        </header>

        {/* STICKY SEARCH + FILTERS + PILLS */}
        <div className="sticky top-0 z-40 bg-[#faf9f7]">
          {/* Search + Filters */}
          <div className="px-4 pt-3 pb-2 bg-[#faf9f7]">
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search item"
                  className="w-full pl-9 pr-3 py-2 rounded-lg border text-sm bg-white"
                />
              </div>
              <button className="px-3 py-2 rounded-lg border bg-white text-sm flex items-center gap-1">
                Filters ▾
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div
            ref={pillsRef}
            className="overflow-x-auto bg-white border-t border-b"
          >
            <div className="flex gap-3 px-4 py-3">
              {SECTIONS.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    data-pill-id={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`flex-shrink-0 w-[120px] rounded-xl border py-2 text-xs text-center ${
                      isActive
                        ? "border-orange-500 text-orange-600 font-semibold bg-orange-50"
                        : "border-gray-200 text-gray-700"
                    }`}
                  >
                    <div className="w-8 h-8 mx-auto mb-1 rounded-md border border-gray-200 flex items-center justify-center text-orange-400 text-lg">
                      🍽️
                    </div>
                    <div>{s.title}</div>
                    {isActive && (
                      <div className="h-[2px] w-full bg-orange-500 mt-2 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTIONS + ITEMS */}
        <div className="mt-2">
          {filteredSections.map((sec) => (
            <section
              key={sec.id}
              ref={(el) => (sectionRefs.current[sec.id] = el)}
              data-section-id={sec.id}
              className="bg-white mt-2"
            >
              {/* Section header */}
              <div className="px-4 pt-4 flex items-center justify-between border-b border-gray-100">
                <h2 className="font-semibold text-base">
                  {sec.title}{" "}
                  <span className="text-gray-500 text-sm">
                    ({sec.items.length})
                  </span>
                </h2>
                <button
                  onClick={() =>
                    setCollapsed((p) => ({ ...p, [sec.id]: !p[sec.id] }))
                  }
                  className="text-gray-500 text-lg"
                >
                  {collapsed[sec.id] ? "▾" : "▴"}
                </button>
              </div>

              {/* Section items */}
              {!collapsed[sec.id] && (
                <div className="pt-1">
                  {sec.items.map((it, idx) => (
                    <div
                      key={it.id}
                      className={`px-4 py-4 flex flex-col gap-2 ${
                        idx !== sec.items.length - 1
                          ? "border-b border-dotted border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Veg / Non-veg icon */}
                        <div className="mt-1">
                          <span
                            className={`inline-flex w-4 h-4 rounded-[3px] border-2 ${
                              it.veg
                                ? "border-green-700"
                                : "border-yellow-400"
                            }`}
                          >
                            <span
                              className={`m-[2px] flex-1 rounded-[2px] ${
                                it.veg ? "bg-green-700" : "bg-yellow-400"
                              }`}
                            />
                          </span>
                        </div>

                        {/* Title + Price + Desc */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between gap-3">
                            <div className="min-w-0">
                              <p className="font-semibold text-base truncate">
                                {it.title}
                              </p>
                              <p className="mt-1 text-sm font-medium text-gray-800">
                                ₹ {it.price.toFixed(2)}
                              </p>
                            </div>

                            {/* Image + Add button */}
                            {it.image && (
                              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                <div className="w-24 h-16 rounded-md overflow-hidden bg-gray-100">
                                  <img
                                    src={it.image}
                                    alt={it.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <button className="px-4 py-1 rounded-lg border border-orange-500 text-orange-600 text-xs font-medium">
                                  + Add
                                </button>
                                <span className="text-[11px] text-gray-400">
                                  Customisable
                                </span>
                              </div>
                            )}
                          </div>

                          {it.desc && (
                            <p className="mt-2 text-xs text-gray-500 leading-snug">
                              {it.desc}{" "}
                              <span className="text-orange-500">
                                Read More
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          <div className="h-24" />
        </div>
      </div>
    </main>
  );
}
