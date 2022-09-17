import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import Timeservice from './Pages/Timeserves';
import Howami from './Pages/HowAmi'
import './Pages/Timeserves.css';
import './Pages/HomePage.css'
import './Pages/Howami.css'
import Nav from './Nav'


export default function App (){
    return (
     <BrowserRouter>
     <Nav/>
     <Routes>
          <Route path="/" element={<HomePage />}>
          <Route path="TimeService" element={<Timeservice />} />
          <Route path="HowAmI" element={<Howami/>} />
        </Route>
     </Routes>
     </BrowserRouter>
    )
}