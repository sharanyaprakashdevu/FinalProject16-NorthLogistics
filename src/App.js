import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import UserPage from "./components/userPage";
import UserHome from "./components/userHome";
import AdminHome from "./components/adminHome";
import AddVehicle from "./components/addVehicle";
import Users from "./components/users";
import Rental from "./components/rental";
import AddShipment from "./components/Shipments/addShipment";
import ConfirmShipment from "./components/confirmShipment";
import Parking from "./components/Parking/parking";
import AddParking from "./components/Parking/addParking";
import AddStorage from "./components/Storage/addStorage";
import Storage from "./components/Storage";

function App() {
  //const isLoggedIn=window.localStorage.getItem("loggedIn");
  return (
    <div>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                North Logistic
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route exact path="/userPage" element={<UserPage />} />
          </Routes>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />

                <Route path="/userHome" element={<UserHome />} />
                <Route path="/adminHome" element={<AdminHome />} />
                <Route path="/users" element={<Users />} />
                <Route path="/addVehicle" element={<AddVehicle />} />
                <Route path="/rental" element={<Rental />} />

                <Route path="/addShipment" element={<AddShipment />} />
                <Route path="/confirmShipment" element={<ConfirmShipment />} />

                <Route path="/storage" element={<Storage />} />
                <Route path="/addStorage" element={<AddStorage />} />

                <Route path="/parking" element={<Parking />} />
                <Route path="/addParking" element={<AddParking />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
