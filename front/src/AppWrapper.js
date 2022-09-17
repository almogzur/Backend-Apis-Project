import HomePage from './Pages/HomePage'
import Timeservice from './Pages/Timeserves-index';
import Howami from './Pages/Howami.css'
import './TimeService/Timeserves.css';
import './Pages/HomePage.css'
import './Pages/HowAmi.css'
import Nav from './Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";


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