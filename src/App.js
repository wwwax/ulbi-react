import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const onInputChange = (e) => {
    return setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Awesome React</h2>
        <hr />
      </div>

      <div class="counter">
        <h2>Counter: {counter}</h2>
        <div>
          <button onClick={decrement}>dec</button>
          <button onClick={reset}>res</button>
          <button onClick={increment}>inc</button>
        </div>
        <hr />
      </div>

      <div className="input-section">
        <h2>Input Value: {inputValue}</h2>
        <input type="text" value={inputValue} onChange={onInputChange} />
      </div>
    </div>
  );
}

export default App;
