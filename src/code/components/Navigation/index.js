import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="my-4">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/vehicles" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Vehicles
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/vehicles/nios"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Nios
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
