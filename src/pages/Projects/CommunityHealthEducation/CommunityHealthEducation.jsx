
import React from "react";
import {
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  BookOpen,
  HandHeart,
  Activity,
  Droplets,
  Apple,
  Brain,
  CheckCircle2,
  HeartHandshake,
  Target,
  Megaphone,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../../components/Layout/PageHero";

import "./CommunityHealthEducation.css";

const healthTopics = [
  {
    icon: ShieldCheck,
    title: "Disease Prevention",
    description:
      "Promoting awareness of common illnesses, prevention practices, early warning signs, and the importance of seeking appropriate healthcare.",
  },
  {
    icon: Droplets,
    title: "Hygiene and Sanitation",
    description:
      "Encouraging good personal hygiene, handwashing, safe water practices, and clean surroundings to support healthier communities.",
  },
  {
    icon: Apple,
    title: "Nutrition Awareness",
    description:
      "Sharing practical information about balanced diets, healthy food choices, and the importance of nutrition for families and children.",
  },
  {
    icon: HeartPulse,
    title: "General Health Awareness",
    description:
      "Helping community members understand common health concerns and make informed decisions about their personal and family health.",
  },
  {
    icon: Brain,
    title: "Mental and Emotional Well-being",
    description:
      "Encouraging awareness of mental and psychosocial well-being and promoting supportive, respectful community relationships.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Information",
    description:
      "Promoting knowledge about available healthcare services and encouraging people to seek professional medical advice when needed.",
  },
];

const projectApproach = [
  {
    number: "01",
    icon: Users,
    title: "Community Engagement",
    description:
      "We encourage community participation and listen to local health concerns and information needs.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Health Education",
    description:
      "We promote accessible health information and practical learning that people can apply in daily life.",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Awareness and Prevention",
    description:
      "We encourage positive health practices and greater awareness of preventable health challenges.",
  },
  {
    number: "04",
    icon: HandHeart,
    title: "Community Support",
    description:
      "We encourage people to share knowledge, support one another, and make informed healthcare decisions.",
  },
];

const expectedBenefits = [
  "Improved understanding of common health issues",
  "Greater awareness of disease prevention",
  "Improved hygiene and sanitation practices",
  "Better understanding of healthy nutrition",
  "Increased awareness of available health services",
  "Stronger community participation in health promotion",
];

export default function CommunityHealthEducation() {
  return (
    <main className="community-health-education-page">
      <PageHero
        eyebrow="OUR PROJECTS"
        title="Community Health Education"
        description="Promoting health awareness, disease prevention, hygiene, and access to practical health information for healthier and more resilient communities."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85"
      />

      {/* INTRODUCTION */}
      <section className="che-intro section-padding">
        <div className="che-container che-intro-grid">
          <div className="che-intro-image">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85"
              alt="Healthcare professional sharing health information"
            />

            <div className="che-image-label">
              <HeartPulse size={26} />
              <div>
                <strong>Healthier Communities</strong>
                <span>Knowledge, prevention and well-being</span>
              </div>
            </div>
          </div>

          <div className="che-intro-content">
            <span className="che-label">ABOUT THE PROJECT</span>

            <h2>
              Knowledge Is the Foundation of
              <span> Better Health</span>
            </h2>

            <p>
              Access to reliable health information helps individuals and
              families understand health challenges, make informed decisions,
              and take practical steps to protect their well-being.
            </p>

            <p>
              In refugee and host communities, barriers to healthcare
              information can make it difficult for people to understand
              disease prevention, hygiene, nutrition, and available health
              services.
            </p>

            <p>
              Through our Community Health Education project, Humanitarian
              Resilience Aid promotes health awareness and encourages
              communities to take an active role in improving their health
              and well-being.
            </p>

            <Link to="/contact" className="che-primary-btn">
              Learn More About Our Work <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* HEALTH EDUCATION TOPICS */}
      <section className="che-topics section-padding">
        <div className="che-container">
          <div className="che-section-heading">
            <span className="che-label">OUR EDUCATION FOCUS</span>

            <h2>Important Health Topics We Promote</h2>

            <p>
              We encourage practical health knowledge that helps individuals
              and families make informed choices and adopt healthier daily
              practices.
            </p>
          </div>

          <div className="che-topics-grid">
            {healthTopics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <article className="che-topic-card" key={topic.title}>
                  <div className="che-topic-icon">
                    <Icon size={27} />
                  </div>

                  <span className="che-card-number">
                    0{index + 1}
                  </span>

                  <h3>{topic.title}</h3>

                  <p>{topic.description}</p>

                  <div className="che-card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY HEALTH EDUCATION */}
      <section className="che-importance section-padding">
        <div className="che-container che-importance-grid">
          <div className="che-importance-content">
            <span className="che-label">
              WHY COMMUNITY HEALTH EDUCATION MATTERS
            </span>

            <h2>
              Empowering People to Make
              <span> Informed Health Decisions</span>
            </h2>

            <p>
              Health education gives people information they can use to
              understand health risks, prevent avoidable illnesses, and seek
              appropriate support when health concerns arise.
            </p>

            <p>
              When communities have access to understandable and practical
              health information, they are better positioned to protect
              families and promote healthier environments.
            </p>

            <div className="che-importance-points">
              <div>
                <CheckCircle2 size={20} />
                <span>Promotes informed health decisions</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Encourages prevention and early awareness</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Strengthens community health knowledge</span>
              </div>
            </div>
          </div>

          <div className="che-importance-image">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1100&q=85"
              alt="Health professional supporting community health education"
            />

            <div className="che-importance-note">
              <Activity size={25} />
              <div>
                <strong>Prevention Through Knowledge</strong>
                <span>Supporting healthier everyday choices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT APPROACH */}
      <section className="che-approach section-padding">
        <div className="che-container">
          <div className="che-section-heading">
            <span className="che-label">HOW WE WORK</span>

            <h2>Our Community-Based Approach</h2>

            <p>
              We believe health education is most meaningful when information
              is accessible, relevant, and connected to the everyday
              experiences of community members.
            </p>
          </div>

          <div className="che-approach-grid">
            {projectApproach.map((step) => {
              const Icon = step.icon;

              return (
                <article className="che-approach-card" key={step.number}>
                  <span className="che-approach-number">
                    {step.number}
                  </span>

                  <div className="che-approach-icon">
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

      {/* EXPECTED BENEFITS */}
      <section className="che-benefits section-padding">
        <div className="che-container che-benefits-grid">
          <div className="che-benefits-content">
            <span className="che-label">OUR GOALS</span>

            <h2>
              Building a More Informed and Health-Conscious Community
            </h2>

            <p>
              We aim to strengthen health awareness and encourage positive
              practices that contribute to healthier individuals, families,
              and communities.
            </p>

            <Link
              to="/what-we-do/community-health"
              className="che-text-link"
            >
              Explore Our Community Health Program
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="che-benefits-list">
            {expectedBenefits.map((benefit) => (
              <div className="che-benefit-item" key={benefit}>
                <CheckCircle2 size={21} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PROGRAM */}
      <section className="che-related section-padding">
        <div className="che-container che-related-grid">
          <div className="che-related-image">
            <img
              src="https://images.unsplash.com/photo-1576091160501-bbe57469278b?auto=format&fit=crop&w=1100&q=85"
              alt="Community health and medical support"
            />
          </div>

          <div className="che-related-content">
            <span className="che-label">CONNECTED PROGRAM</span>

            <h2>
              Community Health
            </h2>

            <p>
              Our wider Community Health program promotes health awareness,
              prevention, well-being, and stronger connections between
              communities and healthcare information.
            </p>

            <p>
              Through connected activities, we aim to support individuals
              and families in understanding health concerns and identifying
              appropriate sources of support.
            </p>

            <Link
              to="/what-we-do/community-health"
              className="che-primary-btn"
            >
              Explore Community Health <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="che-cta section-padding">
        <div className="che-container">
          <div className="che-cta-content">
            <div className="che-cta-icon">
              <HeartHandshake size={32} />
            </div>

            <span>SUPPORT HEALTHIER COMMUNITIES</span>

            <h2>
              Help Us Promote Health Awareness and Well-being
            </h2>

            <p>
              Join us in making practical health information more accessible
              and supporting healthier, stronger, and more resilient
              communities.
            </p>

            <div className="che-cta-actions">
              <Link to="/get-involved" className="che-cta-primary">
                Get Involved <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="che-cta-secondary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
