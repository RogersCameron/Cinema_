import { Search } from "lucide-react";
const HeroSection = () => {
  return (
    <>
      <section className="bg-slate-600 ">
        <div className="relative w-full h-100 overflow-hidden flex items-center justify-center">
          <img
            src="/placeholder.svg "
            className=" border border-white rounded-xl h-[90%] w-[90%] object-cover min-w-[400px]"
          />

          <div className=" absolute flex flex-col pl-8 h-[90%] w-[90%] justify-center top-15 gap-2">
            <h1 className="font-bold text-white text-4xl">
              Discover Your Next Favorite
            </h1>
            <h1 className="text-gray-300">
              Personalized movie recommendations based on your taste and viewing
              history.
            </h1>
            <div className="flex flex-row gap-3">
              <button className=" w-30 border rounded border-red-500 text-white p-2 bg-red-500 hover:bg-red-700  hover:border-red-700">
                Explore Now
              </button>
              <button className=" w-30 border rounded border-gray-300 text-gray-300 p-2 hover:bg-gray-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div
          className=" flex  flex-col items-center justify-center gap-5
         "
        >
          <Search className=" ml-1 absolute mb-12 left-[15%]  text-gray-400 h-6 w-6 hover:text-black " />
          <input
            type="text"
            placeholder="Search for movies, genres, actors... "
            className=" h-10 w-[70%] border border-gray-300 rounded text-gray-300 pl-10 "
          ></input>
          <button className="text-white font-medium border border-gray-300 rounded w-[30%] bg-gradient-to-r from-[#1e293b] to-[#cbd5e1] hover:opacity-90 transition">
            Pick for me
          </button>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
