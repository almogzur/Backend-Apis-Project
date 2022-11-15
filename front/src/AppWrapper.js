import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import Timeservice from './Pages/Timeserves';
import Whoami from './Pages/Whoami'
import Layout from "./Layout";
import UrlShort from './Pages/UrlShort'
import './index.css'
import WorkOut from './Pages/workout'
import MetaData from './Pages/Metadata';


export default function AppWrapper (){
    return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={< Layout />}>
          <Route index element={<HomePage />} />
          <Route path="TimeService" element={<Timeservice />} />
          <Route path="whoami" element={<Whoami />} />
          <Route path="Urlshort" element={<UrlShort/>}/>
          <Route path='WorkOut' element={<WorkOut/>}/>
          <Route path='MetaData' element={<MetaData/>}/>    
       </Route>
     </Routes>
     </BrowserRouter>
    )
}