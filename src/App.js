import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';

function App() {

  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>GERADOR QR Code</h1>
     <input onChange={(element) => {setText(element.target.value)}} value ={text}></input>
     <QRCodeCanvas text={text}></QRCodeCanvas>
      <h2>By Capivara DEV</h2>
    </div>
  );
}

export default App;
