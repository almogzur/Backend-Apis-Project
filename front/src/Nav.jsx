import React from "react";
import { Link } from "react-router-dom";

// link is like 'a' tag 

function Navbar() {
  return (
    <div id="nav">
    <Link to="/home/">|MetaData | </Link>
    <Link to="/home/TimeService">TimeService | </Link>
    <Link to="/home/Whoami">Whoami | </Link>
    <Link to="/home/UrlShort">UrlShort | </Link>
    <Link to="/home/WorkOut">WorkOut | </Link>
   </div> 
  );
}

export default Navbar;