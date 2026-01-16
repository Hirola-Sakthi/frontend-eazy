import React from "react";
// import { FaArrowRight } from "react-icons/fa6";
import MainImgae from "/assets/images/common/bannerbelow-section-main-img.png";
import TextImgae1 from "/assets/images/common/bannerbelow-section-text-icon-1.svg";
import TextImgae2 from "/assets/images/common/bannerbelow-section-text-icon-2.svg";
import { Link } from "react-router-dom";

export default function BannerBelowSection() {
  const defaultSectionContent = {
    titleHighlight: "Automation",
  };
  const sectionContent = defaultSectionContent;

  return (
    <section className="banner-below-section container">
      <div className="banner-below-row">
        <div className="firstcolumn">
          <div className="d-flex align-items-start">
            <div className="cstack gap-1 py-1 px-2 border rounded-pill">
              <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
              <span className="fs-8 fw-bold text-uppercase text-black">
                Trustpilot
              </span>
            </div>
          </div>

          <h2 className="main-title">
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              {sectionContent.titleHighlight}
            </span>{" "}
            your <br /> workflow{" "}
            <img src={TextImgae1} alt="" className="small-img" /> Save
            <br /> Time <img
              src={TextImgae2}
              alt=""
              className="below-img"
            />{" "}
            Effortlessly
          </h2>

          <p className="subtitle">
            No-Code AI-powered automation for businesses of all sizes
          </p>
          <div className="btn-row mb-4">
            <Link to={"#"} style={{textDecoration:"none"}}>
            <button className="primary-btn">
              Get Started
              <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
            </button></Link>

            <span className="outline-btn"><Link to={"#"} style={{textDecoration:"none"}}>See how it works</Link>  </span>
          </div>
          <div className="big-btn-container">
            <Link to={"#"} style={{textDecoration:"none"}}>
            <button className="big-btn d-flex align-items-center gap-2">
              {/* <FaArrowRight className="icon" /> */}
              No credit card required. Start for free.
              <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
            </button></Link>
          </div>
        </div>

        <div className="secondcolumn">
          <img src={MainImgae} alt="Banner" />
        </div>
      </div>
    </section>
  );
}
