import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowSpecials, setAllowSpecials] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumbers) letters += "0123456789";
    if (allowSpecials) letters += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * letters.length);

      pass += letters.charAt(char);
    }
    setPassword(pass);
  }, [length, allowNumbers, allowSpecials, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, allowNumbers, allowSpecials, generatePassword]);

  function handleNumbers() {
    setAllowNumbers((prev) => !prev);
  }

  function handleSpecials() {
    setAllowSpecials((prev) => !prev);
  }

  const passwordRef = useRef(null);
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="wrapper">
      <h3>Password generator</h3>
      <div className="password">
        <input type="text" value={password} readOnly ref={passwordRef} />
        <button onClick={copyToClipboard}>copy</button>
      </div>
      <div className="options">
        <input
          type="range"
          min="6"
          max="20"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <span>Length: {length}</span>
        <input
          type="checkbox"
          value="numbers"
          id="numbers"
          defaultChecked={allowNumbers}
          onClick={handleNumbers}
        />
        <label htmlFor="numbers">Numbers</label>
        <input
          type="checkbox"
          value="specials"
          id="specials"
          defaultChecked={allowSpecials}
          onClick={handleSpecials}
        />
        <label htmlFor="specials">Characters</label>
      </div>
    </div>
  );
}

export default App;
