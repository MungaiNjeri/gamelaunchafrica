interface GameCardProps {
  title: string;
  image: string;
  description?: string;
}

export default function GameCard({ title, image, description }: GameCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {description && (
          <p className="text-gray-400 text-sm mt-2">{description}</p>
        )}
      </div>
    </div>
  );
}
