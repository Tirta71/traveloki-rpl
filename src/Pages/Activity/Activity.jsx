/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../Component/Util/HeaderNavbar";
import ContentActivity from "../../Component/Activity/ContentActivity";
import InvoicePenyewa from "../../Component/Penyewa/InvoicePenyewa";

export default function Activity() {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const role = sessionStorage.getItem("user_role");

    if (role === "Penyewa") {
      setShowContent(false);
    } else if (role === "Pelanggan") {
      setShowContent(true);
    }
  }, []);

  return (
    <>
      <HeaderNavbar />
      <section className="actvity-section">
        <div className="auto-container">
          <div className="title-box centered mt-5">
            <h2>
              <span>Our Treker Activities</span>
            </h2>
          </div>
          {!showContent && <InvoicePenyewa />}
          {showContent && <ContentActivity />}
        </div>
      </section>
    </>
  );
}
