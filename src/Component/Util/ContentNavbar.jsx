import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ContentNavbar() {
  // Mendapatkan lokasi saat ini dari router
  const location = useLocation();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Mendapatkan peran pengguna dari sesi penyimpanan saat komponen dimuat
    const role = sessionStorage.getItem("user_role");
    setUserRole(role);
  }, []);

  return (
    <>
      <nav className="main-menu">
        <ul className="navigation clearfix">
          <li
            className={
              location.pathname === "/" ? "current dropdown" : "dropdown"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              location.pathname === "/activity"
                ? "current dropdown"
                : "dropdown"
            }
          >
            <Link to="/activity">Activity</Link>
          </li>
          <li
            className={
              location.pathname === "/destination"
                ? "current dropdown"
                : "dropdown"
            }
          >
            <Link to="/destination">Destination</Link>
          </li>
          {userRole === "Penyewa" && (
            <li
              className={
                location.pathname === "/tambah-kendaraan"
                  ? "current dropdown"
                  : "dropdown"
              }
            >
              <Link to="/tambah-kendaraan">Tambah Kendaraan</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
