import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/TimeService">TimeService</Link>
        </li>
        <li>
          <Link to="/Howami">Howami</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;