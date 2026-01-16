import React from "react";
import googlePlay from "/assets/images/common/to-do-app-google-play-img.webp";
import phoneMain from "/assets/images/common/to-do-app-phone-img.png";
import phoneTop from "/assets/images/common/to-do-app-phone-img-2.png";

export default function ToDoApp() {
  return (
    <section className="to-do-app-section">
      <div className="to-do-app-content-wrap">
        <div className="to-do-app-content-box">
          <div className="to-do-left-block">
            <h2>Do it from anywhere</h2>
            <p>
              Get the Zoho ToDo app on your mobile and access your tasks list
              from anywhere by just reaching for your phone.
            </p>

            <div className="to-do-app-link">
              <img src={googlePlay} alt="Google Play" />
            </div>
          </div>
          <div className="to-do-right-block">
            <span className="top-image">
              <img src={phoneTop} alt="Floating UI" />
            </span>

            <img src={phoneMain} alt="Mobile App" className="main-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
