import React from "react";
import ChildContentDestinationTravel from "./ChildContentDestinationTravel";

export default function ContentDestinationTravel() {
  return (
    <>
      <section class="dest-tours">
        <div class="floated-icon left">
          <img src="images/resource/stones-left.svg" alt="" title="" />
        </div>
        <div class="floated-icon right">
          <img src="images/resource/stones-right.svg" alt="" title="" />
        </div>
        <div class="auto-container">
          <div class="title-box centered">
            <h2>
              <span>Popular Destination</span>
            </h2>
          </div>
          <ChildContentDestinationTravel />
        </div>
      </section>
    </>
  );
}
