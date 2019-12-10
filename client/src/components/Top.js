import React from "react";

function Top(props) {
  return (
    <div className="navbar-fixed z-depth-2">
      <nav className="blue">
        <div className="container">
          <div className="nav-wrapper">
            <div className="brand-logo">Clicky!</div>
            <div className="right">{props.children}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Top;
