
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  HandHeart,
  Users,
  Handshake,
  Gift,
  Globe,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  Building2,
  BookOpen,
  Lightbulb,
} from "lucide-react";

import PageHero from "../../components/Layout/PageHero";
import "./GetInvolved.css";

const involvementOptions = [
  {
    icon: HandHeart,
    number: "01",
    title: "Become a Volunteer",
    description:
      "Share your time, knowledge, experience, and skills to support our community programmes and make a meaningful difference.",
    link: "/get-involved/volunteer",
    linkText: "Volunteer With Us",
    image: "/images/hra-volunteers.jpg",
  },
  {
    icon: Handshake,
    number: "02",
    title: "Become a Partner",
    description:
      "Work with HRA through institutional partnerships, technical support, collaboration, and shared community development goals.",
    link: "/get-involved/partnerships",
    linkText: "Partner With Us",
    image: "/images/hra-partnership.jpg",
  },
  {
    icon: Gift,
    number: "03",
    title: "Support Our Work",
    description:
      "Contribute resources, equipment, learning materials, or other support that helps us strengthen our community programmes.",
    link: "/donate",
    linkText: "Support Our Mission",
    image: "/images/hra-support.jpg",
  },
];

const contributionAreas = [
  {
    icon: Heart,
    title: "Community Health",
    description:
      "Help improve access to health education, awareness, and community well-being.",
  },
  {
    icon: GraduationCap,
    title: "Education & Digital Skills",
    description:
      "Support learning opportunities, computer literacy, coding, and digital education.",
  },
  {
    icon: Users,
    title: "Women & Youth Empowerment",
    description:
      "Help women and young people develop practical skills and livelihood opportunities.",
  },
  {
    icon: BookOpen,
    title: "Child Development",
    description:
      "Contribute to safe learning environments and educational opportunities for children.",
  },
  {
    icon: HeartHandshake,
    title: "Psychosocial Support",
    description:
      "Support community awareness and activities that promote emotional and social well-being.",
  },
  {
    icon: Lightbulb,
    title: "Community Resilience",
    description:
      "Help communities strengthen local capacity, participation, and sustainable solutions.",
  },
];

const involvementSteps = [
  {
    number: "01",
    title: "Explore Our Work",
    description:
      "Discover HRA's programmes, projects, and the communities we serve.",
  },
  {
    number: "02",
    title: "Choose How to Help",
    description:
      "Decide whether you would like to volunteer, partner with us, or provide support.",
  },
  {
    number: "03",
    title: "Connect With HRA",
    description:
      "Contact our team to discuss your interests, skills, and possible contribution.",
  },
  {
    number: "04",
    title: "Make a Difference",
    description:
      "Work together with us to support meaningful and community-led change.",
  },
];

const GetInvolved = () => {
  return (
    <main className="gi-page">
      <PageHero
        eyebrow="Get Involved"
        title="Be Part of the Change"
        description="Join Humanitarian Resilience Aid in empowering refugee and host communities through health, education, skills development, and community resilience."
        image="/images/get-involved-hero.jpg"
      />

      {/* Introduction */}
      <section className="gi-intro section-padding">
        <div className="gi-container gi-intro-grid">
          <div className="gi-intro-content">
            <span className="gi-eyebrow">Together We Can Make a Difference</span>

            <h2>
              Your Support Can Help
              <span> Transform Lives</span>
            </h2>

            <p>
              Positive change begins when people come together with a shared
              commitment to building stronger and more resilient communities.
              At Humanitarian Resilience Aid (HRA), we believe everyone has
              something valuable to contribute.
            </p>

            <p>
              Whether you are an individual, volunteer, organization,
              institution, or supporter, there are many ways to join our
              mission and help create opportunities for refugees and members
              of host communities in Kakuma.
            </p>

            <p>
              Your time, skills, ideas, partnerships, and resources can help
              strengthen our programmes and reach more people in need of
              opportunities and support.
            </p>

            <Link to="/contact" className="gi-primary-btn">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="gi-intro-image">
            <img
              src="/images/hra-community-volunteers.jpg"
              alt="Community members working together"
            />

            <div className="gi-intro-note">
              <div className="gi-note-icon">
                <HeartHandshake size={26} />
              </div>
              <div>
                <strong>Stronger Together</strong>
                <span>Building hope through collective action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="gi-options section-padding">
        <div className="gi-container">
          <div className="gi-section-heading">
            <span className="gi-eyebrow">Ways to Participate</span>
            <h2>How You Can Get Involved</h2>
            <p>
              There are different ways to contribute to our mission.
              Choose the opportunity that best matches your interests,
              experience, and available resources.
            </p>
          </div>

          <div className="gi-options-grid">
            {involvementOptions.map((item) => {
              const Icon = item.icon;

              return (
                <article className="gi-option-card" key={item.title}>
                  <div className="gi-option-image">
                    <img src={item.image} alt={item.title} />
                    <span className="gi-option-number">{item.number}</span>
                  </div>

                  <div className="gi-option-content">
                    <div className="gi-option-icon">
                      <Icon size={25} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <Link to={item.link} className="gi-card-link">
                      {item.linkText}
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="gi-banner">
        <div className="gi-container gi-banner-content">
          <div className="gi-banner-icon">
            <Sparkles size={32} />
          </div>

          <div>
            <span>Small Actions. Meaningful Change.</span>
            <h2>
              Together, We Can Build a More Hopeful Future.
            </h2>
          </div>

          <Link to="/contact" className="gi-banner-btn">
            Connect With Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Areas to Support */}
      <section className="gi-areas section-padding">
        <div className="gi-container">
          <div className="gi-section-heading">
            <span className="gi-eyebrow">Support Our Programmes</span>
            <h2>Where Your Contribution Can Make a Difference</h2>
            <p>
              Your involvement can help strengthen different areas of our
              work and create more opportunities for community members.
            </p>
          </div>

          <div className="gi-areas-grid">
            {contributionAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article className="gi-area-card" key={area.title}>
                  <div className="gi-area-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join HRA */}
      <section className="gi-why section-padding">
        <div className="gi-container gi-why-grid">
          <div className="gi-why-image">
            <img
              src="/images/hra-team-community.jpg"
              alt="Humanitarian community team working together"
            />
          </div>

          <div className="gi-why-content">
            <span className="gi-eyebrow">Why Join Our Mission?</span>

            <h2>
              Be Part of a Community-Led
              <span> Movement for Change</span>
            </h2>

            <p>
              HRA works to promote community participation, practical
              opportunities, and inclusive development. By getting involved,
              you become part of a shared effort to address challenges and
              strengthen local solutions.
            </p>

            <div className="gi-why-list">
              <div>
                <CheckCircle2 size={20} />
                <span>Contribute to meaningful community initiatives</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Share knowledge, skills, and experience</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Support education and livelihood opportunities</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Build relationships through collaboration</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Help promote sustainable community development</span>
              </div>
            </div>

            <Link to="/about" className="gi-text-link">
              Learn More About HRA
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="gi-steps section-padding">
        <div className="gi-container">
          <div className="gi-section-heading">
            <span className="gi-eyebrow">Getting Started</span>
            <h2>Four Steps to Make a Difference</h2>
            <p>
              Getting involved is simple. Start by learning about our work
              and connect with our team to explore how you can contribute.
            </p>
          </div>

          <div className="gi-steps-grid">
            {involvementSteps.map((step) => (
              <article className="gi-step-card" key={step.number}>
                <span className="gi-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gi-cta section-padding">
        <div className="gi-container">
          <div className="gi-cta-box">
            <div className="gi-cta-symbol">
              <Heart size={35} />
            </div>

            <span className="gi-cta-eyebrow">Join Our Mission</span>

            <h2>Be Part of the Change We Want to See</h2>

            <p>
              Whether you volunteer your time, share your expertise,
              establish a partnership, or support our programmes, your
              contribution matters. Join HRA and help create a better
              future for our communities.
            </p>

            <div className="gi-cta-actions">
              <Link to="/get-involved/volunteer" className="gi-cta-primary">
                Become a Volunteer
                <ArrowRight size={18} />
              </Link>

              <Link to="/get-involved/partnerships" className="gi-cta-secondary">
                Become a Partner
                <Handshake size={18} />
              </Link>

              <Link to="/donate" className="gi-cta-light">
                Donate Now
                <Gift size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;
