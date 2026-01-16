import React from "react";

export default function OnePlatform() {
      const defaultSectionContent = {
    titleHighlight: "platform",
  };
  const sectionContent = defaultSectionContent;
  return (
    <>
      <section className="one-platform-section">
        <div className="one-platform-content">
            <div className="one-platform-content-container">
          <h2 className="one-platform-title">
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              One {sectionContent.titleHighlight}
            </span>{" "}
           Every <br/>business spend  under control
          </h2>

          <p className="one-platform-desc">
            Gain visibility and control over every spend like never before
          </p>
          <div className="one-platform-button-wrap">
            <button className="one-platform-btn-primary">Signup for free {" "}
              <i className="icon icon-narrow unicon-arrow-right fw-bold" /></button>
            <button className="one-platform-btn-secondary">Request demo</button>
          </div></div>
          <div className="one-platform-dashboard">
            <div className="one-platform-animation left">
              <div className="one-platform-scroll-img one-platform-left-img"></div>
            </div>
            <div className="one-platform-animation right">
              <div className="one-platform-scroll-img one-platform-right-img"></div>
            </div>
            <div className="one-platform-dashboard-image">
              <img
                src="/assets/images/common/one-platform-main-img.webp"
                alt="Dashboard"
              />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
