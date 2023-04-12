import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./NavBar";
import Payment from "./Payment";
import Invoice from "./Invoice";

export default function Rental() {
  const [data, setData] = useState([]);
  const [allImage, setAllImage] = useState("");
  const [vehical, setVehical] = useState({});
  const [isBooking, setIsbooking] = useState(false);
  const [isInvoice, setInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState({});

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

  const handlebooking = (vehical) => {
    setIsbooking(true);
    setVehical(vehical);
  };

  const bookVehical = async () => {
    const token = localStorage.getItem("token", "");

    try {
      const { data } = await fetch("http://localhost:5000/book_vehical", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          vehical,
          isBooked: true,
          isPaymentDone: true,
          token,
        }),
      });

      alert(" Booked Vehical Successfully ");
    } catch (error) {
      alert(" Failed to booked ");
    }
  };

  const DisplayVehicalDetail = (props) => {
    const { vehical } = props;
    return (
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={vehical.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{vehical.vehicleType}</h5>
            <p className="card-text">
              <div className="d-flex my-1">
                <div className="name">Capacity</div>
                <div className="name ml-auto">{vehical.loadCapacity}</div>
              </div>
              <div className="d-flex my-1">
                <div className="name">Passenger Seating</div>
                <div className="ml-auto">{vehical.passengerSeating}</div>
              </div>
              <div className="d-flex my-1">
                <div className="name">4 Hours charge</div>
                <div className="ml-auto">{vehical.charges}</div>
              </div>
              <div className="d-flex my-1">
                <div className="name">Daily charge</div>
                <div className="ml-auto">{vehical.chargesDaily}</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-md-8 mx-auto mt-4 ">
      <Navbar />
      {!isBooking && !isInvoice && (
        <div className="auth-wrapper">
          <div style={{ width: "auto" }}>
            <h2>
              All Available Vehicle Details{" "}
              <span className="ml-auto float-end">
                <Link className="btn btn-primary" to={"/viewBookings"}>
                  View Bookings
                </Link>
              </span>
            </h2>

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
                  <th>Option</th>
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
                      <td>
                        <button
                          className="btn btn-primary m-2"
                          onClick={() => handlebooking(i)}
                        >
                          Book Now
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {isBooking && (
        <Payment
          details={{ amount: vehical.chargesDaily }}
          displayContent={<DisplayVehicalDetail vehical={vehical} />}
          backTo={() => {
            setIsbooking(false);
          }}
          paymentSuccessCallback={async (data) => {
            await bookVehical();
            setInvoiceData(data);
            setInvoice(true);
            setIsbooking(false);
          }}
          paymentFailCallback={(err) => {
            window.location.replace("./viewBookings");
          }}
        />
      )}

      {isInvoice && (
        <Invoice
          invoice={invoiceData}
          callback={() => {
            window.location.replace("./viewBookings");
          }}
        />
      )}
    </div>
  );
}
