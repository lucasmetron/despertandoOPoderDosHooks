import React, { useState, useEffect, createRef } from 'react'
import './App.css';

function Counter(props) {
  const [valor, setValor] = useState(0);
  const button = createRef();

  console.log(1, button)
  useEffect(() => {
    console.log(3, button)
  })
  console.log(2, button)


  return <button ref={button} onClick={() => setValor(valor + 1)}> {`Valor: ${valor}`}</button >
}

function App() {

  return (
    <Counter />
  );
}

export default App;
