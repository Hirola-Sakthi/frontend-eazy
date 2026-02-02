import React from "react";

const screens = [
  {
    id: 1,
    title: "Login Screen",
    img: "/public/assets/images/common/marquee-pattern-img-1.webp",
  },
  {
    id: 2,
    title: "Dashboard",
    img: "/public/assets/images/common/marquee-pattern-img-2.webp",
  },
  {
    id: 3,
    title: "Analytics",
    img: "/public/assets/images/common/marquee-pattern-img-3.webp",
  },
  {
    id: 4,
    title: "Profile",
    img: "/public/assets/images/common/marquee-pattern-img-4.webp",
  },
  {
    id: 5,
    title: "Settings",
    img: "/public/assets/images/common/marquee-pattern-img-5.webp",
  },
  {
    id: 6,
    title: "Billing",
    img: "/public/assets/images/common/marquee-pattern-img-6.webp",
  },
  {
    id: 7,
    title: "Messages",
    img: "/public/assets/images/common/marquee-pattern-img-7.webp",
  },
  {
    id: 8,
    title: "Notifications",
    img: "/public/assets/images/common/marquee-pattern-img-8.webp",
  },
  {
    id: 9,
    title: "Reports",
    img: "/public/assets/images/common/marquee-pattern-img-9.webp",
  },
  {
    id: 10,
    title: "Integrations",
    img: "/public/assets/images/common/marquee-pattern-img-10.png",
  },
];

export default function MarqueePattern() {
  const defaultSectionContent = {
    titleHighlight: "Find design",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="marquee-pattern">
      <div className="marquee-pattern-container">
        <div className="marquee-pattern-content">
          <h2 className="finance-title">
            <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              {sectionContent.titleHighlight}
            </span>{" "}
            patterns
            <br />
            in seconds
          </h2>
          <p>
            At Finmap, we believe managing money should be simple, smart, and
            stress-free. That’s why we built an intuitive finance app that helps
            people take control of their spending, savings, and financial goals
            all in one place.
          </p>
        </div>
        <div className="marquee-pattern-scroll">
          <div className="marquee-track">
            {[...screens, ...screens].map((item, index) => (
              <div className="screen-card" key={index}>
                <img src={item.img} alt={item.title} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
