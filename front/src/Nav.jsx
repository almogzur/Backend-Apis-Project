import React from "react";
import { Link } from "react-router-dom";

// link is like 'a' tag 

function Navbar() {
  return (
    <div id="nav">
    <Link to="/">|MetaData | </Link>
    <Link to="/TimeService">TimeService | </Link>
    <Link to="/Whoami">Whoami | </Link>
    <Link to="/UrlShort">UrlShort | </Link>
    <Link to="/WorkOut">WorkOut | </Link>
   </div> 
  );
}

export default Navbar;