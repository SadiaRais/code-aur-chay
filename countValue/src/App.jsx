import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  let removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let resetValue = () => {
    setCount(0);
  };

  return (
    <>
      <button className="button" onClick={addValue}>
        Add value
      </button>

      <button className="button" onClick={removeValue}>
        Remove value
      </button>
      <h2>count value:{count}</h2>
      <button className="button" onClick={resetValue}>
        Reset value
      </button>
    </>
  );
}

export default App;
