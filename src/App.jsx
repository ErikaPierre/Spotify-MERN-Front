import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[10%]">
          <Navbar />
        </div>
        <div className="h-[90%] flex">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
