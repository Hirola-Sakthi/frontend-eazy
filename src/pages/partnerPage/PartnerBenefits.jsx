import { Banknote, GraduationCap, Megaphone, Wrench } from "lucide-react";
import React from "react";

export function PartnerBenefits() {
  const items = [
    { title: "Revenue Share", desc: "Competitive, recurring commissions." },
    { title: "Technical Resources", desc: "API access, sandbox, and docs." },
    { title: "Co-marketing", desc: "Joint campaigns and events." },
    { title: "Training & Certification", desc: "Partner-only training paths." },
    { title: "Training & Certification", desc: "Partner-only training paths." },
    { title: "Training & Certification", desc: "Partner-only training paths." },
    { title: "Training & Certification", desc: "Partner-only training paths." },
    { title: "Training & Certification", desc: "Partner-only training paths." },

  ];

  return (
    <div id="partner-benefits" className="partner-benefits section panel">
      <div className="section-outer panel py-4">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-3 mb-4 text-center"
              data-anime="onview: -200; targets: >*; translateY: [24, 0]; opacity: [0, 1]; duration: 600;">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary" />
                <span className="fs-8 fw-bold text-uppercase text-black">Why partner with us</span>
              </div>
              <h2 className="h3 sm:h2 lg:h1 m-0">Grow revenue and deliver value</h2>
              <p className="fs-7 sm:fs-6 lg:fs-5 text-opacity-70">
                Benefit from predictable margins, strong product-market fit and a committed partner success team.
              </p>
            </div>

            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-3 g-3 col-match"
              data-anime="onview: -100; targets: >*; translateY: [32, 0]; opacity: [0, 1]; duration: 600; delay: anime.stagger(80);">
              {items.map((it, i) => (
                <div key={i}>
                  <div className="features-item vstack justify-between gap-2 p-2 rounded-1-5 border panel bg-white/03 h-100px w-300px">
                    <div className="icon-box w-48px h-48px rounded-1-5 cstack easy-main-gradient">
                      <span className="fs-6 text-white">{i === 0 ? <Banknote color="#fff" /> : i === 1 ? <Wrench  color="#fff" /> : i === 2 ? <Megaphone   color="#fff" /> : i === 3 ? <GraduationCap   color="#fff" /> : i === 4 ? <Banknote   color="#fff" /> : i === 5 ? <Wrench   color="#fff" /> : i === 6 ? <Megaphone   color="#fff" />: <GraduationCap    color="#fff" />}</span>
                    </div>
                    <div>
                      <h3 className="title h5 m-0">{it.title}</h3>
                      <p className="desc fs-7 text-opacity-70">{it.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
