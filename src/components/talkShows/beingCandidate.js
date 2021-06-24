import React from "react";
import { Link } from "react-router-dom";
import SubPageHeader from "../subPageHeader/subPageHeader";

const Candidate = () => {
  return (
    <div>
      {/* <body class="home home-agency one-page preloader transparent-header parallax-footer"> */}

      <div id="wrap">
     <SubPageHeader/>
        <body class="home home-agency one-page preloader transparent-header parallax-footer">
          <div id="content-wrapper">
            <section id="hero"></section>
            <div
              class="section"
              style={{ backgroundColor: "#CCCCCC", padding: "0" }}
            >
              <div
                style={{
                  width: "auto",
                  paddingTop: "0.5em",
                  paddingBottom: "1em",
                  textAlign: "center",
                  backgroundColor: "#a5a0a0",
                }}
              >
                <img
                  src="images/properties/being-candid-logo.png"
                  style={{ width: "150px" }}
                  alt="Safar Kamyabi Ka"
                />
                <h2 class="h1 wow zoomInDown h2_heading" data-wow-delay="0.1s">
                  Being Candid
                </h2>
                <div style={{ backgroundColor: "#A44685" }}>
                  <a href="index.html" class="breadcrum">
                    Home
                  </a>{" "}
                  <a href="tv-series.html" class="breadcrum">
                    Talk Shows
                  </a>{" "}
                  <a href="being-candid.html" class="breadcrum">
                    Being Candid
                  </a>
                </div>
              </div>
              <div
                class="container"
                style={{ paddingTop: "3em", backgroundSize: "contain" }}
                id="agency"
              >
                <div class="row">
                  <div class="col-md-12" style={{ textAlign: "justify" }}>
                    <p style={{ padding: "20px 0" }}>
                      Brands Impact launched a unique virtual chat show
                      <strong>
                        "Being Candid". The first two seasons were successfully
                        executed with
                      </strong>{" "}
                      2002 Femina Miss India Pageant winner, a successful
                      Bollywood Actress and a fearless Reality Shows Judge,{" "}
                      <strong>Ms. Neha Dhupia</strong>. and
                      <strong>Ms. Dia Mirza</strong> winner of the 2000 Miss
                      Asia Pacific International Pageant, a successful Bollywood
                      Actress and UN Environment Goodwill Ambassador.
                    </p>
                    <p>
                      The season 1 of Being Candid showcased the interactions of
                      Neha Dhupia with 16 experts including the Owner of Nail
                      Artistry - <strong>Dr. Leena S</strong>, Renowned
                      Hoemopathic Doctor from Bangalore -{" "}
                      <strong>Dr. Sanjay Panicker</strong>, Famous Wedding
                      designer &amp; planner - <strong>Ambika Gupta</strong>,
                      Delhi based nutritionist and health entrepreneur -{" "}
                      <strong>Apoorvi Sethi</strong>, Film Director&amp;
                      Composer - <strong>Dushyant Pratap Singh</strong>, Noida
                      based Astrologer - <strong>Ritu Singh</strong>, Renowned
                      makeup artist from jammu -
                      <strong>Ritika Trehanand</strong> Digital Marketing Expert
                      - <strong>Om Thoke</strong> among others.
                    </p>
                    <p style={{ padding: "20px 0" }}>
                      The season 2 of Being Candid will showcase interactions of
                      Dia Mirza with 11 experts including,{" "}
                      <strong>Sabarna Roy</strong> a career engineer and an
                      accomplished author by choice,{" "}
                      <strong>Nayan Ratandhayara</strong>, Founder & CEO
                      Shipyaari, <strong>Gunjan Goyal</strong>, a fashion
                      entrepreneur and owner, Fempire, ,{" "}
                      <strong>Gayatri Jolly</strong>, Founder & CEO, MasterG,{" "}
                      <strong>Ankita Chatterjii</strong>, Numerologist & Life, &{" "}
                      <strong>Bhupenddra Singh Raathore</strong>, International
                      Motivational Speaker & Business Coach among others.
                    </p>
                  </div>
                  <div class="col-md-12" style={{ textAlign: "center" }}>
                    <img
                      src="images/properties/being-candid-collage.png"
                      alt="Being candid collage"
                    />
                  </div>
                  <div class="col-md-12" style={{ textAlign: "center" }}>
                    <Link
                      to="/#contact"
                      target="_blank"
                      class="button violet_atr"
                    >
                      Participate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--
			Footer
			--> */}
          <footer id="footer">
            <div id="footer-widgets" class="container">
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <a href="#" class="footer-logo">
                    <img
                      src="images/logo.png"
                      data-at2x="images/logo@2x.png"
                      alt="Brands Impact - creative agency template"
                    />
                  </a>

                  <p>
                    Branding is like Poetry. It grows on you, with time. Do it
                    bad and it will come back to haunt you. <br />
                    Do it good, with Brands Impact... and make your customers
                    come back to you time and again!
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-md-offset-4">
                  {/* <!--<form class="subscribe-form" action="javascript:;" method="post">
							<input type="email" placeholder="Your Email Address..." />
							<input type="submit" />
						</form>--> */}

                  <div class="social-icons">
                    <a href="https://facebook.com/BrandsImpact" target="_blank">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/brands_impact" target="_blank">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/brandsimpact/"
                      target="_blank"
                    >
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC22WFilviK2uSdWTOgwtDJA"
                      target="_blank"
                    >
                      <i class="fa fa-youtube"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/brands-impact-2a679018b"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="bottom-bar">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <p>
                      &copy;
                      <script>
                        document.write(new Date().getFullYear());
                      </script>{" "}
                      Brands Impact. <a href="#">Best Branding Company</a>.
                      Period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </div>
    </div>
  );
};

export default Candidate;
