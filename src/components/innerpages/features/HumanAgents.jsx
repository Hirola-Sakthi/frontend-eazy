import React from "react";
import LeftImage from "/assets/images/common/human-agents-img-1.svg";
import RightImage from "/assets/images/common/human-agents-img-2.svg";
import CenterImage from "/assets/images/common/theEazy/footer-main-logo.svg";


export default function HumanAgents() {
  const defaultSectionContent = {
    titleHighlight: "Knowledge",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="human-agents-section">
      <img
        src={RightImage}
        alt="Left Agent"
        className="human-agents-image human-agents-left-image"
      />

      <div className="human-agents-content">
          <img
    src={CenterImage}
    alt="Center Icon"
    className="human-agents-center-image"
  />
        <h2 className="human-agents-title">
          <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
            {sectionContent.titleHighlight}
          </span>{" "}
          and compliance for humans and agents
          <br />
        </h2>

        <p className="human-agents-description">
          Keep employees and AI agents aligned with Basewell’s <br />
          learning platform and compliance SDK
        </p>
        <div className="human-agents-buttons">
          <button className="human-agents-btn-primary">
            Basewell is winding down
          </button>
          <button className="human-agents-btn-outline">
            Get Started{" "}
            <i className="icon icon-narrow unicon-arrow-right fw-bold" />
          </button>
        </div>
      </div>
      <img
        src={LeftImage}
        alt="Right Agent"
        className="human-agents-image human-agents-right-image"
      />
    </section>
  );
}
