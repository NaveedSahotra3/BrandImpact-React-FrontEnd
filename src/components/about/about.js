import React, { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../url";
import parser from "html-react-parser";
const About = (props) => {
 console.log(props.data)

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2 class="h1 wow zoomInDown" style={{fontSize:'6.5rem'}} >
              About
              {/* <!--<span style="color:#a8518a">Brands Impact</span>--> */}
              <img
                src="images/bi-logo.png"
                alt="Brands Impact Logo"
                style={{ verticalAlign: "text-bottom" , marginLeft:'18px' }}
              />
            </h2>
            {props.data &&
              props.data.map((item , key) => {
                return <p key={key}>{parser(item.description)}</p>;
              })}

           
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

          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
