import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import Parking from './parking'

require("./addParking");
export default function ViewParking() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getParkDetail", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "parkDetail");
        setData(data.data);
      });
  }, []);

  return (
    <div className="auth-wrapper">
      <div style={{ width: "auto" }}>
        <h2>Vehicle Info</h2>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">S no</th>
              <th scope="col">Name</th>
              <th scope="col">Phone / Email</th>
              <th scope="col">Vehical Name</th>
              <th scope="col">Vehical Number</th>
              <th scope="col">Vehical Type</th>
              <th scope="col">Parking Date</th>
              <th scope="col">Parking Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, index) => {
              if (!i.name && !i.vehicleNumber) return null;
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{i.fname}</td>
                  <td>{i.phone}</td>
                  <td>{i.vehicleName}</td>
                  <td> {i.vehicleNumber}</td>
                  <td> {i.vehicleType}</td>
                  <td> {i.parkingDate}</td>
                  <td> {i.parkingDuration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
