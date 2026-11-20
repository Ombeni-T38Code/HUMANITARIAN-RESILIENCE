
import React from "react";
import { Link } from "react-router-dom";
import {
  Accessibility,
  Activity,
  HeartPulse,
  PersonStanding,
  HandHeart,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

import PageHero from "../../../components/Layout/PageHero";

import "./PhysiotherapyRehabilitation.css";

const services = [
  {
    icon: Activity,
    title: "Physical Rehabilitation",
    description:
      "Promoting rehabilitation awareness and support for people experiencing physical limitations and mobility challenges.",
  },
  {
    icon: PersonStanding,
    title: "Mobility & Movement",
    description:
      "Encouraging safe movement, physical activity, and greater independence in everyday life.",
  },
  {
    icon: HeartPulse,
    title: "Physiotherapy Awareness",
    description:
      "Sharing information about physiotherapy, rehabilitation practices, and the importance of physical well-being.",
  },
  {
    icon: Users,
    title: "Inclusive Community Support",
    description:
      "Encouraging dignity, participation, and inclusion for people living with disabilities.",
  },
];

const benefits = [
  "Promoting awareness of physical rehabilitation.",
  "Encouraging mobility and independence.",
  "Supporting inclusion of people with disabilities.",
  "Increasing understanding of physiotherapy.",
  "Promoting dignity and equal participation.",
];

const PhysiotherapyRehabilitation = () => {
  return (
    <div className="physio-page">

      {/* =====================================
          PAGE HERO
      ====================================== */}

      <PageHero
        eyebrow="WHAT WE DO"
        title="Physiotherapy & Rehabilitation"
        subtitle="Promoting mobility, physical well-being, rehabilitation awareness, and inclusive opportunities for people with disabilities."
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=85"
        breadcrumbs={[
          { label: "What We Do", path: "/what-we-do" },
          { label: "Physiotherapy & Rehabilitation" },
        ]}
      />

      {/* =====================================
          INTRODUCTION
      ====================================== */}

      <section className="physio-intro section">
        <div className="physio-container physio-intro-grid">

          <div className="physio-intro-content">
            <span className="physio-eyebrow">
              MOVEMENT • DIGNITY • INCLUSION
            </span>

            <h2>
              Supporting Recovery,
              <span> Mobility & Independence</span>
            </h2>

            <p>
              Physical well-being plays an important role in
              everyday life. People experiencing injuries,
              disabilities, or movement difficulties may face
              barriers to education, employment, and community
              participation.
            </p>

            <p>
              Humanitarian Resilience Aid promotes awareness of
              physiotherapy and rehabilitation while encouraging
              inclusive support that helps individuals improve
              their mobility, confidence, and independence.
            </p>

            <Link
              to="/projects/community-physiotherapy"
              className="physio-primary-link"
            >
              Explore Community Physiotherapy
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="physio-intro-image">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85"
              alt="Physical movement and rehabilitation exercise"
            />

            <div className="physio-image-caption">
              <Accessibility size={29} />
              <div>
                <strong>Movement for Everyone</strong>
                <span>Supporting dignity and independence</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================
          OUR SERVICES
      ====================================== */}

      <section className="physio-services section">
        <div className="physio-container">

          <div className="physio-heading">
            <span className="physio-eyebrow">
              OUR AREAS OF FOCUS
            </span>

            <h2>How We Promote Rehabilitation</h2>

            <p>
              Our work encourages understanding, awareness,
              inclusion, and access to information about physical
              well-being and rehabilitation.
            </p>
          </div>

          <div className="physio-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="physio-service-card" key={service.title}>
                  <span className="physio-number">
                    0{index + 1}
                  </span>

                  <div className="physio-service-icon">
                    <Icon size={29} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================
          WHY REHABILITATION MATTERS
      ====================================== */}

      <section className="physio-importance section">
        <div className="physio-container physio-importance-grid">

          <div className="physio-importance-image">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=85"
              alt="Healthcare and rehabilitation environment"
            />
          </div>

          <div className="physio-importance-content">
            <span className="physio-eyebrow">
              WHY REHABILITATION MATTERS
            </span>

            <h2>
              Every Person Deserves
              <span> the Opportunity to Thrive</span>
            </h2>

            <p>
              Rehabilitation can help people improve their ability
              to carry out everyday activities and participate
              more fully in society.
            </p>

            <p>
              We believe that people with disabilities should
              have opportunities to access information, support,
              and inclusive community environments.
            </p>

            <div className="physio-benefits">
              {benefits.map((benefit) => (
                <div className="physio-benefit" key={benefit}>
                  <CheckCircle2 size={19} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =====================================
          OUR COMMITMENT
      ====================================== */}

      <section className="physio-commitment section">
        <div className="physio-container">

          <div className="physio-heading">
            <span className="physio-eyebrow">
              OUR COMMITMENT
            </span>

            <h2>Building More Inclusive Communities</h2>

            <p>
              We work towards communities where people can
              participate, access information, and receive
              support with dignity and respect.
            </p>
          </div>

          <div className="physio-commitment-grid">

            <div className="physio-commitment-card">
              <div className="physio-commitment-icon">
                <Accessibility size={27} />
              </div>
              <h3>Accessibility</h3>
              <p>
                Promoting awareness of barriers that affect
                mobility and participation.
              </p>
            </div>

            <div className="physio-commitment-card">
              <div className="physio-commitment-icon">
                <HandHeart size={27} />
              </div>
              <h3>Dignity & Respect</h3>
              <p>
                Supporting people with disabilities with
                compassion and respect.
              </p>
            </div>

            <div className="physio-commitment-card">
              <div className="physio-commitment-icon">
                <HeartHandshake size={27} />
              </div>
              <h3>Collaboration</h3>
              <p>
                Encouraging cooperation with communities and
                relevant rehabilitation stakeholders.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          RELATED PROJECT
      ====================================== */}

      <section className="physio-project section">
        <div className="physio-container physio-project-content">

          <div className="physio-project-icon">
            <Stethoscope size={32} />
          </div>

          <div className="physio-project-text">
            <span className="physio-eyebrow">
              RELATED PROJECT
            </span>

            <h2>Community Physiotherapy</h2>

            <p>
              Learn more about our community physiotherapy
              initiative and our work to promote physical
              well-being and rehabilitation awareness.
            </p>
          </div>

          <Link
            to="/projects/community-physiotherapy"
            className="physio-project-button"
          >
            View Project
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* =====================================
          CALL TO ACTION
      ====================================== */}

      <section className="physio-cta">
        <div className="physio-container physio-cta-content">

          <div className="physio-cta-icon">
            <HandHeart size={35} />
          </div>

          <span className="physio-eyebrow">
            HELP US MAKE A DIFFERENCE
          </span>

          <h2>
            Promoting Mobility.
            <span> Empowering Lives.</span>
          </h2>

          <p>
            Partner with Humanitarian Resilience Aid to promote
            rehabilitation awareness, inclusion, and better
            opportunities for everyone.
          </p>

          <div className="physio-cta-buttons">
            <Link to="/get-involved" className="physio-cta-primary">
              Get Involved
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="physio-cta-secondary">
              Contact Us
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default PhysiotherapyRehabilitation;
