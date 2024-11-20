import DisplayNavBar from "./DisplayNavBar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { Link } from "react-router-dom";

function Display() {
  return (
    <>
      <div className="w-[90%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 bg-scroll">
        <DisplayNavBar />
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Vos mix préférés</h1>
          <div className="flex overflow-auto gap-2">
            {albumsData.map((album, index) => (
              <Link to={`/album/${album.id}`}>
                <AlbumItem
                  key={index}
                  id={album.id}
                  image={album.image}
                  name={album.name}
                  desc={album.desc}
                />
              </Link>
            ))}
          </div>
          <h1 className="my-5 font-bold text-2xl">Musiques du moment</h1>
          <div className="flex overflow-auto gap-2">
            {songsData.map((song, index) => (
              <SongItem
                key={index}
                id={song.id}
                image={song.image}
                name={song.name}
                desc={song.desc}
                file={song.file}
                duration={song.duration}
              />
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Display;
