
import React from "react";
import {
  ArrowRight,
  Activity,
  Accessibility,
  HeartPulse,
  HandHeart,
  Users,
  PersonStanding,
  Dumbbell,
  ShieldCheck,
  Stethoscope,
  Target,
  CheckCircle2,
  Footprints,
  Brain,
  HeartHandshake,
  MoveRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../../components/Layout/PageHero";

import "./CommunityPhysiotherapy.css";

const services = [
  {
    icon: PersonStanding,
    title: "Mobility Support",
    description:
      "Promoting movement, balance, and functional independence through appropriate rehabilitation guidance and support.",
  },
  {
    icon: Activity,
    title: "Physical Rehabilitation",
    description:
      "Supporting recovery and improved physical function for individuals experiencing movement and mobility difficulties.",
  },
  {
    icon: Accessibility,
    title: "Disability Inclusion",
    description:
      "Encouraging participation, accessibility, and dignity for people living with disabilities and physical limitations.",
  },
  {
    icon: Dumbbell,
    title: "Therapeutic Exercises",
    description:
      "Promoting safe, appropriate exercises that can support strength, flexibility, coordination, and physical function.",
  },
  {
    icon: Footprints,
    title: "Movement and Balance",
    description:
      "Raising awareness of movement and balance practices that can help individuals maintain everyday activities.",
  },
  {
    icon: HeartPulse,
    title: "Physical Well-being",
    description:
      "Encouraging healthy movement habits and greater understanding of the importance of physical health.",
  },
];

const approach = [
  {
    number: "01",
    icon: Users,
    title: "Identify Community Needs",
    description:
      "Understand mobility and rehabilitation challenges experienced by individuals and families.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Promote Rehabilitation Awareness",
    description:
      "Share information about physiotherapy, rehabilitation, and appropriate professional support.",
  },
  {
    number: "03",
    icon: Activity,
    title: "Encourage Safe Movement",
    description:
      "Promote suitable movement practices and physical activities with attention to individual needs.",
  },
  {
    number: "04",
    icon: HandHeart,
    title: "Support Inclusion",
    description:
      "Encourage dignity, participation, and community support for people with physical challenges.",
  },
];

const goals = [
  "Increase awareness of physiotherapy and rehabilitation",
  "Promote mobility and functional independence",
  "Encourage inclusion of people with disabilities",
  "Improve understanding of physical well-being",
  "Promote access to appropriate rehabilitation services",
  "Strengthen community support for people with mobility challenges",
];

export default function CommunityPhysiotherapy() {
  return (
    <main className="community-physiotherapy-page">
      <PageHero
        eyebrow="OUR PROJECTS"
        title="Community Physiotherapy"
        description="Promoting rehabilitation awareness, mobility, physical well-being, and inclusion for individuals and families in our community."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=85"
      />

      {/* INTRODUCTION */}
      <section className="cp-intro section-padding">
        <div className="cp-container cp-intro-grid">
          <div className="cp-intro-image">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85"
              alt="Healthcare professional supporting physical rehabilitation"
            />

            <div className="cp-image-card">
              <Activity size={27} />
              <div>
                <strong>Movement Matters</strong>
                <span>Supporting mobility and well-being</span>
              </div>
            </div>
          </div>

          <div className="cp-intro-content">
            <span className="cp-label">ABOUT THE PROJECT</span>

            <h2>
              Supporting Movement,
              <span> Recovery and Independence</span>
            </h2>

            <p>
              Physical challenges and mobility limitations can affect a
              person's ability to participate in everyday activities,
              education, work, and community life.
            </p>

            <p>
              Physiotherapy and rehabilitation can play an important role
              in helping individuals improve physical function, manage
              movement difficulties, and work towards greater independence.
            </p>

            <p>
              Through our Community Physiotherapy project, Humanitarian
              Resilience Aid promotes rehabilitation awareness, physical
              well-being, and inclusion while encouraging access to
              appropriate professional support.
            </p>

            <Link to="/contact" className="cp-primary-btn">
              Contact Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT FOCUS */}
      <section className="cp-services section-padding">
        <div className="cp-container">
          <div className="cp-section-heading">
            <span className="cp-label">OUR AREAS OF FOCUS</span>

            <h2>Promoting Better Physical Well-being</h2>

            <p>
              We focus on rehabilitation awareness and practical knowledge
              that supports mobility, inclusion, and healthier living.
            </p>
          </div>

          <div className="cp-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="cp-service-card" key={service.title}>
                  <span className="cp-service-number">
                    0{index + 1}
                  </span>

                  <div className="cp-service-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="cp-service-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY REHABILITATION */}
      <section className="cp-why section-padding">
        <div className="cp-container cp-why-grid">
          <div className="cp-why-content">
            <span className="cp-label">WHY REHABILITATION MATTERS</span>

            <h2>
              Every Person Deserves the Opportunity to
              <span> Move and Participate</span>
            </h2>

            <p>
              Rehabilitation can help people address physical limitations,
              improve functional abilities, and participate more fully in
              their communities.
            </p>

            <p>
              For people affected by injury, disability, illness, or other
              mobility challenges, access to appropriate rehabilitation
              information and services can make an important difference.
            </p>

            <div className="cp-why-points">
              <div>
                <CheckCircle2 size={20} />
                <span>Encourages mobility and independence</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Promotes dignity and disability inclusion</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Raises awareness of rehabilitation services</span>
              </div>
            </div>
          </div>

          <div className="cp-why-image">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1100&q=85"
              alt="Healthcare and rehabilitation environment"
            />

            <div className="cp-image-note">
              <Accessibility size={26} />
              <div>
                <strong>Inclusion for Everyone</strong>
                <span>Promoting access and participation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="cp-approach section-padding">
        <div className="cp-container">
          <div className="cp-section-heading">
            <span className="cp-label">OUR APPROACH</span>

            <h2>Working With Communities</h2>

            <p>
              Our approach values community participation, dignity,
              accessibility, and the importance of appropriate
              rehabilitation support.
            </p>
          </div>

          <div className="cp-approach-grid">
            {approach.map((step) => {
              const Icon = step.icon;

              return (
                <article className="cp-approach-card" key={step.number}>
                  <span className="cp-approach-number">
                    {step.number}
                  </span>

                  <div className="cp-approach-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="cp-goals section-padding">
        <div className="cp-container cp-goals-grid">
          <div className="cp-goals-content">
            <span className="cp-label">OUR GOALS</span>

            <h2>
              Creating Opportunities for Greater Mobility and Inclusion
            </h2>

            <p>
              We aim to strengthen community understanding of rehabilitation
              and encourage an environment where people with physical
              challenges are respected, supported, and included.
            </p>

            <Link
              to="/what-we-do/physiotherapy"
              className="cp-text-link"
            >
              Explore Physiotherapy and Rehabilitation
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="cp-goals-list">
            {goals.map((goal) => (
              <div className="cp-goal-item" key={goal}>
                <CheckCircle2 size={21} />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORICAL TRAINING STORY */}
      <section className="cp-history section-padding">
        <div className="cp-container cp-history-grid">
          <div className="cp-history-image">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1100&q=85"
              alt="Healthcare education and training"
            />
          </div>

          <div className="cp-history-content">
            <span className="cp-label">OUR EXPERIENCE</span>

            <h2>
              Building Local Knowledge in Healthcare and Physiotherapy
            </h2>

            <p>
              On 8 July 2023, a group of 50 unemployed refugees in Kakuma
              graduated after completing a 12-week healthcare and
              physiotherapy training program.
            </p>

            <p>
              The program was funded by UNHCR and implemented by Health for
              All. It provided participants with an opportunity to develop
              knowledge and skills in healthcare and physiotherapy.
            </p>

            <p>
              This historical experience reflects the importance of
              practical learning and strengthening local capacity to
              contribute to community well-being.
            </p>

            <div className="cp-history-highlight">
              <div>
                <strong>50</strong>
                <span>Graduates</span>
              </div>

              <div>
                <strong>12</strong>
                <span>Weeks of Training</span>
              </div>

              <div>
                <strong>2023</strong>
                <span>Graduation Year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROGRAM */}
      <section className="cp-related section-padding">
        <div className="cp-container cp-related-grid">
          <div className="cp-related-content">
            <span className="cp-label">RELATED PROGRAM</span>

            <h2>Physiotherapy and Rehabilitation</h2>

            <p>
              Our wider Physiotherapy and Rehabilitation program focuses
              on physical well-being, rehabilitation awareness, mobility,
              and inclusion.
            </p>

            <p>
              We believe people experiencing physical challenges deserve
              respect, support, and opportunities to participate in
              community life.
            </p>

            <Link
              to="/what-we-do/physiotherapy"
              className="cp-primary-btn"
            >
              Explore Our Program <ArrowRight size={18} />
            </Link>
          </div>

          <div className="cp-related-image">
            <img
              src="https://images.unsplash.com/photo-1576091160501-bbe57469278b?auto=format&fit=crop&w=1100&q=85"
              alt="Healthcare and physical well-being"
            />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cp-cta section-padding">
        <div className="cp-container">
          <div className="cp-cta-content">
            <div className="cp-cta-icon">
              <HeartHandshake size={32} />
            </div>

            <span>SUPPORT MOBILITY AND INCLUSION</span>

            <h2>
              Help Us Build a Community Where Everyone Can Participate
            </h2>

            <p>
              Work with us to promote rehabilitation awareness, physical
              well-being, and inclusive opportunities for people facing
              mobility challenges.
            </p>

            <div className="cp-cta-actions">
              <Link to="/get-involved" className="cp-cta-primary">
                Get Involved <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="cp-cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
