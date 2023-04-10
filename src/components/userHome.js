import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./NavBar";

class UserHome extends Component {
  logOut = () => {
    //clear data from local storage
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  render() {
    const { userData } = this.props;
    return (
      <div>
        <Navbar />

        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading">
              Hi...,<h3>{userData.fname}</h3> Welcome To North Logistics!
            </div>
            <div className="masthead-heading text-uppercase">
              It's Nice To Meet You
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase mx-2"
              href="#services"
            >
              Tell Me More
            </a>
            <button
              className="btn btn-primary btn-xl text-uppercase"
              onClick={this.logOut}
            >
              Logout
            </button>
          </div>
        </header>

        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                A complete Transportation Solutions
              </h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-truck-arrow-right fa-stack-1x fa-inverse"></i>
                  <img src="7.png" width={100} ></img>

                </span>
                <h4 className="my-3">Shipments</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-square-parking fa-stack-1x fa-inverse"></i> */}
                  <img src="4.png" width={100} ></img>

                </span>
                <h4 className="my-3">Vehical Parking</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-warehouse fa-stack-1x fa-inverse"></i> */}
                  
                  <img src="3png.png" width={100} ></img>
                </span>
                <h4 className="my-3">Storage</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-start">
                Copyright &copy; North Logistics
              </div>
              <div className="col-lg-4 my-3 my-lg-0">
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a className="link-dark text-decoration-none me-3" href="#!">
                  Privacy Policy
                </a>
                <a className="link-dark text-decoration-none" href="#!">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default UserHome;
