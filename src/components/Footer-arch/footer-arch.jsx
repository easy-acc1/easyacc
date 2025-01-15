/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const FooterArch = () => {
  return (
    <footer className="sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>Easy Account, Riyadh, Jeddah, Medina</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>contact@easyacc.sa</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+966 54 125 0389</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Visit Us</h5>
              </div>
              <div
                className="map-container"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.9683489151614!2d46.67529531500036!3d24.71355198411248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038476f60b5d%3A0x8804d0d89fd9e2b3!2sEasy%20Accounting%20Location!5e0!3m2!1sen!2ssa!4v1673306313045!5m2!1sen!2ssa"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://iwtsp.com/966541250389" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://x.com/easyaccksa" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/easyaccoksa/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/easyaccksa/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>© 2025, Easy Accounting. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArch;
