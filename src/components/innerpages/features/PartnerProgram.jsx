import React from "react";
import {
  ArrowUpRight,
  MessageCircle,
  FileText,
  BookOpen,
  Users,
} from "lucide-react";
import PartnerImg from "/assets/images/common/invest-smarter-main-img.avif";
import SmallImage from "/assets/images/common/partner-program-small-img.avif";


export default function PartnerProgram() {
  const defaultSectionContent = {
    titleHighlight: "The next",
  };
  const sectionContent = defaultSectionContent;
  return (
    <section className="partner-program">
      <div className="partner-program-container">
        <h2 className="partner-program-title">
          <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
            {sectionContent.titleHighlight}
          </span>{" "}
          generation of <br />
          personalized software.
        </h2>

        <div className="partner-program-grid">
          <div className="partner-card partner-card-text">
            <p className="partner-quote">
              “The community & partners program behind Rantir is intense. The
              amount the community has developed in 2–3 months has been wild. If
              you want a new journey build a template with Rantir.”
            </p>

            <div className="partner-author">
              <img
                src={SmallImage}
                alt="Partner Avatar"
                className="partner-avatar"
              />

              <div>
                <div className="partner-name">Jilian Day</div>
                <div className="partner-role">Head of Marketing, Rantir</div>
              </div>
            </div>
          </div>
          <div className="partner-card partner-card-image">
            <img src={PartnerImg} alt="Community" />
            {/* <div className="partner-image-overlay">
              JOIN THE RANTIR DISCORD COMMUNITY
            </div> */}
          </div>
          <div className="partner-card partner-small">
            <div className="partner-small-icon">
              <MessageCircle />
            </div>
            <div className="partner-small-content">
              <h4>FAQs & Support</h4>
              <p>Get support & ask questions</p>
            </div>
            <ArrowUpRight className="partner-arrow" />
          </div>

          <div className="partner-card partner-small">
            <div className="partner-small-icon">
              <BookOpen />
            </div>
            <div className="partner-small-content">
              <h4>Rantir Research</h4>
              <p>Read our papers and blog</p>
            </div>
            <ArrowUpRight className="partner-arrow" />
          </div>

          <div className="partner-card partner-small">
            <div className="partner-small-icon">
              <FileText />
            </div>
            <div className="partner-small-content">
              <h4>Documentation</h4>
              <p>Guides and API Docs</p>
            </div>
            <ArrowUpRight className="partner-arrow" />
          </div>

          <div className="partner-card partner-small">
            <div className="partner-small-icon">
              <Users />
            </div>
            <div className="partner-small-content">
              <h4>Join the Community</h4>
              <p>Over 330+ Rantir Vibe Coders</p>
            </div>
            <ArrowUpRight className="partner-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
}
