import React from "react";

export function PartnerTypes() {
  const types = [
    { key: "Reseller", desc: "Sell our products to your customers." },
    { key: "Integration", desc: "Build integrations using our APIs." },
    { key: "Consulting", desc: "Implement and customize for clients." },
    { key: "Affiliate", desc: "Refer customers and earn rewards." },
  ];

  return (
    <div id="partner-types" className="partner-types section panel">
      <div className="section-outer panel py-4 md:py-6 xl:py-8">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 text-center mb-4"
              data-anime="onview: -150; targets: >*; translateY: [20, 0]; opacity: [0, 1]; duration: 500;">
              <h2 className="h3 sm:h2 lg:h1 m-0">Partner types</h2>
              <p className="fs-7 sm:fs-6 lg:fs-5 text-opacity-70">Choose the role that best fits your business.</p>
            </div>

            <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-3">
              {types.map((t) => (
                <div key={t.key} className="col">
                  <div className="panel p-4 rounded-1-5 border bg-white/03">
                    <div className="vstack gap-2">
                      <div className="fs-4 fw-bold">{t.key}</div>
                      <div className="fs-6 text-opacity-70">{t.desc}</div>
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
