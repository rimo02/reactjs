import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const [copied, setCopied] = useState(false);

  // const passwordGenerator = useCallback(() => {
  //   let pass = "";
  //   let str = "QWERTYUIOPASDFGHJKLZXCVBMqwertyuiopasdfghjklzxcvbnm";
  //   if (numAllowed) str += "0123456789";
  //   if (charAllowed) str += "~!@#$%^&*";
  //   for (let i = 0; i < length; i++) {
  //     let idx = Math.floor(Math.random() * str.length);
  //     pass += str.charAt(idx);
  //   }
  //   setpassword(pass);
  // }, [length, numAllowed, charAllowed, setpassword]); 
  // setpassword is optional but if you use password then for every change this event will be fired and will get stuck in  an infinite loop
  // use callback tends to optimise it by memoizing in cache,. we can even do it without useCallback

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBMqwertyuiopasdfghjklzxcvbnm";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*";
    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }
    setpassword(pass);
    console.log("New rendered")
  }, [length, numAllowed, charAllowed, setpassword]); // in sab ke basis pe optimise karo so that any chnages in this only will rerender else it will not rerender

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select(); // more optimization
    // passwordRef.current?.setSelectRange(0, 20); // use cases pe dependent
    window.navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    })
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-150 mx-auto shadow-md rounded-xl px-4 py-3 my-8 bg-gray-800">
        <h1 className="text-4xl text-center text-white my-3">password Generator</h1>
        <div className="flex shadow rounded-xl overflow-hidden mb-4" >
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className="p-2 w-full bg-white outline-none text-xl"
            ref={passwordRef}
          />
          <button
            className="outline-none p-2 bg-blue-500 shrink-0 w-30 text-white text-xl hover:bg-blue-400"
            onClick={copyToClipboard} >Copy</button>
          {copied && <div className="copytoclip">Copied to clipboard</div>}
        </div>

        <div className="flex items-center gap-x-2 justify-between">
          <div className="flex items-center gap-x-1 text-white">
            <input type="range"
              min={8}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>


          <div className="flex items-center gap-x-1 text-white">

            <input type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed(prev => !prev)
              }}
              id="numberInput"
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 text-white">

            <input type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed(prev => !prev)
              }}
              id="charInput"
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
