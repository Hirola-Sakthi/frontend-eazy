import React from "react";
import MainImage1 from "../../../../public/assets/images/common/integration-section-map-1.svg";
import MainImage2 from "../../../../public/assets/images/common/integration-section-map-1.svg";
import SecondRowImg1 from "../../../../public/assets/images/common/second-row-img-1.svg";
import SecondRowImg2 from "../../../../public/assets/images/common/second-row-img-2.svg";
import SecondRowImg3 from "../../../../public/assets/images/common/second-row-img-3.svg";
import SecondRowImg4 from "../../../../public/assets/images/common/second-row-img-4.svg";
import SecondRowImg5 from "../../../../public/assets/images/common/second-row-img-5.svg";

import FirstRowImg1 from "../../../../public/assets/images/common/first-row-img-1.svg";
import FirstRowImg2 from "../../../../public/assets/images/common/first-row-img-2.svg";
import FirstRowImg3 from "../../../../public/assets/images/common/first-row-img-3.svg";
import FirstRowImg4 from "../../../../public/assets/images/common/first-row-img-4.svg";
import FirstRowImg5 from "../../../../public/assets/images/common/first-row-img-5.svg";
import AnimatedIntegrationSVG from "./AnimatedSvg";
import { Link } from "react-router-dom";

export default function IntegrationSection() {
  return (
    <section className="integration-section container">
      <div className="content-section-one integration-col center-col">
        <p className="integration-header">Integrated Solution</p>
        <h2 className="integration-title">
          Connects With Tools <br />
          You Already Use <br />
        </h2>
        <p className="integration-subtitle">
          While you may not need other tools, we play nice with your existing tech stack.
        </p>
        <button className="integration-button">
          View All Integrations
          <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
        </button>
      </div>

      <div className="integration-row">
        <div className="integration-col image-wrapper">
          <div className="svg-wrapper">
            <AnimatedIntegrationSVG />
          </div>

          <img src={FirstRowImg1} className="small-icon first-small1" alt="" />
          <img src={FirstRowImg2} className="small-icon first-small2" alt="" />
          <img src={FirstRowImg3} className="small-icon first-small3" alt="" />
          <img src={FirstRowImg4} className="small-icon first-small4" alt="" />
          <img src={FirstRowImg5} className="small-icon first-small5" alt="" />
        </div>

        <div className="content-section integration-col center-col">
          <p className="integration-header">Integrated Solution</p>
          <h2 className="integration-title">
            Connects With Tools <br />
            You Already Use <br />
          </h2>
          <p className="integration-subtitle">
             While you may not need other tools, we play nice with your existing tech stack.
          </p>
          <Link to={"#"} style={{textDecoration:"none"}}>
          <button className="integration-button">
            View All Integrations
            <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
          </button></Link>
        </div>

        <div className="integration-col image-wrapper">
          <div className="svg-wrapper mirror">
            <AnimatedIntegrationSVG />
          </div>
          <img
            src={SecondRowImg1}
            className="small-icon second-small1"
            alt=""
          />
          <img
            src={SecondRowImg2}
            className="small-icon second-small2"
            alt=""
          />
          <img
            src={SecondRowImg3}
            className="small-icon second-small3"
            alt=""
          />
          <img
            src={SecondRowImg4}
            className="small-icon second-small4"
            alt=""
          />
          <img
            src={SecondRowImg5}
            className="small-icon second-small5"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
