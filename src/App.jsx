import { useState } from "react";

function App() {
  const [color, setColor] = useState("LightBlue");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-3xl">
          <button
          onClick={() => setColor("#FFA500")}
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFA500" }}
          >
            Yellow
          </button>
          <button
          onClick={() => setColor("#00008B")}
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#00008B" }}
          >
            DarkBlue
          </button>
          <button
          onClick={() => setColor("#800080")}
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#800080" }}
          >
            Purple
          </button>
          <button
          onClick={() => setColor("#FF00FF")}
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FF00FF" }}
          >
            Magenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
