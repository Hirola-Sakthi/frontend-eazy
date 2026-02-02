import React from "react";
import SecondImage from "/assets/images/common/membership-main-image.avif";

export default function Membership(){

   const defaultSectionContent = {
    titleHighlight: "Make ",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="membership-section">
      <div className="membership-container">
        <div className="membership-row">
                      <div className="membership-second-column">
            <img
              src={SecondImage}
              alt="Privacy Illustration"
              className="membership-image"
            />
          </div>
          <div className="membership-first-column">
            <div className="d-flex align-items-center membership-minititle">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                 Membership
                </span>
              </div>
            </div>
            <h2 className="membership-title">
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              {sectionContent.titleHighlight}
            </span>{" "}
          a powerful membership site.
          </h2>

            <p className="membership-subtitle">
              Trust Keith guides you every step of the way, ensuring compliance through a dedicated human expert and a smart, intuitive platform designed to support you long term.
            </p>

            <div className="membership-buttons">
              <button className="membership-btn-primary">
                Learn More <i className="icon icon-narrow unicon-arrow-right fw-bold" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
    )
}