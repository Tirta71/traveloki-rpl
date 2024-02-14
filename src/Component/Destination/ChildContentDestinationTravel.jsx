/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChildContentDestinationTravel() {
  const [destinations, setDestinations] = useState([]);
  const [displayedDestinations, setDisplayedDestinations] = useState(3);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/tujuan");
        setDestinations(response.data.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  const handleLoadMore = () => {
    setDisplayedDestinations(destinations.length);
  };

  return (
    <>
      <div className="content-box">
        <div className="row clearfix">
          {destinations.slice(0, displayedDestinations).map((destination) => (
            <div
              key={destination.id_tujuan}
              className="tour-block-one col-xl-4 col-lg-6 col-md-6 col-sm-12"
            >
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <a href={`/destination/${destination.id_tujuan}`}>
                      <img
                        src={`http://localhost:8000/images/${destination.urlImage}`}
                        alt={destination.nama}
                        title={destination.nama}
                      />
                    </a>
                  </div>
                </div>
                <div className="lower-content">
                  <div className="price">
                    <span>Rp.{destination.harga_sewa}</span>
                  </div>
                  <h4>
                    <a href={`/destination/${destination.id_tujuan}`}>
                      {destination.nama}
                    </a>
                  </h4>

                  <div className="text">{destination.deskripsi}</div>
                  <div className="bottom-box clearfix">
                    <div className="info">
                      <span className="i-block">
                        <i className="icon far fa-clock"></i>{" "}
                        {destination.tanggal}
                      </span>{" "}
                      &ensp; | &ensp;{" "}
                      <span className="i-block">{destination.jam}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayedDestinations < destinations.length && (
          <div className="load-more">
            <a
              href="#"
              className="theme-btn btn-style-one"
              onClick={handleLoadMore}
            >
              <span>Load More</span>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
