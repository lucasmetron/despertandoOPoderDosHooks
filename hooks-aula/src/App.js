import React, { useState } from 'react'
import './App.css';

function Counter(props) {
  const [valor, setValor] = useState(0);

  return <button onClick={() => setValor(valor + 1)}> {`Valor: ${valor}`}</button >
}

function App() {

  return (
    <Counter />
  );
}

export default App;
