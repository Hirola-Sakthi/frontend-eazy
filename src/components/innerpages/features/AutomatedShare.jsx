import React from "react";

import notebookIcon from "/assets/images/common/automated-share-icon-1.png";
import mobileIcon from "/assets/images/common/automated-share-icon-2.png";
import cloudIcon from "/assets/images/common/automated-share-icon-3.png";
import laptopIcon from "/assets/images/common/automated-share-icon-4.png";
import tabletIcon from "/assets/images/common/automated-share-icon-5.png";
import desktopIcon from "/assets/images/common/automated-share-icon-6.png";
import mainImage from "/assets/images/common/automated-share-main-img.webp";

export default function AutomatedShare() {
  const defaultSectionContent = {
    titleHighlight: "Share",
  };
  const sectionContent = defaultSectionContent;
  const features = [
    { icon: notebookIcon, text: "Dropbox" },
    { icon: mobileIcon, text: "Drive" },
    { icon: cloudIcon, text: "Cloud" },
    { icon: laptopIcon, text: "Notebook" },
    { icon: tabletIcon, text: "Workdrive" },
    { icon: desktopIcon, text: "Photos" },
  ];

  return (
    <section className="automated-share-section">
      <div className="automated-share-content-wrap">
        <div className="automated-share-title-group">
          <h2 className="automated-share-title">
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              {sectionContent.titleHighlight}
            </span>{" "}
            and automate
          </h2>
          <p className="automated-share-desc">
            Instantly share your scanned documents with your peers via email,
            iMessage, and other messaging apps. You can also upload them to
            cloud services such as Zoho WorkDrive, One Drive, Google Drive,
            Dropbox, and Notebook.
          </p>
        </div>

        <div className="automated-share-main">
          <img src={mainImage} alt="Automated Share" className="automated-share-main-image" />

          <ul className="automated-share-icon-group">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className={`automated-share-feature-item automated-share-item-${idx + 1}`}
              >
                <img src={feature.icon} alt={feature.text} />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="automated-share-circle">
            <span className="automated-share-circle-1"></span>
            <span className="automated-share-circle-2"></span>
            <span className="automated-share-circle-3"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
