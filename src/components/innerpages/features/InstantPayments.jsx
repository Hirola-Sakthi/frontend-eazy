import React from "react";
import Image1 from "/assets/images/common/build-section-image-1.png";
import Image2 from "/assets/images/common/build-section-image-2.png";
import Image3 from "/assets/images/common/build-section-image-3.png";
import Image4 from "/assets/images/common/build-section-image-4.png";
import Image5 from "/assets/images/common/build-section-image-5.png";
import Image6 from "/assets/images/common/build-section-image-6.png";
import Image7 from "/assets/images/common/build-section-image-7.png";
import Image8 from "/assets/images/common/build-section-image-8.png";
import Image9 from "/assets/images/common/build-section-image-9.png";
import MainImage from "/assets/images/common/build-section-main-img.svg";

export default function InstantPayments() {
  const defaultSectionContent = {
    titleHighlight: "Build",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="instant-payment-section">
      <div className="instant-payment-container">
        <div className="instant-payment-row">
          <div className="instant-payment-left">
            <div className="d-flex align-items-center">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                  instant-payment Faster
                </span>
              </div>
            </div>
            <h2 className="instant-payment-title">
              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                {sectionContent.titleHighlight}
              </span>{" "}
              scalable products
              with confidence
            </h2>

            <p className="instant-payment-text">
              Our advanced technology and secure systems provide a safe and reliable way to transfer funds, allowing you to benefit from reduced processing times and improved efficiency.
            </p>
            <button className="instant-payment-btn">
              Get Started{" "}
              <i className="icon icon-narrow unicon-arrow-right fw-bold" />
            </button>
          </div>
          <div className="instant-payment-right">
            <img
              src={MainImage}
              alt="Main"
              className="instant-payment-main-image"
            />
            <img src={Image1} className="instant-payment-floating-img instant-payment-img-1" />
            <img src={Image2} className="instant-payment-floating-img instant-payment-img-2" />
            <img src={Image3} className="instant-payment-floating-img instant-payment-img-3" />
            <img src={Image4} className="instant-payment-floating-img instant-payment-img-4" />
            <img src={Image5} className="instant-payment-floating-img instant-payment-img-5" />
            <img src={Image6} className="instant-payment-floating-img instant-payment-img-6" />
            <img src={Image7} className="instant-payment-floating-img instant-payment-img-7" />
            <img src={Image8} className="instant-payment-floating-img instant-payment-img-8" />
            <img src={Image9} className="instant-payment-floating-img instant-payment-img-9" />
          </div>
        </div>
      </div>
    </section>
  );
}
