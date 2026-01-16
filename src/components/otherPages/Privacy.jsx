import React from "react";

export default function Privacy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Privacy Policy</h1>
            </div>
          </header>

          <div className="page-content panel fs-6 md:fs-5">
            <p>
              At <strong>The Eazy</strong> (“we”, “our”, “us”), your privacy is important to us. This Privacy Policy explains how we collect, use,
              store, and protect your information when you visit our website or use our software and services.
            </p>

            <p>By using The Eazy website or platform, you agree to the practices described in this Policy.</p>

            {/* 1. Information We Collect */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">1. Information We Collect</h3>
            <p>We may collect the following types of information:</p>

            <h4 className="h6 mt-2 mb-1">a. Personal Information</h4>
            <ul className="list list-bullets">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Billing and payment details</li>
            </ul>

            <h4 className="h6 mt-2 mb-1">b. Business & Usage Information</h4>
            <ul className="list list-bullets">
              <li>Employee and customer data you upload</li>
              <li>Platform usage data</li>
              <li>Log files, IP address, browser type, and device information</li>
            </ul>

            {/* 2. How We Use Your Information */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">2. How We Use Your Information</h3>
            <p>We use your information to:</p>
            <ul className="list list-bullets">
              <li>Provide and operate our services</li>
              <li>Improve product features and user experience</li>
              <li>Communicate updates, support, and service-related notices</li>
              <li>Process payments and subscriptions</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
            <p>We do not sell your personal or business data to third parties.</p>

            {/* 3. Data Ownership */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">3. Data Ownership</h3>
            <p>You retain full ownership of all data you upload or create on The Eazy platform.</p>
            <p>We only access your data to:</p>
            <ul className="list list-bullets">
              <li>Provide requested services</li>
              <li>Offer customer support</li>
              <li>Maintain platform security and performance</li>
            </ul>

            {/* 4. Data Security */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">4. Data Security</h3>
            <p>We implement industry-standard security measures to protect your data, including:</p>
            <ul className="list list-bullets">
              <li>Secure servers</li>
              <li>Encrypted data transmission</li>
              <li>Restricted access controls</li>
            </ul>
            <p>While we take strong precautions, no system is 100% secure, and we cannot guarantee absolute security.</p>

            {/* 5. Third-Party Services */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">5. Third-Party Services</h3>
            <p>The Eazy may integrate with third-party tools such as:</p>
            <ul className="list list-bullets">
              <li>Payment gateways</li>
              <li>Messaging services (e.g., WhatsApp)</li>
              <li>Analytics and cloud services</li>
            </ul>
            <p>These third parties have their own privacy policies. The Eazy is not responsible for their practices.</p>

            {/* 6. Cookies */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">6. Cookies & Tracking</h3>
            <p>We may use cookies and similar technologies to:</p>
            <ul className="list list-bullets">
              <li>Improve website functionality</li>
              <li>Analyze traffic and usage</li>
              <li>Enhance user experience</li>
            </ul>
            <p>You can disable cookies through your browser settings, though some features may not function properly.</p>

            {/* 7. Data Retention */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">7. Data Retention</h3>
            <p>We retain your data only as long as:</p>
            <ul className="list list-bullets">
              <li>Your account is active</li>
              <li>Required to provide services</li>
              <li>Necessary to comply with legal obligations</li>
            </ul>
            <p>Upon account termination, you may request data export or deletion as per our policies.</p>

            {/* 8. Your Rights */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">8. Your Rights</h3>
            <p>You have the right to:</p>
            <ul className="list list-bullets">
              <li>Access your personal data</li>
              <li>Request corrections or updates</li>
              <li>Request data export</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
            </ul>

            {/* 9. Children */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">9. Children’s Privacy</h3>
            <p>The Eazy services are not intended for individuals under the age of 18. We do not knowingly collect data from minors.</p>

            {/* 10. Changes */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">10. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page. Continued use of the platform indicates
              acceptance of the updated policy.
            </p>

            {/* 11. Law */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">11. Governing Law</h3>
            <p>This Privacy Policy is governed by the laws of India, and any disputes shall be subject to Indian jurisdiction.</p>

            {/* 12. Contact */}
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">12. Contact Us</h3>
            <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>
            <p>
              Email: <a href="mailto:tech@theeazy.io">tech@theeazy.io</a>
            </p>
          </div>

          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">Last updated: 01 Jan, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
