import { BoomBox } from "lucide-react";
import React from "react";

import Image1 from "/assets/images/common/smarter-decision-float-img-1.png";
import Image2 from "/assets/images/common/smarter-decision-float-img-2.png";
import Image3 from "/assets/images/common/smarter-decision-float-img-3.png";
import Image4 from "/assets/images/common/smarter-decision-float-img-4.png";


export default function SmartDecision() {
  const defaultSectionContent = {
    titleHighlight: "Make",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="smarter-decision-section">
      <div className="smarter-decision-bg-images">
        <img
          src={Image1}
          className="smarter-decision-float-img smarter-decision-img-1"
          alt=""
        />
        <img
          src={Image2}
          className="smarter-decision-float-img smarter-decision-img-2"
          alt=""
        />
        <img
          src={Image3}
          className="smarter-decision-float-img smarter-decision-img-3"
          alt=""
        />
        <img
          src={Image4}
          className="smarter-decision-float-img smarter-decision-img-4"
          alt=""
        />
      </div>
      <div className="smarter-decision-container">
        <div className="smarter-decision-trusted">Trusted by 1000+ People</div>

        <h2 className="smarter-decision-title">
          <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
            {sectionContent.titleHighlight}
          </span>{" "}
          Smarter
          <br /> Decisions Faster
        </h2>

        <p className="smarter-decision-description">
          Empower your business with data-driven insights,
          <br /> secure systems, and scalable solutions designed for growth.
        </p>

        <button className="smarter-decision-button">
          Get Started For Free
          <i className="icon icon-narrow unicon-arrow-right fw-bold" />
        </button>

        <div className="smarter-decision-bottom">
          <div className="smarter-decision-bottom-item">
            <span className="smarter-decision-bottom-icon">
              <BoomBox />
            </span>
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
