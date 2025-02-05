import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // notice some important points
    // First Case
    setCounter(counter + 1); // Uses counter = 15 → sets counter to 16
    setCounter(counter + 2); // Uses counter = 15 → sets counter to 17
    setCounter(counter + 1); // Uses counter = 15 → sets counter to 16
    console.log("Clicked ", counter);

    // Second Case
    setCounter((counter) => counter + 1); // Uses latest state → 16 → 17
    setCounter((counter) => counter + 2); // Uses latest state → 17 → 19
    setCounter((counter) => counter + 1); // Uses latest state → 19 → 20
  };
  const decValue = () => {
    setCounter((counter = Math.max(counter - 1, 0)));
    console.log("Clicked ", counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  );
}

export default App;
