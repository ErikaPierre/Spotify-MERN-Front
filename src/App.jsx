import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
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
      </div>
    </>
  );
}

export default App;
