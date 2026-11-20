
import React from "react";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  Lightbulb,
  BriefcaseBusiness,
  GraduationCap,
  HandCoins,
  Sparkles,
  CheckCircle2,
  Store,
  BookOpen,
  Target,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../../components/Layout/PageHero";

import "./WomenYouthEmpowerment.css";

const empowermentAreas = [
  {
    icon: GraduationCap,
    title: "Practical Skills Training",
    description:
      "We support women and young people in developing practical skills that can help them access employment and create their own opportunities.",
  },
  {
    icon: Store,
    title: "Entrepreneurship Development",
    description:
      "We encourage participants to turn their skills and ideas into small businesses that can generate income and support their families.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Employment Opportunities",
    description:
      "We promote pathways to employment and self-employment by strengthening practical knowledge, confidence, and work-related skills.",
  },
  {
    icon: BookOpen,
    title: "Education and Learning",
    description:
      "We encourage continued learning through literacy, English education, digital skills, and other learning opportunities.",
  },
  {
    icon: HandCoins,
    title: "Financial Independence",
    description:
      "We promote financial awareness, saving habits, and responsible money management to support long-term economic independence.",
  },
  {
    icon: Users,
    title: "Leadership and Participation",
    description:
      "We encourage women and young people to participate in community activities, share ideas, and take leadership roles.",
  },
];

const empowermentSteps = [
  {
    number: "01",
    title: "Identify Community Needs",
    description:
      "We listen to women and young people to understand their challenges, interests, skills, and aspirations.",
  },
  {
    number: "02",
    title: "Provide Practical Training",
    description:
      "We connect participants with relevant learning and hands-on skills development opportunities.",
  },
  {
    number: "03",
    title: "Support Business Ideas",
    description:
      "We encourage participants to develop business ideas and explore ways to turn their skills into income.",
  },
  {
    number: "04",
    title: "Promote Sustainable Growth",
    description:
      "We work toward stronger livelihoods, increased confidence, and greater participation in community development.",
  },
];

const outcomes = [
  "Improved practical and vocational skills",
  "Greater confidence and self-reliance",
  "More opportunities for self-employment",
  "Stronger small-business development",
  "Increased participation in community activities",
  "Improved opportunities for women and youth",
];

export default function WomenYouthEmpowerment() {
  return (
    <main className="women-empowerment-page">
      <PageHero
        eyebrow="WHAT WE DO"
        title="Women & Youth Empowerment"
        description="Creating opportunities for women and young people to build skills, develop confidence, start businesses, and shape a stronger future."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
      />

      {/* INTRODUCTION */}
      <section className="women-empowerment-intro section-padding">
        <div className="women-empowerment-container women-empowerment-intro-grid">
          <div className="women-empowerment-intro-image">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"
              alt="Young people participating in a collaborative learning activity"
            />

            <div className="women-empowerment-image-label">
              <HeartHandshake size={23} />
              <div>
                <strong>Building Opportunities</strong>
                <span>Skills, confidence and independence</span>
              </div>
            </div>
          </div>

          <div className="women-empowerment-intro-content">
            <span className="women-empowerment-label">
              EMPOWERING COMMUNITIES
            </span>

            <h2>
              Creating Opportunities for a More
              <span> Independent Future</span>
            </h2>

            <p>
              Women and young people play an important role in building
              stronger families and communities. However, many face barriers
              such as limited employment opportunities, lack of practical
              skills, and limited access to resources.
            </p>

            <p>
              At Humanitarian Resilience Aid, we work to address these
              challenges by promoting practical skills development,
              entrepreneurship, education, and opportunities for economic
              participation.
            </p>

            <p>
              Our goal is to help women and young people build confidence,
              develop their abilities, and create sustainable ways to support
              themselves and their families.
            </p>

            <Link
              to="/projects/soap-making"
              className="women-empowerment-btn"
            >
              Explore Our Initiatives <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* EMPOWERMENT AREAS */}
      <section className="women-empowerment-areas section-padding">
        <div className="women-empowerment-container">
          <div className="women-empowerment-section-heading">
            <span className="women-empowerment-label">
              OUR AREAS OF SUPPORT
            </span>

            <h2>How We Empower Women and Youth</h2>

            <p>
              We focus on practical opportunities that help individuals
              develop their abilities, improve their livelihoods, and
              contribute to community development.
            </p>
          </div>

          <div className="women-empowerment-areas-grid">
            {empowermentAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  className="women-empowerment-area-card"
                  key={area.title}
                >
                  <div className="women-empowerment-area-icon">
                    <Icon size={27} />
                  </div>

                  <span className="women-empowerment-card-number">
                    0{index + 1}
                  </span>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <div className="women-empowerment-card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOAP MAKING FEATURE */}
      <section className="women-empowerment-feature section-padding">
        <div className="women-empowerment-container women-empowerment-feature-grid">
          <div className="women-empowerment-feature-content">
            <span className="women-empowerment-label">
              FEATURED LIVELIHOOD INITIATIVE
            </span>

            <h2>
              Empowering Women and Youth Through
              <span> Soap Making</span>
            </h2>

            <p>
              Life has become increasingly difficult for many refugee and
              host community families in Kakuma, especially following
              reductions in humanitarian assistance. Many households struggle
              to meet their basic needs, while women and young people have
              limited opportunities to find employment and earn an income.
            </p>

            <p>
              Through our soap-making program, we equip women and young people
              with practical soap production skills and encourage them to
              establish small businesses.
            </p>

            <div className="women-empowerment-feature-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Practical soap production training</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Small business development support</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Income generation opportunities</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Greater economic independence</span>
              </div>
            </div>

            <Link
              to="/projects/soap-making"
              className="women-empowerment-btn"
            >
              Discover Soap Making Project <ArrowRight size={18} />
            </Link>
          </div>

          <div className="women-empowerment-feature-image">
            <img
              src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1100&q=85"
              alt="Handmade soap products arranged for a small business"
            />

            <div className="women-empowerment-impact-card">
              <span>OUR TRAINING REACH</span>

              <div className="women-empowerment-impact-numbers">
                <div>
                  <strong>35</strong>
                  <small>Women trained</small>
                </div>

                <div className="women-empowerment-impact-divider" />

                <div>
                  <strong>20</strong>
                  <small>Young people trained</small>
                </div>
              </div>

              <p>
                Participants have gained practical soap-making skills, and
                some have started small businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="women-empowerment-approach section-padding">
        <div className="women-empowerment-container">
          <div className="women-empowerment-section-heading">
            <span className="women-empowerment-label">OUR APPROACH</span>

            <h2>From Skills to Sustainable Opportunities</h2>

            <p>
              We believe empowerment is a process. We support participants
              from identifying their interests to developing practical skills
              and exploring opportunities for growth.
            </p>
          </div>

          <div className="women-empowerment-steps">
            {empowermentSteps.map((step) => (
              <article
                className="women-empowerment-step"
                key={step.number}
              >
                <span className="women-empowerment-step-number">
                  {step.number}
                </span>

                <div className="women-empowerment-step-icon">
                  {step.number === "01" && <Target size={24} />}
                  {step.number === "02" && <GraduationCap size={24} />}
                  {step.number === "03" && <Lightbulb size={24} />}
                  {step.number === "04" && <Sparkles size={24} />}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPECTED OUTCOMES */}
      <section className="women-empowerment-outcomes section-padding">
        <div className="women-empowerment-container women-empowerment-outcomes-grid">
          <div className="women-empowerment-outcomes-content">
            <span className="women-empowerment-label">
              THE CHANGE WE WORK TOWARD
            </span>

            <h2>Building Confidence, Skills and Independence</h2>

            <p>
              We want women and young people to have the knowledge,
              opportunities, and confidence to improve their lives and
              participate meaningfully in their communities.
            </p>

            <Link to="/projects" className="women-empowerment-text-link">
              Explore Our Projects <ArrowRight size={18} />
            </Link>
          </div>

          <div className="women-empowerment-outcomes-list">
            {outcomes.map((outcome) => (
              <div
                className="women-empowerment-outcome-item"
                key={outcome}
              >
                <CheckCircle2 size={21} />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="women-empowerment-cta section-padding">
        <div className="women-empowerment-container">
          <div className="women-empowerment-cta-content">
            <div className="women-empowerment-cta-icon">
              <HeartHandshake size={32} />
            </div>

            <span>BE PART OF THE CHANGE</span>

            <h2>
              Help Women and Youth Build a Better Future
            </h2>

            <p>
              Your partnership and support can help expand skills training,
              create livelihood opportunities, and strengthen the future of
              families in Kakuma.
            </p>

            <div className="women-empowerment-cta-actions">
              <Link to="/get-involved" className="women-empowerment-cta-btn">
                Get Involved <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="women-empowerment-cta-outline"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
