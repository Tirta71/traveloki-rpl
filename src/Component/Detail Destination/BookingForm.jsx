import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentBookingForm from "./ContentBookingForm";

export default function BookingForm() {
  const [showForm, setShowForm] = useState(false);
  const id_user = sessionStorage.getItem("user_id");
  const role = sessionStorage.getItem("user_role");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (role === "Penyewa") {
          const responsePenyewa = await axios.get(
            `http://localhost:8000/api/penyewa/${id_user}`
          );

          if (responsePenyewa.data.data) {
            setShowForm(false);
          } else {
            setShowForm(true);
          }
        } else if (role === "Pelanggan") {
          const responsePelanggan = await axios.get(
            `http://localhost:8000/api/pelanggan/${id_user}`
          );
          if (responsePelanggan.data.data) {
            setShowForm(false);
          } else {
            setShowForm(true);
          }
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setShowForm(true);
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };

    if (id_user) {
      fetchData();
    }
  }, [id_user, role]);

  if (!showForm) return null;

  return <ContentBookingForm />;
}
