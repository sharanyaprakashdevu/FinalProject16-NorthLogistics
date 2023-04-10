import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ConfirmShipment from "../confirmShipment";
import Navbar from "../NavBar";
import Payment from "../Payment";
//import React from 'react'
//import Select from 'react-select'

export default function AddShipment() {
  //Get values
  const [fname, setfname] = useState("");
  const [phone, setphone] = useState("");
  const [addressFrom, setaddressFrom] = useState("");
  const [addressTo, setaddressTo] = useState("");
  const [shipmentType, setshipmentType] = useState(false);
  const [selectedShip, setSelectedShip] = useState("");
  const options = [
    "",
    "",
    "",
    "Boxes/Bags",
    "Pallets",
    "Machinery",
    "Containers",
    "Box",
  ];

  const [serviceType, setserviceType] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const services = [
    "AirFrieght Door to Airport",
    "OceanFrieght Door to Port",
    "Door to Door by Air",
    "Door to Door by Sea",
    "Warehouse to warehouse",
  ];

  const [dimensions, setdimensions] = useState("");
  const [isPaymentPage, setIsPaymentPage] = useState(false);
  //const [additional,setadditional]=useState("")

  //procede to pay
  const procedeToPay = (e) => {
    e.preventDefault();

    setIsPaymentPage(true);
  };

  //Submit function
  const handleSubmit = (e) => {
    // e.preventDefault();

    // console.log(fname,phone,addressFrom,addressTo,selectedShip,selectedService,dimensions);

    if (!selectedService && !selectedShip) {
      alert("please select Service or select Ship");
      return;
    }

    const token = localStorage.getItem("token", "");

    fetch("http://localhost:5000/shipment_register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        phone,
        addressFrom,
        addressTo,
        selectedShip,
        selectedService,
        dimensions,
        token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "shipmentRegister");

        if (data.status == "ok") {
          alert("Shipment details added successfully");
          //window.localStorage.setItem("token",data.data);
          window.location.href = "./confirmShipment";
        } else {
          alert("Already Exist");
        }
      });
  };

  return (
    <div className="mx-auto">
      <Navbar />

      {!isPaymentPage && (
        <div style={{ width: "auto" }}>
          <form onSubmit={procedeToPay} style={{ width: "auto" }}>
            <h3>Shipment</h3>

            <div className="mb-3">
              <label>Name /Company Name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                required
                value={fname}
                //access values
                onChange={(e) => {
                  const regex = /^[a-zA-Z]+$/;
                  if (regex.test(e.target.value)) setfname(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label>Phone Number * </label>
              <input
                type="phone"
                className="form-control"
                placeholder="Contact Detail"
                required
                value={phone}
                onChange={(e) => {
                  const phoneRegex = /^[0-9]+$/;
                  if (phoneRegex.test(e.target.value) && phone.length <= 9)
                    setphone(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label>Address From</label>
              <input
                type="text"
                className="form-control"
                placeholder="Current Location"
                required
                value={addressFrom}
                onChange={(e) => setaddressFrom(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Address To</label>
              <input
                type="text"
                className="form-control"
                placeholder="Current Location"
                required
                value={addressTo}
                onChange={(e) => setaddressTo(e.target.value)}
              />
            </div>

            <div className="dropdown">
              <label>Select Shipment Type</label>
              <div
                className="dropdown-btn"
                onClick={(e) => setshipmentType(!shipmentType)}
              >
                {selectedShip}
                <span className="fas fa-caret-down"></span>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              {shipmentType && (
                <div className="dropdown-content">
                  {options.map((option) => (
                    <div
                      onClick={(e) => {
                        setSelectedShip(option);
                        setshipmentType(false);
                      }}
                      className="dropdown-item"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="dropdown">
              <label>Select Service Type</label>
              <div
                className="dropdown-btn"
                onClick={(e) => setserviceType(!serviceType)}
              >
                {selectedService}
                <span className="fas fa-caret-down"></span>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              {serviceType && (
                <div className="dropdown-content">
                  {services.map((option) => (
                    <div
                      onClick={(e) => {
                        setSelectedService(option);
                        setserviceType(false);
                      }}
                      className="dropdown-item"
                    >
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
                required
                value={dimensions}
                placeholder="Enter height , width"
                onChange={(e) => setdimensions(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Confirm Shipment
              </button>
            </div>
          </form>
        </div>
      )}

      {isPaymentPage && (
        <Payment
          procedeToPay={handleSubmit}
          backTo={() => {
            setIsPaymentPage(false);
          }}
        />
      )}
    </div>
  );
}
