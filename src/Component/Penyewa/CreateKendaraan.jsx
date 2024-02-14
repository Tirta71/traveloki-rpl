import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function CreateKendaraan() {
  const id_penyewa = sessionStorage.getItem("id_penyewa");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newData = {
      id_penyewa: id_penyewa,
      nama: formData.get("nama"),
      jenis: formData.get("jenis"),
      merk: formData.get("merk"),
      tahun_produksi: parseInt(formData.get("tahun_produksi")),
      warna: formData.get("warna"),
      nomor_plat: formData.get("no_plat"),
      status: "Pending",
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/create-kendaraan",
        newData
      );

      Swal.fire({
        title: "Sukses Menambahkan Kendaraan",
        text: "Tunggu admin untuk memvalidasi data Anda",
        icon: "success",
        footer: `Status : ${response.data.data.status}`,
      });
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error.message);
      console.log(newData);
    }
  };

  return (
    <>
      <section className="booking-section" style={{ marginTop: "10rem" }}>
        <div className="auto-container">
          <div className="title-box centered">
            <h2>
              <span>Isi Form Dibawah</span>
            </h2>
            <div className="text">untuk menambahkan kendaraan Anda</div>
          </div>
          <div className="form-box site-form">
            <div className="booking-form">
              <form onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">Nama Kendaraan</div>
                    <div className="field-inner">
                      <input type="text" name="nama" required />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">Jenis Kendaraan</div>
                    <div className="field-inner">
                      <input type="text" name="jenis" required />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">Merk Kendaraan</div>
                    <div className="field-inner">
                      <input type="text" name="merk" required />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">Tahun Produksi</div>
                    <div className="field-inner">
                      <input type="text" name="tahun_produksi" required />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">Warna</div>
                    <div className="field-inner">
                      <input type="text" name="warna" required />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="f-label">No Plat</div>
                    <div className="field-inner">
                      <input type="text" name="no_plat" required />
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
