import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import axios from "axios";
import About from "../about/about";
import Gallery from "../Gallery/Gallery";
import Overlay from "react-image-overlay";
import zIndex from "@material-ui/core/styles/zIndex";
import baseURL from "../url";
const LandingPage = () => {
  const [state, setstate] = useState(false);
  const [about, setabout] = useState([]);
  const [gallery, setgallery] = useState([]);

  useEffect(() => {
    // about
    axios
      .get("http://localhost:8090/api/getsaboutcrud")
      .then((result) => setabout(result.data));
      axios
      .get("http://localhost:8090/api/gallery/gets")
      .then((result) => setgallery(result.data));
    console.log(gallery);
    // gallery
  }, []);


  const changeHandler = () => {
    setstate(true);
  };
  const changeIT = () =>{
    setstate(false)
  }

  return (
    <div class="home home-agency one-page preloader transparent-header parallax-footer">
      <div id="wrap">
        {/* <!--
    Page header
--> */}

        <header class="headroom" id="header">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                {/* <!--
                    Theme logo
                --> */}
                <a href="index.html" class="logo">
                  <img
                    src="images/logo.png"
                    data-at2x="images/logo@2x.png"
                    alt="Best Branding Company in India"
                  />
                </a>

                {/* <!--
                    Navigation
                --> */}

                <nav
                  id="header-nav"
                  class="dl-menuwrapper"
                  data-back-label="Back"
                >
                  {/* <!--
                        Toggle menu for mobile devices
                        this element is hidden for desktop and large monitors
                    --> */}
                  <a
                    href="javascript:;"
                    id="mobile-menu-toggler"
                    class="dl-trigger"
                  >
                    <span>Toggle Menu</span>
                  </a>

                  <ul id="header-menu" class="dl-menu">
                    {/* <!--
                            First level menu
                        --> */}
                    <li>
                      <a href="#slider">
                        {/* <!-- Animated line wrap additional tags --> */}
                        <span class="line_wrap">
                          <span class="line"></span>
                          Home
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#agency">
                        <span class="line_wrap">
                          <span class="line"></span>
                          About Us
                        </span>
                      </a>
                    </li>
                    {/* <li>
                            <a href="#process">
                                <span class="line_wrap">
                                    <span class="line"></span>
                                    Our Profile
                                </span>
                            </a>
                        </li> */}
                    <li>
                      <Link to="/award" id="awards" target="_blank">
                        <span class="line_wrap">
                          <span class="line"></span>
                          Awards
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/talk_shows" id="tv" target="_blank">
                        <span class="line_wrap">
                          <span class="line"></span>
                          Talk Shows
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/magzine" id="magazine" target="_blank">
                        <span class="line_wrap">
                          <span class="line"></span>
                          Magazines
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a href="#gallery">
                        <span class="line_wrap">
                          <span class="line"></span>
                          Gallery
                        </span>
                      </a>
                    </li>

                    {/* <!--<li>
                            <a href="#clients">
                                <span class="line_wrap">
                                    <span class="line"></span>
                                    Testimonials
                                </span>
                            </a>
                        </li>--> */}
                    <li>
                      <Link to="/team" id="our_team" target="_blank">
                        <span class="line_wrap">
                          <span class="line"></span>
                          Our Team
                        </span>
                      </Link>
                    </li>

                    <li>
                      <a href="#contact">
                        <span class="line_wrap">
                          <span class="line"></span>
                          Contact <i class="submenu-icon"></i>
                        </span>
                      </a>

                      {/* <!--
                                An example of second menu level
                            
                            <ul class="sub-menu dl-submenu">
                                <li><a class="external" href="blog-single.html">Blog Post</a></li>
                                <li><a class="external" href="header-scroll.html">Scroll Header</a></li>
                                <li><a class="external" href="header-simple.html">Simple Header</a></li>
                                <li><a class="external" href="footer-simple.html">Simple Footer</a></li>
                                <li><a class="external" href="sidebar-left.html">Left Side</a></li>
                                <li><a class="external" href="page.html">Page</a></li>
                                <li>
                                    <a class="external" href="javascript:;">Right menu <i class="submenu-icon"></i></a>
                                -->
                            <!--
                                        An example of third menu level
                                        it will appear on a right side
                                    
                                    <ul class="sub-menu dl-submenu appear-on-right">
                                        <li><a class="external" href="javascript:;">Link 1</a></li>
                                        <li><a class="external" href="javascript:;">Link 2</a></li>
                                        <li><a class="external" href="javascript:;">Link 3</a></li>
                                    </ul>
                                    
                                </li>
                                <li>
                                    <a class="external" href="javascript:;">Left menu <i class="submenu-icon"></i></a>
                                    -->
                            <!--
                                        An example of third menu level
                                        it will appear on a left side
                                    
                                    <ul class="sub-menu dl-submenu appear-on-left">
                                        <li><a class="external" href="javascript:;">Some link 1</a></li>
                                        <li><a class="external" href="javascript:;">Some link 2</a></li>
                                        <li><a class="external" href="javascript:;">Some link 3</a></li>
                                    </ul>
                                    --> */}
                    </li>
                  </ul>

                  {/* </li> */}
                  {/* </ul> */}
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* // <!--
//     Content section area
// --> */}
        <div id="content-wrapper">
          {/* <!--
        Home page slider
    --> */}
          <Carousel showThumbs={false} autoPlay={true} id="">
            <div class="">
              <img
                src="images/demo-images/coc-group-banner.jpg"
                alt="COC Group"
              />
            </div>
            <div class="">
              <img
                src="images/demo-images/coc-prize-distribution.jpg"
                alt="COC Prize Distribution"
              />
            </div>
            <div class="">
              <img
                src="images/demo-images/pranab-mukherjee-giving-award.jpg"
                alt="COC Prize Distribution"
              />
            </div>
            <div class="">
              <img
                src="images/demo-images/ramesh-pokhrayal-in-coc-prize-distribution.jpg"
                alt="Ramesh Pokhrayal in coc prize distribution"
              />
            </div>
            <div class="slide">
              {/* <!--<img src="images/demo-images/preity-zinta-gga-event-2019.jpg" alt="Preity Zinta as a cheif Guest in Golden Glory Awards 2019" />--> */}
              <img
                src="images/demo-images/preity-zinta-brands-impact-2019.jpg"
                alt="Preity Zinta as cheif Guest in Golden Glory Awards 2019"
              />
            </div>
            <div class="slide">
              <img src="images/demo-images/kareena-mumbai-event-2019.jpg" />
            </div>
            <div class="slide">
              <img src="images/demo-images/jac.jpg" />
            </div>
            <div class="slide">
              <img src="images/demo-images/rajnath-in-event.jpg" />
            </div>
            <div class="slide">
              <img src="images/demo-images/venkaiah-naidu-in-event.jpg" />
            </div>
            <div class="slide">
              <img src="images/demo-images/international-quality-awards.jpg" />
            </div>

            <div class="slide">
              <img src="images/demo-images/raveena.jpg" />
            </div>
            <div class="slide">
              <img src="images/demo-images/diya-mirza.jpg" />
              {/* <!--<div class="slide-desc" style="right:10px; bottom:15%;">
                <h3 class="h3">We help <span style="color:#fff">Brands</span> <br />Make An <span style="color:#fff">Impact</span></h3>
                <p>Consumer attention span is shorter. Competition Tougher. Customer loyalty, all but dead. To survive and thrive, your <span style="color:#fecb16">Brand</span> has to have an <span style="color:#fecb16">Impact</span>. The little guys have to hit BIG. We help you deliver that, and more!</p>
                <a href="#agency" class="button yellow">About Us</a>
            </div>--> */}
            </div>
            <div class="slide">
              <img src="images/demo-images/Slide-4.jpg" />
              {/* <!--<div class="slide-desc">
                <h3>Best Production Company in India</h3>
                <p>We have two extremely successful T.V. Shows - <a href="http://success-stories.in/zameen-se-falak-tak/">Zameen Se Falak Tak</a> and Safar Kamyabi Ka.  Our new show <a href="http://pratigya.info/">Pratigya</a> - Stand for a Cause will soon be on air.</p>
                <a href="#gallery" class="button pink">Gallery</a>
            </div>--> */}
            </div>
            <div class="slide">
              <img src="images/demo-images/media-collage.jpg" />
              {/* <!--<div class="slide-desc">
                <h3 class="h3">We harness the <br /><span style="color:#fff;">Power of Media</span></h3>
                <p>Print. TV. Radio. Social. Any Media. Any Audience. Any Time. We get Visibility. We build Credibility. We ensure Growth. Need we say more?</p>
                <a href="#contact" class="button purple">Contact Us</a>
            </div>--> */}
            </div>
          </Carousel>
          <div class="biwidget" style={{ display: "none" }}>
            <a href="https://pieawards.in/" target="_blank">
              <img
                src="side1.png"
                width="auto"
                style={{ borderRadius: "6px" }}
              />
            </a>
            <a href="https://bestdoctorsinindia.in/" target="_blank">
              <img src="ibd.png" width="auto" style={{ borderRadius: "6px" }} />
            </a>
          </div>

          {/* <!--
        About our agency section
    --> */}
          <div class="section" id="agency">
            <About data={about} />
          </div>

          {/* <!--
        Our process video section
    --> */}
          {/* <div class="section pdf_height" id="process" style={{ padding:'5% 0' , backgroundImage:"none"}}>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="h1 wow zoomInDown" data-wow-delay="0.1s" style={{color:"#000"}}>Our Profile</h2>
     
                    <div class="PDF"><span class="showinmob" style={{color:"#000"}}>Click to Download</span>
                        <object data="brands-impact-presentation3.pdf" type="application/pdf" width="100%"
                            height="400">
                            <a href="brands-impact-presentation3.pdf"><img
                                    src="images/ppt_img/brands-impact-presentation-1.jpg"
                                    style={{width:'100%' , cursor: "pointer"}}/></a>
                        </object>
                    </div>
                </div>
            </div>
        </div>


    </div> */}

          {/* <!--
        Portfolio
    --> */}
          {/* <div class="section" id="works">
    
        <div class="portfolio">
        
            <div class="portfolio-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="h1 wow zoomInDown" style={{textAlign:"center"}}>Events</h2>
                            <div class="filters"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="portfolio-gallery">
                <div class="item filter-web-design">
                    <img src="images/demo-images/pie.jpg" alt=""/>
                    <div class="caption">
                        <h4>Pride Of Indian Education</h4>
                        <a href="images/demo-images/pie.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                            <a href="https://pieawards.in" target="_blank">pieawards.in</a>
                        </div>
                    </div>
                </div>

                <div class="item filter-web-design" style={{width:"480px" , height:"480px"}}>
                    <img src="images/demo-images/gga-logo.jpg" alt="" style={{width:"480px" , height:"480px"}}/>
                    <div class="caption">
                        <h4>Golden Glory Awards</h4>
                        <a href="images/demo-images/gga-logo.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                            <a href="https://goldengloryawards.com" target="_blank">GoldenGloryAwards</a>
                        </div>
                    </div>
                </div>
                
                <div class="item filter-web-design" style={{width:"480px" , height:"480px"}}>
                    <img src="images/demo-images/iqa.jpg" alt=""  style={{width:"480px" , height:"480px"}}/>
                    <div class="caption">
                        <h4>International Quality Awards</h4>
                        <a href="images/demo-images/iqa.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                            <a href="https://internationalqualityawards.com" target="_blank">InternationalQualityAwards.com</a>
                        </div>
                    </div>
                </div>
            
                <div class="item filter-web-design" style={{width:"480px" , height:"480px"}}>
                    <img src="images/demo-images/gpa.jpg" alt=""  style={{width:"480px" , height:"480px"}}/>
                    <div class="caption">
                        <h4>Global Property Awards</h4>
                        <a href="images/demo-images/gpa.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                            <a href="https://globalpropertyawards.com/" target="_blank">GlobalPropertyAwards.com</a>
                        </div>
                    </div>
                </div>

                <div class="item filter-web-design">
                    <img src="images/demo-images/ibd.jpg" alt=""/>
                    <div class="caption">
                        <h4>India's Best Doctors Award</h4>
                        <a href="images/demo-images/ibd.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                            <a href="https://bestdoctorsinindia.in" target="_blank">bestdoctorsinindia.in</a>
                        </div>
                    </div>
                </div>
                
                <div class="item filter-web-design">
                
                    <img src="images/demo-images/rca.jpg" alt=""/>
                    <div class="caption">
                        <h4>Right Choice Awards</h4>
                        <a href="images/demo-images/rca.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                            <a href="https://rightchoiceawards.com" target="_blank">rightchoiceawards.com</a>
                        </div>
                    </div>
                </div>

                <div class="item filter-web-design">
                    <img src="images/education-excellence-awards.jpg" alt=""/>
                    <div class="caption">
                        <h4>Education Excellence Awards</h4>
                        <a href="images/education-excellence-awards.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                    <a href="https://educationexcellenceawards.in/" target="_blank">Education Excellence Awards</a>
                        </div>
                    </div>
                </div>
                
                <div class="item filter-web-design">
                    <img src="images/success-stories-unsung-heroes.jpg" alt=""/>
                    <div class="caption">
                        <h4>Success Stories</h4>
                        <a href="images/success-stories-unsung-heroes.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                    <a href="https://success-stories.in" target="_blank">Success Stories</a>
                        </div>
                    </div>
                </div>

                <div class="item filter-web-design">
                    <img src="images/pratigya_awards.jpg" alt=""/>
                    <div class="caption">
                        <h4>Pratigya Social Impact Awards</h4>
                        <a href="images/pratigya_awards.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                    <a href="https://pratigya.info/" target="_blank">pratigya.info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

          {/* <div class="section" id="tvshows">
        <div class="portfolio">
            <div class="portfolio-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
    
                            <h2 class="h1 wow zoomInDown" style={{textAlign:"center"}}>TV Shows</h2>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="portfolio-gallery">
                <div class="item filter-web-design">
                    <img src="images/safar_black.jpg" alt=""/>
                    <div class="caption">
                        <h4>Safar Kamyabi Ka</h4>
                        <a href="images/safar_black.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                    <a href="https://safarkamyabika.com/" target="_blank">safarkamyabika.com</a>
                        </div>
                    </div>
                </div>

                <div class="item filter-web-design">
                    <img src="images/pratigya.jpg" alt=""/>
                    <div class="caption">
                        <h4>Pratigya</h4>
                        <a href="images/pratigya.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                    <a href="https://pratigya.info/" target="_blank">pratigya.info</a>
                        </div>
                    </div>
                </div>
                <div class="item filter-web-design">
                    <img src="images/zsft.jpg" alt=""/>
                    <div class="caption">
                        <h4>Zameen se Falak Tak</h4>
                        <a href="images/zsft.jpg" class="zoom lightbox"></a>
                        <div class="tags">
                    <a href="https://zameensefalaktak.com/" target="_blank">Zameen Se Falak Tak</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div> */}

          {/* <!--
        Portfolio
    --> */}
          <div class="section" id="">
            <div class="portfolio">
              <div class="portfolio-header">
                {/* <!-- class => style-left --> */}

                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      {/* <!--
                                Section header
                            --> */}
                      <h2
                        class="h1 wow zoomInDown"
                        style={{ textAlign: "center" }}
                      >
                        Picture Gallery
                      </h2>

                      {/* <!--
                                Portfolio filters
                            --> */}
                      <div class="filters"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--
                Portfolio justified gallery
            --> */}

              {/* <Gallery data={gallery} /> */}
              <div className="_gallery_wrp">
                {gallery &&
                  gallery.map((item, ind) => {
                    return (
                      <>
                      <div class="_imageOverlay">
                        <img
                          src={baseURL+"/api/uploads/"+item.image}
                          alt="Avatar"
                          class="_overlay_image"
                        />
                        <div class="_caption_overlay">
                          <div class="">
                            <h4 style={{ fontSize: "3.0rem" }}>{item.title}</h4>
                            <button onClick={changeHandler}>Zoom</button>

                            <div class="tags"></div>
                          </div>
                        </div>
                      </div>

                      {state == true ? (
                  <div
                  className="zoom_in_out"
                  >
                    <div style={{position:'fixed' , bottom:0 , left:0}}>
                    <button onClick={changeIT}>close</button>

                    </div>
                   <div style={{height:'600px' , width:'500px'}}>
                   <img
                          src={baseURL+"/api/uploads/"+item.image}
                          alt="Avatar"
                          class="_overlay_image"
                        />
                   </div>
                  </div>
                ) : null}
                      </>
                    );

                  })}
              
              </div>

              {/* {gallery.length > 0 && gallery.map((item,ind)=>(
                <div class="item " key={ind} >
                <img
                          src="images/demo-images/champions-of-change-awards-by-brands-impact-2.jpg"
                          alt="Brands Impact, champion of change 2019, COC Awards, Award, Awards Pranab Mukherjee, Shilpa Shetty"
                          />
                        <div class="caption">
                          <h4 style={{ fontSize: "3.0rem" }}>
                            {item.title}
                          </h4>
                          <a
                            href="images/demo-images/champions-of-change-awards-by-brands-impact-2.jpg"
                            alt="Brands Impact, champion of change 2019, COC Awards, Awards Pranab Mukherjee, Shilpa Shetty"
                            class="zoom lightbox"
                            ></a>
                          <div class="tags">
                        
                          </div>
                        </div>
                      </div>
                        ))} */}
              {/* <div class="item filter-graphic">
                        <img
                          src="images/demo-images/champions-of-change-awards-by-brands-impact-2.jpg"
                          alt="Brands Impact, champion of change 2019, COC Awards, Award, Awards Pranab Mukherjee, Shilpa Shetty"
                        />
                        <div class="caption">
                          <h4 style={{ fontSize: "3.0rem" }}>
                            Champions of Change Awards by Brands Impact - 2
                            {item.title}
                          </h4>
                          <a
                            href="images/demo-images/champions-of-change-awards-by-brands-impact-2.jpg"
                            alt="Brands Impact, champion of change 2019, COC Awards, Awards Pranab Mukherjee, Shilpa Shetty"
                            class="zoom lightbox"
                          ></a>
                          <div class="tags">
                       
                          </div>
                        </div>
                      </div> */}
              {/* </div> */}

              {/* <!--<div class="portfolio-pagination">
                <a href="javascript:;" class="portfolio-load-more"><i class="icon"></i> <span>Load More Works</span></a>
            </div>--> */}
            </div>
          </div>

          <div class="section" style={{ padding: "90px 0" }}>
            <div class="portfolio-header">
              {/* <!-- class => style-left --> */}

              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    {/* <!--
                                Section header
                            --> */}
                    <h2
                      class="h1"
                      style={{
                        visibility: "visible",
                        animationName: "zoomInDown",
                        textAlign: "center",
                      }}
                    >
                      Video Gallery
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/wlqFMDS0uOA"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Being Candid || Season 2 || Highlights || Virtual
                    Interactive Session || Dia Mirza ||
                  </p>
                </div>
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/rg49eZ-yqCI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Being Candid || Highlights || Virtual Interactive Session ||
                    Neha Dhupia
                  </p>
                </div>
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/YRW3eQcZ6z8"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Highlights - Golden Glory Awards 2019 - Preity Zinta -
                    Brands Impact
                  </p>
                </div>

                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/NXhYPpje6d8"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Zoom Telecast of International Quality Awards || Edition - 2
                    || Kareena Kapoor Khan
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/BeI57EVNt2g"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Highlights || Pride of Indian Education Awards || Edition 3
                  </p>
                </div>
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/-1tFsPUV4fo"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Highlights || India's Best Doctors Awards || Edition 3
                  </p>
                </div>

                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/69iDNqM6yiQ"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Brands Impact- Success Stories Aftermovie
                  </p>
                </div>
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/sHxjlPj3-ow"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Brands Impact presents Right Choice Awards - Aftermovie
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/3T5XQtk8N28"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>Safar Kamyabi Ka Promo</p>
                </div>
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/jZ19L67AvOA"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Success Story || Brands Impact Zameen Se Falak Tak || Season
                    One Teaser
                  </p>
                </div>
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/n6v7lv6s_0I"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Highlights || Pratigya - Stand for a Cause Awards || Edition
                    2
                  </p>
                </div>
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/S6UzqilAzQM"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    Brands Impact International Quality Awards
                  </p>
                </div>
              </div>
              <div class="row" style={{ marginBottom: "20%" }}>
                <div class="col-md-3">
                  <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/sNF7fm7qBgo"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>
                  <p style={{ marginTop: "-30px" }}>
                    International Icon Awards 2017 - After Movie | Brand Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 
    <!-- Our team -->

    <!--
        News carousel
    -->


    <!--
        Our Clients section
    --> */}

          {/* <!--<div class="section" id="clients" style="background: #141414;">
    
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                
                    <h2 class="h1 wow zoomInDown">What Our Clients Say About Us</h2>
                    
                    <div class="testimonials-carousel owl-carousel">
                    
                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">I would like to take this opportunity to thank everyone in Brand Impact Team for the event. It was well-organized, thoughtful and an enriching experience and I look forward to be associated in future projects.</p>
                            </div>
                            <div class="author">
                                R.K. Sharma, Director, b4S Solutions Pvt. Ltd.
                            </div>
                        </div>

                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">As the name suggests, "IMPACT" ! It felt the same after receiving this award. My organisation has become first and obvious choice I should say. Brands impact has given me wings to fly.</p>
                            </div>
                            <div class="author">
                                OXFORD &amp; Mr. Hoon
                            </div>
                        </div>

                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">The kind of concept with which Brands Impact had successfully executed the subject Program "RIGHT CHOICE AWARDS". It would indeed have given a good boost to the deserving candidates for their contribution to the society and the mankind at large. We were very fortunate to be the part of this team as one of their Sponsors and their trusted travel partner. We would certainly be looking forward to the next event with full fervor and enthusiasm to make the same as well a successful one like the previous one. All the very best to all their future endeavors to TEAM BRANDS IMPACT.</p>
                            </div>
                            <div class="author">
                                Gopal Kumar, Director, Balaji Travco India Pvt. Ltd.
                            </div>
                        </div>

                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">Dear Sir, Thank you for honoring us with The Right Choice Award 2016 We are very much satisfied with the service you have extended to the participants. We are proud of your organization for giving us a chance to receive such an honour.</p>
                            </div>
                            <div class="author">
                                Sajit Krishnan Kutty, North Point Day School
                            </div>
                        </div>

                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">International Quality Awards by Brands Impact was a very good experience. The decor and set up was very professional. Ms. Sushmita Sen, the celebrity was very receptive and was able to connect to the audience present.</p>
                            </div>
                            <div class="author">
                                Sarvesh Goel, Chairman- G D Goenka Public School, Lucknow
                            </div>
                        </div>
                        
                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">Wishing good luck to the entire team of BRANDS IMPACT to come up with more such innovative ventures. Thank you for choosing us for International Quality Awards.</p>
                            </div>
                            <div class="author">
                                Suresh Reddy Kovuri, Creative Mentors, Hyderabad
                            </div>
                        </div>
                        
                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">It was indeed a pleasure to be associated with Brands Impact. The entire team of brand impact is wonderful at their work, they left no stone unturned to offer the best services to their esteemed clients.</p>
                            </div>
                            <div class="author">
                                Aditi Kakkad, Pinky Tripathi's Private Tutorials, Maharashtra
                            </div>
                        </div>
                        
                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">Amazing concepts. Stupendous design. Dependable. Always. You just can't go wrong with them!</p>
                            </div>
                            <div class="author">
                                Rohin Khanna, CEO, DirectTrip.com
                            </div>
                        </div>
                        
                        
                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">We had double the growth this year compared to the last one. Thanks for your great campaign!</p>
                            </div>
                            <div class="author">
                                Kapil Sachdev, Director, Toshi Automatic Systems
                            </div>
                        </div>
                    
                        
                        <div class="item">
                            <div class="text">
                                <p style="font-size:24px; color:#A44685;">We've 10,000+ active supporters because of the awareness drive initiated by them.  Kudos!</p>
                            </div>
                            <div class="author">
                                Deepika Kataria, Founder, Aanvi Foundation
                            </div>
                        </div>

                    </div>
                
                </div>
            </div>
        </div>
    </div>-->

    <!--
        Pricing tables section
    -->

    <!--
        Contacts section
    --> */}
          <div class="section" id="contact" style={{ marginTop: "-20%" }}>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  {/* <!--
                        Contact section header
                    --> */}
                  <div class="row">
                    <div class="col-md-6">
                      <h2 class="h1 wow zoomInDown">Get In Touch</h2>

                      {/* <!--<p>Please Fill in the form below with your requirement details and hit the "send" button. We'd get back to you soon and take the discussion forward!</p>--> */}
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      {/* <!--
                                Contact form block
                            --> */}
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScvG5wRT-ZRC_dd9RdP56hbQSlWSxkiCfXIV8I06dZDpRB0TQ/viewform?embedded=true"
                        width="100%"
                        height="995"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                      >
                        Loading�
                      </iframe>
                      {/* <!--<form action="send_mail.html" id="contact-us" method="post">
                                
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" id="input-name" name="name" placeholder="Your Name" required />
                                    </div>
                                    
                                    <div class="col-md-6">
                                        <input type="email" id="input-email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Valid Email Like e.g. example@xyz.com" placeholder="Email" required />
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" id="input-phone" name="phone" pattern="[1-9]{1}[0-9]{9}" title="Only 10 Digit Mobile Number & should not start with zero!" placeholder="Phone" required />
                                    </div>
                                    
                                    <div class="col-md-6">
                                        <input type="text" id="input-subject" name="subject" placeholder="Subject" required />
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-12">
                                        <textarea name="message" id="input-message" placeholder="Your Message"></textarea>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="submit" class="button violet_atr">Send Your Message</button>
                                    </div>
                                </div>
                            </form>--> */}
                    </div>
                    <div class="col-md-5 col-md-offset-1">
                      {/* <!--
                                Contact information block
                            --> */}
                      <div class="contact-information">
                        {/* <!--
                                    Address
                                --> */}
                        <div class="item">
                          <p>
                            <i
                              class="fa fa-building"
                              style={{ paddingRight: "20px" }}
                            ></i>{" "}
                            RZ - 9A, Bhawani Kunj <br />
                            Vasant kunj, New Delhi - 110070
                            <br />
                          </p>
                        </div>

                        {/* <!--
                                    Phones and Fax
                                --> */}
                        <div class="item">
                          <p>
                            <i
                              class="fa fa-phone"
                              style={{ paddingRight: "20px" }}
                            ></i>
                            <a href="tel:9599506639">+91-9599506639</a> /{" "}
                            <a href="tel:9953800577">+91-9953800577</a>
                          </p>
                        </div>

                        {/* <!--
                                    Email
                                --> */}
                        <div class="item">
                          <p style={{ fontSize: "23px" }}>
                            <i class=" fa fa-envelope"></i>
                            <a
                              href="mailto:info@brandsimpact.in"
                              style={{ paddingLeft: "20px" }}
                            >
                              info@brandsimpact.in
                            </a>
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    &copy;2021 Brands Impact.{" "}
                    <a href="#">Best Branding Company</a>. Period.
                  </p>
                  {/* <!-- <p>Designed by </p>--> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default LandingPage;
