import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href=""></a>
        <img src='https://www.creativefabrica.com/wp-content/uploads/2019/10/11/Minimalist-Restaurant-Logo-by-Murnify-6-580x387.jpg' height="28px"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="btn btn-outline-secondary" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-secondary" href="#">Contact us</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-secondary" href="#">About us</a>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default Navbar;