
import React from "react";
import {
  ArrowRight,
  Handshake,
  HeartHandshake,
  Stethoscope,
  GraduationCap,
  Users,
  Baby,
  Brain,
  BriefcaseBusiness,
  Lightbulb,
  Package,
  Target,
  MessageCircle,
  CheckCircle2,
  Building2,
  Globe2,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../../components/Layout/PageHero";
import "./Partnerships.css";

const partnershipAreas = [
  {
    icon: Stethoscope,
    title: "Community Health",
    description:
      "Collaborate on health education, awareness campaigns, community outreach, and access to essential health information.",
  },
  {
    icon: GraduationCap,
    title: "Education & Digital Skills",
    description:
      "Support learning opportunities, digital literacy, coding education, and skills development for children and young people.",
  },
  {
    icon: HeartHandshake,
    title: "Women & Youth Empowerment",
    description:
      "Help women and young people develop practical skills, access opportunities, and strengthen their economic independence.",
  },
  {
    icon: Baby,
    title: "Child Development",
    description:
      "Work together to promote safe learning environments, childcare support, and positive childhood development.",
  },
  {
    icon: Brain,
    title: "Psychosocial Support",
    description:
      "Strengthen community awareness, emotional well-being, inclusion, and access to psychosocial support.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Livelihoods",
    description:
      "Support practical training, entrepreneurship, income-generating activities, and sustainable livelihood opportunities.",
  },
];

const partnershipTypes = [
  {
    icon: Heart,
    title: "Financial Support",
    description:
      "Provide financial resources to help implement community programmes and expand opportunities for vulnerable households.",
  },
  {
    icon: Lightbulb,
    title: "Technical Expertise",
    description:
      "Share professional knowledge, technical guidance, and specialized skills that strengthen programme delivery.",
  },
  {
    icon: Users,
    title: "Programme Implementation",
    description:
      "Work alongside HRA to design, coordinate, and implement community-focused projects.",
  },
  {
    icon: Package,
    title: "Equipment & Resources",
    description:
      "Contribute learning materials, healthcare supplies, training equipment, technology, and other essential resources.",
  },
  {
    icon: GraduationCap,
    title: "Training & Mentorship",
    description:
      "Provide training, coaching, mentorship, and professional development opportunities.",
  },
  {
    icon: Globe2,
    title: "Advocacy & Knowledge Sharing",
    description:
      "Promote community voices, share experiences, and advocate for inclusive and sustainable development.",
  },
];

const partnershipSteps = [
  {
    number: "01",
    title: "Connect With Us",
    description:
      "Contact our team and introduce your organization, institution, or partnership idea.",
  },
  {
    number: "02",
    title: "Discuss Priorities",
    description:
      "We discuss community needs, shared interests, objectives, and possible areas of collaboration.",
  },
  {
    number: "03",
    title: "Design the Partnership",
    description:
      "Together, we identify activities, responsibilities, resources, and expected outcomes.",
  },
  {
    number: "04",
    title: "Implement & Learn",
    description:
      "Work together, monitor progress, share lessons, and identify opportunities to improve the partnership.",
  },
];

const partnerGroups = [
  "Non-governmental organizations",
  "Humanitarian and development organizations",
  "Local and international donors",
  "Educational institutions",
  "Healthcare institutions",
  "Private sector organizations",
  "Community-based organizations",
  "Professional and volunteer networks",
];

function Partnerships() {
  return (
    <main className="partnership-page">
      <PageHero
        eyebrow="WORK WITH US"
        title="Building Partnerships That Create Lasting Change"
        description="We believe meaningful collaboration can create stronger opportunities for refugee and host communities. Join Humanitarian Resilience Aid in building healthier, more inclusive, and resilient communities."
        image="/images/partnerships-hero.jpg"
      />

      {/* INTRODUCTION */}
      <section className="partnership-intro section-padding">
        <div className="partnership-container partnership-intro-grid">
          <div className="partnership-intro-image">
            <img
              src="/images/partnerships-community.jpg"
              alt="Community members working together"
            />
            <div className="partnership-image-caption">
              <Handshake size={27} />
              <div>
                <strong>Stronger Together</strong>
                <span>Collaboration for community impact</span>
              </div>
            </div>
          </div>

          <div className="partnership-intro-content">
            <span className="partnership-label">PARTNER WITH HRA</span>
            <h2>
              Together, We Can Make a <span>Greater Difference</span>
            </h2>

            <p>
              Humanitarian Resilience Aid (HRA) believes that lasting community
              development requires collaboration, shared responsibility, and
              meaningful partnerships.
            </p>

            <p>
              We welcome organizations, institutions, donors, businesses, and
              individuals who share our commitment to improving the lives of
              refugees and host communities in Kakuma.
            </p>

            <p>
              By combining resources, knowledge, experience, and community
              participation, we can create opportunities that respond to real
              needs and support sustainable development.
            </p>

            <Link to="/contact" className="partnership-btn">
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHO CAN PARTNER */}
      <section className="partnership-who section-padding">
        <div className="partnership-container">
          <div className="partnership-heading">
            <span className="partnership-label">OUR COLLABORATORS</span>
            <h2>Who Can Partner With Us?</h2>
            <p>
              We are open to working with different organizations and
              institutions that share our vision of inclusive community
              development.
            </p>
          </div>

          <div className="partnership-groups">
            {partnerGroups.map((group, index) => (
              <div className="partnership-group" key={group}>
                <CheckCircle2 size={19} />
                <span>{group}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP AREAS */}
      <section className="partnership-areas section-padding">
        <div className="partnership-container">
          <div className="partnership-heading">
            <span className="partnership-label">WHERE WE CAN COLLABORATE</span>
            <h2>Our Partnership Areas</h2>
            <p>
              Partnerships can contribute to different areas of our work,
              depending on shared priorities and community needs.
            </p>
          </div>

          <div className="partnership-area-grid">
            {partnershipAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article className="partnership-area-card" key={area.title}>
                  <div className="partnership-icon">
                    <Icon size={27} />
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <Link to="/what-we-do">
                    Explore Our Work <ArrowRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TYPES */}
      <section className="partnership-types section-padding">
        <div className="partnership-container">
          <div className="partnership-heading">
            <span className="partnership-label">WAYS TO COLLABORATE</span>
            <h2>How We Can Work Together</h2>
            <p>
              We welcome different forms of support and collaboration based on
              the strengths and capacities of each partner.
            </p>
          </div>

          <div className="partnership-type-grid">
            {partnershipTypes.map((type) => {
              const Icon = type.icon;

              return (
                <article className="partnership-type-card" key={type.title}>
                  <Icon size={29} />
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PROCESS */}
      <section className="partnership-process section-padding">
        <div className="partnership-container">
          <div className="partnership-heading">
            <span className="partnership-label">OUR APPROACH</span>
            <h2>How to Become a Partner</h2>
            <p>
              We aim to make collaboration clear, inclusive, and focused on
              shared objectives.
            </p>
          </div>

          <div className="partnership-process-grid">
            {partnershipSteps.map((step) => (
              <article className="partnership-step" key={step.number}>
                <span className="partnership-step-number">
                  {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="partnership-why section-padding">
        <div className="partnership-container partnership-why-grid">
          <div className="partnership-why-content">
            <span className="partnership-label">OUR SHARED COMMITMENT</span>
            <h2>Creating Opportunities Through Collaboration</h2>
            <p>
              Working together allows us to combine different strengths and
              respond more effectively to the challenges facing refugee and
              host communities.
            </p>

            <ul>
              <li>
                <CheckCircle2 size={19} />
                Community-centred programme development
              </li>
              <li>
                <CheckCircle2 size={19} />
                Inclusive opportunities for women and youth
              </li>
              <li>
                <CheckCircle2 size={19} />
                Knowledge and skills sharing
              </li>
              <li>
                <CheckCircle2 size={19} />
                Cooperation toward sustainable development
              </li>
              <li>
                <CheckCircle2 size={19} />
                Greater community participation and resilience
              </li>
            </ul>
          </div>

          <div className="partnership-why-image">
            <img
              src="/images/partnerships-teamwork.jpg"
              alt="People collaborating on community development"
            />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="partnership-contact section-padding">
        <div className="partnership-container">
          <div className="partnership-contact-box">
            <div className="partnership-contact-icon">
              <Building2 size={34} />
            </div>

            <span>LET'S WORK TOGETHER</span>
            <h2>Have a Partnership Idea?</h2>
            <p>
              We would love to hear from organizations and individuals
              interested in working with us. Let's discuss how our shared
              commitment can create meaningful opportunities for communities.
            </p>

            <div className="partnership-contact-actions">
              <a
                href="mailto:humanitarianraid@gmail.com?subject=Partnership%20Inquiry"
                className="partnership-btn partnership-btn-light"
              >
                <MessageCircle size={18} />
                Email Our Team
              </a>

              <Link
                to="/contact"
                className="partnership-btn partnership-btn-outline"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>

            <div className="partnership-contact-details">
              <span>humanitarianraid@gmail.com</span>
              <span>+254 720 014028</span>
              <span>Kakuma Refugee Camp, Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL LINKS */}
      <section className="partnership-more">
        <div className="partnership-container partnership-more-inner">
          <div>
            <h2>Be Part of the Change</h2>
            <p>
              Explore other ways to contribute to our community-focused work.
            </p>
          </div>

          <div className="partnership-more-links">
            <Link to="/get-involved/volunteer">
              Volunteer <ArrowRight size={16} />
            </Link>
            <Link to="/donate">
              Support Our Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Partnerships;
