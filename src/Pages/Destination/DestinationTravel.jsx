/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";
import ImageBanner from "../../Assets/Image/pexels-nubia-navarro-(nubikini)-386009.jpg";
import ContentDestinationTravel from "../../Component/Destination/ContentDestinationTravel";
export default function DestinationTravel() {
  return (
    <>
      <HeaderNavbar />
      <section class="inner-banner mt-5">
        <div
          class="image-layer"
          style={{
            backgroundImage: `url(${ImageBanner})`,
          }}
        ></div>
        <div class="auto-container">
          <div class="content-box">
            <h2>Destinations tours</h2>
            <div class="bread-crumb">
              <ul class="clearfix">
                <li>
                  <span class="icon-home fa fa-home"></span>
                  <a href="index.html">Home</a>
                </li>
                <li class="current">Destinations tours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContentDestinationTravel />
    </>
  );
}
