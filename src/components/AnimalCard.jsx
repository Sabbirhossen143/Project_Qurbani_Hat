import { Link } from "react-router-dom";

const AnimalCard = ({ animal }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-3">
      <img src={animal.image} className="h-40 w-full object-cover rounded" />

      <h3 className="mt-3 font-medium">{animal.name}</h3>
      <p className="text-green-700 font-semibold">৳ {animal.price}</p>
      <p className="text-sm text-gray-500">{animal.location}</p>

      <Link
        to={`/details/${animal.id}`}
        className="mt-2 inline-block text-sm text-green-700 hover:underline"
      >
        Details →
      </Link>
    </div>
  );
};

export default AnimalCard;