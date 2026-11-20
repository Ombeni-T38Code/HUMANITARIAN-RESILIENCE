
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartPulse,
  Accessibility,
  GraduationCap,
  Users,
  Baby,
  Brain,
  BriefcaseBusiness,
  ShieldCheck,
  HeartHandshake,
  HandHeart,
  Sparkles,
} from "lucide-react";

import PageHero from "../../components/Layout/PageHero";
import { organization } from "../../data/pages";

import "./WhatWeDo.css";

const programs = [
  {
    number: "01",
    title: "Community Health",
    description:
      "Promoting healthier communities through health education, awareness, prevention, and access to essential health information.",
    path: "/what-we-do/community-health",
    icon: HeartPulse,
    label: "Health & Well-being",
  },
  {
    number: "02",
    title: "Physiotherapy & Rehabilitation",
    description:
      "Supporting people with physical disabilities and mobility challenges through rehabilitation, physiotherapy, and inclusive care.",
    path: "/what-we-do/physiotherapy",
    icon: Accessibility,
    label: "Physical Rehabilitation",
  },
  {
    number: "03",
    title: "Education & Digital Skills",
    description:
      "Creating learning opportunities through digital literacy, computer education, coding, and practical technology skills.",
    path: "/what-we-do/education",
    icon: GraduationCap,
    label: "Learning & Technology",
  },
  {
    number: "04",
    title: "Women & Youth Empowerment",
    description:
      "Equipping women and young people with practical skills, knowledge, and opportunities to become economically independent.",
    path: "/what-we-do/women-youth-empowerment",
    icon: Users,
    label: "Skills & Opportunities",
  },
  {
    number: "05",
    title: "Child Development",
    description:
      "Supporting children's growth through childcare, early learning, education, creativity, and safe learning environments.",
    path: "/what-we-do/child-development",
    icon: Baby,
    label: "Children & Learning",
  },
  {
    number: "06",
    title: "Psychosocial Support",
    description:
      "Promoting emotional well-being, psychosocial awareness, social connection, and supportive community environments.",
    path: "/what-we-do/psychosocial-support",
    icon: Brain,
    label: "Mental & Social Well-being",
  },
  {
    number: "07",
    title: "Livelihoods",
    description:
      "Strengthening household resilience through vocational skills, entrepreneurship, income-generating activities, and small business development.",
    path: "/what-we-do/livelihoods",
    icon: BriefcaseBusiness,
    label: "Economic Empowerment",
  },
  {
    number: "08",
    title: "Community Resilience",
    description:
      "Encouraging community participation, local leadership, collaboration, and sustainable solutions to shared challenges.",
    path: "/what-we-do/community-resilience",
    icon: ShieldCheck,
    label: "Stronger Communities",
  },
];

const WhatWeDo = () => {
  return (
    <div className="whatwedo-page">

      {/* =====================================
          PAGE HERO
      ====================================== */}

      <PageHero
        eyebrow="OUR PROGRAM AREAS"
        title="What We Do"
        subtitle="We work alongside refugee and host communities to improve health, expand education, empower people, and build stronger and more resilient communities."
        backgroundImage="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=2000&q=85"
        breadcrumbs={[
          { label: "What We Do" },
        ]}
      />

      {/* =====================================
          INTRODUCTION
      ====================================== */}

      <section className="whatwedo-intro section">
        <div className="whatwedo-container">

          <div className="whatwedo-intro-text">
            <span className="whatwedo-eyebrow">
              OUR COMMITMENT
            </span>

            <h2>
              Creating Opportunities.
              <span> Strengthening Communities.</span>
            </h2>

            <p>
              Humanitarian Resilience Aid works to address the
              challenges facing refugee and host communities in
              Kakuma, Kenya.
            </p>

            <p>
              Through our programs, we promote access to healthcare,
              education, rehabilitation, psychosocial support,
              economic opportunities, and community development.
            </p>

            <Link to="/about" className="whatwedo-text-link">
              Learn More About HRA
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="whatwedo-intro-image">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85"
              alt="Community members participating in a learning activity"
            />

            <div className="whatwedo-image-caption">
              <HeartHandshake size={23} />
              <div>
                <strong>People at the Centre</strong>
                <span>Building a stronger future together</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================
          PROGRAM AREAS
      ====================================== */}

      <section className="whatwedo-programs section">
        <div className="whatwedo-container">

          <div className="whatwedo-section-heading">
            <span className="whatwedo-eyebrow">
              OUR EIGHT FOCUS AREAS
            </span>

            <h2>Our Areas of Work</h2>

            <p>
              Explore the programs through which we support individuals,
              families, and communities to overcome challenges and
              access new opportunities.
            </p>
          </div>

          <div className="whatwedo-grid">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  className="whatwedo-card"
                  key={program.number}
                >
                  <div className="whatwedo-card-top">
                    <span className="whatwedo-card-number">
                      {program.number}
                    </span>

                    <div className="whatwedo-icon">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>
                  </div>

                  <span className="whatwedo-card-label">
                    {program.label}
                  </span>

                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <Link
                    to={program.path}
                    className="whatwedo-card-link"
                  >
                    Explore Program
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================
          OUR APPROACH
      ====================================== */}

      <section className="whatwedo-approach section">
        <div className="whatwedo-container">

          <div className="whatwedo-approach-heading">
            <span className="whatwedo-eyebrow">
              HOW WE WORK
            </span>

            <h2>
              Our Approach to
              <span> Community Development</span>
            </h2>

            <p>
              We believe sustainable progress begins with people.
              Our approach focuses on participation, inclusion,
              practical skills, and community-led solutions.
            </p>
          </div>

          <div className="whatwedo-approach-grid">

            <div className="whatwedo-approach-card">
              <div className="whatwedo-approach-icon">
                <Users size={27} />
              </div>
              <h3>Community Participation</h3>
              <p>
                Listening to community members and involving them
                in identifying needs and shaping solutions.
              </p>
            </div>

            <div className="whatwedo-approach-card">
              <div className="whatwedo-approach-icon">
                <GraduationCap size={27} />
              </div>
              <h3>Skills Development</h3>
              <p>
                Providing practical learning and training that
                helps people build knowledge and confidence.
              </p>
            </div>

            <div className="whatwedo-approach-card">
              <div className="whatwedo-approach-icon">
                <HeartHandshake size={27} />
              </div>
              <h3>Partnership & Collaboration</h3>
              <p>
                Working with communities, organizations, and
                partners to strengthen local initiatives.
              </p>
            </div>

            <div className="whatwedo-approach-card">
              <div className="whatwedo-approach-icon">
                <Sparkles size={27} />
              </div>
              <h3>Sustainable Impact</h3>
              <p>
                Encouraging long-term opportunities and solutions
                that strengthen community resilience.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          CALL TO ACTION
      ====================================== */}

      <section className="whatwedo-cta">
        <div className="whatwedo-container whatwedo-cta-content">

          <div className="whatwedo-cta-icon">
            <HandHeart size={35} />
          </div>

          <span className="whatwedo-eyebrow">
            BE PART OF THE CHANGE
          </span>

          <h2>
            Together, We Can Build
            <span> Stronger Communities</span>
          </h2>

          <p>
            Your support, partnership, and participation can help
            create meaningful opportunities for refugee and host
            communities.
          </p>

          <div className="whatwedo-cta-buttons">
            <Link
              to="/get-involved"
              className="whatwedo-primary-btn"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="whatwedo-secondary-btn"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default WhatWeDo;
