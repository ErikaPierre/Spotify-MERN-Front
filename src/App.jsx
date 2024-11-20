import { useContext } from "react";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { Outlet } from "react-router-dom";
import { PlayerContext } from "./context/PlayerContext";

function App() {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[10%]">
          <Navbar />
        </div>
        <div className="h-[80%] flex">
          <Sidebar />
          <Outlet />
        </div>
        <div className="h-[10%]">
          <Player />
        </div>
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
}

export default App;
