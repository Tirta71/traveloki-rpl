import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ContentActivity() {
  const [sewaData, setSewaData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const id_pelanggan = sessionStorage.getItem("id_pelanggan");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/sewa/pelanggan/${id_pelanggan}`)
      .then((response) => {
        setSewaData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching sewa data:", error);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleItems(sewaData.length);
  };

  return (
    <>
      <div className="content-box">
        <div className="row clearfix">
          {sewaData.slice(0, visibleItems).map((item) => (
            <div
              className="activity-block-one col-xl-4 col-lg-6 col-md-6 col-sm-12"
              key={item.id}
            >
              <div className="inner-box">
                <div className="lower-content">
                  <h4>
                    <Link to={`/activity/${item.id_sewa}`}>{item.nama}</Link>
                  </h4>
                  <div className="text">{item.tanggal}</div>
                  <div className="bottom-box clearfix">
                    <div className="more-link">
                      <Link
                        to={`/activity/${item.id_sewa}`}
                        className="theme-btn"
                      >
                        <span>
                          View Details{" "}
                          <i className="icon">
                            <img src="images/icons/logo-icon.svg" alt="" />
                          </i>
                        </span>
                      </Link>
                    </div>
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

        <div className="load-more">
          {visibleItems < sewaData.length && (
            <button
              onClick={handleLoadMore}
              className="theme-btn btn-style-one"
            >
              <span>Load More......</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
