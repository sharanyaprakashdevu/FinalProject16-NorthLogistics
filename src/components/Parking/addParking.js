import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../NavBar";
import Payment from "../Payment";
import Invoice from "../Invoice";
//import Park from './park'
//import React from 'react'
//import Select from 'react-select'

export default function Parking() {
  //Get values
  const [fname, setfname] = useState("");
  const [phone, setphone] = useState("");
  const [vehicleName, setvehicleName] = useState("");
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [vehicleType, setvehicleType] = useState("");
  const [parkingDate, setparkingDate] = useState("");
  const [parkingDuration, setparkingDuration] = useState("");

  const [isPaymentPage, setIsPaymentPage] = useState(false);
  const [isInvoice, setInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState({});

  //const [additional,setadditional]=useState("")

  //procede to pay
  const procedeToPay = (e) => {
    e.preventDefault();

    setIsPaymentPage(true);
  };

  //Submit function
  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");

    console.log(
      fname,
      phone,
      vehicleName,
      vehicleNumber,
      vehicleType,
      parkingDate,
      parkingDuration
    );
    fetch("http://localhost:5000/park_register", {
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
        vehicleName,
        vehicleNumber,
        vehicleType,
        parkingDate,
        parkingDuration,
        token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "parkRegister");

        if (data.status == "ok") {
          alert("Parking details added successfully");
          //window.localStorage.setItem("token",data.data);
          // window.location.href = "./viewParking";
        } else {
          alert("Already Exist");
        }
      })
      .catch((err) => {
        alert("something went wronge please try later");
      });
  };

  return (
    <div className="col-md-6 p-2 mt-4 mx-auto pt-4">
      <Navbar />

      {!isPaymentPage && !isInvoice && (
        <div class="auth-inners">
          <form onSubmit={procedeToPay} style={{ width: "auto",textAlign:"initial" }}>
            <h3>Book Your Parking In Seconds !!! </h3>

            <div className="mb-3">
              <label>Name </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                required
                //access values
                value={fname}
                onChange={(e) => {
                  const regex = /^[a-zA-Z\s]+$/;
                  const val = e.target.value;
                  if (regex.test(val)) setfname(val);
                  if (val.length == 0 && e.nativeEvent.data == null)
                    setfname("");
                }}
              />
            </div>

            <div className="mb-3">
              <label>Phone Number</label>
              <input
                type="phone"
                className="form-control"
                required
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => {
                  const phoneRegex = /^[0-9]+$/;
                  if (phoneRegex.test(e.target.value) && phone.length <= 9)
                    setphone(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label>Vehicle Name</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Vehicle Name"
                onChange={(e) => setvehicleName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Vehicle Number</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Vehicle Number"
                onChange={(e) => setvehicleNumber(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Vehicle Type</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Vehivle Type"
                onChange={(e) => setvehicleType(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Parking Date</label>
              <input
                type="date"
                className="form-control"
                required
                placeholder="Parking Date"
                onChange={(e) => setparkingDate(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Parking Duration in minutes</label>
              <input
                type="number"
                className="form-control"
                placeholder="Parking Duration"
                required
                min={0}
                max={240}
                onChange={(e) => setparkingDuration(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Procede to pay
              </button>
            </div>
          </form>
        </div>
      )}

      {isPaymentPage && (
        <Payment
          details={{
            amount: Math.random().toFixed(2) * 1.2 * parkingDuration,
          }}
          backTo={() => {
            setIsPaymentPage(false);
          }}
          paymentSuccessCallback={(data) => {
            handleSubmit();
            setInvoiceData(data);
            setInvoice(true);
            setIsPaymentPage(false);
          }}
          paymentFailCallback={(err) => {
            window.location.replace("./parking");
          }}
        />
      )}

      {isInvoice && (
        <Invoice
          invoice={invoiceData}
          callback={() => {
            window.location.replace("./parking");
          }}
        />
      )}
    </div>
  );
}
