import React from "react";
import logo from "./images/logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <nav id="#navbar" className="navbar navbar-expand-lg navbar-light c-navbar">
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
            <li className="nav-item c-navbar__link">
              <a href="#">Product</a>
            </li>
            <li className="nav-item c-navbar__link">
              <a href="#">Features</a>
            </li>
            <li className="nav-item c-navbar__link">
              <a href="#">Pricing</a>
            </li>
            <li className="nav-item c-navbar__link c-navbar__link--dot">•</li>
            <li className="nav-item c-navbar__link c-navbar__link--login">
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="c-background-box"></div>
      <div className="c-feature-img"></div>

      <div className="jumbotron container-fluid c-jumbotron">
        <div className="row">
          <div className="col-lg-12">
            <p className="c-jumbotron__top-text c-jumbotron--lg-text">
              <span className="btn c-jumbotron__new-text">New</span>{" "}
              <span className="c-jumbotron__light-text">
                Monograph Dashboard
              </span>
            </p>
            <h1 className="c-jumbotron__header-text c-jumbotron--lg-text">
              Powerful insights <br />
              into your team{" "}
            </h1>
            <span className="c-jumbotron__sub-text">
              Project planning and time tracking
              <br />
              for agile teams
            </span>
            <br />
            <br />
            <button
              type="button"
              className="btn c-jumbotron__cta-btn c-jumbotron--lg-text"
            >
              Schedule a demo
            </button>{" "}
            <span className="c-jumbotron__light-text c-jumbotron--lg-text">
              to see a preview
            </span>
          </div>
        </div>
      </div>

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
          . Coded by{" "}
          <a href="https://www.juancarlosoriano.ca/">Juan Carlo Soriano</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
