import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/home" element={< Layout />}>
          <Route index element={<MetaData/>} />
          <Route path="TimeService" element={<Timeservice />} />
          <Route path="whoami" element={<Whoami />} />
          <Route path="Urlshort" element={<UrlShort/>}/>
          <Route path='WorkOut' element={<WorkOut/>}/>
       </Route>
     </Routes>
     </BrowserRouter>
    )
}