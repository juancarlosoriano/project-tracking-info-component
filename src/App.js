import React from "react";
import logo from "./images/logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="c-background-box"></div>
      <nav className="navbar navbar-expand-lg navbar-light c-navbar">
        <a className="navbar-brand" href="#navbar">
          <img src={logo} alt="logo-img" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item c-navbar__link">Product</li>
            <li className="nav-item c-navbar__link">Features</li>
            <li className="nav-item c-navbar__link">Pricing</li>
            <li className="nav-item c-navbar__link">dot</li>
            <li className="nav-item c-navbar__link c-navbar__link--login">
              Login
            </li>
          </ul>
        </div>
      </nav>
      <div>
        New Monograph Dashboard
        <h1>Powerful insights into your team </h1>
        <span>Project planning and time tracking for agile teams</span>
        <button type="button" className="">
          Schedule a demo
        </button>{" "}
        <span>to see a live preview</span>
        <footer>
          <p className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Juan Carlo Soriano</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
