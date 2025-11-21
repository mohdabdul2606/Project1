"use client";

import type { Section } from "../../types";


type Props = {
  sections: Section[];
  active: string;
  pillsRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (id: string) => void;
};

export default function CategoryPills({
  sections,
  active,
  pillsRef,
  scrollToSection,
}: Props) {
  return (
    <div className="overflow-x-auto mt-3" ref={pillsRef}>
      <div className="flex gap-3 pb-2">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              data-pill-id={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`w-[110px] flex-shrink-0 text-center p-2 rounded-lg border ${
                isActive ? "border-orange-400" : "border-gray-200"
              } bg-white`}
            >
              <div className="h-10 w-10 mx-auto mb-2 rounded flex items-center justify-center text-orange-400 border border-gray-100">
                🍽️
              </div>
              <div
                className={
                  isActive
                    ? "text-orange-600 font-semibold"
                    : "text-gray-700 text-sm"
                }
              >
                {s.title}
              </div>
              {isActive && <div className="h-1 mt-2 w-full bg-orange-100" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
