import React from "react";
import rightImg from "/assets/images/common/finance-management-image-1.png";

export default function FinanceManagement() {
  const defaultSectionContent = {
    titleHighlight: "Manage",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="finance-management-section">
      <div className="finance-management-container">
        <div className="finance-management-wraper">
          <div className="finance-management-left">
            <div className="finance-management-first-content">
              <h2 className="finance-title">
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {defaultSectionContent.titleHighlight}
                </span>{" "}
                your finance better than ever with Finmap
              </h2>
              <p className="finance-description">
                At Finmap, we believe managing money should be simple, smart,
                and stress-free. That’s why we built an intuitive finance app
                that helps people take control of their spending, savings, and
                financial goals all in one place.
              </p>
              <button className="finance-management-button">
                About Us
                <i className="icon icon-narrow unicon-arrow-right fw-bold" />
              </button>
            </div>
            <div className="finance-management-second-content">
              <div className="finance-management-percentage">
                100%<span> User Satisfaction</span>
              </div>
              <p>
                Finmap is built on trust and proven results, <br />
                with a strong focus on customer satisfaction.
              </p>
            </div>
          </div>

          <div className="finance-management-image">
            <img src={rightImg} alt="Finance illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}
