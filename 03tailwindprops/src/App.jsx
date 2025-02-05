import "./App.css";
import Card from "./components/card";
function App() {
  let myObj = {
    username: "Rimo Ghosh",
    age: 22,
  };
  return (
    <>
      <h1 className="text-sky-200 mb-4">Chai and React</h1>
      <Card username={myObj.username} text="Bored Ape" />
      <Card username={"3b1b"} text="Crypto Punks"/>
    </>
  );
}

export default App;
