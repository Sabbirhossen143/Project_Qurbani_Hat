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
          <h2 className="text-xl font-semibold">All Animals</h2>

          <select
            onChange={(e) => setSort(e.target.value)}
            className="border px-2 py-1"
          >
            <option value="">Sort by price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
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