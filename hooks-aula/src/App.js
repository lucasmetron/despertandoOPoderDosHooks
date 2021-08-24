import React, { useEffect, useRef, useState } from 'react'
import useOnScreen from './data/hooks/useOnScreen';

function App() {
  const imageRef = useRef();
  const isImageVisible = useOnScreen(imageRef)

  return (
    <div>
      <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br />
      <img ref={imageRef} src={isImageVisible ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" : ""} />
    </div>
  );
}

//na tag img foi colocado uma condição para só passar o src da imagem quando ela estiver visivel

export default App;
