"use client";
import { useState } from "react";

const categories = [
  "All",
  "Classrooms",
  "Library",
  "Science Lab",
  "Computer Lab",
  "Garden and Nature Area",
];

export default function CategoryFilter() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center p-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-lg border transition 
            ${
              active === cat
                ? "bg-[#FFEFE5] border-black text-black font-semibold font-[family-name:var(--font-outfit)] "
                : "bg-white border-black text-black hover:bg-gray-100 font-[family-name:var(--font-outfit)] "
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
