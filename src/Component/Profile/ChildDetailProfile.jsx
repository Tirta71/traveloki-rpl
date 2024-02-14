import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ChildDetailProfile() {
  const id_user = sessionStorage.getItem("user_id");
  const [dataUser, setDataUser] = useState("");

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/user/${id_user}`
        );
        setDataUser(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDestinations();
  }, [id_user]);
  console.log(dataUser);

  return (
    <>
      <section className="team-single">
        <div className="floated-icon left">
          <img src="images/resource/dotted-pattern-1.png" alt="" title="" />
        </div>
        <div className="floated-icon right">
          <img src="images/resource/stones-right.svg" alt="" title="" />
        </div>
        <div className="auto-container">
          <div className="content-box">
            <div
              className="row clearfix"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="image-col col-lg-6 col-md-6 col-sm-12">
                <div className="inner">
                  <div className="image">
                    <div className="image">
                      <img
                        src="https://i.pinimg.com/236x/f3/7c/1b/f37c1bd3c48afd50c39890bf4ac127d6.jpg"
                        alt=""
                        title=""
                        style={{
                          width: "100%",
                          height: "500px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-col col-lg-6 col-md-6 col-sm-12">
                <div className="inner">
                  <div className="member-info">
                    <h4 className="name" style={{ textTransform: "uppercase" }}>
                      {dataUser.name}
                    </h4>
                    <div className="designation">{dataUser.role}</div>
                  </div>

                  <div className="member-contact">
                    <div className="phone">
                      <span className="icon">
                        <img src="images/icons/email-1.svg" alt="" title="" />
                      </span>{" "}
                      Email:{" "}
                      <a href="mailto:example@treker.com">{dataUser.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
