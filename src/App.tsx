import React from 'react';
import { CountDisplayer } from './components/CountDisplayer';
import { CountIncrementer } from './components/CountIncrementer';

function App() {
  return (
    <div className="App">
      <h1>React Hooks Example</h1>
      <CountDisplayer></CountDisplayer>
      <CountIncrementer></CountIncrementer>
    </div>
  );
}

export default App;
