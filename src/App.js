import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu'
import Duck from './components/Duck/Duck';
import { useState } from 'react';

function App() {

  return <>
    <Menu/>
    <Duck/>
  </>
}

export default App;
