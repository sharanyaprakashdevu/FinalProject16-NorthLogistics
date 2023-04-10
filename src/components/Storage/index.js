import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../NavBar";
import ViewStorage from "./viewStorage";

export default function Storage() {
  const [data, setData] = useState([]);
  const [allImage, setAllImage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/getStorageDetails", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "StorageDetails");
        setData(data.data);
      });
  }, []);

  return (
    <div>
       <Navbar />
       <ViewStorage />
       <Link className="btn btn-primary mt-2" to={"/addStorage"}>
          Add a Storage
        </Link>
    </div>
  );
}
