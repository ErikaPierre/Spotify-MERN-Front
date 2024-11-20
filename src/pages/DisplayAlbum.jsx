import DisplayNavBar from "../components/DisplayNavBar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../context/PlayerContext";

function DisplayAlbum() {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumID = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumID)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <>
      <div
        ref={displayRef}
        className="w-[85%] rounded p-2 flex-col md:flex-row md:items-end bg-[#121212]"
      >
        <div>
          <DisplayNavBar />
        </div>
        <div className="mt-10 flex">
          <img src={albumData.image} alt="" />
          <div className="ml-5 flex flex-col">
            <p className=" text-white text-4xl">Playlist</p>
            <h2 className="text-white text-5x1 font-bold mt-4 mb-4 md:text-7xl">
              {albumData.name}
            </h2>
            <h4 className="text-white text-2xl">{albumData.desc}</h4>
            <p className="mt-2">
              <img
                className="inline-block w-5 mr-2"
                src={assets.spotify_logo}
                alt=""
              />
              <span className="text-white">Spotify</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
          <p>
            <strong className="mr-4">#</strong> Titre
          </p>
          <p>Album</p>
          <p className="hidden sm:block">Ajoutée le</p>
          <img className="m-auto w-4 " src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {songsData.map((song, index) => (
          <div
            onClick={() => playWithId(song.id)}
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-10 mr-5" src={song.image} alt="" />
              {song.name}
            </p>
            <p className="text-[18px]">{albumData.name}</p>
            <p className="text-[18px] hidden sm:block">2h</p>
            <p className="text-[18px] text-center">{song.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayAlbum;
