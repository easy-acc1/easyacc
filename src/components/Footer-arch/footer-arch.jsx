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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.368449637666!2d39.6481875!3d24.4726875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfaba0aaff93%3A0x2bfcf4f2bcf7a32d!2z2LTYsdmD2Kkg2KfZitiy2Yog2KPZg9mI2YbYqtmG2KwgLSDYp9mE2YXYr9mK2YbYqSBFYXN5IEFjY291bnRpbmc!5e0!3m2!1sen!2ssa!4v1737044359094!5m2!1sen!2ssa"
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
                  href="https://www.instagram.com/easyaccounting_ksa/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/easy-accounting777/"
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
