import React from "react";
import bannerImage from "/assets/images/common/fabric-section-main-img.avif";

export default function FabricSection() {
  const defaultSectionContent = {
    titleHighlight: "Fabric",
  };
  const sectionContent = defaultSectionContent;
  return (
    <>
      <section className="fabric-section">
        <div className="fabric-wrap">
          <div className="fabric-content">
            <h2 className="fabric-title">
              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                {sectionContent.titleHighlight}
              </span>{" "}
              organizes itself.
              <br />
              So you don’t have to.
            </h2>
            <p className="fabric-subtitle">
              Your ideas, notes and files, automatically understood and
              connected.
            </p>
            <div className="fabric-image">
              <img src={bannerImage} alt="Banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
