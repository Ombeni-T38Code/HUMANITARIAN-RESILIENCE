
import React from "react";
import {
  Users,
  BriefcaseBusiness,
  TrendingUp,
  GraduationCap,
  Lightbulb,
  HandHeart,
  CheckCircle2,
  ArrowRight,
  Target,
  HeartHandshake,
  Store,
  Package,
  Factory,
  Wallet,
  Sprout,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../../components/Layout/PageHero";
import "./SoapMaking.css";

const achievements = [
  {
    number: "35",
    label: "Women Trained",
    description: "Women equipped with practical soap-making skills.",
    icon: Users,
  },
  {
    number: "20",
    label: "Young People Trained",
    description: "Young people introduced to soap production skills.",
    icon: GraduationCap,
  },
  {
    number: "55",
    label: "People Reached",
    description: "Women and young people trained through the initiative.",
    icon: HandHeart,
  },
];

const objectives = [
  {
    icon: Package,
    title: "Practical Soap Production",
    description:
      "Equip participants with practical knowledge and skills in producing soap for household use and potential commercial activities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Entrepreneurship Development",
    description:
      "Encourage participants to explore small business opportunities and develop their entrepreneurial abilities.",
  },
  {
    icon: Wallet,
    title: "Income Generation",
    description:
      "Support women and youth to explore ways of earning income through soap production and product sales.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "Create opportunities for women and young people to develop skills, share knowledge, and support one another.",
  },
];

const activities = [
  {
    number: "01",
    title: "Soap-Making Training",
    description:
      "Provide practical learning opportunities in soap production and basic production processes.",
  },
  {
    number: "02",
    title: "Product Development",
    description:
      "Encourage participants to develop useful soap products and understand basic product quality.",
  },
  {
    number: "03",
    title: "Business Skills",
    description:
      "Introduce basic entrepreneurship, pricing, customer care, and small business management.",
  },
  {
    number: "04",
    title: "Market Opportunities",
    description:
      "Encourage participants to identify potential customers and explore opportunities to sell their products.",
  },
];

const supportNeeds = [
  "Additional practical soap-making training",
  "Soap production equipment and tools",
  "Raw materials and production supplies",
  "A suitable space for soap production",
  "Entrepreneurship and business management training",
  "Support to access markets and create employment",
];

const SoapMaking = () => {
  return (
    <main className="sm-page">
      <PageHero
        eyebrow="Our Projects"
        title="Empowering Women and Youth Through Soap Making"
        description="Building practical production skills, encouraging entrepreneurship, and creating opportunities for women and young people to earn an income."
        image="/images/soap-making-training.jpg"
      />

      {/* INTRODUCTION */}
      <section className="sm-section sm-intro">
        <div className="sm-container sm-intro-grid">
          <div className="sm-intro-content">
            <span className="sm-label">Skills for Economic Empowerment</span>

            <h2>
              Turning Practical Skills Into
              <span> Economic Opportunities</span>
            </h2>

            <p>
              Life has become increasingly difficult for many refugee and
              host community families in Kakuma, especially following the
              reduction and withdrawal of humanitarian aid. Many households
              struggle to meet their basic needs, while women and young people
              have limited opportunities to find jobs and earn an income.
            </p>

            <p>
              Through our soap-making program, Humanitarian Resilience Aid
              aims to equip women and young people with practical skills in
              soap production, create employment opportunities, and help
              participants start small businesses.
            </p>

            <p>
              By combining practical training with entrepreneurship support,
              we aim to help participants turn their skills into sustainable
              livelihood opportunities.
            </p>

            <Link to="/get-involved/partnerships" className="sm-button">
              Partner With Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="sm-intro-visual">
            <img
              src="/images/soap-production.jpg"
              alt="Participants learning soap production"
            />

            <div className="sm-floating-card">
              <div className="sm-floating-icon">
                <Package size={28} />
              </div>
              <div>
                <strong>Skills Into Opportunity</strong>
                <span>Learning, producing, and earning</span>
              </div>
            </div>

            <div className="sm-visual-decoration"></div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="sm-section sm-achievements">
        <div className="sm-container">
          <div className="sm-section-heading">
            <span className="sm-label">Our Progress</span>
            <h2>Building Skills and Confidence</h2>
            <p>
              The project has already provided practical soap-making training
              to women and young people in the community.
            </p>
          </div>

          <div className="sm-achievement-grid">
            {achievements.map((item) => {
              const Icon = item.icon;

              return (
                <article className="sm-achievement-card" key={item.label}>
                  <div className="sm-achievement-icon">
                    <Icon size={27} />
                  </div>

                  <strong className="sm-achievement-number">
                    {item.number}
                  </strong>

                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="sm-section sm-results">
        <div className="sm-container sm-results-grid">
          <div className="sm-results-image">
            <img
              src="/images/soap-making-products.jpg"
              alt="Soap products made through practical training"
            />

            <div className="sm-results-stamp">
              <Sprout size={25} />
              <span>Skills for a Better Future</span>
            </div>
          </div>

          <div className="sm-results-content">
            <span className="sm-label">What We Have Achieved</span>

            <h2>
              From Training to
              <span> Small Business Opportunities</span>
            </h2>

            <p>
              Through the initiative, 35 women and 20 young people have
              received soap-making training. The project has helped
              participants gain practical production skills and explore
              opportunities for economic activity.
            </p>

            <p>
              Some participants have started small soap-making businesses
              and are earning income by selling their products. These
              experiences demonstrate how practical skills can open doors
              to self-employment and local business opportunities.
            </p>

            <div className="sm-result-highlight">
              <TrendingUp size={25} />
              <div>
                <strong>Encouraging Local Entrepreneurship</strong>
                <span>
                  Supporting participants to turn production skills into
                  income-generating activities.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="sm-section sm-objectives">
        <div className="sm-container">
          <div className="sm-section-heading">
            <span className="sm-label">Project Objectives</span>
            <h2>What We Aim to Achieve</h2>
            <p>
              We focus on practical skills, entrepreneurship, and stronger
              livelihood opportunities for women and young people.
            </p>
          </div>

          <div className="sm-objectives-grid">
            {objectives.map((item) => {
              const Icon = item.icon;

              return (
                <article className="sm-objective-card" key={item.title}>
                  <div className="sm-objective-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="sm-section sm-activities">
        <div className="sm-container sm-activities-grid">
          <div className="sm-activities-content">
            <span className="sm-label">Project Activities</span>
            <h2>How We Support Participants</h2>

            <p>
              The initiative combines practical learning with opportunities
              to explore entrepreneurship and income generation.
            </p>

            <div className="sm-activity-list">
              {activities.map((item) => (
                <div className="sm-activity-item" key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sm-activities-visual">
            <img
              src="/images/soap-making-workshop.jpg"
              alt="Women and youth taking part in a soap-making workshop"
            />

            <div className="sm-activities-card">
              <Package size={30} />
              <h3>Practical Skills</h3>
              <p>
                Encouraging learning through hands-on production and
                entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMIC IMPACT */}
      <section className="sm-section sm-impact">
        <div className="sm-container">
          <div className="sm-section-heading">
            <span className="sm-label">Our Vision for Impact</span>
            <h2>Creating Opportunities That Last</h2>
            <p>
              We believe practical skills and small business opportunities
              can help strengthen household livelihoods and community
              resilience.
            </p>
          </div>

          <div className="sm-impact-grid">
            <div className="sm-impact-card">
              <Store size={32} />
              <h3>Small Businesses</h3>
              <p>
                Encourage participants to establish and grow small soap-making
                businesses.
              </p>
            </div>

            <div className="sm-impact-card">
              <Wallet size={32} />
              <h3>Income Opportunities</h3>
              <p>
                Help women and young people explore ways to earn income from
                locally produced soap.
              </p>
            </div>

            <div className="sm-impact-card">
              <Factory size={32} />
              <h3>Local Production</h3>
              <p>
                Promote practical production skills and opportunities for
                community-based enterprise.
              </p>
            </div>

            <div className="sm-impact-card">
              <HeartHandshake size={32} />
              <h3>Economic Independence</h3>
              <p>
                Support participants in working towards greater financial
                independence and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT NEEDS */}
      <section className="sm-section sm-support">
        <div className="sm-container sm-support-grid">
          <div>
            <span className="sm-label">What We Need</span>
            <h2>Help Us Expand Soap-Making Opportunities</h2>

            <p>
              The project has created a foundation for skills development
              and small business opportunities. More support is needed to
              help participants strengthen their production and expand their
              economic activities.
            </p>

            <p>
              With the right resources and partnerships, we can reach more
              women and young people and support existing participants to
              develop their businesses.
            </p>
          </div>

          <div className="sm-support-list">
            {supportNeeds.map((item) => (
              <div className="sm-support-item" key={item}>
                <CheckCircle2 size={21} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="sm-section sm-goals">
        <div className="sm-container">
          <div className="sm-section-heading">
            <span className="sm-label">Looking Ahead</span>
            <h2>Our Future Goals</h2>
          </div>

          <div className="sm-goals-grid">
            <div className="sm-goal-card">
              <Target size={30} />
              <h3>Reach More Participants</h3>
              <p>
                Expand practical soap-making training opportunities for
                additional women and young people.
              </p>
            </div>

            <div className="sm-goal-card">
              <BriefcaseBusiness size={30} />
              <h3>Strengthen Businesses</h3>
              <p>
                Help participants develop their small businesses and improve
                their ability to reach customers.
              </p>
            </div>

            <div className="sm-goal-card">
              <Lightbulb size={30} />
              <h3>Improve Production</h3>
              <p>
                Increase access to equipment, materials, and suitable
                production facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROGRAM */}
      <section className="sm-related">
        <div className="sm-container sm-related-inner">
          <div>
            <span className="sm-label">Related Program</span>
            <h2>Women and Youth Empowerment</h2>
            <p>
              Explore our wider work supporting women and young people
              through skills development, education, and livelihood
              opportunities.
            </p>
          </div>

          <Link
            to="/what-we-do/women-youth-empowerment"
            className="sm-outline-button"
          >
            Explore the Program <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="sm-cta">
        <div className="sm-container sm-cta-inner">
          <div>
            <span className="sm-label">Join Our Mission</span>
            <h2>Help Women and Youth Build Sustainable Livelihoods</h2>
            <p>
              Partner with Humanitarian Resilience Aid to expand practical
              training, support small businesses, and create more
              opportunities for economic empowerment.
            </p>
          </div>

          <div className="sm-cta-actions">
            <Link
              to="/get-involved/partnerships"
              className="sm-button sm-button-light"
            >
              Become a Partner <ArrowRight size={18} />
            </Link>

            <Link to="/donate" className="sm-button sm-button-gold">
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SoapMaking;
 
