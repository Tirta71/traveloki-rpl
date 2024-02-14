import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import ContentNavbar from "./ContentNavbar";

export default function HeaderNavbar() {
  return (
    <>
      <header className="main-header">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner clearfix">
              <Logout />
            </div>
          </div>
        </div>

        <div className="header-upper">
          <div className="auto-container">
            <div className="main-box clearfix">
              <div className="logo-box">
                <div className="logo">
                  <a href="index.html" title="Treker">
                    <img src="images/logo.svg" alt="" title="Treker" />
                  </a>
                </div>
              </div>

              <div className="nav-box clearfix">
                <div className="nav-outer clearfix">
                  <ContentNavbar />
                </div>

                <div className="nav-toggler">
                  <button className="hidden-bar-opener">
                    <span className="icon">
                      <img src="images/icons/menu-icon.svg" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
