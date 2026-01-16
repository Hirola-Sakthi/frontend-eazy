import { teamMembers as staticTeamMembers } from "@/data/team";
import React from "react";
import { Link } from "react-router-dom";
import { useTeamMembers } from "@/api/content";

export default function Team({ useBackend = true }) {
  // Fetch data from backend if useBackend is true
  const { teamMembers: backendTeamMembers, loading } = useTeamMembers();

  // Use backend data if available, otherwise fallback to static data
  const teamMembers = useBackend && backendTeamMembers.length > 0
    ? backendTeamMembers.map(member => ({
        name: member.name,
        position: member.position,
        imageSrc: member.image,
        altText: member.name
      }))
    : staticTeamMembers;

  return (
    <div id="about-team" className="about-team section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                Our Executive Team
              </h2>
              <div
                className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 lg:gx-4 gy-4 lg:gy-6"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                data-uc-grid=""
              >
                {teamMembers.map((member, index) => (
                  <div key={index}>
                    <div className="panel vstack gap-2">
                      <img
                        className="w-100 rounded"
                        src={member.imageSrc}
                        width={400}
                        height={400}
                        alt={member.altText}
                      />
                      <div className="panel vstack items-start gap-0">
                        <h6 className="h6 m-0">{member.name}</h6>
                        <span className="fs-7 opacity-70">
                          {member.position}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to={`/about-us`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow"
              >
                <span>More about us</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
