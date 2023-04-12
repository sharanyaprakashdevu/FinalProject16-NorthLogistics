import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../NavBar";
import Payment from "../Payment";
import Invoice from "../Invoice";
//import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';

export default function AddStorage() {
  const [fname, setfname] = useState("");
  const [phone, setphone] = useState("");

  const [storageType, setstorageType] = useState("");
  const [selectedStorage, setSelectedStorage] = useState(false);
  const options = ["Boxes/Bags", "Pallets", "Machinery", "Containers", "box"];

  const [dimensions, setdimensions] = useState("");
  const [storageDate, setstorageDate] = useState("");
  const [storageDuration, setstorageDuration] = useState("");
  const [isPaymentPage, setIsPaymentPage] = useState(false);

  const [isInvoice, setInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState({});

  //procede to pay
  const procedeToPay = (e) => {
    e.preventDefault();
    if (!storageType) {
      alert("Please select storage type");
      return;
    }
    setIsPaymentPage(true);
  };

  //Submit function
  const handleSubmit = (e) => {
    const token = localStorage.getItem("token", "");

    fetch("http://localhost:5000/storage_register", {
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
        storageType,
        dimensions,
        storageDate,
        storageDuration,
        token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "storageRegister");

        if (data.status == "ok") {
          alert("Storage details added successfully");
          //window.localStorage.setItem("token",data.data);
          // window.location.href = "./storage";
        } else {
          alert("Already Exist");
        }
      });
  };

  return (
    <div className="col-md-6 mx-auto mt-4 p-2 card bg-black text-white">
      <Navbar />

      {isPaymentPage && (
        <Payment
          details={{ amount: Math.round(Math.random() * 100) }}
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
            window.location.replace("./storage");
          }}
        />
      )}

      {!isPaymentPage && !isInvoice && (
        <div style={{ width: "auto" ,textAlign:'initial'}}>
          <form onSubmit={procedeToPay} style={{ width: "auto" }}>
            <h3>Storage</h3>

            <div className="mb-3">
              <label>First Name</label>
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
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                required
                //access values
                value={phone}
                onChange={(e) => {
                  const phoneRegex = /^[0-9]+$/;
                  if (phoneRegex.test(e.target.value) && phone.length <= 9)
                    setphone(e.target.value);
                }}
              />
            </div>

            <div className="dropdown">
              <label>Storage Type</label>
              <div
                className="dropdown-btn"
                onClick={(e) => setSelectedStorage(!selectedStorage)}
              >
                {storageType}
                <span className="fas fa-caret-down"></span>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              {selectedStorage && (
                <div className="dropdown-content">
                  {options.map((option) => (
                    <div
                      onClick={(e) => {
                        setstorageType(option);
                        setSelectedStorage(false);
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
                placeholder="First name"
                required
                //access values
                onChange={(e) => setdimensions(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Storage Date</label>

              <input
                type="date"
                className="form-control"
                placeholder="First name"
                required
                //access values
                onChange={(e) => setstorageDate(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Storage Duration</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                required
                //access values
                onChange={(e) => setstorageDuration(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Confirm Storage
              </button>
            </div>
          </form>
        </div>
      )}

      {isInvoice && (
        <Invoice
          invoice={invoiceData}
          callback={() => {
            window.location.replace("./storage");
          }}
        />
      )}
    </div>
  );
}
