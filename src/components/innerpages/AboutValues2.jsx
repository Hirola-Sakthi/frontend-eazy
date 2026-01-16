// components/innerpages/AboutValues.jsx
import React from 'react';
// import './AboutValues.css';

export default function AboutValues2() {
  const values = [
    { title: "Statutory Compliance", desc: "EPF, ESI, PT, TDS, and GST baked in.", icon: "🇮🇳" },
    { title: "Native Communication", desc: "WhatsApp campaigns & UPI payments native to India.", icon: "💬" },
    { title: "Zuno AI", desc: "Predict problems before they happen.", icon: "🐧" }
  ];

  return (
    <section className="values-section py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">What We Believe</h2>
            <div className="value-items mt-8 space-y-6">
              {values.map((v, i) => (
                <div key={i} className="value-item flex gap-4">
                  <div className="icon-box">{v.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl">{v.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ai-visual-container">
             {/* This is where you'd place the Penguin/Zuno AI illustration */}
             <div className="ai-character-card">
                <div className="floating-tag left-1">Sales Forecast</div>
                <div className="floating-tag right-1">Inventory Forecast</div>
                <img src="/assets/images/zuno/zuno-confident.png" alt="Zuno AI" className="mx-auto w-64" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default AboutValues2;