const Header = () => {
    return(
        <header className = "bg-white shadow sticky top 0 z-50">
        <nav className="max-w-6x1 mx-auto p-4 flex justify-between item-center">
        <div className="flex gap-3">
            <h1 className="border rounded-full w-8 h-8 flex items-center ">CR</h1>
            <h1 className="text-black text-xl ">Cameron Rogers</h1></div>
       
        <div> <button className="bg-white border border-gray-300 rounded p-1 hover:bg-gray-300 ">Menu</button></div>
      </nav>


        </header>

    );

}

export default Header;