import React, { useEffect, useRef, useState } from 'react'
import useKeyPress from './data/hooks/useKeyPress';

function App() {

  const keyA = useKeyPress('a')
  const keyB = useKeyPress('b')

  return (
    <div>
      {keyA && "A"} {/* se keyA for true ele mostra 'A' */}
      {keyB && "B"}
    </div>
  );

}

export default App;
