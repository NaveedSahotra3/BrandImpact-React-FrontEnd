import React from "react";
import { Link } from "react-router-dom";

const SubPageHeader = () => {
  return (
    <>
      <header class="headroom" id="header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              {/* <!-- Theme logo --> */}
              <a href="index.html" class="logo">
                <img
                  src="images/logo.png"
                  data-at2x="images/logo@2x.png"
                  alt="Best Branding Company in India"
                />
              </a>
              <nav
                id="header-nav"
                class="dl-menuwrapper"
                data-back-label="Back"
              >
                <a
                  href="javascript:;"
                  id="mobile-menu-toggler"
                  class="dl-trigger"
                >
                  <span>Toggle Menu</span>
                </a>
                <ul id="header-menu" class="dl-menu">
                  {/* <!-- First level menu --> */}
                  <li>
                    <Link to="/" id="hm">
                      <span class="line_wrap">
                        <span class="line"></span>Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a href="index.html#agency" id="about">
                      <span class="line_wrap">
                        <span class="line"></span>About Us
                      </span>
                    </a>
                  </li>
                  {/* <li>
                    <a href="index.html#process" id="profile">
                      <span class="line_wrap">
                        <span class="line"></span>Our Profile
                      </span>
                    </a>
                  </li> */}
                  <li>
                    <Link to="/award" id="awards" target="_blank">
                      <span class="line_wrap">
                        <span class="line"></span>Awards
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/talk_shows" id="tvshow" target="_blank">
                      <span class="line_wrap">
                        <span class="line"></span>Talk Shows
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/magzine" id="magazine" target="_blank">
                      <span class="line_wrap">
                        <span class="line"></span>Magazines
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#gallery"  id="gallery">
                      <span class="line_wrap">
                        <span class="line"></span>Gallery
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/team" id="our_team" target="_blank">
                      <span class="line_wrap">
                        <span class="line"></span>Our Team
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#contact" id="contact">
                      <span class="line_wrap">
                        <span class="line"></span>Contact{" "}
                        <i class="submenu-icon"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SubPageHeader;
