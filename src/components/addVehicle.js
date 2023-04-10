import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function AddVehicle() {
  const [image, setImage] = useState("");
  const [vehicleType, setvehicleType] = useState("");
  const [loadCapacity, setloadCapacity] = useState("");
  const [passengerSeating, setpassengerSeating] = useState("");
  const [charges, setcharges] = useState("");
  const [chargesDaily, setchargesDaily] = useState("");

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64encoded string
      setImage(reader.result);
    };

    reader.onerror = (error) => {
      console.log("Error:", error);
    };
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      image,
      vehicleType,
      loadCapacity,
      passengerSeating,
      charges,
      chargesDaily
    );
    fetch("http://localhost:5000/vehicle_register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        base64: image,
        vehicleType,
        loadCapacity,
        passengerSeating,
        charges,
        chargesDaily,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "vehicleRegister");

        if (data.status == "ok") {
          alert("Vehicle data added successfully");
          //window.localStorage.setItem("token",data.data);
          window.location.href = "./addVehicle";
        } else {
          alert("Vehicle already exist");
        }
      }).catch(e => {
        console.log("An error occor please try later. err : ",e)
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>
            North Logistic
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/userPage"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/addVehicle"}>
                  Add Vehicle
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

      <form onSubmit={handleSubmit} style={{ width: "auto" }}>
        <h3>Add Vehicle</h3>

        <div className="mb-3">
          <label>Vehicle Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={convertToBase64}
            required
          />
          {image == "" || image == null ? (
            ""
          ) : (
            <div className="m-2 border-rounded">
              <img width={100} height={100} src={image} />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label>Vehicle Type</label>
          <input
            type="text"
            className="form-control"
            placeholder="Vehicle Type"
            required
            value={vehicleType}
            onChange={(e) => setvehicleType(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Load Capacity</label>
          <input
            type="text"
            className="form-control"
            placeholder="Load Capacity"
            required
            onChange={(e) => setloadCapacity(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Passenger Seating</label>
          <input
            type="text"
            className="form-control"
            placeholder="Passenger Seating"
            required
            onChange={(e) => setpassengerSeating(e.target.value)}
          />
        </div>
        <div>
          <h5>Charges</h5>

          <div className="mb-3">
            <label>4 Hours</label>
            <input
              type="text"
              className="form-control"
              placeholder="4 Hours"
              required
              onChange={(e) => setcharges(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Daily</label>
            <input
              type="text"
              className="form-control"
              placeholder="Daily"
              required
              onChange={(e) => setchargesDaily(e.target.value)}
            />
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
