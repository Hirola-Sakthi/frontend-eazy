import React from "react";


export default function ContactMapSection() {
  return (
    <section className="contact-map-section">
      <div className="contact-map-images">
        <img
          src="/assets/images/common/contact-section-map.webp"
          alt="Contact Map"
        />

        <div className="location-overlay loc-1">
          <img src="/assets/images/common/contact-map-blue-location.svg" alt="Location" />
        </div>

        <div className="location-overlay loc-2">
          <img src="/assets/images/common/contact-map-red-location.svg" alt="Location" />
        </div>

        <div className="location-overlay loc-3">
          <img src="/assets/images/common/contact-map-blue-location.svg" alt="Location" />
        </div>


        <div className="icon-img-overlay small-icon-1">
          <img src="/assets/images/common/saudi-arabia-icon.webp" alt="Location" />
        </div>

        <div className="icon-img-overlay small-icon-2">
          <img src="/assets/images/common/united_states-icon.webp" alt="Location" />
        </div>

        <div className="icon-img-overlay small-icon-3">
          <img src="/assets/images/common/australia-icon.webp" alt="Location" />
        </div>
      </div>

      <div className="contact-map-content">
        <div className="contact-map-card">
          <div className="contact-left">
            <div className="contact-location">
              <h4>📍 California Office</h4>
              <ul>
                <li>
                  <b>Address</b>: 180 Metro Dr, San Jose, California, USA
                </li>
                <li>
                  <b>Phone</b>: +1 (123) 456-7890
                </li>
                <li>
                  <b>Email</b>: california.office@yourbrand.com
                </li>
                <li>
                  <b>Office Hours</b>: Mon – Fri | 9:00 AM – 6:00 PM
                </li>
              </ul>
            </div>

            <div className="contact-fresh-start">
              <h4>No worries</h4>
              <h4>Let’s start fresh.</h4>
              <p className="contact-content-style">
                “Don’t miss trying the best coffee at Metro Café just around
                the corner!”
              </p>
            </div>
          </div>

            <div className="contact-right">
            <iframe
              title="California Office Location"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1VnYC6EugmolDY9RjsZ77TeXstyj0288&q=London+Eye&center=51.503186,-0.119519&maptype=satellite&zoom=17"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
