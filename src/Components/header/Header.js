import React, { Component } from "react";
import "./Header.css";
import logo from "../../logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img src={logo} className="App-logo" alt="logo" />
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                  <h1 className="App-title">{this.props.title}</h1>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
