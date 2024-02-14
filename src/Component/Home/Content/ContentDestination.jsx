import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ContentDestination() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/tujuan");
        setDestinations(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleViewDestination = (id) => {
    window.location.href = `/destination/${id}`;
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {destinations.length > 0 ? (
            <div className="gallery-box">
              <div className="masonry-container row clearfix">
                {destinations.slice(0, 2).map((destination) => (
                  <div
                    key={destination.id_tujuan}
                    className="dest-block-one masonry-item col-lg-6 col-md-6 col-sm-12"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <a href="">
                          <img
                            src={`http://localhost:8000/images/${destination.urlImage}`}
                            alt={destination.nama}
                          />
                        </a>
                      </div>
                      <div className="hvr-box">
                        <div className="cap-box">
                          <div className="cap-inner clearfix">
                            <h4>
                              <a
                                href="#"
                                onClick={() =>
                                  handleViewDestination(destination.id_tujuan)
                                }
                              >
                                {destination.nama}
                              </a>
                            </h4>
                            <div className="tour-count">
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  handleViewDestination(destination.id_tujuan)
                                }
                              >
                                View
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center">No destinations available</p>
          )}
        </>
      )}
    </>
  );
}
