// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // Weather dark mode is enable
  const togleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2a4061'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>

        <BrowserRouter>
          <Navbar title="TEXT APP" mode = {mode} togleMode={togleMode}/>
            <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading = "Enter The Text To Analyze Below" mode={mode}/>}>
            </Route>
            <Route exact path="/About" element={<About/>}>
            </Route>
          </Routes>
      </div>
        </BrowserRouter>

    </>
  );
}

export default App;
