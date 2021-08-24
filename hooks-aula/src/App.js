import React from 'react'
import { useOnlineStatus } from './data/hooks/useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      {isOnline ? 'conectado' : 'desconectado'}
    </div>
  );
}

export default App;
