import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );
      if (response && response.data && response.data.user) {
        const { email, id, name, role } = response.data.user;
        sessionStorage.setItem("user_email", email);
        sessionStorage.setItem("user_id", id);
        sessionStorage.setItem("user_name", name);
        sessionStorage.setItem("user_role", role);
        sessionStorage.setItem("token", response.data.token);

        Swal.fire({
          title: "Login Success",
          text: `Anda Login Sebagai ${role}`,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          }
        });
      } else {
        Swal.fire({
          title: "error",
          text: "Invalid Response Format",
          icon: "error",
        });
        console.error("Error:", "Invalid response format");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response ? error.response.data.message : error.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="auto-container">
          <div className="form-box site-form">
            <div className="login-form">
              <h5>Login In</h5>
              <form onSubmit={handleSubmit}>
                <div className="row clearfix">
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
                        placeholder=""
                        required
                      />
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
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="field-inner clearfix">
                      <div className="remember"></div>
                      <div className="forgot-pass">
                        <a href="reset-password.html">Forgot your password? </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="theme-btn btn-style-two">
                      <span>
                        Login In <i className="icon far fa-angle-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="lower-link">
              Don't have an account? <Link to="/sign-up">Daftar</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
