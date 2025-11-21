"use client";

import { Section } from "../../types";
import MenuItem from "./MenuItem";

type Props = {
  section: Section;
  collapsed: boolean;
  toggle: () => void;
  sectionRef: (el: HTMLElement | null) => void;
};

export default function MenuSection({
  section,
  collapsed,
  toggle,
  sectionRef,
}: Props) {
  return (
    <section
      ref={sectionRef}
      data-section-id={section.id}
      className="bg-white mt-4 pt-3 pb-6"
    >
      <div className="px-4 flex items-center justify-between">
        <h3 className="font-semibold text-lg">
          {section.title}{" "}
          <span className="text-sm text-gray-500">
            ({section.items.length})
          </span>
        </h3>

        <button onClick={toggle} className="text-gray-500">
          {collapsed ? "▸" : "▾"}
        </button>
      </div>

      {!collapsed && (
        <div className="mt-3">
          {section.items.map((it) => (
            <MenuItem key={it.id} it={it} />
          ))}
        </div>
      )}
    </section>
  );
}
