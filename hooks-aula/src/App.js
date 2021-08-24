import React from 'react'
import './App.css';
import ThemeProvider from './data/ThemeProvider';
import ExepmloUseCallback from './components/ExepmloUseCallback';
function App() {



  return (
    <ThemeProvider >
      <div>
        <ExepmloUseCallback />
      </div>
    </ThemeProvider>
  );
}

export default App;
