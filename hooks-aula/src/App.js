import React, { useState, useEffect, useRef, createRef } from 'react'
import './App.css';

function Counter(props) {
  const [valor, setValor] = useState(0);
  const valorRef = useRef(0);
  const [title, setTitle] = useState('');


  useEffect(() => {
    setInterval(() => {
      console.log(valor)
      console.log(valorRef)
    }, 1000)

  }, [])

  useEffect(() => {

    valorRef.current = valor

  }, [valor])

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
