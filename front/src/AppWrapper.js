import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import Timeservice from './Pages/Timeserves';
import Howami from './Pages/HowAmi'
import Layout from "./Layout";
import './index.css'

export default function AppWrapper (){
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