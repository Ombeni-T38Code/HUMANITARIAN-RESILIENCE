
import React from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  HandCoins,
  Lightbulb,
  Users,
  Store,
  GraduationCap,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Hammer,
  Wallet,
  Sprout,
  Target,
} from "lucide-react";

import PageHero from "../../../components/Layout/PageHero";
import "./Livelihoods.css";

const livelihoodAreas = [
  {
    icon: <GraduationCap />,
    title: "Vocational Skills Training",
    description:
      "Promoting practical training that equips women and young people with useful skills for employment and self-employment.",
  },
  {
    icon: <Store />,
    title: "Small Business Development",
    description:
      "Encouraging individuals to establish and grow small businesses that respond to community needs.",
  },
  {
    icon: <HandCoins />,
    title: "Income Generation",
    description:
      "Supporting opportunities for families to develop sustainable ways of earning income and meeting their basic needs.",
  },
  {
    icon: <Lightbulb />,
    title: "Entrepreneurship",
    description:
      "Encouraging creativity, business planning, problem-solving, and the confidence to turn practical skills into business opportunities.",
  },
  {
    icon: <Wallet />,
    title: "Financial Awareness",
    description:
      "Promoting basic financial knowledge, budgeting, saving, and responsible management of business income.",
  },
  {
    icon: <Users />,
    title: "Women's and Youth Empowerment",
    description:
      "Creating opportunities for women and young people to participate in economic activities and strengthen their independence.",
  },
];

const livelihoodSteps = [
  {
    number: "01",
    title: "Identify Skills and Opportunities",
    description:
      "Understand community needs, existing abilities, and practical opportunities for income generation.",
  },
  {
    number: "02",
    title: "Provide Practical Training",
    description:
      "Encourage hands-on learning that helps participants develop useful vocational and business skills.",
  },
  {
    number: "03",
    title: "Support Business Development",
    description:
      "Promote entrepreneurship, business planning, and access to appropriate resources and guidance.",
  },
  {
    number: "04",
    title: "Encourage Sustainable Growth",
    description:
      "Help participants strengthen their activities, improve income opportunities, and build greater resilience.",
  },
];

const livelihoodBenefits = [
  "Improved access to practical vocational skills",
  "More opportunities for self-employment",
  "Stronger small business and entrepreneurship skills",
  "Increased participation of women and young people in economic activities",
  "Better understanding of saving and financial management",
  "Greater household resilience and economic independence",
];

const Livelihoods = () => {
  return (
    <main className="livelihoods-page">
      <PageHero
        eyebrow="WHAT WE DO"
        title="Livelihoods"
        subtitle="Building economic opportunities through practical skills, entrepreneurship, and community-led initiatives."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "What We Do", link: "/what-we-do" },
          { label: "Livelihoods" },
        ]}
      />

      {/* INTRODUCTION */}
      <section className="liv-intro section-padding">
        <div className="liv-container liv-intro-grid">
          <div className="liv-intro-image">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
              alt="People participating in a business and skills development activity"
            />

            <div className="liv-image-note">
              <span className="liv-note-icon"><TrendingUp /></span>
              <div>
                <strong>Skills to Opportunities</strong>
                <p>Supporting people to build more resilient livelihoods.</p>
              </div>
            </div>
          </div>

          <div className="liv-intro-content">
            <span className="liv-label">OUR COMMITMENT</span>
            <h2>
              Creating Opportunities for <span>Economic Independence</span>
            </h2>

            <p>
              Many families in refugee and host communities face challenges
              accessing stable employment and reliable sources of income.
              Limited economic opportunities can make it difficult to meet
              everyday household needs.
            </p>

            <p>
              At Humanitarian Resilience Aid, we promote livelihoods through
              practical skills development, entrepreneurship, small business
              initiatives, and opportunities for income generation.
            </p>

            <p>
              We believe that when people have access to relevant skills and
              economic opportunities, they can strengthen their independence,
              support their families, and contribute to their communities.
            </p>

            <Link to="/projects" className="liv-primary-btn">
              Explore Our Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LIVELIHOOD AREAS */}
      <section className="liv-areas section-padding">
        <div className="liv-container">
          <div className="liv-heading">
            <span className="liv-label">OUR LIVELIHOOD ACTIVITIES</span>
            <h2>
              Turning Skills Into <span>Economic Opportunities</span>
            </h2>
            <p>
              We encourage practical, inclusive, and community-focused
              approaches that help individuals improve their livelihoods.
            </p>
          </div>

          <div className="liv-areas-grid">
            {livelihoodAreas.map((item, index) => (
              <article className="liv-area-card" key={item.title}>
                <span className="liv-area-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="liv-area-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="liv-card-line"></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOAP MAKING FEATURE */}
      <section className="liv-feature section-padding">
        <div className="liv-container liv-feature-grid">
          <div className="liv-feature-image">
            <img
              src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1100&q=85"
              alt="Handmade soap products representing vocational enterprise"
            />

            <div className="liv-feature-caption">
              <span><Hammer /></span>
              <div>
                <strong>Practical Skills</strong>
                <p>Learning by doing and creating opportunities.</p>
              </div>
            </div>
          </div>

          <div className="liv-feature-content">
            <span className="liv-label">FEATURED INITIATIVE</span>
            <h2>
              Empowering Women and Youth Through <span>Soap Making</span>
            </h2>

            <p>
              Through our soap-making initiative, we aim to equip women and
              young people with practical production skills and encourage
              them to explore small business opportunities.
            </p>

            <p>
              The initiative has trained 35 women and 20 young people.
              Some participants have started small soap-making businesses
              and earn income by selling their products.
            </p>

            <div className="liv-feature-stats">
              <div>
                <strong>35</strong>
                <span>Women trained</span>
              </div>
              <div>
                <strong>20</strong>
                <span>Young people trained</span>
              </div>
            </div>

            <Link to="/projects/soap-making" className="liv-primary-btn">
              Discover Soap Making Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="liv-process section-padding">
        <div className="liv-container">
          <div className="liv-heading">
            <span className="liv-label">HOW WE WORK</span>
            <h2>
              From Practical Skills to <span>Sustainable Livelihoods</span>
            </h2>
            <p>
              We encourage a step-by-step approach that helps participants
              develop skills and explore opportunities for economic growth.
            </p>
          </div>

          <div className="liv-process-grid">
            {livelihoodSteps.map((step) => (
              <article className="liv-process-card" key={step.number}>
                <span className="liv-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="liv-benefits section-padding">
        <div className="liv-container liv-benefits-grid">
          <div className="liv-benefits-content">
            <span className="liv-label">THE IMPACT WE SEEK</span>
            <h2>
              Stronger Livelihoods, <span>More Resilient Families</span>
            </h2>

            <p>
              Economic empowerment can help individuals and families improve
              their living conditions, respond to challenges, and participate
              more actively in community development.
            </p>

            <div className="liv-benefit-list">
              {livelihoodBenefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="liv-benefits-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
              alt="People working together on a livelihood activity"
            />
            <div className="liv-benefits-badge">
              <Sprout size={25} />
              <span>Growing Together</span>
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMIC EMPOWERMENT */}
      <section className="liv-empowerment section-padding">
        <div className="liv-container">
          <div className="liv-heading">
            <span className="liv-label">OUR VISION FOR EMPOWERMENT</span>
            <h2>
              Building a Future With <span>More Possibilities</span>
            </h2>
            <p>
              We want individuals and families to have opportunities to
              develop their abilities, earn income, and contribute to
              community progress.
            </p>
          </div>

          <div className="liv-empowerment-grid">
            <div className="liv-empowerment-card">
              <div><Target /></div>
              <h3>Opportunity</h3>
              <p>
                Encouraging access to practical skills, resources, and
                opportunities that respond to community needs.
              </p>
            </div>

            <div className="liv-empowerment-card">
              <div><BriefcaseBusiness /></div>
              <h3>Entrepreneurship</h3>
              <p>
                Supporting people to explore self-employment and develop
                small businesses using their skills and creativity.
              </p>
            </div>

            <div className="liv-empowerment-card">
              <div><HeartHandshake /></div>
              <h3>Inclusion</h3>
              <p>
                Promoting meaningful economic participation for women,
                young people, and underserved community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      <section className="liv-projects section-padding">
        <div className="liv-container">
          <div className="liv-heading">
            <span className="liv-label">RELATED PROJECTS</span>
            <h2>
              Initiatives That Support <span>Economic Empowerment</span>
            </h2>
            <p>
              Explore projects that help participants develop practical
              skills and access new opportunities.
            </p>
          </div>

          <div className="liv-project-card">
            <div className="liv-project-image">
              <img
                src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=900&q=85"
                alt="Soap-making products"
              />
            </div>

            <div className="liv-project-content">
              <span>VOCATIONAL SKILLS & ENTREPRENEURSHIP</span>
              <h3>Empowering Women and Youth Through Soap Making</h3>
              <p>
                Practical soap production training that encourages
                entrepreneurship, small business development, and
                income-generating opportunities.
              </p>
              <Link to="/projects/soap-making">
                View Project <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="liv-cta">
        <div className="liv-container liv-cta-content">
          <div className="liv-cta-icon"><HandCoins /></div>
          <span className="liv-label">JOIN OUR MISSION</span>

          <h2>
            Help Create More Opportunities for Economic Independence
          </h2>

          <p>
            Work with us to support practical skills training,
            entrepreneurship, and livelihood opportunities for refugee
            and host communities.
          </p>

          <div className="liv-cta-actions">
            <Link to="/get-involved" className="liv-cta-light">
              Get Involved <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="liv-cta-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Livelihoods;
