const breeds = [
  { name: "Sahiwal Cow", type: "Cow" },
  { name: "Deshi Cow", type: "Cow" },
  { name: "Black Bengal Goat", type: "Goat" },
];

const TopBreeds = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">Top Breeds</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {breeds.map((b, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-medium">{b.name}</h3>
            <p className="text-sm text-gray-500">{b.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBreeds;