import React, { useEffect, useState } from "react";
import Navbar from "../NavBar";

export default function ViewBookings() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    fetch("http://localhost:5000/vehical_bookings?token=" + token, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="auth-wrapper">
        <div style={{ width: "auto" }}>
          <h2>Your Booked vehicals</h2>

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
                <th>Booking Status</th>
                <th>Payment Status</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img width={100} height={100} src={i.vehical.image} />
                    </td>

                    <td>{i.vehical.vehicleType}</td>
                    <td>{i.vehical.loadCapacity}</td>
                    <td>{i.vehical.passengerSeating}</td>
                    <td>{i.vehical.charges}</td>
                    <td>{i.vehical.chargesDaily}</td>
                    <td>
                      {i.isBooked ? (
                        <b className="text-success">Booked</b>
                      ) : (
                        <b className="text-danger">Not booked</b>
                      )}
                    </td>
                    <td>
                      {i.isPaymentDone ? (
                        <b className="text-success">Completed</b>
                      ) : (
                        <b className="text-danger">No Done</b>
                      )}
                    </td>
                    <td>
                      <button className="btn btn-danger m-2">
                        {i.isBooked ? (
                          <b className="text-white">Cancel</b>
                        ) : (
                          <b className="text-white">Re Booked</b>
                        )}
                      </button>
                    </td>
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
