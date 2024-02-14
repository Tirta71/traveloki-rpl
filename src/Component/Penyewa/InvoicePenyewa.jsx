import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function InvoicePenyewa() {
  const [transaksiKendaraan, setTransaksiKendaraan] = useState([]);
  const id_penyewa = sessionStorage.getItem("id_penyewa");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/kendaraan/${id_penyewa}`)
      .then((response) => {
        setTransaksiKendaraan(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching transaksi kendaraan:", error);
      });
  }, []);

  return (
    <>
      <div className="content-box">
        <div className="row clearfix">
          {transaksiKendaraan.map((kendaraan) => (
            <div
              className="activity-block-one col-xl-4 col-lg-6 col-md-6 col-sm-12"
              key={kendaraan.id_kendaraan}
            >
              <div className="inner-box">
                <div className="lower-content">
                  {" "}
                  <Link to={`/history-kendaraan/${kendaraan.id_kendaraan}`}>
                    {kendaraan.nama}
                  </Link>
                  <div className="text">Nomor Plat: {kendaraan.nomor_plat}</div>
                  <div className="bottom-box clearfix">
                    <Link to={`/history-kendaraan/${kendaraan.id_kendaraan}`}>
                      <div className="more-link">
                        <span>View Details</span>
                      </div>
                    </Link>

                    <div className="fav-link">
                      <a href="#" className="theme-btn">
                        <i className="icon far fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
