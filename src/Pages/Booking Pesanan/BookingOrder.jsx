import React from "react";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";
import FormBookingOrder from "../../Component/Booking Order/FormBookingOrder";

export default function BookingOrder() {
  return (
    <>
      <HeaderNavbar />
      <section class="booking-section" style={{ marginTop: "10rem" }}>
        <div class="floated-icon left">
          <img src="images/resource/stones-left.svg" alt="" title="" />
        </div>
        <div class="floated-icon right">
          <img src="images/resource/stones-right-3.svg" alt="" title="" />
        </div>
        <div class="auto-container">
          <div class="title-box centered">
            <h2>
              <span>Book This Tour</span>
            </h2>
            <div class="text">
              Contact us and get strapped in for a better adventure experience
              in your life-time. Just look for opportunity to be with nature.{" "}
            </div>
          </div>
          <div class="form-box site-form">
            <div class="booking-form">
              <FormBookingOrder />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
