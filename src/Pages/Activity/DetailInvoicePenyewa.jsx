import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";

export default function DetailInvoicePenyewa() {
  const [activityDetail, setActivityDetail] = useState(null);
  const { id_kendaraan } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/invoice/${id_kendaraan}`)
      .then((response) => {
        setActivityDetail(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching activity detail:", error);
      });
  }, [id_kendaraan]);

  const handleBack = () => {
    window.history.back();
  };

  const handleCreateInvoice = () => {
    if (activityDetail) {
      const doc = new jsPDF();
      doc.setFont("helvetica");
      doc.setFontSize(12);

      doc.text("Invoice Kendaraan", 10, 10);

      const invoiceData = [
        ["ID Kendaraan", activityDetail.id_kendaraan],
        ["Nama", activityDetail.nama],
        ["Jenis", activityDetail.jenis],
        ["Merk", activityDetail.merk],
        ["Tahun Produksi", activityDetail.tahun_produksi],
        ["Warna", activityDetail.warna],
        ["Nomor Plat", activityDetail.nomor_plat],
        ["Status", activityDetail.status],
      ];

      doc.autoTable({
        startY: 20,
        head: [["Info", "Detail"]],
        body: invoiceData,
      });

      doc.save("invoice.pdf");
    }
  };

  return (
    <>
      <HeaderNavbar />
      <div className="container" style={{ marginTop: "10rem" }}>
        <h2>Detail History Kendaraan</h2>
        {activityDetail && (
          <table className="table">
            <tbody>
              <tr>
                <td>Nama:</td>
                <td>{activityDetail.nama}</td>
              </tr>
              <tr>
                <td>Jenis:</td>
                <td>{activityDetail.jenis}</td>
              </tr>
              <tr>
                <td>Merk:</td>
                <td>{activityDetail.merk}</td>
              </tr>
              <tr>
                <td>Tahun Produksi:</td>
                <td>{activityDetail.tahun_produksi}</td>
              </tr>
              <tr>
                <td>Warna:</td>
                <td>{activityDetail.warna}</td>
              </tr>
              <tr>
                <td>Nomor Plat:</td>
                <td>{activityDetail.nomor_plat}</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>{activityDetail.status}</td>
              </tr>
            </tbody>
          </table>
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="btn btn-primary mr-2" onClick={handleBack}>
            Back
          </button>
          {activityDetail && activityDetail.status === "sukses" && (
            <button className="btn btn-success" onClick={handleCreateInvoice}>
              Create Invoice
            </button>
          )}
        </div>
      </div>
    </>
  );
}
