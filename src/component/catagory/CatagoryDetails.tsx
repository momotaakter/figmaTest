"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/learnerstudent/firstLearner.png",
  "/images/learnerstudent/firstLearner.png",
  "/images/learnerstudent/firstLearner.png",
  "/images/learnerstudent/firstLearner.png"
];

export default function CatagoryDetails() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* IMAGE SECTION */}
      <div className="relative z-20 flex justify-center md:grid md:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8">
        {images.map((src, index) => (
          <div
            key={index}
            className={`${
              index === current ? "block" : "hidden md:block"
            }`}
          >
            <img
              src={src}
              alt={`Classroom ${index + 1}`}
              className="w-full h-64 object-cover border-2 border-black rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 bg-white rounded-lg p-6 -mt-20 sm:-mt-26 pt-16 sm:pt-19 min-h-[340px] border-2 shadow-[6px_6px_0px_2px_#1E1E1E]">
      
        <h2 className="text-2xl font-bold mb-2 pt-9">Classrooms</h2>
          <div className="flex">
        <p className="text-gray-600">
          Our well-equipped classrooms are designed to provide a nurturing and
          stimulating learning environment. Each classroom is thoughtfully
          arranged to inspire creativity, curiosity, and engagement.
        </p>
</div>
        {/* NAVIGATION */}
        <div className="flex justify-end gap-2  h-[34px] ">
          <button
            type="button"
            onClick={prevSlide}
            className="p-2 border border-gray-400 rounded-md hover:bg-gray-100"
            aria-label="Previous image"
            title="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="p-2 border border-gray-400 rounded-md hover:bg-gray-100"
            aria-label="Next image"
            title="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>

  );
}  