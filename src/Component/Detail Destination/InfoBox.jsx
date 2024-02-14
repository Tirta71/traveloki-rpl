import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function InfoBox({ data, setData }) {
  return (
    <>
      <div className="package-info-box-two">
        <div className="inner-container d-flex justify-content-between align-items-center">
          <div className="package-info-block-two">
            <div className="inner-box">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              {data.lokasi_tujuan}
            </div>
          </div>

          <div className="package-info-block-two">
            <div className="inner-box">
              <div className="icon">
                <img src="images/icons/printer.svg" alt="" />
              </div>
              Printed voucher accepted
            </div>
          </div>

          <div className="package-info-block-two">
            <div className="inner-box">
              <div className="icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              {data.tanggal}
            </div>
          </div>

          <div className="package-info-block-two">
            <div className="inner-box">
              <div className="icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              {data.jam}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
