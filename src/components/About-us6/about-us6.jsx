import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section id="about" className="about-ar section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="img">
              <div
                className="bg-img bg-fixed hero-bg"
                style={{ backgroundImage: "url(/img/arch/o-hero.jpg)" }}
              ></div>
              <div className="exp valign text-center">
                <div className="full-width">
                  <h2
                    className="bg-img bg-fixed"
                    style={{ backgroundImage: "url(/img/arch/o-hero.jpg)" }}
                  >
                    10
                  </h2>
                  <p>Years Of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 valign">
            <div className="content">
              <h6 className="sub-title main-color ls10 text-u">About Us</h6>
              <h3>Experts in Financial Solutions and Consulting</h3>
              <p>
                We specialize in delivering top-tier financial and accounting
                solutions that empower businesses to grow and succeed. At Easy
                Accounting, we blend innovation with precision, offering
                customized services tailored to all your needs.
              </p>

              <Link href={``}>
                <a className="butn bord mt-30">
                  <span>About Us</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
