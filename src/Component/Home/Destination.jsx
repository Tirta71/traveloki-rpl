import React from "react";
import ContentDestination from "./Content/ContentDestination";

export default function Destination() {
  return (
    <>
      <section className="trending-destinations mb-5">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">Top Destinations</div>
            <h2>
              <i className="bg-vector"></i>
              <span>Trending Destinations</span>
            </h2>
          </div>

          <ContentDestination />
        </div>
      </section>
    </>
  );
}
