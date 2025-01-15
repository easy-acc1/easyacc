import React from "react";
import Link from "next/link";

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s2.jpg)" }}
          >
            <h6 className="numb">01</h6>
            <h5>Initial Consultation</h5>
            <p>
              Understand your needs, assess challenges, and define goals for a
              tailored financial strategy.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s1.jpg)" }}
          >
            <h6 className="numb">02</h6>
            <h5>Planning & Strategy</h5>
            <p>
              Craft a customized roadmap to streamline processes and optimize
              financial efficiency.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s3.jpg)" }}
          >
            <h6 className="numb">03</h6>
            <h5>System Implementation</h5>
            <p>
              Integrate innovative tools and frameworks to enhance financial
              management and reporting.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s4.jpg)" }}
          >
            <h6 className="numb">04</h6>
            <h5>Performance Analysis</h5>
            <p>
              Regularly review progress, address challenges, and refine
              strategies to achieve results.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s5.jpg)" }}
          >
            <h6 className="numb">05</h6>
            <h5>Sustainable Growth</h5>
            <p>
              Empower your business with tools and insights for long-term
              success and financial stability.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
