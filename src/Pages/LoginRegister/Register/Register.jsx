import React from "react";
import FormRegister from "../../../Component/LoginRegister/Register/FormRegister";

export default function Register() {
  return (
    <>
      <section class="inner-banner">
        <div
          class="image-layer"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?w=826&t=st=1707471698~exp=1707472298~hmac=36ae2b6ebed0f34d2fbcacb298662611f823daea9be680cdc0143a1f584c272f")`,
          }}
        ></div>
        <div class="auto-container">
          <div class="content-box">
            <h2>Sign Up</h2>
            <div class="bread-crumb">
              <ul class="clearfix">
                <li>
                  <span class="icon-home fa fa-home"></span>
                  <a href="index.html">Home</a>
                </li>
                <li class="current">Sign Up</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FormRegister />
    </>
  );
}
