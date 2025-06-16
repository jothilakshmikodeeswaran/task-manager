import { useState } from 'react';


function SimpleCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount1(count1 + 1);
    setCount2(count2 + count1 + 1);
  };

  const decrement = () => {
    setCount1(count1 - 1);
    setCount2(count2 - count1);
  };

  const reset = () => {
    setCount1(0);
    setCount2(0);
  };

  const addFive = () => {
    setCount1(count1 + 5);
    setCount2(count2 + count1 + 5);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter 1: {count1}</h2>
      <h2>Counter 2: {count2}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addFive}>Add 5</button>
    </div>
  );
};

export default SimpleCounter;