import React, { useEffect } from "react";
import "./Dashboard.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
   const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
    link.integrity = 'sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==';
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    }
  }, []);

  const logout = () => {
    navigate("/login");
    localStorage.clear();
  };
  return (
    <>
      <div className="wrapper">
        <div className="sidebar my-sidebar">
          <div className="header my-heade">Admin Dashboard</div>
          <ul className="nav flex-column">
            <li className="nav-item nav-link">
              <NavLink to={"/dashboard/category"}>Category</NavLink>
            </li>
            <li className="nav-item nav-link">
              {" "}
              <NavLink to={"/dashboard/product"}>Product</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="header">
            <button className="btn logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
          <div className="container mt-4">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
