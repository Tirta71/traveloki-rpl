import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function FormRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Penyewa",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:8000/api/register/${formData.role}`,
        formData
      );
      Swal.fire({
        title: "Success",
        text: `Berhasil Daftar Sebagai ${formData.role}`,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/sign-in";
        }
      });
    } catch (error) {
      Swal.fire({
        title: "error",
        text: `Failed Register ${error.response.data.message}`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <section className="signup-section">
        <div className="auto-container">
          <div className="form-box site-form">
            <div className="signup-form">
              <h5>Sign Up</h5>
              <form onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="f-label">
                      User Name <i>*</i>
                    </div>
                    <div className="field-inner">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="f-label">
                      Email Address <i>*</i>
                    </div>
                    <div className="field-inner">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="f-label">Daftar Sebagai:</div>
                    <div className="field-inner">
                      <select
                        name="role"
                        id="role"
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value="Penyewa">Penyewa</option>
                        <option value="Pelanggan">Pelanggan</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="f-label">
                      Password <i>*</i>
                    </div>
                    <div className="field-inner">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="f-label">
                      Re-Enter Password <i>*</i>
                    </div>
                    <div className="field-inner">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="theme-btn btn-style-two">
                      <span>
                        Sign Up <i className="icon far fa-angle-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="lower-link">
              Already have an account? <a href="/sign-in">Login In</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
