import React, { useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  // const countRef = useRef(count);

  const handleClick = () => {
    setCount(count + 1);
    // countRef.current = count + 1;
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
