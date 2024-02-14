import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";
import Footer from "../../Component/Util/Footer";
import InfoBox from "../../Component/Detail Destination/InfoBox";
import BookingForm from "../../Component/Detail Destination/BookingForm";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailDestination() {
  const [data, setData] = useState([]);
  const { id_tujuan } = useParams();
  const [showForm, setShowForm] = useState(false);
  const id_user = sessionStorage.getItem("user_id");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pelanggan/${id_user}`)
      .then((response) => {
        setShowForm(true);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setShowForm(false);
        } else {
          console.error("Error fetching data:", error);
        }
      });
  }, [id_user]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/tujuan/${id_tujuan}`)
      .then((result) => {
        setData(result.data.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id_tujuan]);

  return (
    <>
      <HeaderNavbar />
      <section
        className="package-detail-section "
        style={{ marginTop: "10rem" }}
      >
        <div className="auto-container">
          <div className="upper-box">
            <div className="clearfix">
              <div className="pull-left">
                <h4>{data.nama}</h4>
              </div>
              <div className="pull-right">
                <div className="price">
                  Rp. {data.harga_sewa}
                  <span>/Person</span>
                </div>
              </div>
            </div>
          </div>

          <InfoBox setData={setData} data={data} />

          <div className="row clearfix">
            <div className="content-column col-xl-8 col-lg-7 col-md-12 col-sm-12">
              <h5>About {data.nama}</h5>
              <p>{data.deskripsi}</p>

              <hr />
              <div className="gallery-box">
                <h5>Gallery</h5>
                <img
                  style={{ borderRadius: "10px" }}
                  src={`http://localhost:8000/images/${data.urlImage}`}
                  alt=""
                />
              </div>
              {showForm && (
                <div className="form-group mt-5">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      (window.location.href = `/Booking-order/${id_tujuan}`)
                    }
                  >
                    <span className="txt">
                      Booking Langsung <i className="fa fa-angle-right"></i>
                    </span>
                  </button>
                </div>
              )}
            </div>

            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
