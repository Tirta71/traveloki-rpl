import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";
import Swal from "sweetalert2";
import CreatePenyewa from "../../Component/Penyewa/CreatePenyewa";
import CreateKendaraan from "../../Component/Penyewa/CreateKendaraan";

export default function TambahKendaraan() {
  const id_user = sessionStorage.getItem("user_id");
  const [penyewaData, setPenyewaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/penyewa/${id_user}`)
      .then((response) => {
        if (response.data.data) {
          setPenyewaData(response.data.data);
          sessionStorage.setItem("id_penyewa", response.data.data.id_penyewa);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching penyewa data:", error);
        setLoading(false);
      });
  }, [id_user]);

  return (
    <>
      <HeaderNavbar />
      {loading ? (
        <div>Loading...</div>
      ) : penyewaData ? (
        <div>
          <CreateKendaraan />
        </div>
      ) : (
        <div>
          <CreatePenyewa penyewaData={penyewaData} />
        </div>
      )}
    </>
  );
}
