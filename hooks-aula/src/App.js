import React, { useEffect, useState } from 'react'
import useDebounce from './data/hooks/useDebounce';

function App() {
  const [text, setText] = useState('');
  const myText = useDebounce(text, 1000)

  useEffect(() => {
    console.log(text)
  }, [text])

  return (
    <div>
      <input type="text" value={text} onChange={event => setText(event.target.value)} />
      <br />
      <h1>{myText}</h1>
    </div>
  );
}

export default App;
