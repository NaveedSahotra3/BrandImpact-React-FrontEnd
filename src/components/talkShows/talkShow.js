import React ,{useEffect , useState} from "react";
import SubPageHeader from "../subPageHeader/subPageHeader";
import { Link } from "react-router-dom";
import axios from 'axios'
const Talkshows = () => {
  const [state, setstate] = useState([]);

  useEffect(async () => {
    let result = await axios.get("http://localhost/api/getsaboutcrud");
    setstate(result.data);
  }, []);
  console.log(state);

  return (
    <div id="wrap">
      <SubPageHeader />
      <body class="home home-agency one-page preloader transparent-header parallax-footer">
        <div id="content-wrapper">
          <section id="hero"></section>

          <div
            class="section"
            style={{ padding: "0", backgroundColor: "#CCCCCC" }}
          >
            <div
              style={{
                width: "auto",
                paddingTop: "2.5em",
                paddingBottom: "2em ",
                textAlign: "center",
                backgroundColor: "#141414",
              }}
            >
              <h2
                class="h1 wow zoomInDown"
                data-wow-delay="0.1s"
                style={{ color: "#fff" }}
              >
                Talk Shows
              </h2>
            </div>

            <div
              class="container"
              style={{ paddingTop: "5em", backgroundSize: "contain" }}
              id="agency"
            >
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4">
                    <img
                      src="images/properties/zameensefalaktak-logo.png"
                      alt="Zameen Se Falak Tak"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="col-md-8 mtb-20">
                    <h4 style={{ lineHeight: "22px" }}>
                      <strong>Success Stories - Zameen se Falak Tak</strong>
                    </h4>
                    <p>
                      Season 1 was hosted by Celebrity presenter{" "}
                      <strong>Shekhar Suman</strong>, and was broadcasted on
                      National Channel <strong>Zee Business</strong>. The show
                      started from <strong>1st January 2017</strong> and the
                      series unveiled The Grand Tales of Success of some of the
                      UNSUNG REAL HEROES who have miraculously achieved great
                      heights of success and it was aired every{" "}
                      <strong>sunday at 11:30 am</strong>
                    </p>
                    <Link to="/candidate" class="button violet_atr">
                      Know More
                    </Link>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-8 mtb-20">
                    <h4 style={{ lineHeight: "22px" }}>
                      <strong>Safar Kamyabi Ka</strong>
                    </h4>
                    <p>
                      After the grand success of Zameen Se Falak Tak, Brands
                      Impact created &quot;Safar Kamyabi Ka&quot;, a{" "}
                      <strong>35 episode</strong> long series on National News
                      Channel, <strong>News World India</strong> which was
                      hosted by Celebrity Anchor and Bollywood Actor{" "}
                      <strong>Aman Vema</strong> and renowned Journalist{" "}
                      <strong>Meenakshi Sheoran</strong>.
                    </p>
                    <Link to="/candidate" class="button violet_atr">
                      Know More
                    </Link>
                  </div>
                  <div class="col-md-4">
                    <img
                      src="images/properties/safarkamyabika-logo.png"
                      alt="Safar Kamyabi Ka"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-4">
                    <img
                      src="images/properties/pratigya-stand-for-a-cause-logo.png"
                      alt="Pratigya - Stand for a Cause"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="col-md-8 mtb-20">
                    <h4 style={{ lineHeight: "22px" }}>
                      <strong>Pratigya - Stand for a Cause</strong>
                    </h4>
                    <p>
                      <strong>Pratigya - Stand for a Cause</strong> is a
                      discussion based talk show on national television that
                      focuses on finding solutions to social issues prevailing
                      in our country. The first two seasons of the show have
                      been successfully broadcasted on{" "}
                      <strong>India News</strong> and <strong>Epic Tv</strong>.
                    </p>
                    <Link to="/candidate" class="button violet_atr">
                      Know More
                    </Link>
                  </div>
                </div>
                <hr />
                {/* <div class="row">
					<div class="col-md-8 mtb-20">
						<h4 style={{lineHeight: "22px"}}><strong>Being Candid</strong></h4>
						<p>Brands Impact launched a unique virtual chat show <strong>&quot;Being Candid&quot;</strong>. <strong>The first two seasons were successfully executed with</strong> 2002 Femina Miss India Pageant winner, a successful Bollywood Actress and a fearless Reality Shows Judge, <strong>Ms. Neha Dhupia.</strong> and Ms. <strong>Dia Mirza</strong> winner of the 2000 Miss Asia Pacific International Pageant, a successful Bollywood Actress and UN Environment Goodwill Ambassador</strong>.</p>
						<a href="being-candid.html" class="button violet_atr">Know More</a>
					</div> */}
                <div class="col-md-4">
                  <img
                    src="images/properties/being-candid-logo.png"
                    alt="Being Candid"
                    style={{ width: "100%" }}
                  />
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
                  Branding is like Poetry. It grows on you, with time. Do it bad
                  and it will come back to haunt you. <br />
                  Do it good, with Brands Impact... and make your customers come
                  back to you time and again!
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                {/* 						
						<!--<form class="subscribe-form" action="javascript:;" method="post">
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
                    <script>document.write(new Date().getFullYear());</script>{" "}
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
  );
};
export default Talkshows;
