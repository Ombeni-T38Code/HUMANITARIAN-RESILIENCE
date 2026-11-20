
import React from "react";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Users,
  BookOpen,
  Activity,
  ArrowRight,
  HandHeart,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

import PageHero from "../../../components/Layout/PageHero";

import "./CommunityHealth.css";

const healthActivities = [
  {
    icon: BookOpen,
    title: "Health Education",
    description:
      "Sharing practical health information to help individuals and families make informed decisions about their health.",
  },
  {
    icon: ShieldCheck,
    title: "Disease Prevention",
    description:
      "Promoting awareness of disease prevention, hygiene, sanitation, and healthy daily practices.",
  },
  {
    icon: Users,
    title: "Community Awareness",
    description:
      "Encouraging community participation in health awareness activities and discussions about common health challenges.",
  },
  {
    icon: Activity,
    title: "Healthy Living",
    description:
      "Promoting healthy lifestyles and everyday practices that support individual and family well-being.",
  },
];

const priorities = [
  "Improve access to practical health information.",
  "Encourage preventive health practices.",
  "Promote hygiene and sanitation awareness.",
  "Support community participation in health education.",
  "Strengthen awareness of available health services.",
];

const CommunityHealth = () => {
  return (
    <div className="community-health-page">

      {/* =====================================
          PAGE HERO
      ====================================== */}

      <PageHero
        eyebrow="WHAT WE DO"
        title="Community Health"
        subtitle="Promoting healthier communities through education, prevention, awareness, and community participation."
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85"
        breadcrumbs={[
          { label: "What We Do", path: "/what-we-do" },
          { label: "Community Health" },
        ]}
      />

      {/* =====================================
          INTRODUCTION
      ====================================== */}

      <section className="ch-intro section">
        <div className="ch-container ch-intro-grid">

          <div className="ch-intro-content">
            <span className="ch-eyebrow">
              HEALTHIER COMMUNITIES
            </span>

            <h2>
              Health Education for
              <span> Stronger Communities</span>
            </h2>

            <p>
              Access to reliable health information is important
              for individuals, families, and communities. Humanitarian
              Resilience Aid promotes community health by supporting
              health education, awareness, disease prevention, and
              healthy living.
            </p>

            <p>
              We work to make health information easier to understand
              and encourage people to take an active role in protecting
              their health and supporting the well-being of others.
            </p>

            <Link to="/projects/community-health-education" className="ch-primary-link">
              Explore Our Health Education Project
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="ch-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=85"
              alt="Healthcare professional supporting community health"
            />

            <div className="ch-image-note">
              <HeartPulse size={28} />
              <div>
                <strong>Health Starts with Awareness</strong>
                <span>Knowledge that supports healthier lives</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================
          OUR FOCUS
      ====================================== */}

      <section className="ch-focus section">
        <div className="ch-container">

          <div className="ch-section-heading">
            <span className="ch-eyebrow">
              OUR HEALTH INITIATIVES
            </span>

            <h2>What We Focus On</h2>

            <p>
              Our community health activities focus on improving
              awareness, promoting prevention, and encouraging
              healthier practices.
            </p>
          </div>

          <div className="ch-focus-grid">
            {healthActivities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="ch-focus-card" key={item.title}>
                  <span className="ch-focus-number">
                    0{index + 1}
                  </span>

                  <div className="ch-focus-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================
          WHY COMMUNITY HEALTH MATTERS
      ====================================== */}

      <section className="ch-importance section">
        <div className="ch-container ch-importance-grid">

          <div className="ch-importance-image">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85"
              alt="Community health and wellness activity"
            />
          </div>

          <div className="ch-importance-content">
            <span className="ch-eyebrow">
              WHY IT MATTERS
            </span>

            <h2>
              Building a Culture of
              <span> Prevention and Care</span>
            </h2>

            <p>
              Communities are better equipped to protect their health
              when people have access to clear information and
              opportunities to learn together.
            </p>

            <p>
              Our work encourages shared responsibility, informed
              choices, and stronger connections between community
              members and available health services.
            </p>

            <div className="ch-priority-list">
              {priorities.map((priority) => (
                <div className="ch-priority-item" key={priority}>
                  <CheckCircle2 size={19} />
                  <span>{priority}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =====================================
          OUR APPROACH
      ====================================== */}

      <section className="ch-approach section">
        <div className="ch-container">

          <div className="ch-section-heading">
            <span className="ch-eyebrow">
              OUR APPROACH
            </span>

            <h2>Working Together for Better Health</h2>

            <p>
              We believe that lasting improvements in community
              health come from knowledge, participation, and
              collaboration.
            </p>
          </div>

          <div className="ch-approach-grid">

            <div className="ch-approach-card">
              <div className="ch-approach-icon">
                <BookOpen size={26} />
              </div>
              <h3>Educate</h3>
              <p>
                Share understandable health information and
                practical knowledge with community members.
              </p>
            </div>

            <div className="ch-approach-card">
              <div className="ch-approach-icon">
                <Stethoscope size={26} />
              </div>
              <h3>Raise Awareness</h3>
              <p>
                Encourage conversations about health challenges,
                prevention, and available support.
              </p>
            </div>

            <div className="ch-approach-card">
              <div className="ch-approach-icon">
                <HeartHandshake size={26} />
              </div>
              <h3>Collaborate</h3>
              <p>
                Encourage community participation and cooperation
                with relevant health stakeholders.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          RELATED PROJECT
      ====================================== */}

      <section className="ch-project section">
        <div className="ch-container ch-project-content">

          <div className="ch-project-icon">
            <HeartPulse size={32} />
          </div>

          <div className="ch-project-text">
            <span className="ch-eyebrow">
              OUR RELATED PROJECT
            </span>

            <h2>Community Health Education</h2>

            <p>
              Discover how our health education activities help
              communities access useful information and develop
              healthier practices.
            </p>
          </div>

          <Link
            to="/projects/community-health-education"
            className="ch-project-button"
          >
            View Project
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* =====================================
          CALL TO ACTION
      ====================================== */}

      <section className="ch-cta">
        <div className="ch-container ch-cta-content">

          <div className="ch-cta-icon">
            <HandHeart size={34} />
          </div>

          <span className="ch-eyebrow">
            SUPPORT COMMUNITY HEALTH
          </span>

          <h2>
            Together, We Can Build
            <span> Healthier Communities</span>
          </h2>

          <p>
            Join us in promoting health education, awareness,
            and well-being for refugee and host communities.
          </p>

          <div className="ch-cta-buttons">
            <Link to="/get-involved" className="ch-cta-primary">
              Get Involved
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="ch-cta-secondary">
              Contact HRA
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CommunityHealth;
