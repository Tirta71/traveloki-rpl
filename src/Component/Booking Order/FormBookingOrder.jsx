import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function SewaForm() {
  const { id_tujuan } = useParams();
  const [idPelanggan, setIdPelanggan] = useState({ id_pelanggan: null });
  const [kendaraan, setKendaraan] = useState([]);
  const [tujuan, setTujuan] = useState({});
  const [formData, setFormData] = useState({
    id_pelanggan: "",
    id_kendaraan: "",
    id_tujuan: id_tujuan,
    nama: "",
    email: "",
    no_hp: "",
    nama_kendaraan: "",
    nomor_plat: "",
    tanggal: "",
    harga_sewa: "",
    status: "Pending",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/kendaraan")
      .then((response) => {
        setKendaraan(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicle data:", error);
      });

    axios
      .get(`http://localhost:8000/api/tujuan/${id_tujuan}`)
      .then((response) => {
        setTujuan(response.data.data);
        setFormData((prevData) => ({
          ...prevData,
          tanggal: response.data.data.tanggal,
          harga_sewa: response.data.data.harga_sewa,
        }));
      })
      .catch((error) => {
        console.error("Error fetching destination data:", error);
      });

    const id_user = sessionStorage.getItem("user_id");
    axios
      .get(`http://localhost:8000/api/pelanggan/${id_user}`)
      .then((response) => {
        const userData = response.data.data;
        setIdPelanggan(response.data.data);
        console.log(idPelanggan);
        setFormData((prevData) => ({
          ...prevData,
          nama: userData.nama,
          email: userData.email,
          no_hp: userData.no_hp,
          id_pelanggan: userData.id_pelanggan,
        }));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id_tujuan]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "id_kendaraan") {
      const selectedVehicle = kendaraan.find(
        (vehicle) => vehicle.id_kendaraan.toString() === value.toString()
      );
      if (selectedVehicle) {
        setFormData((prevData) => ({
          ...prevData,

          nama_kendaraan: selectedVehicle.nama,
          nomor_plat: selectedVehicle.nomor_plat,
        }));
      }
      console.log(selectedVehicle);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/create-sewa", formData)
      .then((response) => {
        Swal.fire({
          title: "Succes",
          text: response.data.message,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/activity";
          }
        });

        setFormData((prevData) => ({
          ...prevData,
          nama: "",
          email: "",
          no_hp: "",
          nama_kendaraan: "",
          nomor_plat: "",
          status: "",
        }));
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
        console.log(formData);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nama:</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>No HP:</label>
        <input
          type="text"
          name="no_hp"
          value={formData.no_hp}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Kendaraan:</label>
        <select
          name="id_kendaraan"
          value={formData.id_kendaraan}
          onChange={handleInputChange}
          required
        >
          <option value="">Pilih Kendaraan</option>
          {kendaraan.map((vehicle) => (
            <option key={vehicle.id_kendaraan} value={vehicle.id_kendaraan}>
              {vehicle.nama} - {vehicle.nomor_plat}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Harga Travel:</label>
        <input
          type="number"
          name="harga_sewa"
          value={formData.harga_sewa}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Tanggal:</label>
        <input
          type="date"
          name="tanggal"
          value={formData.tanggal}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Lokasi Tujuan:</label>
        <input
          type="text"
          name="lokasi_tujuan"
          value={tujuan.lokasi_tujuan}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
