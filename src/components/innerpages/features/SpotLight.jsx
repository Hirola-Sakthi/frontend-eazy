import React, { useEffect, useRef } from "react";
import bgImg from "/assets/images/common/spot-light-bg-img.png";

export default function SpotLight() {
  const sectionRef = useRef(null);
  const leftInnerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftInnerRef.current;

    const headerOffset = 120;
    const minWidth = 1440;
    const bottomGap = 120;

    const resetStyles = () => {
      left.style.position = "relative";
      left.style.top = "0";
      left.style.width = "auto";
    };

    const onScroll = () => {
      if (window.innerWidth < minWidth) {
        resetStyles();
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const leftHeight = left.offsetHeight;
      const sectionHeight = section.offsetHeight;
      if (
        sectionRect.top <= headerOffset &&
        sectionRect.bottom > leftHeight + headerOffset + bottomGap
      ) {
        left.style.position = "fixed";
        left.style.top = `${headerOffset}px`;
        left.style.width = `${left.parentElement.offsetWidth}px`;
      } else if (sectionRect.bottom <= leftHeight + headerOffset + bottomGap) {
        left.style.position = "absolute";
        left.style.top = `${sectionHeight - leftHeight - bottomGap}px`;
      } else {
        resetStyles();
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const cardData = [
    {
      title: "GST compliance",
      desc: "Generate e-invoices, e-Way bills, and delivery challans. Calculate liabilities automatically, and file tax returns directly.",
      cardImg: "/assets/images/common/spot-light-card-img-1.png",
    },
    {
      title: "Connected banking",
      desc: "Simplify online payments. Fetch bank feeds, categorize entries automatically, and reconcile them effortlessly.",
      cardImg: "/assets/images/common/spot-light-card-img-3.png",
    },
    {
      title: "Sell globally",
      desc: "Manage foreign transactions with our multi-currency feature. Apply exchange rates automatically or manually.",
      cardImg: "/assets/images/common/spot-light-card-img-5.png",
    },
    {
      title: "Collaboration",
      desc: "Work as a team, assign roles, permissions, and use customer and vendor portals for transparent, secure communication.",
      cardImg: "/assets/images/common/spot-light-card-img-7.png",
    },
    {
      title: "Accounting Across Devices",
      desc: "Whether you’re on the web, smartphone or desktop app, promptly send quotes right after meetings, track business expenses, log time, and view reports!",
      cardImg: "/assets/images/common/spot-light-card-img-2.png",
    },
    {
      title: "Automation",
      desc: "Trigger emails or notifications for reminders or alerts. Set recurring actions, schedules, and field updates.",
      cardImg: "/assets/images/common/spot-light-card-img-4.png",
    },
    {
      title: "Customization",
      desc: "Customize Zoho Books to suit your business with custom templates and fields. Get custom reports, too!",
      cardImg: "/assets/images/common/spot-light-card-img-6.png",
    },
  ];

  return (
    <section
      className="spotlight-section"
      ref={sectionRef}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="spotlight-container">
        <div className="spotlight-left">
          <div className="spotlight-left-inner" ref={leftInnerRef}>
            <p className="spotlight-subtitle">SpotLight</p>
            <h2 className="spotlight-title">
              Engineered to <br />
              Unlock Business <br />
              Growth
            </h2>
          </div>
        </div>

        <div className="spotlight-right">
          {cardData.map((item, index) => (
            <div className="spotlight-card" key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <img src={item.cardImg} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
