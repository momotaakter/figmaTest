import React from "react";

type SectionProps = {
  imgSrc: string;
  heading: string;
  paragraph: string;
};

const LearningStudentCard: React.FC<SectionProps> = ({ imgSrc, heading, paragraph }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl  p-6 space-y-0 border-2 border-[#262626]  shadow-[6px_6px_0px_2px_#1E1E1E]">
      {/* First Button */}
      <button className="px-4  border  transition text-[#FFEFE5] w-[80px] border-x-2 border-black bg-[#FFEFE5]">
  a
      </button>

      {/* Image (not full width, with gap) */}
      <img
        src={imgSrc}
        alt={heading}
        className="w-3/4 object-cover rounded-lg"
      />

      {/* Second Button */}
      <button className="px-4 rounded-b-lg border  transition text-[#FFEFE5] w-[80px] border-x-2 border-black bg-[#FFEFE5]">
  a
      </button>

      {/* Heading */}
      <h2 className="text-xl font-bold text-center">{heading}</h2>

      {/* Paragraph */}
      <p className="text-black text-center  font-[family-name:var(--font-outfit)] ">{paragraph}</p>
      
    </div>
  );
};

const LearningStudentSection = () => {
  const data = [
    {
      imgSrc: "./images/learnerstudent/firstLearner.png",
      heading: "Language Arts",
      paragraph:
        "Reading, writing, storytelling, and communication skills.",
    },
    {
      imgSrc: "./images/learnerstudent/student2.png",
      heading: "Mathematics",
      paragraph:
        "Number sense, basic operations, problem-solving, and logic.",
    },
  
 {
      imgSrc: "./images/learnerstudent/student2.png",
      heading: "Mathematics",
      paragraph:
        "Number sense, basic operations, problem-solving, and logic.",
    },


 {
      imgSrc: "./images/learnerstudent/student2.png",
      heading: "Mathematics",
      paragraph:
        "Number sense, basic operations, problem-solving, and logic.",
    },

 {
      imgSrc: "./images/learnerstudent/student2.png",
      heading: "Mathematics",
      paragraph:
        "Number sense, basic operations, problem-solving, and logic.",
    },

 {
      imgSrc: "./images/learnerstudent/student2.png",
      heading: "Mathematics",
      paragraph:
        "Number sense, basic operations, problem-solving, and logic.",
    },






  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {data.map((item, i) => (
        <LearningStudentCard
          key={i}
          imgSrc={item.imgSrc}
          heading={item.heading}
          paragraph={item.paragraph}
        />
      ))}
    </div>
  );
};

export default LearningStudentSection;
