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
        <Route path="/" element={< Layout />}>
          <Route index element={<MetaData/>} />
          <Route path="/timeService" element={<Timeservice />} />
          <Route path="/whoami" element={<Whoami />} />
          <Route path="/urlshort" element={<UrlShort/>}/>
          <Route path='/workOut' element={<WorkOut/>}/>
          <Route path='/metadata' element={<MetaData/>}/>
       </Route>
     </Routes>
     </BrowserRouter>
    )
}