import React from "react";
import { Check } from "lucide-react";
import Image1 from "/assets/images/common/invest-smarter-main-img.avif";

export default function InvestSmarter() {
  const defaultSectionContent = {
    titleHighlight: "Invest",
  };
  const sectionContent = defaultSectionContent;
  const cards = [
    {
      title: "Real-time data",
      desc: "Get live updates on stocks, crypto, and more.",
    },
    {
      title: "Portfolio tracking",
      desc: "Track and manage your portfolio seamlessly.",
    },
    {
      title: "Custom alerts",
      desc: "Receive notifications on important market changes.",
    },
    {
      title: "Community access",
      desc: "Engage with fellow investors and share insights.",
    },
  ];

  return (
    <section className="invest-smarter-section">
      <div className="invest-smarter-container">
        <div className="invest-smarter-first-content">
          <div className="invest-smarter-top-content">
            <div className="d-flex align-items-center justify-start">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase text-black">
                  Mobile App
                </span>
              </div>
            </div>
            <h2 className="invest-smarter-title">
              <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                {sectionContent.titleHighlight}
              </span>{" "}
              smarter, <br />
              anytime, anywhere
            </h2>

            <p className="invest-smarter-desc">
              Stay connected with your investments using our mobile app. Access
              real-time data, track your portfolio, and get insights from
              anywhere, anytime.
            </p>
          </div>
          <div className="invest-smarter-bottom-content">
            {cards.map((item, index) => (
              <div className="invest-smarter-card-container" key={index}>
                <div className="invest-smarter-card">
                  <div className="invest-smarter-card-header">
                    <Check size={18} />
                    <h4>{item.title}</h4>
                  </div>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="invest-smarter-second-content">
          <div className="invest-smarter-img-container">
            <img
              src={Image1}
              alt="Invest Smarter"
              className="invest-smarter-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
