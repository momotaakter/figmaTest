import Image from "next/image";

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, description }) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {/* Image Part */}
      <div className="relative w-full h-56 bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text Part */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
