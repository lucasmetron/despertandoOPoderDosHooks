import React from 'react'
import { useOnlineStatus } from './data/hooks/useOnlineStatus';
import useLocalStorage from './data/hooks/useLocalStorage';

function App() {
  const isOnline = useOnlineStatus();
  const [counter, setCounter] = useLocalStorage('counter', 1);

  return (
    <div>
      {isOnline ? 'conectado' : 'desconectado'}

      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
}

export default App;
