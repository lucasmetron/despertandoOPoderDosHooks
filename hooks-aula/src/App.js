import React from 'react'
import './App.css';
import ThemeProvider from './data/ThemeProvider';
import Teste from './ui/Teste';

function App() {



  return (
    <ThemeProvider >
      <div className='App'>

      </div>
      <Teste></Teste>
    </ThemeProvider>
  );
}

export default App;
