import React from "react";
import {  Paragraph } from "../Typography";



interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className=" border-2 border-[#262626] relative bg-white  rounded-xl  p-6 flex flex-col gap-3  shadow-[6px_6px_0px_2px_#1E1E1E] ">
      {/* Icon */}
      <div className="absolute -top-5 left-5 bg-orange-100 p-2 rounded-lg shadow">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-semibold mt-6">{title}</h3>
      <p className="text-[#4C4C4D] text-[16px] md:text-[20px]  leading-relaxed font-[family-name:var(--font-outfit)]">{description}</p>
 
    </div>
  );
};

export default FeatureCard;
