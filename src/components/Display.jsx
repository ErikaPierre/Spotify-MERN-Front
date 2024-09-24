import DisplayNavBar from "./DisplayNavBar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";

function Display() {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 ">
      <DisplayNavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Vos mix préférés</h1>
        <div className= "flex overflow-auto gap-2">
          {albumsData.map((album, index) => (
            <AlbumItem
              key={index}
              image={album.image}
              name={album.name}
              id={album.id}
              desc={album.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Display;
