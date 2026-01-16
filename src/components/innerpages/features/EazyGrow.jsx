import React from "react";

export default function EazyGrow() {
  const defaultSectionContent = {
    titleHighlight: "Grow",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="eazy-grow-section">
      <h2 className="eazy-grow-title">
        <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
          {sectionContent.titleHighlight}
        </span>{" "}<br/>
        With Eazy
      </h2>
      <span className="eazy-grow-arrow"></span>

      <div className="eazy-grow-container">
        <div className="eazy-grow-box eazy-grow-box-1 animate-box">
          <h3 className="eazy-grow-percent">27%</h3>
          <h4 className="eazy-grow-box-title">Increased productivity</h4>
          <p className="eazy-grow-box-desc">
            Customers report faster revenue increase within months.
          </p>
          <div
            className="eazy-icn increase-eazy-icn"
          />
        </div>
        <div className="eazy-grow-box eazy-grow-box-2 animate-box delay-1">
          <h3 className="eazy-grow-percent">50%</h3>
          <h4 className="eazy-grow-box-title">Faster implementation</h4>
          <p className="eazy-grow-box-desc">
            Teams close deals quicker with automation.
          </p>
          <div
            className="eazy-icn implemt-eazy-icn"
          />
        </div>

        <div className="eazy-grow-box eazy-grow-box-3 animate-box delay-2">
          <h3 className="eazy-grow-percent">71%</h3>
          <h4 className="eazy-grow-box-title">Save on licensing fees</h4>
          <p className="eazy-grow-box-desc">
            Better engagement and long-term relationships.
          </p>
          <div
            className=" eazy-third-image licse-eazy-icn"
          />
        </div>
      </div>

      <p className="eazy-grow-text">
        Growth metrics reported by our customers in an internal survey.
      </p>
    </section>
  );
}
