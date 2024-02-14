import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function DetailActivity() {
  const { id_sewa } = useParams();
  const [activityDetail, setActivityDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/sewa/${id_sewa}`)
      .then((response) => {
        setActivityDetail(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching activity detail:", error);
      });
  }, [id_sewa]);

  const handleCreateInvoice = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica");
    doc.setFontSize(12);

    doc.text("Invoice Treker", 10, 10);

    const tableData = [
      ["ID Sewa", activityDetail.id_sewa],
      ["Nama", activityDetail.nama],
      ["Email", activityDetail.email],
      ["No HP", activityDetail.no_hp],
      ["Nama Kendaraan", activityDetail.nama_kendaraan],
      ["Nomor Plat", activityDetail.nomor_plat],
      ["Tanggal", activityDetail.tanggal],
      ["Harga Sewa", activityDetail.harga_sewa],
      ["Status", activityDetail.status],
    ];

    doc.autoTable({
      startY: 20,
      head: [["Info", "Detail"]],
      body: tableData,
    });

    doc.save("invoice.pdf");
  };

  const handleBack = () => {
    window.history.back();
  };

  if (!activityDetail) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HeaderNavbar />
      <div className="container " style={{ marginTop: "10rem" }}>
        <h2>Detail History Pesanan</h2>
        <table className="table">
          <tbody>
            <tr>
              <td>Nama:</td>
              <td>{activityDetail.nama}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{activityDetail.email}</td>
            </tr>
            <tr>
              <td>No HP:</td>
              <td>{activityDetail.no_hp}</td>
            </tr>
            <tr>
              <td>Nama Kendaraan:</td>
              <td>{activityDetail.nama_kendaraan}</td>
            </tr>
            <tr>
              <td>Nomor Plat:</td>
              <td>{activityDetail.nomor_plat}</td>
            </tr>
            <tr>
              <td>Tanggal:</td>
              <td>{activityDetail.tanggal}</td>
            </tr>
            <tr>
              <td>Harga:</td>
              <td>{activityDetail.harga_sewa}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{activityDetail.status}</td>
            </tr>
            <tr>
              <td>
                {activityDetail.status === "sukses" ? (
                  <p className="text-info">
                    Silahkan tunjukkan bukti invoice ke outlet
                  </p>
                ) : (
                  <p>
                    Note:{" "}
                    <span style={{ color: "orange" }}>
                      Menunggu Konfirmasi Admin
                    </span>
                  </p>
                )}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="btn btn-primary mr-2" onClick={handleBack}>
            Back
          </button>
          {activityDetail.status === "sukses" && (
            <button className="btn btn-success" onClick={handleCreateInvoice}>
              Create Invoice
            </button>
          )}
        </div>
      </div>
    </>
  );
}
