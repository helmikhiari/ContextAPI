import logo from "./logo.svg";
import "./App.css";
import React, { useContext } from "react";
import counterContext, { useCounterContext } from "./context/counterContext";
function App() {
  // const { counter, setCounter } = useContext(counterContext);
  const {counter,setCounter}=useCounterContext();
  return (
    <div className="App">
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default App;
