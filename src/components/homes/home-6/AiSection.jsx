import React from "react";
import AIAnimatedSVG from "./AIAnimatedSvg";

export default function AiSection() {
  return (
    <section className="aisection-section container">
      <div className="content-section-one aisection-col center-col">
        <p className="aisection-header">HEY, I AM ZUNO</p>
        <h2 className="aisection-title">Intelligence Built Into Everything</h2>
        <p className="aisection-subtitle">Our AI doesn't just show you what happened — it tells you what's coming and what to do about it.</p>
        <img className="zuno-image" src="/assets/images/zuno/zuno-confident.png" alt="zuno" />
      </div>

      <div className="aisection-row">
        <div className="aisection-col image-wrapper">
          <div className="svg-wrapper">
            <AIAnimatedSVG />
          </div>

          <p className="small-icon first-small1">What if Scenarios</p>
          <p className="small-icon first-small2">Geographic Intelligence</p>
          <p className="small-icon first-small3">Global Intelligence</p>
          <p className="small-icon first-small4">Voice Assistance</p>
          <p className="small-icon first-small5">Compare Periods</p>
          <p className="small-icon first-small6">Contacts Summary</p>
        </div>

        <div className="content-section aisection-col center-col">
          <p className="aisection-header">
            <strong className="fs-4">ZUNO AI</strong>
          </p>
          <h2 className="aisection-title">Intelligence Built Into Everything</h2>
          <p className="aisection-subtitle">Our AI doesn't just show you what happened — it tells you what's coming and what to do about it.</p>
          <img className="zuno-image" src="/assets/images/zuno/zuno-confident.png" alt="zuno" />
        </div>

        <div className="aisection-col image-wrapper">
          <div className="svg-wrapper mirror">
            <AIAnimatedSVG />
          </div>
          <p className="small-icon second-small1">Sales Forecast</p>
          <p className="small-icon second-small2">Inventory Forecast</p>
          <p className="small-icon second-small3">Performance Insights</p>
          <p className="small-icon second-small4">Customer Portfolio</p>
          <p className="small-icon second-small5">Lead Summary</p>
          <p className="small-icon second-small6">Calling Script</p>
        </div>
      </div>
    </section>
  );
}
