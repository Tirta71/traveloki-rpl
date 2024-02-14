/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Logout() {
  const [userData, setUserData] = useState(null);
  const isLoggedIn = sessionStorage.getItem("token");
  const userIdFromSession = sessionStorage.getItem("user_id");
  const role = sessionStorage.getItem("user_role");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/user/${userIdFromSession}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (isLoggedIn) {
      fetchUserData();
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    sessionStorage.clear();
    Swal.fire({
      title: "Success",
      text: "Logout Success",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/sign-in";
      }
    });
  };

  return (
    <>
      <div className="top-right clearfix">
        {isLoggedIn ? (
          <>
            {userData && userIdFromSession == userData.id && (
              <div className="login">
                <i className="icon fa fa-user"></i>{" "}
                <a href="/detail-profile">{userData.name}</a>
              </div>
            )}
            <div className="login">
              <i className="icon fa fa-user"></i>{" "}
              <a href="#" onClick={handleLogout}>
                LOG OUT
              </a>
            </div>
          </>
        ) : (
          <div className="login">
            <i className="icon fa fa-user"></i> <a href="/sign-in">SIGN IN</a>
          </div>
        )}
      </div>
    </>
  );
}
