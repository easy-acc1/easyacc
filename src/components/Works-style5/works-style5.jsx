/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Services
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".financial">Financial Management</span>
              <span data-filter=".consulting">Strategic Consulting</span>
              <span data-filter=".analytics">Performance Analytics</span>
              <span data-filter=".advisory">Advisory Services</span>
            </div>
          </div>

          <div className="gallery full-width">
            {/* Financial Management */}
            <div
              className="col-md-6 items financial wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="cont">
                <span
                  className="icon color-font pe-7s-display1"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Accounting Oversight</h5>
                <p>
                  Precise and transparent financial monitoring. Helping
                  businesses stay compliant effortlessly.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 items financial wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="cont">
                <span
                  className="icon color-font pe-7s-wallet"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Budget Planning</h5>
                <p>
                  Tailored strategies for optimized spending. Achieve financial
                  clarity with structured plans.
                </p>
              </div>
            </div>
            <div className="col-md-6 items financial" data-wow-delay=".4s">
              <div className="cont">
                <span
                  className="icon color-font pe-7s-calculator"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Tax Compliance</h5>
                <p>
                  Streamlined reporting, minimizing tax burdens. Ensuring
                  seamless adherence to legal requirements.
                </p>
              </div>
            </div>

            {/* Strategic Consulting */}
            <div
              className="col-md-6 items consulting wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="cont">
                <span
                  className="icon color-font pe-7s-light"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Feasibility Studies</h5>
                <p>
                  Practical evaluations for informed decisions. Providing
                  insights to minimize risks effectively.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 items consulting wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="cont">
                <span
                  className="icon color-font pe-7s-shield"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Risk Management</h5>
                <p>
                  Proactive strategies for minimizing challenges. Safeguarding
                  your business against uncertainties.
                </p>
              </div>
            </div>
            <div className="col-md-6 items consulting" data-wow-delay=".4s">
              <div className="cont">
                <span
                  className="icon color-font pe-7s-rocket"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Business Development</h5>
                <p>
                  Growth plans aligned with market trends. Supporting long-term
                  organizational success.
                </p>
              </div>
            </div>
            <div className="col-md-6 items consulting" data-wow-delay=".4s">
              <div className="cont">
                <span
                  className="icon color-font pe-7s-tools"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Governance Implementation</h5>
                <p>
                  Strengthening accountability and operational efficiency.
                  Establishing clear frameworks for success.
                </p>
              </div>
            </div>

            {/* Performance Analytics */}
            <div
              className="col-md-6 items analytics wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="cont">
                <span
                  className="icon color-font pe-7s-note"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Financial Reporting</h5>
                <p>
                  Insightful reviews for actionable recommendations. Ensuring
                  accuracy in every financial detail.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 items analytics wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="cont">
                <span
                  className="icon color-font pe-7s-target"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>KPI Tracking</h5>
                <p>
                  Monitoring metrics to drive success. Aligning performance with
                  business objectives.
                </p>
              </div>
            </div>
            <div className="col-md-6 items analytics" data-wow-delay=".4s">
              <div className="cont">
                <span
                  className="icon color-font pe-7s-graph3"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Profitability Analysis</h5>
                <p>
                  Unlocking opportunities for sustained growth. Providing deep
                  insights into revenue patterns.
                </p>
              </div>
            </div>
            <div className="col-md-6 items analytics" data-wow-delay=".4s">
              <div className="cont">
                <span
                  className="icon color-font pe-7s-science"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Operational Auditing</h5>
                <p>
                  Evaluating processes to ensure excellence. Highlighting key
                  areas for operational improvements.
                </p>
              </div>
            </div>

            {/* Advisory Services */}
            <div
              className="col-md-6 items advisory wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="cont">
                <span
                  className="icon color-font pe-7s-users"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Mergers & Acquisitions</h5>
                <p>
                  Smooth transitions with strategic partnerships. Unlocking
                  value through expert guidance.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 items advisory wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="cont">
                <span
                  className="icon color-font pe-7s-helm"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Legal Structuring</h5>
                <p>
                  Aligning business models with regulations. Enabling compliance
                  for sustainable operations.
                </p>
              </div>
            </div>
            <div className="col-md-6 items advisory" data-wow-delay=".4s">
              <div className="cont">
                <span
                  className="icon color-font pe-7s-global"
                  style={{ fontSize: "2.4rem" }}
                ></span>
                <h5>Market Insights</h5>
                <p>
                  Decoding trends for competitive advantage. Empowering informed
                  decision-making processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;
