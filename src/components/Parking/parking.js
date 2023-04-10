import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ViewParking from "./viewParking";
import Navbar from "../NavBar";
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

  //const [additional,setadditional]=useState("")

  //Submit function
  const handleSubmit = (e) => {
    e.preventDefault();

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
          window.location.href = "./viewParking";
        } else {
          alert("Already Exist");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div class="auth-inners">
        <ViewParking />

        <Link className="btn btn-primary mt-2" to={"/addParking"}>
          Book a Parking
        </Link>
      </div>
    </div>
  );
}
