import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import Timeservice from './Pages/Timeserves';
import Howami from './Pages/HowAmi'
import Layout from "./Pages/Layout";
import './Pages/Timeserves.css';
import './Pages/HomePage.css'
import './Pages/Howami.css'
import Nav from './Nav'


export default function App (){
    return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={< Layout />}>
          <Route index element={<HomePage />} />
          <Route path="TimeService" element={<Timeservice />} />
          <Route path="HowAmi" element={<Howami />} />
       </Route>
     </Routes>
     </BrowserRouter>
    )
}