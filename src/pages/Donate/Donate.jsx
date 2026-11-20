
import React from "react";
import {
  Heart,
  HandHeart,
  Users,
  GraduationCap,
  Stethoscope,
  Baby,
  Brain,
  BriefcaseBusiness,
  ArrowRight,
  CheckCircle2,
  Gift,
  Globe,
  Mail,
  Phone,
  MapPin,
  Handshake,
  Package,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../components/Layout/PageHero";
import "./Donate.css";

const supportAreas = [
  {
    icon: Stethoscope,
    title: "Community Health",
    description:
      "Support community health education, awareness activities, and access to essential health information.",
  },
  {
    icon: GraduationCap,
    title: "Education & Digital Skills",
    description:
      "Help children and young people access learning resources, digital education, and practical technology skills.",
  },
  {
    icon: HandHeart,
    title: "Women & Youth Empowerment",
    description:
      "Support vocational training, soap-making activities, entrepreneurship, and economic opportunities.",
  },
  {
    icon: Baby,
    title: "Child Development",
    description:
      "Contribute to childcare support, safe learning opportunities, and activities that promote child development.",
  },
  {
    icon: Brain,
    title: "Psychosocial Support",
    description:
      "Help strengthen psychosocial awareness, community inclusion, and emotional well-being initiatives.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Livelihoods",
    description:
      "Help individuals and families develop practical skills and sustainable income-generating opportunities.",
  },
];

const contributionOptions = [
  {
    icon: Gift,
    title: "Financial Contributions",
    description:
      "Provide financial support toward community programmes, training activities, and essential project resources.",
  },
  {
    icon: Package,
    title: "Donate Supplies",
    description:
      "Contribute educational materials, healthcare supplies, computers, vocational tools, and other useful equipment.",
  },
  {
    icon: Users,
    title: "Give Your Time",
    description:
      "Share your knowledge, professional experience, and skills by volunteering with our community activities.",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    description:
      "Collaborate with HRA through programme support, technical expertise, mentorship, or resource mobilization.",
  },
];

const donationPrinciples = [
  "Supporting community-focused programmes",
  "Prioritizing practical community needs",
  "Encouraging inclusion and equal opportunities",
  "Promoting sustainable development",
  "Strengthening local participation and resilience",
];

function Donate() {
  return (
    <main className="donate-page">
      <PageHero
        eyebrow="SUPPORT OUR MISSION"
        title="Your Support Can Create Lasting Change"
        description="Stand with refugee and host communities in Kakuma. Your contribution can help expand opportunities in healthcare, education, child development, and economic empowerment."
        image="/images/donate-hero.jpg"
      />

      {/* INTRODUCTION */}
      <section className="donate-intro section-padding">
        <div className="donate-container donate-intro-grid">
          <div className="donate-intro-image">
            <img
              src="/images/donate-community.jpg"
              alt="Community members participating in a local activity"
            />
            <div className="donate-image-card">
              <Heart size={28} />
              <div>
                <strong>Every Contribution Matters</strong>
                <span>Support opportunities and community resilience</span>
              </div>
            </div>
          </div>

          <div className="donate-intro-content">
            <span className="donate-label">MAKE A DIFFERENCE</span>
            <h2>
              Together, We Can Build a <span>Better Future</span>
            </h2>

            <p>
              Many refugee and host community families face challenges in
              accessing healthcare, education, livelihood opportunities, and
              essential support services.
            </p>

            <p>
              Humanitarian Resilience Aid works to address these challenges
              through community-based programmes that promote dignity,
              inclusion, skills development, and resilience.
            </p>

            <p>
              Your generosity can help us strengthen these activities and
              reach more people with meaningful opportunities.
            </p>

            <a href="#donation-contact" className="donate-primary-btn">
              Find Ways to Support <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* SUPPORT AREAS */}
      <section className="donate-areas section-padding">
        <div className="donate-container">
          <div className="donate-heading">
            <span className="donate-label">WHERE YOUR SUPPORT GOES</span>
            <h2>Support the Work That Matters</h2>
            <p>
              Contributions can help strengthen the different areas of our
              community-focused work.
            </p>
          </div>

          <div className="donate-area-grid">
            {supportAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article className="donate-area-card" key={area.title}>
                  <div className="donate-icon">
                    <Icon size={27} />
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <Link to="/what-we-do">
                    Learn More <ArrowRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WAYS TO GIVE */}
      <section className="donate-ways section-padding">
        <div className="donate-container">
          <div className="donate-heading">
            <span className="donate-label">WAYS TO CONTRIBUTE</span>
            <h2>There Are Many Ways to Help</h2>
            <p>
              Whether through financial support, resources, time, or
              collaboration, your contribution can make a meaningful
              difference.
            </p>
          </div>

          <div className="donate-ways-grid">
            {contributionOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article className="donate-way-card" key={option.title}>
                  <div className="donate-way-icon">
                    <Icon size={30} />
                  </div>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="donate-feature section-padding">
        <div className="donate-container donate-feature-grid">
          <div className="donate-feature-image">
            <img
              src="/images/donate-soap-making.jpg"
              alt="Women and youth participating in practical skills training"
            />
          </div>

          <div className="donate-feature-content">
            <span className="donate-label">SUPPORT ECONOMIC EMPOWERMENT</span>
            <h2>Help Women and Youth Build Sustainable Livelihoods</h2>

            <p>
              Our soap-making initiative equips women and young people with
              practical production skills and encourages them to explore
              small-business opportunities.
            </p>

            <p>
              Support can help provide production equipment, raw materials,
              suitable working spaces, and further training opportunities.
            </p>

            <Link to="/projects/soap-making" className="donate-primary-btn">
              Explore Soap Making Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="donate-principles section-padding">
        <div className="donate-container donate-principles-grid">
          <div>
            <span className="donate-label">OUR COMMITMENT</span>
            <h2>Supporting Meaningful Community Impact</h2>
            <p>
              We value contributions that respond to community priorities and
              strengthen opportunities for people to participate in their own
              development.
            </p>

            <ul>
              {donationPrinciples.map((principle) => (
                <li key={principle}>
                  <CheckCircle2 size={19} />
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          <div className="donate-principles-image">
            <img
              src="/images/donate-training.jpg"
              alt="Community training and learning activity"
            />
          </div>
        </div>
      </section>

      {/* DONATION CONTACT */}
      <section
        className="donate-contact section-padding"
        id="donation-contact"
      >
        <div className="donate-container">
          <div className="donate-contact-box">
            <div className="donate-contact-heart">
              <Heart size={35} />
            </div>

            <span>YOUR GENEROSITY MAKES A DIFFERENCE</span>
            <h2>Ready to Support Our Mission?</h2>

            <p>
              Contact our team to discuss how you can contribute financially,
              donate useful resources, volunteer your skills, or establish a
              partnership with Humanitarian Resilience Aid.
            </p>

            <div className="donate-contact-actions">
              <a
                href="mailto:humanitarianraid@gmail.com?subject=Donation%20and%20Support%20Inquiry"
                className="donate-contact-btn donate-contact-btn-light"
              >
                <Mail size={18} />
                Email Our Team
              </a>

              <a
                href="tel:+254720014028"
                className="donate-contact-btn donate-contact-btn-outline"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>

            <div className="donate-contact-details">
              <span>
                <Mail size={16} /> humanitarianraid@gmail.com
              </span>
              <span>
                <Phone size={16} /> +254 720 014028
              </span>
              <span>
                <MapPin size={16} /> Kakuma Refugee Camp, Kenya
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER WAYS TO HELP */}
      <section className="donate-bottom">
        <div className="donate-container donate-bottom-inner">
          <div>
            <h2>Be Part of the Change</h2>
            <p>
              Explore more ways to get involved and support our mission.
            </p>
          </div>

          <div className="donate-bottom-links">
            <Link to="/get-involved/volunteer">
              Become a Volunteer <ArrowRight size={16} />
            </Link>
            <Link to="/get-involved/partnerships">
              Become a Partner <ArrowRight size={16} />
            </Link>
            <Link to="/contact">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Donate;
