import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import AnimalCard from "../components/AnimalCard";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  // 🔥 sorting logic
  const sortedAnimals = [...animals].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl  md:text-2xl lg:text-2xl font-bold">All Animals</h2>

          <select
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white 
  shadow-sm text-sm font-medium text-gray-700
  focus:outline-none focus:ring-2 focus:ring-green-500 
  hover:border-green-400 transition duration-200 cursor-pointer"
          >
            <option value="">Sort by price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sortedAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Animals;