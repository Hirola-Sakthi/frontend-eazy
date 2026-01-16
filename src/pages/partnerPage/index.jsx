import React, { useEffect, useState, useRef } from "react";
import Header4 from "@/components/headers/Header4";
import Footer1 from "@/components/footers/Footer1";
import Cta2 from "@/components/homes/home-4/Cta2";
import { PartnerHero } from "./PartnerHero";
import { PartnerBenefits } from "./PartnerBenefits";
import { PartnerTypes } from "./PartnerTypes";
// import { PartnerProcess } from "./PartnerProcess";
import { PartnerForm } from "./PartnerForm";
import { PartnerFAQ } from "./PartnerFAQ";
import PartnerFormNew from "./PartnerFormNew";
// import PartnerFeedback from "./PartnerFeedback";

/* -------------------- PartnerPage (root) -------------------- */
export default function PartnerPage() {
  const formRef = useRef(null);
  function openForm() {
    // scroll to form
    const el = document.getElementById("partner-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <>
      <Header4 />
      <div className="partner-page">
        <PartnerHero onApplyClick={openForm} />
        <PartnerBenefits />
        <PartnerTypes />
        {/* <PartnerProcess /> */}
        {/* <PartnerForm ref={formRef} /> */}
        {/* <PartnerFeedback /> */}
        <PartnerFormNew ref={formRef} />
        <PartnerFAQ />
        <Cta2 />
      </div>
      <Footer1 />
    </>
  );
}
