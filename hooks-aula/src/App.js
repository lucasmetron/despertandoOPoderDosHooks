import React, { useState, useEffect, useRef, createRef } from 'react'
import './App.css';

function Counter(props) {
  const [valor, setValor] = useState(0);
  const [title, setTitle] = useState('');
  const defaultRef = createRef();
  const hookRef = useRef();

  useEffect(() => {
    setInterval(() => {
      setValor(v => v + 1)
      console.log(valor)
    }, 1000)

  }, [])

  useEffect(() => {
    console.log(valor)
  }, [valor])


  // useEffect(() => {
  //   setInterval(() => {
  //     setValor(valor + 1)

  //   }, 1000)

  // }, [])

  // useEffect(() => {
  //   console.log(valor)
  // }, [valor])



  return (
    <>

      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <button onClick={() => setValor(valor + 1)}> {`Valor: ${valor}`}</button >

      <div ref={defaultRef}></div>
      <div ref={hookRef}></div>

    </>
  );

}

function App() {

  return (
    <Counter />
  );
}

export default App;
