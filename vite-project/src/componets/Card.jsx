const Card = ({
  title = "this",
  image = "/placeholder.svg",
  rating = "8",
  genres = ["Action", "Drama",],
}) => {
  return (
    <>
      <div className=" mt-5 relative border w-60 h-80 rounded-xl bg-white">
        <img
          src={image}
          alt=""
          className="w-full h-full border rounded-xl border-black "
        />
        <div className=" absolute bottom-0 left-0 p-2 w-full ">
          <h1>{title}</h1>
          <h1>{rating}</h1>
          <div className="flex flex-row gap-2 flex-wrap text-sm">
          {genres.map((genre, index) =>( <span key={index} className="bg-slate-400 px-2 py-1 rounded">{genre}

          </span>))}
          </div>
        </div>
        <div className="absolute top-0 right-0 p-2 ">
          <button className="bg-white text-black border border-gray-300 rounded-full w-8 h-8 text-xl shadow-md hover:bg-gray-100 transition">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
