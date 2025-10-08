import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>Contador: {count}</h1>
      <div className="counter-buttons">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Zerar</button>
      </div>
    </div>
  );
}

export default App;
