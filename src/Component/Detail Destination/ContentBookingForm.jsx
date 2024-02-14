import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function ContentBookingForm() {
  const { id_tujuan } = useParams();
  const id_user = sessionStorage.getItem("user_id");
  const GenderEnum = {
    LAKI_LAKI: "Laki-laki",
    PEREMPUAN: "Perempuan",
  };
  console.log(id_tujuan);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const requestData = {};
    formData.forEach((value, key) => {
      requestData[key] = value;
    });
    requestData["id_user"] = id_user;

    try {
      const response = await axios.post(
        "http://localhost:8000/api/create-pelanggan",
        requestData
      );
      sessionStorage.setItem("id_pelanggan", response.data.data.id_pelanggan);

      Swal.fire({
        title: "Success",
        text: "Data Berhasil Terkirim",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = `/Booking-order/${id_tujuan}`;
        }
      });
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <>
      <div className="sidebar-column col-xl-4 col-lg-5 col-md-12 col-sm-12">
        <div className="inner-column">
          <div
            className="sidebar-widget booking-widget"
            style={{
              backgroundImage: "url(images/background/booking-bg.jpg)",
            }}
          >
            <h5>Book this Travel</h5>

            <div className="booking-form">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="form-group">
                  <input type="text" name="nik" placeholder="NIK" required />
                  <span className="icon fal fa-user fa-fw"></span>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="nama"
                    placeholder="Full Name"
                    required
                  />
                  <span className="icon fal fa-user fa-fw"></span>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <span className="icon fal fa-envelope fa-fw"></span>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="no_hp"
                    placeholder="Phone"
                    required
                  />
                  <span className="icon fal fa-phone fa-fw"></span>
                </div>

                <div className="form-group">
                  <select name="jenis_kelamin" id="gender" required>
                    <option value="">Select Gender</option>
                    <option value={GenderEnum.LAKI_LAKI}>Laki-laki</option>
                    <option value={GenderEnum.PEREMPUAN}>Perempuan</option>
                  </select>
                </div>

                <input type="hidden" name="id_user" value={id_user} />

                <div className="form-group">
                  <button className="theme-btn send-btn">
                    <span className="txt">
                      Send Now <i className="fa fa-angle-right"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
