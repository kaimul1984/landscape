import React from "react";
import "./footer.scss";
import { CiLocationOn } from "react-icons/ci";
import { TiArrowForwardOutline } from "react-icons/ti";
import { MdOutlineLocalPhone, MdOutlineLocalPostOffice } from "react-icons/md";
import facebook from "../../assests/images/facebook.png";
import twitter from "../../assests/images/twitter.png";
import linkedin from "../../assests/images/linkedin.png";
import pinterest from "../../assests/images/pinterest.png";
import Button from "../../constant/Button/Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="about-us">
          <h3>about us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,when an unknown printer took.
          </p>
          <div className="icon">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="contacts">
          <h3>contact</h3>
          <div className="location">
            <CiLocationOn />
            <p>
              27 division st,newyork <br /> NY 10003, USA
            </p>
          </div>
          <div className="call">
            <MdOutlineLocalPhone />
            <p>
              +01234567 <br /> +02345678
            </p>
          </div>
          <div className="mail">
            <MdOutlineLocalPostOffice />
            <p>email@gmail.com.au</p>
          </div>
        </div>
        <div className="links">
          <h3>links</h3>
          <div className="list">
            {[
              "home",
              "about",
              "servixes",
              "project",
              "blog",
              "FAQ",
              "contact us",
              "Thank you",
            ].map((item) => (
              <div key={item.id}>
                <TiArrowForwardOutline /> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="newsLetter">
          <h3>newsletter</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,when an unknown printer took.
          </p>
          <div className="input">
            <input type="email" placeholder="Email" />
            <Button name="subscribe" />
          </div>
        </div>
      </div>
      <div className="copyright">
       
          <div className="left">
            <h6>@copyright,2023. all right reserved</h6>
          </div>
              <div className="right">
                  <div>privacy policy</div>
                  <div>sitemap</div>
                  <div>Terms of use</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
