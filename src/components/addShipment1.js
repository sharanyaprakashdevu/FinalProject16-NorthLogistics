import React, { Component,useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

export default function AddShipment1() {



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
                    <Link className="nav-link" to={'/userPage'}>
                      Home
                    </Link>
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link" to={'/rental'}>
                      Rental
                    </Link>
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-up'}>
                      Storage
                    </Link>
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-up'}>
                      Parking
                    </Link>
                  </li>
  
                </ul>
              </div>
              </div>
           </nav>


      <div style={{width:"auto"}}>
      <form onSubmit={handleSubmit} style={{width:"auto"}}>
        <h3>Shipment</h3>
        
        <div className="mb-3">
          <label>Name /Company Name </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            //access values
            onChange={(e)=>setfname(e.target.value)}
          />
          
        </div>
       
        <div className="mb-3">
          <label>Phone Number</label>
          <input type="phone"
          className="form-control" 
          placeholder="Contact Detail"
          onChange={(e)=>setphone(e.target.value)} />
        </div>

        <div className="mb-3">
          <label>Address To</label>
          <input type="text"
            className="form-control"
            placeholder="Current Location"
            onChange={(e)=>setaddressFrom(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Address From</label>
          <input type="text"
            className="form-control"
            placeholder="Current Location"
            onChange={(e)=>setaddressTo(e.target.value)}
          />
        </div>

        
        
        
        <div className="dropdown" >
        <label>Select Shipment Type</label>
          <div className="dropdown-btn" onClick={e=> 
            setshipmentType(!shipmentType)}>
             
            {selectedShip}
            <span className="fas fa-caret-down" ></span>
            <FontAwesomeIcon icon={faCaretDown}/>
          </div>
          {shipmentType &&(
          <div className="dropdown-content">
            {options.map(option=>(

                      <div onClick={e=>{
                        setSelectedShip(option)
                        setshipmentType(false)
                      }
                     } className="dropdown-item">
                        {option}
                        
                      </div>
            ))}     
          </div>
          )}
        </div>

        <div className="dropdown" >
        <label>Select Service Type</label>
          <div className="dropdown-btn" onClick={e=> 
            setserviceType(!serviceType)}>
             
            {selectedService}
            <span className="fas fa-caret-down" ></span>
            <FontAwesomeIcon icon={faCaretDown}/>
          </div>
          {serviceType &&(
          <div className="dropdown-content">
            {services.map(option=>(

                      <div onClick={e=>{
                        setSelectedService(option)
                        setserviceType(false)
                      }
                     } className="dropdown-item">
                        {option}
                        
                      </div>
            ))}     
          </div>
          )}
        </div>


        <div className="mb-3">
          <label>Dimensions</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter height , width"
            onChange={(e)=>setdimensions(e.target.value)}
          />
        </div>

        <div className="d-grid">
          
          <button type="submit" className="btn btn-primary" >
            Confirm Shipment
          </button>
          
        </div>
        
      </form>
      </div>  

    </div>


)
}