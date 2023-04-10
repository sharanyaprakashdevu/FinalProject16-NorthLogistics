import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./NavBar";

export default function Rental() {
  const [data, setData] = useState([]);
  const [allImage, setAllImage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/getAllVehicle", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "vehicleData");
        setData(data.data);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="auth-wrapper">
        <div style={{ width: "auto" }}>
          <h2>All Available Vehicle Details</h2>

          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">S no</th>

                <th>Vehicle Image</th>
                <th>Vehicle Type</th>
                <th>Load Capacity</th>
                <th>Passenger Seating</th>
                <th>4 Hours charge</th>
                <th>Daily charge</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => {
                if (!i.image && !i.vehicleType) return null;
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img width={100} height={100} src={i.image} />
                    </td>

                    <td>{i.vehicleType}</td>
                    <td>{i.loadCapacity}</td>
                    <td>{i.passengerSeating}</td>
                    <td>{i.charges}</td>
                    <td>{i.chargesDaily}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
