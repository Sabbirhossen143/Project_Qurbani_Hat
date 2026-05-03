import AnimalCard from "./AnimalCard";

const animals = [
  {
    id: 1,
    name: "Deshi Cow",
    price: 120000,
    location: "Bogura",
    image: "https://i.postimg.cc/8P3d9YhS/cow.jpg",
  },
  {
    id: 2,
    name: "Sahiwal Cow",
    price: 150000,
    location: "Rajshahi",
    image: "https://i.postimg.cc/8P3d9YhS/cow.jpg",
  },
  {
    id: 3,
    name: "Black Bengal Goat",
    price: 25000,
    location: "Khulna",
    image: "https://i.postimg.cc/8P3d9YhS/cow.jpg",
  },
  {
    id: 4,
    name: "Local Goat",
    price: 18000,
    location: "Dhaka",
    image: "https://i.postimg.cc/8P3d9YhS/cow.jpg",
  },
];

const Featured = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-xl font-semibold mb-6">
        Featured Animals
      </h2>

      <div className="grid md:grid-cols-4 gap-5">
        {animals.map((a) => (
          <AnimalCard key={a.id} animal={a} />
        ))}
      </div>
    </div>
  );
};

export default Featured;