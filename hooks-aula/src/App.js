import React, { useEffect, useRef, useState } from 'react'
import useWindowSize from './data/hooks/useWindowSize';

function App() {
  const windowSize = useWindowSize();

  return (
    <div>
      Largura : {windowSize.width}
      <br />
      Altura : {windowSize.heigth}
    </div>
  );

}

export default App;
