
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  HeartHandshake,
  Mail,
  UserRound,
} from "lucide-react";

import PageHero from "../../components/Layout/PageHero";
import { teamMembers, organization } from "../../data/pages";

import "./Team.css";

const teamDescriptions = [
  "Provides leadership and strategic direction, guiding the organization's mission and development.",
  "Coordinates volunteers and supports their participation in community initiatives.",
  "Supports organizational administration and coordination of daily activities.",
  "Leads communication activities and helps share the organization's work and impact.",
  "Coordinates projects and supports the implementation of community programs.",
  "Supports educational initiatives and learning opportunities for community members.",
];

const Team = () => {
  return (
    <div className="team-page">

      {/* =====================================
          PAGE HERO
      ====================================== */}

      <PageHero
        eyebrow="MEET THE PEOPLE BEHIND OUR WORK"
        title="Our Team"
        subtitle="Meet the dedicated individuals working together to promote healthcare, education, empowerment, and community resilience."
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=85"
        breadcrumbs={[
          { label: "About Us", path: "/about" },
          { label: "Our Team" },
        ]}
      />

      {/* =====================================
          TEAM INTRODUCTION
      ====================================== */}

      <section className="team-intro section">
        <div className="team-container">

          <div className="team-intro-content">
            <span className="team-eyebrow">THE PEOPLE BEHIND HRA</span>

            <h2>
              Working Together to
              <span> Create Lasting Change</span>
            </h2>

            <p>
              At {organization.name}, we believe meaningful change
              happens when passionate people work together towards a
              common purpose.
            </p>

            <p>
              Our team brings together leadership, coordination,
              communication, education, and project management to
              support refugee and host communities in Kakuma, Kenya.
            </p>
          </div>

          <div className="team-intro-highlight">
            <div className="team-highlight-icon">
              <Users size={35} />
            </div>

            <strong>{teamMembers.length}</strong>
            <span>Team Members</span>

            <div className="team-highlight-line"></div>

            <p>
              United by a shared commitment to community development.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================
          TEAM MEMBERS
      ====================================== */}

      <section className="team-members-section section">
        <div className="team-container">

          <div className="team-section-heading">
            <span className="team-eyebrow">OUR PEOPLE</span>
            <h2>Meet Our Dedicated Team</h2>
            <p>
              Every team member plays an important role in advancing
              our mission and supporting the communities we serve.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article className="team-card" key={member.name}>

                <div className="team-card-image">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                    />
                  ) : (
                    <div className="team-placeholder">
                      <UserRound size={65} />
                    </div>
                  )}

                  <span className="team-member-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="team-card-content">
                  <span className="team-member-role">
                    {member.position}
                  </span>

                  <h3>{member.name}</h3>

                  <p>{teamDescriptions[index]}</p>

                  <div className="team-card-divider"></div>

                  <span className="team-member-footer">
                    <HeartHandshake size={16} />
                    HUMANITARIAN RESILIENCE AID
                  </span>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          TEAMWORK SECTION
      ====================================== */}

      <section className="teamwork-section section">
        <div className="team-container teamwork-grid">

          <div className="teamwork-image">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
              alt="A team collaborating and sharing ideas"
            />

            <div className="teamwork-image-label">
              <Users size={22} />
              <span>Stronger Together</span>
            </div>
          </div>

          <div className="teamwork-content">
            <span className="team-eyebrow">OUR TEAM SPIRIT</span>

            <h2>
              One Team.
              <span> One Mission.</span>
              A Shared Future.
            </h2>

            <p>
              We value collaboration, respect, accountability, and
              community participation. By working together, we aim to
              develop practical solutions that respond to real
              community needs.
            </p>

            <div className="teamwork-points">
              <div>
                <HeartHandshake size={19} />
                <span>Working together with communities</span>
              </div>

              <div>
                <Users size={19} />
                <span>Promoting inclusive participation</span>
              </div>

              <div>
                <Mail size={19} />
                <span>Building meaningful partnerships</span>
              </div>
            </div>

            <Link to="/contact" className="team-contact-link">
              Connect With Our Team
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================
          JOIN OUR TEAM CTA
      ====================================== */}

      <section className="team-cta">
        <div className="team-container team-cta-content">

          <span className="team-eyebrow">
            BE PART OF OUR JOURNEY
          </span>

          <h2>
            Together, We Can Make
            <span> a Difference</span>
          </h2>

          <p>
            Share your time, skills, and experience to help strengthen
            communities and create opportunities for everyone.
          </p>

          <Link to="/get-involved/volunteer" className="team-cta-button">
            Become a Volunteer
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Team;
