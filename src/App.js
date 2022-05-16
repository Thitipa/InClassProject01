import * as React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Login from './components/Login';
import TipLogin from './components/TipLogin';

function App() {
  return (
    <div className="App">
      <TipLogin/>
      <Login/>
    </div>
  );
}

export default App;
