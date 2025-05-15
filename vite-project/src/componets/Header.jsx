const Header = () => {
  return (
    <header className="bg-slate-600 shadow sticky top-0 z-50">
      <nav className=" mx-auto p-4 flex justify-between items-center ">
        <h1 className="text-black text-xl ">Reelr</h1>
        <button className=" text-4xl p-2 hover:text-gray-500 flex items-center justify-center">
  &#9776;
</button>
      </nav>
    </header>
  );
};

export default Header;
