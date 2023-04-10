import React, { useEffect, useState } from "react";

export default function ViewStorage() {
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
      <div className="auth-wrapper">
        <div style={{ width: "auto" }}>
          <h2>Storage Info</h2>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">S no</th>

                <th scope="col">First Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Storage Type</th>
                <th scope="col">Dimensions</th>
                <th scope="col">Storage Date</th>
                <th scope="col">Storage Duration</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => {
                if (!i.fname && !i.phone) return null;
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{i.fname}</td>
                    <td>{i.phone}</td>
                    <td>{i.storageType}</td>
                    <td>{i.dimensions}</td>
                    <td>{i.storageDate}</td>
                    <td>{i.storageDuration}</td>
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
