// components/ScienceCard.tsx
import Image from "next/image";

export default function LearningStudentSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {/* Image */}
        <div className="relative">
          <Image
            src="/images/Abstract Design.png" // place your image in the /public folder
            alt="Science Class"
            width={400}
            height={224}
            className="w-full h-56 object-cover"
          />
          {/* Peach rectangle */}
          <div className="absolute inset-x-1/2 -bottom-4 w-20 h-6 bg-[#FBE5D6] rounded-t-lg"></div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900">Science</h2>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            Exploring the natural world through hands-on experiments and
            investigations.
          </p>
        </div>
      </div>
    </div>
  );
}
