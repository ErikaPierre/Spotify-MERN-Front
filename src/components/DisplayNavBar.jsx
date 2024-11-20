import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function DisplayNavBar() {
  const navigate = useNavigate();
  const buttonStyle =
    "px-4 py-2 bg-transparent hover:bg-white hover:text-black hover:rounded-full";

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="fleche gauche"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="fleche droite"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-black text-[15px] px-4 py-2 rounded-2xl md:block cursor-pointer">
            Offre premium
          </button>
          <button className="bg-black text-white text-[15px] px-4 py-2 rounded-2xl">
            Installer l'App
          </button>
          <p className="bg-blue-300 w-8 h-8 rounded-full flex justify-center items-center">
            J
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4 text-white">
        <button className={buttonStyle}>Tous</button>
        <button className={buttonStyle}>Musiques</button>
        <button className={buttonStyle}>Playlists</button>
      </div>
    </>
  );
}

export default DisplayNavBar;
