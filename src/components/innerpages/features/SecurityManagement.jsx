import React from "react";
import {LockKeyholeOpen, RectangleEllipsis, Contact, SearchCheck, FingerprintPattern, FolderLock } from "lucide-react";


export default function SecurityManagement() {
          const defaultSectionContent = {
    titleHighlight: "Security",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="security-management-section">
      <div className="security-management-container">

        <div className="security-management-left">
          <div className="security-bg-item item-1">
            <span className="security-bg-icon bg-cirle-1 icon-blue">
              <LockKeyholeOpen  />
            </span>
            <p>Adaptive single sign-on</p>
          </div>

          <div className="security-bg-item item-2">
            <span className="security-bg-icon bg-cirle-2 icon-green">
              <RectangleEllipsis  />
            </span>
            <p>Password<br/> management</p>
          </div>

          <div className="security-bg-item item-3">
            <span className="security-bg-icon bg-cirle-3 icon-pink">
              <Contact  />
            </span>
            <p>Identity and access management</p>
          </div>
        </div>

        <div className="security-management-center">
          <h2>
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
            {sectionContent.titleHighlight}
          </span>{" "} and <br />
            IT Management
          </h2>

          <p>
            Streamline IT and enterprise service operations with a complete
            toolkit—from cloud access management to endpoint security.
          </p>

          <button className="security-management-btn">
            Learn More
            <i className="icon icon-narrow unicon-arrow-right fw-bold" />
          </button>
        </div>

        <div className="security-management-right">
          <div className="security-bg-item item-4">
            <span className="security-bg-icon bg-cirle-4 icon-orange">
              <SearchCheck  />
            </span>
            <p>Endpoint management</p>
          </div>

          <div className="security-bg-item item-5">
            <span className="security-bg-icon bg-cirle-5 icon-yellow">
              <FingerprintPattern />
            </span>
            <p>Multi-factor <br/>authentication</p>
          </div>

          <div className="security-bg-item item-6">
            <span className="security-bg-icon bg-cirle-6 icon-sky">
              <FolderLock  />
            </span>
            <p>Mobile device management</p>
          </div>
        </div>

      </div>
    </section>
  );
}
