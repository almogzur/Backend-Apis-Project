import HomePage from './Pages/HomePage'
import Timeservice from './Pages/Timeserves-index';
import Howami from './Pages/HowAmi'
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
     <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
     </Routes>
     </BrowserRouter>
    )
}