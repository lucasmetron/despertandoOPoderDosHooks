import React, { useState, useEffect, useRef, createRef } from 'react'
import './App.css';

function Counter(props) {
  const [valor, setValor] = useState(0);
  const [title, setTitle] = useState('');
  const defaultRef = createRef();
  const hookRef = useRef();


  useEffect(() => {
    console.log('EFFECT')
    console.log('default', defaultRef)
    console.log('hook', hookRef)

  }, [])

  console.log('default', defaultRef)
  console.log('hook', hookRef)

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
