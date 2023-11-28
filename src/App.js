import React from 'react';
import './App.css';
import {Routes,Route, } from "react-router-dom";
import Gokisoft from './Gokisoft';
import Login from './Login'
import Register from './Register';
import Info from './Info';
import DataMgr from './DataMgr';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Gokisoft />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Register' element={<Register />} />
      <Route path='/Info' element={<Info />}/>
    </Routes>
  );
}

export default App;
