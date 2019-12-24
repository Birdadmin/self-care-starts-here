import React from 'react';
import './Header.css'

function Header() {

  return (
    <div className="Header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" >
          <img className="Logo" src={ require('../images/white-logo.png') } alt="top hemp company with the best hemp lotions" aria-label="top hemp company with the best hemp lotions"/>
        </a>
      </nav>
    </div>
  );
}

export default Header;
