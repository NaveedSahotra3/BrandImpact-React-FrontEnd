import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = (props) => {
  console.log(props.data)
  // const [state, setstate] = useState(false)
  // useEffect(async () => {

  // }, []);
  // console.log(state);

  return (
    <div>
      <div class="portfolio-gallery">
       
      {
        props.data.length > 0 && props.data.map((item,index)=>(
          <div class="item filter-graphic" key={index}>
          <img
            src="images/demo-images/champions-of-change-awards-by-brands-impact-2.jpg"
            // src={item.image}
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
              {/* <!--<a href="http://internationalqualityawards.com" target="_blank">InternationalQualityAwards.com</a>--> */}
            </div>
          </div>
        </div>
        ))
      }
        
        {/* <div class="item filter-graphic">
          <img
            src="images/demo-images/champions-of-change-awards-by-brands-impact-2.jpg"
            alt="Brands Impact, champion of change 2019, COC Awards, Award, Awards Pranab Mukherjee, Shilpa Shetty"
          />
          <div class="caption">
            <h4 style={{ fontSize: "3.0rem" }}>
              Champions of Change Awards by Brands Impact - 2
            </h4>
            <a
              href="images/demo-images/champions-of-change-awards-by-brands-impact-2.jpg"
              alt="Brands Impact, champion of change 2019, COC Awards, Awards Pranab Mukherjee, Shilpa Shetty"
              class="zoom lightbox"
            ></a>
            <div class="tags">
              <!--<a href="http://internationalqualityawards.com" target="_blank">InternationalQualityAwards.com</a>-->
            </div>
          </div>
        </div> */}
     
       
      

     
      </div>
    </div>
  );
};

export default Gallery;
