import React, { Component,useEffect,useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function AdminHome({ userData }){
    const logOut=()=>{
        //clear data from local storage
        window.localStorage.clear();
        window.location.href="./sign-in";
    };

return(
<div>
         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
           <div className="container">
              <Link className="navbar-brand" to={'/sign-in'}>
                North Logistic
              </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={'/users'}>
                      Customers
                    </Link>
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link" to={'/addVehicle'}>
                      Add Vehicle
                    </Link>
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link" to={'/viewStorage'}>
                      Storage
                    </Link>
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link" to={'/viewParking'}>
                      Parking
                    </Link>
                  </li>
  
                </ul>
              </div>
              </div>
           </nav>
        
          <div>
              Hello...<h1>{userData.fname}</h1>
              <br/>
              <button onClick={logOut} className="btn btn-primary">
                  LOG OUT
              </button>
  
          </div>

          
        </div>
);

}
