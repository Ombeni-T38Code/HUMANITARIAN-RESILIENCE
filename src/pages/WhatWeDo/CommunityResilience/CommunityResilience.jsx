
import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  HeartHandshake,
  Sprout,
  GraduationCap,
  HandHeart,
  Lightbulb,
  Building2,
  Target,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Network,
  HandHelping,
} from "lucide-react";

import PageHero from "../../../components/Layout/PageHero";
import "./CommunityResilience.css";

const resilienceAreas = [
  {
    icon: <Users />,
    title: "Community Participation",
    description:
      "Encouraging community members to participate in identifying challenges, sharing ideas, and developing solutions that respond to local needs.",
  },
  {
    icon: <GraduationCap />,
    title: "Education and Awareness",
    description:
      "Promoting access to knowledge, education, and awareness that helps individuals make informed decisions and improve their lives.",
  },
  {
    icon: <HeartHandshake />,
    title: "Community Partnerships",
    description:
      "Building relationships with local groups, organizations, and stakeholders to strengthen collaboration and community support.",
  },
  {
    icon: <Sprout />,
    title: "Economic Empowerment",
    description:
      "Supporting practical skills, entrepreneurship, and livelihood opportunities that help families strengthen their economic stability.",
  },
  {
    icon: <ShieldCheck />,
    title: "Community Well-being",
    description:
      "Encouraging initiatives that promote health, protection, inclusion, and the overall well-being of community members.",
  },
  {
    icon: <Lightbulb />,
    title: "Local Solutions",
    description:
      "Recognizing local knowledge, abilities, and leadership to develop practical responses to community challenges.",
  },
];

const resiliencePrinciples = [
  {
    number: "01",
    title: "Community-Led Action",
    description:
      "We value local voices and encourage people to take an active role in shaping solutions.",
  },
  {
    number: "02",
    title: "Inclusion and Participation",
    description:
      "We promote meaningful participation of women, youth, children, and underserved groups.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "We believe partnerships and shared responsibility help create stronger community initiatives.",
  },
  {
    number: "04",
    title: "Sustainable Development",
    description:
      "We encourage practical approaches that build skills, strengthen local capacity, and support long-term progress.",
  },
];

const resilienceBenefits = [
  "Stronger relationships and cooperation among community members",
  "Improved access to education and community information",
  "Greater participation in local development activities",
  "More opportunities for skills development and livelihoods",
  "Stronger community networks and partnerships",
  "Increased capacity to respond to everyday challenges",
];

const CommunityResilience = () => {
  return (
    <main className="resilience-page">
      <PageHero
        eyebrow="WHAT WE DO"
        title="Community Resilience"
        subtitle="Strengthening communities through local leadership, collaboration, inclusion, and sustainable opportunities."
        image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1800&q=85"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "What We Do", link: "/what-we-do" },
          { label: "Community Resilience" },
        ]}
      />

      {/* INTRODUCTION */}
      <section className="res-intro section-padding">
        <div className="res-container res-intro-grid">
          <div className="res-intro-image">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=85"
              alt="Community members working together"
            />

            <div className="res-image-note">
              <span><Users /></span>
              <div>
                <strong>Stronger Together</strong>
                <p>Communities grow through shared action.</p>
              </div>
            </div>
          </div>

          <div className="res-intro-content">
            <span className="res-label">OUR COMMITMENT</span>
            <h2>
              Building Stronger Communities Through <span>Collective Action</span>
            </h2>

            <p>
              Refugee and host communities face different social and economic
              challenges that can affect families, opportunities, and access
              to essential services. Building resilience requires people to
              work together and develop practical ways to respond to these
              challenges.
            </p>

            <p>
              At Humanitarian Resilience Aid, we promote community resilience
              through education, health awareness, skills development,
              inclusion, partnerships, and community participation.
            </p>

            <p>
              We believe communities have valuable knowledge, strengths, and
              abilities. When these strengths are supported, people can take
              an active role in creating positive change.
            </p>

            <Link to="/contact" className="res-primary-btn">
              Work With Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="res-areas section-padding">
        <div className="res-container">
          <div className="res-heading">
            <span className="res-label">OUR AREAS OF FOCUS</span>
            <h2>
              What Makes a <span>Community Resilient?</span>
            </h2>
            <p>
              We support connected approaches that help individuals,
              families, and communities build their capacity and opportunities.
            </p>
          </div>

          <div className="res-areas-grid">
            {resilienceAreas.map((item, index) => (
              <article className="res-area-card" key={item.title}>
                <span className="res-area-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="res-area-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="res-card-line"></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY APPROACH */}
      <section className="res-approach section-padding">
        <div className="res-container res-approach-grid">
          <div className="res-approach-content">
            <span className="res-label">OUR APPROACH</span>
            <h2>
              Change Starts <span>Within the Community</span>
            </h2>

            <p>
              Sustainable community development begins by listening to
              people, understanding local priorities, and creating
              opportunities for meaningful participation.
            </p>

            <p>
              We encourage community members to contribute their skills,
              experiences, and ideas while working with partners and
              stakeholders toward shared goals.
            </p>

            <Link to="/what-we-do" className="res-text-link">
              Explore All Our Programs <ArrowRight size={18} />
            </Link>
          </div>

          <div className="res-principles-list">
            {resiliencePrinciples.map((item) => (
              <article className="res-principle-card" key={item.number}>
                <span className="res-principle-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CONTRIBUTION */}
      <section className="res-contribution section-padding">
        <div className="res-container">
          <div className="res-heading">
            <span className="res-label">CONNECTED COMMUNITY PROGRAMS</span>
            <h2>
              Working Across Different Areas of <span>Community Life</span>
            </h2>
            <p>
              Our program areas contribute to a broader vision of healthy,
              informed, empowered, and resilient communities.
            </p>
          </div>

          <div className="res-contribution-grid">
            <Link to="/what-we-do/community-health" className="res-contribution-card">
              <span><HandHeart /></span>
              <h3>Community Health</h3>
              <p>Promoting health awareness and access to well-being information.</p>
              <ArrowRight />
            </Link>

            <Link to="/what-we-do/education" className="res-contribution-card">
              <span><GraduationCap /></span>
              <h3>Education and Digital Skills</h3>
              <p>Encouraging learning, digital literacy, and practical knowledge.</p>
              <ArrowRight />
            </Link>

            <Link to="/what-we-do/women-youth-empowerment" className="res-contribution-card">
              <span><Users /></span>
              <h3>Women and Youth Empowerment</h3>
              <p>Creating opportunities for participation and independence.</p>
              <ArrowRight />
            </Link>

            <Link to="/what-we-do/livelihoods" className="res-contribution-card">
              <span><Building2 /></span>
              <h3>Livelihoods</h3>
              <p>Supporting skills development and income-generating activities.</p>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="res-benefits section-padding">
        <div className="res-container res-benefits-grid">
          <div className="res-benefits-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
              alt="People collaborating in a community initiative"
            />

            <div className="res-image-badge">
              <Network size={24} />
              <span>Connected Communities</span>
            </div>
          </div>

          <div className="res-benefits-content">
            <span className="res-label">THE CHANGE WE WANT TO SEE</span>
            <h2>
              Communities That Can <span>Grow and Thrive</span>
            </h2>

            <p>
              We aim to contribute to communities where people have the
              knowledge, skills, relationships, and opportunities to respond
              to challenges and pursue a better future.
            </p>

            <div className="res-benefit-list">
              {resilienceBenefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="res-partnerships section-padding">
        <div className="res-container res-partnerships-grid">
          <div className="res-partnerships-content">
            <span className="res-label">WORKING TOGETHER</span>
            <h2>
              Partnerships Create <span>Stronger Impact</span>
            </h2>

            <p>
              Community resilience grows when local organizations,
              community leaders, service providers, and partners work
              together toward shared priorities.
            </p>

            <p>
              We welcome collaboration with organizations and individuals
              who share our commitment to health, education, empowerment,
              and sustainable community development.
            </p>

            <Link to="/get-involved/partnerships" className="res-primary-btn">
              Become a Partner <ArrowRight size={18} />
            </Link>
          </div>

          <div className="res-partnerships-image">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=85"
              alt="Partners working together during a meeting"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="res-cta">
        <div className="res-container res-cta-content">
          <div className="res-cta-icon"><Globe2 /></div>
          <span className="res-label">BE PART OF THE CHANGE</span>

          <h2>
            Together, We Can Build More Resilient Communities
          </h2>

          <p>
            Join Humanitarian Resilience Aid in supporting community-led
            initiatives, strengthening local capacity, and creating
            opportunities for a better future.
          </p>

          <div className="res-cta-actions">
            <Link to="/get-involved" className="res-cta-light">
              Get Involved <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="res-cta-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommunityResilience;
