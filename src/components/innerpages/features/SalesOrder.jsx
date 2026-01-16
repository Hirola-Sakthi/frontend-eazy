import React from "react";
import salesImg from "../../../../public/assets/images/common/sales-order-main-img.png";


export default function SalesOrder() {
      const defaultSectionContent = {
    titleHighlight: "Faster",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="sales-order-section">
      <div className="sales-order-container">
        <div className="sales-order-row">

          {/* Left Column */}
          <div className="sales-order-content">
            <h2> <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
            {sectionContent.titleHighlight}
          </span>{" "}sales orders, faster cash flow</h2>
            <p>
              Streamline your sales process with our powerful sales order
              management system. Track orders, manage customers, and improve
              efficiency with ease.
            </p>

            <div className="sales-order-btn-group">
              <button className="sales-order-btn sales-order-btn-primary">
                Get Started
                <i className="icon icon-narrow unicon-arrow-right fw-bold" />
              </button>
            <span className="sales-order-outline-btn">See how it works</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="sales-order-image">
            <img src={salesImg} alt="Sales Order" />
          </div>

        </div>
      </div>
    </section>
  );
}
