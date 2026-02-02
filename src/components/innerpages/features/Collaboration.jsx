import React from "react";

import SmallImg from "/assets/images/common/collaboration-small-img.svg";
import LargeImg from "/assets/images/common/collaboration-big-img.avif";

export default function Collaboration() {
  const defaultSectionContent = {
    titleHighlight: "Built",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="collaboration-section">
      <div className="collaboration-container">
        <div className="collaboration-row">
          <div className="collaboration-images">
            <img
              src={SmallImg}
              alt="Small visual"
              className="collaboration-img-small"
            />
            <img
              src={LargeImg}
              alt="Large visual"
              className="collaboration-img-large"
            />
          </div>
          <div className="collaboration-content">
            <div className="d-flex align-items-center justify-start collaboration-mini-title">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                  Collaboration
                </span>
              </div>
            </div>
            <h2 className="collaboration-title">
              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                {sectionContent.titleHighlight}
              </span>{" "}
              for seamless teamwork
            </h2>
            <p className="collaboration-description">
              Collaborate effortlessly with powerful tools designed to keep your
              team aligned, productive, and moving fast.
            </p>
            <div className="collaboration-buttons">
              <button className="collaboration-primary-btn">
                Get Started{" "}
                <i className="icon icon-narrow unicon-arrow-right fw-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
