import React, { Component, useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  //Get values

  //Submit function
  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "lambton") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");

          if (data.status == "ok") {
            alert("Registered successfully");
            //window.localStorage.setItem("token",data.data);
            window.location.href = "./sign-in";
          } else {
            alert("User Already Exist");
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div>
        <b>Register As </b>
        <input
          type="radio"
          name="UserType"
          value="User"
          onChange={(e) => setUserType(e.target.value)}
        />
        User
        <input
          type="radio"
          name="UserType"
          value="Admin"
          onChange={(e) => setUserType(e.target.value)}
        />
        Admin
      </div>

      {userType == "Admin" ? (
        <div className="mb-3">
          <label>Secret Key</label>
          <input
            type="password"
            className="form-control"
            placeholder="Secret Key"
            required
            //access values
            onChange={(e) => setSecretKey(e.target.value)}
          />
        </div>
      ) : null}

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          required
          //access values
          onChange={(e) => setFname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          required
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}
