import React from "react";
import FeatureCard from "./FeatureCard";
import {
  BookOpen,
  BarChart3,
  Languages,
  Palette,
  Sun,
  Star
} from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="text-black text-lg" />,
      title: "Thematic Learning",
      description:
        "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    },
    {
      icon: <BarChart3 className="text-black text-lg" />,
      title: "STEAM Education",
      description:
        "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    },
    {
      icon: <Languages className="text-black text-lg" />,
      title: "Language Immersion",
      description:
        "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    },
    {
      icon: <Palette className="text-black text-lg" />,
      title: "Art and Creativity",
      description:
        "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    },
    {
      icon: <Sun className="text-black text-lg" />,
      title: "Outdoor Education",
      description:
        "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    },
    {
      icon: <Star className="text-black text-lg" />,
      title: "Play-Based Learning",
      description:
        "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
