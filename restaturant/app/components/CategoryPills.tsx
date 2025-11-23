"use client";
import React from "react";
import { Section } from "../../types";


export default function CategoryPills({
sections,
active,
onClick,
pillsRef,
}: {
sections: Section[];
active: string;
onClick: (id: string) => void;
pillsRef: React.RefObject<HTMLDivElement | null>;
}) {
return (
<div ref={pillsRef} className="overflow-x-auto bg-white border-t border-b">
<div className="flex gap-3 px-4 py-3">
{sections.map((s) => {
const isActive = active === s.id;
return (
<button
key={s.id}
data-pill-id={s.id}
onClick={() => onClick(s.id)}
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
);
}