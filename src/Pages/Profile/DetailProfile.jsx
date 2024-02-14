/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";
import ChildDetailProfile from "../../Component/Profile/ChildDetailProfile";

export default function DetailProfile() {
  return (
    <>
      <HeaderNavbar />
      <section class="inner-banner" style={{ marginTop: "10rem" }}>
        <div
          class="image-layer"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/view-3d-airplane-with-travel-destination-landscape_23-2151022186.jpg?size=626&ext=jpg&ga=GA1.2.183347963.1702458389&semt=sph",
            objectFit: "cover",
          }}
        ></div>
        <div class="auto-container">
          <div class="content-box">
            <h2>Your Profile</h2>
            <div class="bread-crumb">
              <ul class="clearfix">
                <li>
                  <span class="icon-home fa fa-home"></span>
                  <a href="index.html">Home</a>
                </li>
                <li class="current">Your Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ChildDetailProfile />
    </>
  );
}
