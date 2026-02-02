import React from "react";

import Image1 from "/assets/images/common/first-row-img-1.svg";
import Image2 from "/assets/images/common/first-row-img-2.svg";
import Image3 from "/assets/images/common/first-row-img-3.svg";
import Image4 from "/assets/images/common/first-row-img-4.svg";
import Image5 from "/assets/images/common/first-row-img-5.svg";
import Image6 from "/assets/images/common/second-row-img-1.svg";
import Image7 from "/assets/images/common/second-row-img-2.svg";
import Image8 from "/assets/images/common/second-row-img-3.svg";
import Image9 from "/assets/images/common/second-row-img-4.svg";
import Image10 from "/assets/images/common/second-row-img-5.svg";
import Image11 from "/assets/images/common/first-row-img-1.svg";
import Image12 from "/assets/images/common/first-row-img-2.svg";
import Image13 from "/assets/images/common/first-row-img-3.svg";
import Image14 from "/assets/images/common/first-row-img-4.svg";
import Image15 from "/assets/images/common/first-row-img-5.svg";
import Image16 from "/assets/images/common/second-row-img-1.svg";
import Image17 from "/assets/images/common/second-row-img-2.svg";
import Image18 from "/assets/images/common/second-row-img-3.svg";
import Image19 from "/assets/images/common/second-row-img-4.svg";



export default function MeetingIntegration() {
  const defaultSectionContent = {
    titleHighlight: "Yes,",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="meeting-integration-section">
      <div className="meeting-integration-container">
        <div className="meeting-integration-column-first">
          <div className="meeting-integration-icons-grid">
            <div className="meeting-integration-first-set">
              <div className="meeting-integration-image-1">
                <img src={Image1} alt="" />
              </div>

              <div className="meeting-integration-image-2">
                <img src={Image2} alt="" />
              </div>
            </div>

            <div className="meeting-integration-second-set">
              <div className="meeting-integration-image-1">
                <img src={Image3} alt="" />
              </div>

              <div className="meeting-integration-image-2">
                <img src={Image4} alt="" />
              </div>
              <div className="meeting-integration-image-3">
                <img src={Image5} alt="" />
              </div>
            </div>

            <div className="meeting-integration-third-set">
              <div className="meeting-integration-image-1">
                <img src={Image6} alt="" />
              </div>

              <div className="meeting-integration-image-2">
                <img src={Image7} alt="" />
              </div>
              <div className="meeting-integration-image-3">
                <img src={Image8} alt="" />
              </div>
            </div>

            <div className="meeting-integration-fourth-set">
              <div className="meeting-integration-image-1">
                <img src={Image9} alt="" />
              </div>

              <div className="meeting-integration-image-2">
                <img src={Image10} alt="" />
              </div>
              <div className="meeting-integration-image-3">
                <img src={Image11} alt="" />
              </div>
            </div>

            <div className="meeting-integration-fifth-set">
              <div className="meeting-integration-image-1">
                <img src={Image12} alt="" />
              </div>

              <div className="meeting-integration-image-2">
                <img src={Image13} alt="" />
              </div>
              <div className="meeting-integration-image-3">
                <img src={Image14} alt="" />
              </div>
            </div>

            <div className="meeting-integration-sixth-set">
              <div className="meeting-integration-image-1">
                <img src={Image15} alt="" />
              </div>

              <div className="meeting-integration-image-2">
                <img src={Image16} alt="" />
              </div>
              <div className="meeting-integration-image-3">
                <img src={Image17} alt="" />
              </div>
            </div>

            <div className="meeting-integration-seventh-set">
              <div className="meeting-integration-image-1">
                <img src={Image18} alt="" />
              </div>

              <div className="meeting-integration-image-2">
                <img src={Image19} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="meeting-integration-column-second">
          <div className="meeting-integration-content">
            <h2 className="meeting-integration-title">
              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                {sectionContent.titleHighlight}
              </span>{" "}
              Fellow syncs with that
            </h2>
            <p className="meeting-integration-subtitle">
              With over 50 integrations with tools you’re already using, Fellow
              connects your meetings to the rest of your workflow so everything
              is always up-to-date.
            </p>

            <p className="meeting-integration-subtitle">
              Fellow integrates with Glean, Salesforce, HubSpot, Monday, Asana,
              ClickUp, Jira, Linear, Notion, Confluence, Slack, Zapier, and
              more.
            </p>
            <div className="meeting-integration-buttons">
              <button className="meeting-integration-primary-btn">
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
