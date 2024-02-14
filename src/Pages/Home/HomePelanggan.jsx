import React, { useEffect } from "react";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";
import Destination from "../../Component/Home/Destination";
import axios from "axios";
import Swal from "sweetalert2";

export default function HomePelanggan() {
  const id_user = sessionStorage.getItem("user_id");
  const role = sessionStorage.getItem("user_role");

  useEffect(() => {
    if (role === "Pelanggan") {
      axios
        .get(`http://localhost:8000/api/pelanggan/${id_user}`)
        .then((result) => {
          sessionStorage.setItem("id_pelanggan", result.data.data.id_pelanggan);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (role === "Penyewa") {
      axios
        .get(`http://localhost:8000/api/penyewa/${id_user}`)
        .then((result) => {
          sessionStorage.setItem("id_penyewa", result.data.data.id_penyewa);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id_user, role]);

  return (
    <>
      <div className="page-wrapper">
        <HeaderNavbar />

        <section className="banner-section">
          <div className="banner-container">
            <div className="banner-slider-box">
              <div className="slide-item">
                <div className="auto-container">
                  <div className="content-box">
                    <div className="content">
                      <div className="clearfix">
                        <div className="inner">
                          <div className="bg-image">
                            <img
                              src="images/main-slider/banner-bg-text.svg"
                              alt=""
                              title=""
                            />
                          </div>
                          <h2>Never Stop</h2>
                          <h1>
                            <span>Exploring</span>
                          </h1>
                          <div className="text">
                            Their house is a museum where people come to see
                            ‘em. They really are a scream the Addams Family.
                            These days are all Happy and Free. These days are
                            all share them with me oh baby.
                          </div>
                          <div className="links-box clearfix">
                            <div className="link">
                              <a href="#" className="theme-btn btn-style-one">
                                <span>
                                  View All Tours
                                  <i className="icon">
                                    <img
                                      src="images/icons/logo-icon.svg"
                                      alt=""
                                      title=""
                                    />
                                  </i>
                                </span>
                              </a>
                            </div>
                            <div className="link">
                              <a
                                href="https://www.youtube.com/watch?v=0xhr0j877bI"
                                className="theme-btn lightbox-image"
                              >
                                <i className="ripple"></i>
                                <span className="icon">
                                  <img
                                    src="images/icons/video-icon-1.svg"
                                    alt=""
                                    title=""
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="banner-image">
                      <div className="image">
                        <img
                          src="images/main-slider/banner-image-1.svg"
                          alt=""
                          title=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="floated-icon left">
            <img src="images/resource/stones-left.svg" alt="" title="" />
          </div>
          <div className="floated-icon right">
            <img src="images/resource/stones-right.svg" alt="" title="" />
          </div>
          <div className="auto-container">
            <div className="title-box centered">
              <div className="subtitle">We Are Awesome</div>
              <h2>
                <i className="bg-vector"></i>
                <span>Why Choose Treker</span>
              </h2>
            </div>

            <div className="row clearfix">
              <div className="left-col col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner">
                  <div className="why-block">
                    <div className="inner-box">
                      <div className="icon-box">
                        <img src="images/resource/icon-1.svg" alt="" />
                      </div>
                      <h4>Diverse Destinations</h4>
                      <div className="text">
                        Richly varied landscapes, luxury accommodation Travel.
                      </div>
                    </div>
                  </div>
                  <div className="why-block">
                    <div className="inner-box">
                      <div className="icon-box">
                        <img src="images/resource/icon-2.svg" alt="" />
                      </div>
                      <h4>Value for Money</h4>
                      <div className="text">
                        Richly varied landscapes, luxury accommodation Travel.
                      </div>
                    </div>
                  </div>
                  <div className="why-block">
                    <div className="inner-box">
                      <div className="icon-box">
                        <img src="images/resource/icon-3.svg" alt="" />
                      </div>
                      <h4>Beautiful Places</h4>
                      <div className="text">
                        Richly varied landscapes, luxury accommodation Travel.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-col col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner">
                  <div className="why-block">
                    <div className="inner-box">
                      <div className="icon-box">
                        <img src="images/resource/icon-4.svg" alt="" />
                      </div>
                      <h4>Fast Booking</h4>
                      <div className="text">
                        Richly varied landscapes, luxury accommodation Travel.
                      </div>
                    </div>
                  </div>
                  <div className="why-block">
                    <div className="inner-box">
                      <div className="icon-box">
                        <img src="images/resource/icon-5.svg" alt="" />
                      </div>
                      <h4>Support Team</h4>
                      <div className="text">
                        Richly varied landscapes, luxury accommodation Travel.
                      </div>
                    </div>
                  </div>
                  <div className="why-block">
                    <div className="inner-box">
                      <div className="icon-box">
                        <img src="images/resource/icon-6.svg" alt="" />
                      </div>
                      <h4>Passionate Travel</h4>
                      <div className="text">
                        Richly varied landscapes, luxury accommodation Travel.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="image-col col-xl-6 col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  <div className="image-box">
                    <img src="images/resource/why-image-1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Destination />
      </div>
    </>
  );
}
