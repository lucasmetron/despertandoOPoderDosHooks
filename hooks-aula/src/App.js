import React, { useState, useEffect } from 'react'
import './App.css';

function Counter(props) {
  const [valor, setValor] = useState(0);
  const [title, setTitle] = useState('');



  useEffect(() => {
    console.log(3)
    document.title = title
  }, [title])



  return (
    <>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <button onClick={() => setValor(valor + 1)}> {`Valor: ${valor}`}</button >
    </>
  );



}

function App() {

  return (
    <Counter />
  );
}

export default App;
