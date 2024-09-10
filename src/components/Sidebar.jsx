import { assets } from "../assets/assets";

function Sidebar() {
  return (
    <>
      <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        <div className="bg-gray-900 h-[9%] rounded flex flex-col justify-around">
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-7" src={assets.home_icon} alt="home icon" />
            <p className="font-bold text-lg">Accueil</p>
          </div>
        </div>
        <div className="bg-gray-900 h-[9%] rounded flex flex-col justify-around">
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-7" src={assets.search_icon} alt="search icon" />
            <p className="font-bold text-lg">Recherche</p>
          </div>
        </div>
        <div className="bg-gray-800 h-[82%] rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-7" src={assets.stack_icon} alt="stack icon" />
              <p className="font-bold text-lg">Bibliothèque</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-7" src={assets.plus_icon} alt="stack icon" />
            </div>
          </div>
          <div className="p-4 bg-gray-700 m-2 rounded font-semibold flex flex-col items-start">
            <h1 className="text-[20px]">Créer votre première playlist</h1>
            <p className="font-light mt-3">C'est simple à faire</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Créer une playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
