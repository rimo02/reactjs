import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#212121");
  const defaultColor = "#212121";
  return (
    <>
      <div
        className="w-full h-screen duration-100"
        style={{ backgroundColor: color }}
      >
        {/* Container to center the button div */}
        <div className="w-1/2">
          <div className="flex flex-wrap fixed bottom-10 p-2 bg-black inset-x-0 justify-center">
            <button
              className="outline-none px-4 py-1 rounded-xl"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl"
              style={{ backgroundColor: "beige" }}
              onClick={() => setColor("beige")}
            >
              Beige
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl"
              style={{ backgroundColor: defaultColor }}
              onClick={() => setColor(defaultColor)}
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
