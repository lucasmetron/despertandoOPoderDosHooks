import React, { useState } from 'react'
import useUndo from './data/hooks/useUndo';

function App() {
  const [counter, setCounter] = useState(0);
  const valorAnterior = useUndo(counter);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <h1>Valor anterior {valorAnterior}</h1>
    </div>
  );
}

export default App;
