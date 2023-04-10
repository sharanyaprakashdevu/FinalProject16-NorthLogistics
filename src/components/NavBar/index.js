import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <img src="n.png" width={40} height={40} />
          <Link className="navbar-brand" to={"/sign-in"}>
            &nbsp; North Logistic
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/userPage"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/rental"}>
                  Rental
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/addShipment"}>
                  Shipment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/storage"}>
                  Storage
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/parking"}>
                  Parking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
