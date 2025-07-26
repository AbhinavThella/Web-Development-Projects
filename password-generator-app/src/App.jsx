import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import {
  lowercaseLetters,
  numberChar,
  symbolChar,
  uppercaseLetters,
} from "./data/CharactersData";

function App() {
  const [passlength, setpasslength] = useState(10);
  const [uppercase, setuppercase] = useState(false);
  const [lowercase, setlowercase] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);
  const [passOut, setPassOut] = useState("");

  let handleClick = () => {
    let charSet = "";
    let finalPass = "";
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += uppercaseLetters;
      if (lowercase) charSet += lowercaseLetters;
      if (numbers) charSet += numberChar;
      if (symbols) charSet += symbolChar;

      for (let i = 0; i < passlength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPassOut(finalPass);
    } else {
      toast.error("Please select any one of the checkbox");
    }
  };

  let handleCopy = () => {
    navigator.clipboard.writeText(passOut);
  };
  return (
    <>
      <div className="passwordBox">
        <h1>Password Generator</h1>
        <div className="passoutput">
          <input type="text" value={passOut} readOnly />{" "}
          <button onClick={handleCopy}>Copy</button>
        </div>
        <div className="passRule">
          <label>Password length</label>
          <input
            type="number"
            min={10}
            max={20}
            value={passlength}
            onChange={(event) => setpasslength(event.target.value)}
          />
        </div>
        <div className="passRule">
          <label>Include uppercase</label>
          <input
            type="checkbox"
            checked={uppercase}
            onClick={() => setuppercase(!uppercase)}
          />
        </div>
        <div className="passRule">
          <label>Include lowercase</label>
          <input
            type="checkbox"
            checked={lowercase}
            onClick={() => setlowercase(!lowercase)}
          />
        </div>
        <div className="passRule">
          <label>Include numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onClick={() => setnumbers(!numbers)}
          />
        </div>
        <div className="passRule">
          <label>Include symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onClick={() => setsymbols(!symbols)}
          />
        </div>
        <button className="btn" onClick={handleClick}>
          Generate
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
