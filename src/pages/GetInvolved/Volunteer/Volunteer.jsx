
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Users,
  HandHeart,
  GraduationCap,
  HeartPulse,
  Laptop,
  Baby,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  Globe,
  Lightbulb,
  MessageCircle,
  Send,
  Sparkles,
  Target,
  Handshake,
  BookOpen,
} from "lucide-react";

import PageHero from "../../../components/Layout/PageHero";
import "./Volunteer.css";

const volunteerAreas = [
  {
    icon: HeartPulse,
    title: "Community Health",
    description:
      "Support health awareness activities, community education, and initiatives that promote healthier lives.",
  },
  {
    icon: GraduationCap,
    title: "Education & Digital Skills",
    description:
      "Share your knowledge through teaching, computer literacy, digital learning, and coding activities.",
  },
  {
    icon: Users,
    title: "Women & Youth Empowerment",
    description:
      "Support practical skills training, entrepreneurship, mentorship, and livelihood opportunities.",
  },
  {
    icon: Baby,
    title: "Child Development",
    description:
      "Contribute to children's learning activities, educational support, and child development initiatives.",
  },
  {
    icon: Brain,
    title: "Psychosocial Support",
    description:
      "Assist with community awareness activities that encourage emotional well-being and social connection.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Administration & Communication",
    description:
      "Support organizational activities through administration, documentation, communication, and coordination.",
  },
];

const volunteerQualities = [
  "Commitment to serving communities",
  "Respect for different cultures and backgrounds",
  "Good communication and teamwork skills",
  "Willingness to learn and share knowledge",
  "Reliability, responsibility, and professionalism",
  "Respect for confidentiality and safeguarding principles",
];

const volunteerSteps = [
  {
    number: "01",
    title: "Learn About HRA",
    description:
      "Explore our mission, programmes, and the communities we support.",
  },
  {
    number: "02",
    title: "Contact Our Team",
    description:
      "Tell us about your interests, experience, skills, and availability.",
  },
  {
    number: "03",
    title: "Discuss Opportunities",
    description:
      "Our team can discuss suitable volunteer activities and expectations with you.",
  },
  {
    number: "04",
    title: "Start Contributing",
    description:
      "Once an opportunity is agreed upon, work with the team to support community activities.",
  },
];

const Volunteer = () => {
  return (
    <main className="vol-page">
      <PageHero
        eyebrow="Get Involved"
        title="Become a Volunteer"
        description="Share your time, skills, and experience to support refugee and host communities through meaningful community-led initiatives."
        image="/images/volunteer-hero.jpg"
      />

      {/* Introduction */}
      <section className="vol-intro section-padding">
        <div className="vol-container vol-intro-grid">
          <div className="vol-intro-content">
            <span className="vol-eyebrow">Your Time Can Make a Difference</span>

            <h2>
              Join Our Team of
              <span> Community Volunteers</span>
            </h2>

            <p>
              At Humanitarian Resilience Aid (HRA), we believe that meaningful
              change happens when people work together. Volunteers play an
              important role in strengthening community programmes and
              supporting opportunities for people in need.
            </p>

            <p>
              Whether you have experience in education, healthcare,
              communication, technology, administration, or community
              development, your skills and commitment can help us make a
              positive difference.
            </p>

            <p>
              We welcome people who are willing to learn, share their
              knowledge, work with others, and contribute to our mission
              of promoting health care and education.
            </p>

            <div className="vol-intro-actions">
              <a href="#volunteer-application" className="vol-primary-btn">
                Apply to Volunteer
                <ArrowRight size={18} />
              </a>

              <Link to="/contact" className="vol-secondary-btn">
                Contact HRA
              </Link>
            </div>
          </div>

          <div className="vol-intro-visual">
            <img
              src="/images/volunteer-community.jpg"
              alt="Volunteers working together with community members"
            />

            <div className="vol-floating-card">
              <div className="vol-floating-icon">
                <HandHeart size={26} />
              </div>
              <div>
                <strong>Give Your Time</strong>
                <span>Help create meaningful change</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="vol-why section-padding">
        <div className="vol-container">
          <div className="vol-section-heading">
            <span className="vol-eyebrow">Why Volunteer With HRA?</span>
            <h2>Make Your Skills Count</h2>
            <p>
              Volunteering is an opportunity to contribute to your community,
              share knowledge, learn from others, and be part of meaningful
              development activities.
            </p>
          </div>

          <div className="vol-why-grid">
            <article className="vol-why-card">
              <div className="vol-why-icon">
                <Heart size={26} />
              </div>
              <h3>Serve Communities</h3>
              <p>
                Contribute to activities that respond to community needs
                and support positive change.
              </p>
            </article>

            <article className="vol-why-card">
              <div className="vol-why-icon">
                <Lightbulb size={26} />
              </div>
              <h3>Share Your Skills</h3>
              <p>
                Use your knowledge, talents, and experience to support
                education and community development.
              </p>
            </article>

            <article className="vol-why-card">
              <div className="vol-why-icon">
                <Users size={26} />
              </div>
              <h3>Build Connections</h3>
              <p>
                Work with people from different backgrounds and develop
                meaningful community relationships.
              </p>
            </article>

            <article className="vol-why-card">
              <div className="vol-why-icon">
                <GraduationCap size={26} />
              </div>
              <h3>Continue Learning</h3>
              <p>
                Gain practical experience, develop new perspectives,
                and strengthen your personal skills.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Volunteer Areas */}
      <section className="vol-areas section-padding">
        <div className="vol-container">
          <div className="vol-section-heading">
            <span className="vol-eyebrow">Volunteer Opportunities</span>
            <h2>Where You Can Make a Difference</h2>
            <p>
              We welcome volunteers with different skills and interests
              to support our programmes and community activities.
            </p>
          </div>

          <div className="vol-areas-grid">
            {volunteerAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article className="vol-area-card" key={area.title}>
                  <div className="vol-area-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{area.title}</h3>
                  <p>{area.description}</p>

                  <a href="#volunteer-application" className="vol-area-link">
                    Express Interest
                    <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Experience */}
      <section className="vol-experience section-padding">
        <div className="vol-container vol-experience-grid">
          <div className="vol-experience-image">
            <img
              src="/images/volunteer-training.jpg"
              alt="Community volunteers participating in learning activities"
            />

            <div className="vol-image-caption">
              <Globe size={20} />
              <span>Working Together for Stronger Communities</span>
            </div>
          </div>

          <div className="vol-experience-content">
            <span className="vol-eyebrow">Who Can Volunteer?</span>

            <h2>
              Everyone Has Something
              <span> Valuable to Share</span>
            </h2>

            <p>
              We encourage applications from people who are passionate
              about community service and interested in contributing
              their skills to our programmes.
            </p>

            <p>
              You do not need to have experience in every area. What matters
              is your willingness to contribute responsibly, respect others,
              and work collaboratively.
            </p>

            <div className="vol-qualities-list">
              {volunteerQualities.map((quality) => (
                <div key={quality}>
                  <CheckCircle2 size={19} />
                  <span>{quality}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="vol-steps section-padding">
        <div className="vol-container">
          <div className="vol-section-heading">
            <span className="vol-eyebrow">Getting Started</span>
            <h2>How to Become an HRA Volunteer</h2>
            <p>
              Follow these simple steps to express your interest
              and explore available volunteer opportunities.
            </p>
          </div>

          <div className="vol-steps-grid">
            {volunteerSteps.map((step) => (
              <article className="vol-step-card" key={step.number}>
                <span className="vol-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Expectations */}
      <section className="vol-expectations section-padding">
        <div className="vol-container vol-expectations-grid">
          <div className="vol-expectations-content">
            <span className="vol-eyebrow">Our Shared Commitment</span>

            <h2>
              Creating a Safe and
              <span> Respectful Environment</span>
            </h2>

            <p>
              HRA values volunteers who approach community work with
              integrity, respect, responsibility, and a willingness
              to collaborate.
            </p>

            <div className="vol-expectation-item">
              <CheckCircle2 size={21} />
              <div>
                <strong>Respect and Inclusion</strong>
                <p>
                  Treat all community members with dignity and respect
                  regardless of their background.
                </p>
              </div>
            </div>

            <div className="vol-expectation-item">
              <CheckCircle2 size={21} />
              <div>
                <strong>Responsibility</strong>
                <p>
                  Communicate clearly, honour agreed commitments,
                  and work professionally.
                </p>
              </div>
            </div>

            <div className="vol-expectation-item">
              <CheckCircle2 size={21} />
              <div>
                <strong>Safeguarding and Confidentiality</strong>
                <p>
                  Respect privacy, follow safeguarding guidance,
                  and help maintain safe programme environments.
                </p>
              </div>
            </div>

            <div className="vol-expectation-item">
              <CheckCircle2 size={21} />
              <div>
                <strong>Teamwork</strong>
                <p>
                  Collaborate with HRA team members and other volunteers
                  to support shared goals.
                </p>
              </div>
            </div>
          </div>

          <div className="vol-expectations-image">
            <img
              src="/images/volunteer-teamwork.jpg"
              alt="Volunteers collaborating as a team"
            />
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section
        className="vol-application section-padding"
        id="volunteer-application"
      >
        <div className="vol-container">
          <div className="vol-application-box">
            <div className="vol-application-icon">
              <Send size={32} />
            </div>

            <span className="vol-application-eyebrow">
              Take the First Step
            </span>

            <h2>Ready to Become a Volunteer?</h2>

            <p>
              We would love to hear from you. Contact our team to share
              your interests, skills, and availability, and explore
              how you can contribute to HRA's mission.
            </p>

            <div className="vol-application-actions">
              <a
                href="mailto:humanitarianraid@gmail.com?subject=Volunteer%20Application"
                className="vol-apply-btn"
              >
                Send Your Interest
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+254720014028"
                className="vol-call-btn"
              >
                <MessageCircle size={18} />
                Call HRA
              </a>
            </div>

            <div className="vol-contact-details">
              <span>
                <MessageCircle size={16} />
                humanitarianraid@gmail.com
              </span>

              <span>
                <Clock size={16} />
                Kakuma Refugee Camp, Kenya
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="vol-bottom-cta">
        <div className="vol-container vol-bottom-content">
          <div>
            <span>Let's Work Together</span>
            <h2>Every Contribution Matters.</h2>
          </div>

          <Link to="/get-involved/partnerships" className="vol-bottom-btn">
            Explore Partnerships
            <Handshake size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Volunteer;
