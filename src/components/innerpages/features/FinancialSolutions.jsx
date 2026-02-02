import React from "react";
import SecondImage from "/assets/images/common/financial-solution-main-img.webp";

export default function FinancialSolution() {
  const defaultSectionContent = {
    titleHighlight: "Open",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="financial-solution-section">
      <div className="financial-solution-container">
        <div className="financial-solution-row">
          <div className="financial-solution-second-column financial-solution-dot-grid">
            <img
              src={SecondImage}
              alt="Privacy Illustration"
              className="financial-solution-image"
            />
          </div>
          <div className="financial-solution-first-column">
            <div className="d-flex align-items-center financial-solution-minititle">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                   financial solutions
                </span>
              </div>
            </div>
            <h2 className="financial-solution-title">
              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                {sectionContent.titleHighlight}
              </span>{" "}
              a world of financial solutions
              <br />
            </h2>

            <p className="financial-solution-subtitle">
              Connect to the Plaid Network to create fast, safe, and smart
              financial experiences.
            </p>

            <div className="financial-solution-buttons">
              <button className="financial-solution-btn-primary">
                Talk with our team
              </button>
              <button className="financial-solution-btn-outline">
                Start building{" "}
                <i className="icon icon-narrow unicon-arrow-right fw-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
