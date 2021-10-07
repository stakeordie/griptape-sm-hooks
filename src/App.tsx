import React from 'react';
import { CountDisplayer } from './components/CountDisplayer';
import { CountIncrementer } from './components/CountIncrementer';
import { useCounterStore } from './stores';
import global from './stores/global';

function App() {
  global.counterStore = useCounterStore();
  return (
    <div className="App">
      <h1>React Hooks Example</h1>
      <CountDisplayer></CountDisplayer>
      <CountIncrementer></CountIncrementer>
    </div>
  );
}

export default App;
