import React, { useEffect, useState } from "react";
import axios from 'axios'
import baseURL from '../url'

const About = () => {

    const [state , setstate] = useState([])
 
    useEffect(async () => {
        let result = await axios.get("http://localhost/api/getsaboutcrud");
       setstate(result.data);
      }, []);
console.log(state)

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2 class="h1 wow zoomInDown" data-wow-delay="0.1s">
              About
              {/* <!--<span style="color:#a8518a">Brands Impact</span>--> */}
              <img
                src="images/bi-logo.png"
                alt="Brands Impact Logo"
                style={{ verticalAlign: "text-bottom" }}
              />
            </h2>
            <p>We love what we do. We'd love to do it for you!</p>
            <p>
              We are a bunch of young professionals who bring together vast
              experience from the domains of brand management, advertising,
              public relations, event management, media planning, social media
              management, and more! We build upon inspirational ideas and
              deliver compelling brand messages to engage your target audience
              across platforms and mediums.
            </p>
            <p>
              <b>
                10 + Years of Experience, 4 Successful Talk Shows, 100 + Events,
                5000 + Happy Clients
              </b>
            </p>
            <p>
              Brands Impact aims to bridge a need gap in brand consulting
              services with a 360 degree approach from drawing up a strategy to
              its execution, we do it all for the clients we work with. Having
              successfully executed 100 Events, such as,{" "}
              <a
                href="https://internationalqualityawards.com/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                International Quality Awards
              </a>
              ,{" "}
              <a
                href="https://goldengloryawards.com/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                Golden Glory Awards
              </a>
              ,{" "}
              <a
                href="https://pieawards.in/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                Pride of Indian Education Awards (PIE)
              </a>
              ,{" "}
              <a
                href="https://bestdoctorsinindia.in/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                India's Best Doctors Award (IBD)
              </a>
              ,{" "}
              <a
                href="https://rightchoiceawards.com/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                Right Choice Awards (RCA)
              </a>
              ,{" "}
              <a
                href="https://pratigya.info/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                Pratigya (Social Impact Awards)
              </a>
              ,{" "}
              <a
                href="https://success-stories.in/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                India's Most Inspiring Success Stories
              </a>
              ,{" "}
              <a
                href="https://globalpropertyawards.com/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                Global Property Awards (GPA)
              </a>
              ,{" "}
              <a
                href="https://educationexcellenceawards.in/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                {" "}
                Education Excellence Awards
              </a>{" "}
              and four extremely successful Talk Shows{" "}
              <a
                href="https://zameensefalaktak.com/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                Zameen Se Falak Tak
              </a>
              ,{" "}
              <a
                href="https://pratigya.info/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                Pratigya- Stand for A Cause
              </a>
              ,{" "}
              <a
                href="https://safarkamyabika.com/"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                Safar Kamyabi Ka
              </a>{" "}
              and{" "}
              <a
                href="being-candid.html"
                target="_blank"
                style={{ color: "#006b88" }}
              >
                Being Candid
              </a>{" "}
            </p>
            <a href="#contact" class="button violet_atr">
              Contact Us
            </a>
          </div>
          <div class="col-md-4" style={{ paddingTop: "6.5em" }}>
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/-48NnpiWm9A"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
