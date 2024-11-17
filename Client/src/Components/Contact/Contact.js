import React from "react";
// import developerPng from "./images/developer-png.png";
import adoptmedog from "./images/adoptmedog.png";


const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <br></br>
        <h3>Contact us.</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:pawfinds@gmail.com">
          pawfinds@gmail.com
        </a>


        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/pawfinds/">
          @pawfinds
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+923019583959">
          +91 987654321
        </a>
      </div>
      <div className="contactUs-pic">
        <img id="contactdog"src={adoptmedog} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
