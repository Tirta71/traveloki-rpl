import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";

export default function CreatePenyewa() {
  const [formData, setFormData] = useState({
    id_user: sessionStorage.getItem("user_id"),
    nik: "",
    nama: "",
    email: "",
    no_hp: "",
    alamat: "",
    jenis_kelamin: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.nama ||
      !formData.email ||
      !formData.no_hp ||
      !formData.nik ||
      !formData.alamat ||
      !formData.jenis_kelamin
    ) {
      Swal.fire({
        text: "Silakan lengkapi semua bidang",
        icon: "warning",
      });
      return;
    }

    axios
      .post("http://localhost:8000/api/create-penyewa", formData)
      .then((response) => {
        Swal.fire({
          text: "Berhasil Buat data Penyewa",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Error:", error.message);
        Swal.fire({
          text: "Terjadi kesalahan saat menyimpan data",
          icon: "error",
        });
      });
  };

  return (
    <>
      <HeaderNavbar />
      <section className="booking-section" style={{ marginTop: "10rem" }}>
        <div className="auto-container">
          <div className="title-box centered">
            <h2>
              <span>Isi Form Dibawah</span>
            </h2>
            <div className="text">Silahkan Buat Data Penyewa nya dulu</div>
          </div>
          <div className="form-box site-form">
            <div className="booking-form">
              <form onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">Nama:</div>
                    <div className="field-inner">
                      <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">Email:</div>
                    <div className="field-inner">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">No HP:</div>
                    <div className="field-inner">
                      <input
                        type="text"
                        name="no_hp"
                        value={formData.no_hp}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">NIK:</div>
                    <div className="field-inner">
                      <input
                        type="text"
                        name="nik"
                        value={formData.nik}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">Alamat:</div>
                    <div className="field-inner">
                      <input
                        type="text"
                        name="alamat"
                        value={formData.alamat}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">Jenis Kelamin:</div>
                    <div className="field-inner">
                      <select
                        name="jenis_kelamin"
                        value={formData.jenis_kelamin}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="theme-btn btn-style-two">
                      <span>
                        Submit Now <i className="icon far fa-angle-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
