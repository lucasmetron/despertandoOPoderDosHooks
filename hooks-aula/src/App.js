import React from 'react'
import './App.css';
import ThemeProvider from './data/ThemeProvider';
import Lista from './ui/Lista';
import Teste from './ui/Teste';

function App() {



  return (
    <ThemeProvider >
      <div>
        <Lista />
      </div>
    </ThemeProvider>
  );
}

export default App;
