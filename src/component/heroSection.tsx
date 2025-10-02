import React from "react";
import Image from "next/image";
import { Paragraph ,Button} from "./Typography";


const HeroSection: React.FC = () => {
  return (
    <section className="bg-white  shadow-[8px_8px_0px_1px_#1E1E1E] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border-2 rounded-[12px]">
      {/* Left side */}
      <div className="flex-1">
        {/* Pattern Image */}
        <div className="mb-6">
          <Image
            src="/images/Abstract Design.png"
            alt="Pattern"
            width={160}
            height={160}
            className="w-40 h-auto"
          />
        </div>

        <Button>Academics</Button>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Nurturing Young Minds for <br /> Success
        </h2>
      </div>

      {/* Right side */}
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <Paragraph>
Welcome to our Academics page, where we take pride in providing a
          comprehensive and stimulating educational experience for your child.
          Our kindergarten schools academic program is thoughtfully designed to
          foster a love for learning while building a strong foundation of
          essential skills and knowledge. From language arts and mathematics to
          science and social studies, our curriculum is carefully crafted to
          spark curiosity and encourage active exploration.
        </Paragraph>
      
      </div>
    </section>
  );
};

export default HeroSection;
