import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
      
      <div>
        <h1 className="text-5xl md:text-5xl font-bold leading-snug">
          Qurbani Animals, <br /> Made Simple
        </h1>

        <p className="mt-4 text-gray-600">
          Browse healthy cows and goats for Qurbani with ease and trust.
        </p>

        <Link to="/animals">
  <button className="mt-6 bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 transition active:scale-95">
    Browse Animals
  </button>
</Link>
      </div>

      <img
        src="https://i.postimg.cc/8P3d9YhS/cow.jpg"
        alt="cow"
        className="rounded-lg"
      />
    </div>
  );
};

export default Hero;