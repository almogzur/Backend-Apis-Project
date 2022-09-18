import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="nav">
    <Link to="/">Home | </Link>
    <Link to="/TimeService">TimeService | </Link>
    <Link to="/Howami">Howami </Link>
   </div>
  );
}

export default Navbar;