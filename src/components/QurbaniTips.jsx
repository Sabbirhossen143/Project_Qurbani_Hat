const QurbaniTips = () => {
  const tips = [
    "Choose a healthy animal with clear eyes",
    "Ensure proper age (2+ years for cow)",
    "Check weight and body condition",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">Qurbani Tips</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {tips.map((tip, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-sm">
            <p className="text-sm text-gray-700">✔ {tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QurbaniTips;