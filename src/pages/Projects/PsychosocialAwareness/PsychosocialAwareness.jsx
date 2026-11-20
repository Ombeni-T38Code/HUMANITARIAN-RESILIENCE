
import React from "react";
import {
  ArrowRight,
  Brain,
  Heart,
  HeartHandshake,
  Users,
  HandHeart,
  MessageCircleHeart,
  ShieldCheck,
  Lightbulb,
  Smile,
  CheckCircle2,
  Leaf,
  BookOpen,
  HelpingHand,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../../components/Layout/PageHero";

import "./PsychosocialAwareness.css";

const focusAreas = [
  {
    icon: Brain,
    title: "Mental Health Awareness",
    description:
      "Promoting understanding of mental health and encouraging open, respectful conversations about emotional well-being.",
  },
  {
    icon: Heart,
    title: "Emotional Well-being",
    description:
      "Sharing awareness about emotional health, self-care, and positive ways of responding to everyday challenges.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description:
      "Encouraging supportive relationships, social inclusion, and stronger connections between individuals and families.",
  },
  {
    icon: MessageCircleHeart,
    title: "Open Conversations",
    description:
      "Creating opportunities for people to discuss psychosocial challenges in respectful and supportive environments.",
  },
  {
    icon: ShieldCheck,
    title: "Stigma Reduction",
    description:
      "Challenging misconceptions and promoting dignity, acceptance, and understanding of mental health concerns.",
  },
  {
    icon: HandHeart,
    title: "Support Awareness",
    description:
      "Helping community members understand when and where to seek appropriate psychosocial and professional support.",
  },
];

const approach = [
  {
    number: "01",
    icon: BookOpen,
    title: "Community Education",
    description:
      "Share accessible information about mental health, emotional well-being, and psychosocial support.",
  },
  {
    number: "02",
    icon: MessageCircleHeart,
    title: "Encourage Dialogue",
    description:
      "Promote respectful conversations that help reduce stigma and increase understanding.",
  },
  {
    number: "03",
    icon: Users,
    title: "Strengthen Connections",
    description:
      "Encourage positive relationships and supportive community networks.",
  },
  {
    number: "04",
    icon: HelpingHand,
    title: "Promote Appropriate Support",
    description:
      "Raise awareness of available support services and encourage referrals when needed.",
  },
];

const benefits = [
  "Improved understanding of psychosocial well-being",
  "Greater awareness of mental health challenges",
  "Reduced stigma and discrimination",
  "Stronger community relationships",
  "More supportive environments for families",
  "Better awareness of where to seek help",
];

export default function PsychosocialAwareness() {
  return (
    <main className="psychosocial-awareness-page">
      <PageHero
        eyebrow="OUR PROJECTS"
        title="Psychosocial Awareness"
        description="Promoting emotional well-being, mental health awareness, community connection, and supportive environments for individuals and families."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=85"
      />

      {/* INTRODUCTION */}
      <section className="pa-intro section-padding">
        <div className="pa-container pa-intro-grid">
          <div className="pa-intro-image">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1100&q=85"
              alt="People connecting and supporting each other"
            />

            <div className="pa-image-card">
              <HeartHandshake size={28} />
              <div>
                <strong>You Are Not Alone</strong>
                <span>Building supportive communities</span>
              </div>
            </div>
          </div>

          <div className="pa-intro-content">
            <span className="pa-label">ABOUT THE PROJECT</span>

            <h2>
              Creating Awareness,
              <span> Encouraging Understanding</span>
            </h2>

            <p>
              Displacement, difficult living conditions, uncertainty, and
              everyday challenges can affect the emotional and psychosocial
              well-being of individuals and families.
            </p>

            <p>
              Many people experience stress, isolation, grief, and other
              emotional challenges but may not have enough information about
              where to find support or feel comfortable discussing their
              experiences.
            </p>

            <p>
              Through our Psychosocial Awareness project, Humanitarian
              Resilience Aid promotes understanding, open conversations,
              social connection, and awareness of appropriate support
              services.
            </p>

            <Link to="/contact" className="pa-primary-btn">
              Connect With Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="pa-importance section-padding">
        <div className="pa-container pa-importance-grid">
          <div className="pa-importance-content">
            <span className="pa-label">WHY THIS PROJECT MATTERS</span>

            <h2>
              Well-being Begins With
              <span> Awareness and Understanding</span>
            </h2>

            <p>
              Psychosocial well-being is connected to how people think,
              feel, relate to others, and respond to their surroundings.
              A supportive community can help people feel respected,
              connected, and less isolated.
            </p>

            <p>
              Raising awareness helps individuals and families recognize
              psychosocial challenges, understand the importance of
              emotional well-being, and become more aware of available
              support.
            </p>

            <div className="pa-importance-points">
              <div>
                <CheckCircle2 size={20} />
                <span>Encourages open and respectful conversations</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Promotes understanding and acceptance</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Strengthens community support networks</span>
              </div>
            </div>
          </div>

          <div className="pa-importance-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
              alt="Community members working together"
            />
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="pa-focus section-padding">
        <div className="pa-container">
          <div className="pa-section-heading">
            <span className="pa-label">OUR AREAS OF FOCUS</span>

            <h2>Promoting Psychosocial Well-being</h2>

            <p>
              We focus on awareness and community engagement that
              encourages understanding, connection, dignity, and access
              to appropriate support.
            </p>
          </div>

          <div className="pa-focus-grid">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="pa-focus-card" key={item.title}>
                  <span className="pa-focus-number">
                    0{index + 1}
                  </span>

                  <div className="pa-focus-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="pa-focus-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="pa-activities section-padding">
        <div className="pa-container pa-activities-grid">
          <div className="pa-activities-image">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1100&q=85"
              alt="People participating in a community discussion"
            />
          </div>

          <div className="pa-activities-content">
            <span className="pa-label">COMMUNITY ENGAGEMENT</span>

            <h2>
              Bringing People Together Through Awareness
            </h2>

            <p>
              Community engagement creates opportunities for people to
              learn, share knowledge, build relationships, and understand
              the importance of psychosocial well-being.
            </p>

            <div className="pa-activity-list">
              <div className="pa-activity-item">
                <div className="pa-activity-icon">
                  <BookOpen size={22} />
                </div>

                <div>
                  <h3>Awareness Sessions</h3>
                  <p>
                    Sharing information about mental health and
                    psychosocial well-being.
                  </p>
                </div>
              </div>

              <div className="pa-activity-item">
                <div className="pa-activity-icon">
                  <Users size={22} />
                </div>

                <div>
                  <h3>Community Discussions</h3>
                  <p>
                    Encouraging respectful dialogue and shared
                    understanding.
                  </p>
                </div>
              </div>

              <div className="pa-activity-item">
                <div className="pa-activity-icon">
                  <HeartHandshake size={22} />
                </div>

                <div>
                  <h3>Supportive Connections</h3>
                  <p>
                    Promoting social connection and awareness of
                    appropriate support options.
                  </p>
                </div>
              </div>

              <div className="pa-activity-item">
                <div className="pa-activity-icon">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h3>Stigma Reduction</h3>
                  <p>
                    Promoting acceptance, respect, and inclusion for
                    everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="pa-approach section-padding">
        <div className="pa-container">
          <div className="pa-section-heading">
            <span className="pa-label">OUR APPROACH</span>

            <h2>Building Supportive Communities Together</h2>

            <p>
              We believe awareness, compassion, and community
              participation are important foundations for psychosocial
              well-being.
            </p>
          </div>

          <div className="pa-approach-grid">
            {approach.map((step) => {
              const Icon = step.icon;

              return (
                <article className="pa-approach-card" key={step.number}>
                  <span className="pa-approach-number">
                    {step.number}
                  </span>

                  <div className="pa-approach-icon">
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
      <section className="pa-benefits section-padding">
        <div className="pa-container pa-benefits-grid">
          <div className="pa-benefits-content">
            <span className="pa-label">OUR OBJECTIVES</span>

            <h2>
              Encouraging a More Caring and Inclusive Community
            </h2>

            <p>
              Our project aims to improve awareness, encourage supportive
              relationships, and help create an environment where people
              feel respected and understood.
            </p>

            <Link
              to="/what-we-do/psychosocial-support"
              className="pa-text-link"
            >
              Explore Our Psychosocial Support Program
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="pa-benefits-list">
            {benefits.map((benefit) => (
              <div className="pa-benefit-item" key={benefit}>
                <CheckCircle2 size={21} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY MESSAGE */}
      <section className="pa-message section-padding">
        <div className="pa-container">
          <div className="pa-message-inner">
            <div className="pa-message-icon">
              <Sparkles size={32} />
            </div>

            <span>OUR BELIEF</span>

            <h2>
              A Caring Community Can Make a Difference
            </h2>

            <p>
              Everyone deserves to be heard, respected, and supported.
              Together, we can create communities where people feel
              connected, included, and encouraged to seek help when they
              need it.
            </p>

            <div className="pa-message-decoration">
              <Heart size={18} />
              <span>Care • Understanding • Inclusion</span>
              <Heart size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pa-cta section-padding">
        <div className="pa-container">
          <div className="pa-cta-content">
            <div className="pa-cta-icon">
              <HeartHandshake size={32} />
            </div>

            <span>BE PART OF THE CHANGE</span>

            <h2>
              Help Us Build a More Supportive Community
            </h2>

            <p>
              Join Humanitarian Resilience Aid in promoting psychosocial
              awareness, emotional well-being, dignity, and community
              connection.
            </p>

            <div className="pa-cta-actions">
              <Link to="/get-involved" className="pa-cta-primary">
                Get Involved <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="pa-cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
