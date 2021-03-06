import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        {/* DashBoard */}
        <li className="nav-item active">
          <Link to="/dashboard">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        {/* Add Students */}
        <li className="nav-item">
          <Link to="/add-students">
            <a className="nav-link" href="/">
              <span>Add Students</span>
            </a>
          </Link>
        </li>

        {/* All Students */}
        <li className="nav-item">
          <Link to="/all-students">
            <a className="nav-link" href="/">
              <span>All Students</span>
            </a>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
}

export default Sidebar;
