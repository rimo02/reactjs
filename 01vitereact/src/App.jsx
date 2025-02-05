import Chai from "./chai";

function App() {
  // rule of jsx.. you can return only one element
  // perform all calculations outside this block
  const username = "Rimo";
  return (
    <>
      <Chai />
      <h1>{username} is learning React</h1>
    </>
  );
}

export default App;
