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
          <Route path="/home/TimeService" element={<Timeservice />} />
          <Route path="/home/whoami" element={<Whoami />} />
          <Route path="/home/Urlshort" element={<UrlShort/>}/>
          <Route path='/home/WorkOut' element={<WorkOut/>}/>
          <Route path='/home/"*"' element={<MetaData/>}/>
       </Route>
     </Routes>
     </BrowserRouter>
    )
}