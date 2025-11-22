import { Section } from "../../types";
import { RefObject } from "react";

type Props = {
  sections: Section[];
  active: string;
  pillsRef: RefObject<HTMLDivElement>;
  scrollToSection: (id: string) => void;
};

export default function CategoryPills({ sections, active, pillsRef, scrollToSection }: Props) {
  return (
    <div ref={pillsRef} className="overflow-x-auto bg-white sticky top-[126px] z-30 shadow-sm">
      <div className="flex gap-3 p-3">
        {sections.map((s) => (
          <button
            key={s.id}
            data-pill-id={s.id}
            onClick={() => scrollToSection(s.id)}
            className={`px-4 py-2 rounded-lg border whitespace-nowrap ${
              active === s.id
                ? "border-orange-500 bg-orange-50 text-orange-600 font-semibold"
                : "border-gray-200 text-gray-600"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>
    </div>
  );
}
