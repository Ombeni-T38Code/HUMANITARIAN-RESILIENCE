
import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Heart,
  HandHeart,
  Users,
  MessageCircleHeart,
  ShieldCheck,
  Smile,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  HelpingHand,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

import PageHero from "../../../components/Layout/PageHero";
import "./PsychosocialSupport.css";

const supportAreas = [
  {
    icon: <Brain />,
    title: "Mental Health Awareness",
    description:
      "Promoting understanding of mental health, emotional well-being, and the importance of seeking support when facing difficult situations.",
  },
  {
    icon: <Heart />,
    title: "Emotional Support",
    description:
      "Encouraging compassionate environments where individuals can express their feelings, feel heard, and receive appropriate support.",
  },
  {
    icon: <Users />,
    title: "Community Support",
    description:
      "Strengthening relationships and community networks that help individuals and families support one another.",
  },
  {
    icon: <MessageCircleHeart />,
    title: "Positive Communication",
    description:
      "Encouraging respectful communication, active listening, empathy, and healthy relationships within families and communities.",
  },
  {
    icon: <ShieldCheck />,
    title: "Safe and Inclusive Spaces",
    description:
      "Promoting environments where people can participate, share concerns, and access support with dignity and respect.",
  },
  {
    icon: <Smile />,
    title: "Social Well-being",
    description:
      "Encouraging positive social interaction, participation, and activities that strengthen confidence and a sense of belonging.",
  },
];

const supportPrinciples = [
  "Respecting the dignity and privacy of every individual",
  "Listening with empathy and without judgment",
  "Promoting awareness and reducing stigma",
  "Encouraging positive family and community relationships",
  "Supporting inclusion and meaningful participation",
  "Connecting people with appropriate services when needed",
];

const PsychosocialSupport = () => {
  return (
    <main className="psychosocial-page">
      <PageHero
        eyebrow="WHAT WE DO"
        title="Psychosocial Support"
        subtitle="Promoting emotional well-being, social connection, and supportive communities where everyone can feel valued."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "What We Do", link: "/what-we-do" },
          { label: "Psychosocial Support" },
        ]}
      />

      {/* INTRODUCTION */}
      <section className="psy-intro section-padding">
        <div className="psy-container psy-intro-grid">
          <div className="psy-intro-image">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1100&q=85"
              alt="Community members connecting and supporting each other"
            />

            <div className="psy-image-card">
              <div className="psy-image-card-icon">
                <HeartHandshake />
              </div>
              <div>
                <strong>Care. Connection. Hope.</strong>
                <p>Building stronger and more supportive communities.</p>
              </div>
            </div>
          </div>

          <div className="psy-intro-content">
            <span className="psy-label">OUR COMMITMENT</span>
            <h2>
              Well-being Begins With <span>Care and Connection</span>
            </h2>

            <p>
              Difficult life circumstances can affect how individuals feel,
              interact with others, and participate in their communities.
              Emotional and social well-being are important parts of building
              healthy and resilient lives.
            </p>

            <p>
              At Humanitarian Resilience Aid, we promote psychosocial
              well-being through awareness, community engagement, positive
              relationships, and supportive activities.
            </p>

            <p>
              We believe everyone deserves to be treated with dignity,
              listened to with compassion, and encouraged to access the
              support they need.
            </p>

            <Link to="/projects/psychosocial-awareness" className="psy-primary-btn">
              Explore Our Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SUPPORT AREAS */}
      <section className="psy-areas section-padding">
        <div className="psy-container">
          <div className="psy-heading">
            <span className="psy-label">HOW WE SUPPORT COMMUNITIES</span>
            <h2>
              Creating Space for <span>Well-being and Belonging</span>
            </h2>
            <p>
              Our approach encourages understanding, connection, inclusion,
              and access to appropriate psychosocial support.
            </p>
          </div>

          <div className="psy-areas-grid">
            {supportAreas.map((item, index) => (
              <article className="psy-area-card" key={item.title}>
                <span className="psy-area-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="psy-area-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="psy-area-bottom-line"></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="psy-importance section-padding">
        <div className="psy-container psy-importance-grid">
          <div className="psy-importance-content">
            <span className="psy-label">WHY IT MATTERS</span>
            <h2>
              Stronger People, <span>Stronger Communities</span>
            </h2>

            <p>
              Psychosocial well-being helps people build relationships,
              participate in community life, and face everyday challenges
              with greater support and understanding.
            </p>

            <p>
              By promoting awareness and reducing stigma, we encourage
              communities to recognize emotional well-being as an important
              part of overall health.
            </p>

            <div className="psy-importance-points">
              <div>
                <CheckCircle2 />
                <span>Greater awareness of emotional well-being</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Stronger relationships and social connections</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>More inclusive and supportive communities</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Improved understanding of available support services</span>
              </div>
            </div>
          </div>

          <div className="psy-importance-image">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=85"
              alt="People taking part in a supportive community gathering"
            />

            <div className="psy-quote-card">
              <span>“</span>
              <p>
                A caring community can make a meaningful difference in
                someone's life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="psy-approach section-padding">
        <div className="psy-container">
          <div className="psy-heading">
            <span className="psy-label">OUR APPROACH</span>
            <h2>
              Support Built on <span>Respect and Compassion</span>
            </h2>
            <p>
              We promote a people-centered approach that recognizes the
              experiences, strengths, and needs of individuals and families.
            </p>
          </div>

          <div className="psy-approach-grid">
            <article className="psy-approach-card">
              <div className="psy-approach-icon"><HelpingHand /></div>
              <h3>Listen and Understand</h3>
              <p>
                Create opportunities for individuals to express their
                concerns and feel heard without judgment.
              </p>
            </article>

            <article className="psy-approach-card">
              <div className="psy-approach-icon"><Lightbulb /></div>
              <h3>Build Awareness</h3>
              <p>
                Share useful information that promotes understanding of
                psychosocial well-being and available support.
              </p>
            </article>

            <article className="psy-approach-card">
              <div className="psy-approach-icon"><Users /></div>
              <h3>Strengthen Connections</h3>
              <p>
                Encourage community participation, positive relationships,
                and mutual support among families and individuals.
              </p>
            </article>

            <article className="psy-approach-card">
              <div className="psy-approach-icon"><HeartHandshake /></div>
              <h3>Connect to Support</h3>
              <p>
                Encourage appropriate referrals and connections to qualified
                services when additional assistance is required.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="psy-principles section-padding">
        <div className="psy-container psy-principles-grid">
          <div className="psy-principles-heading">
            <span className="psy-label">OUR GUIDING PRINCIPLES</span>
            <h2>
              Putting People <span>First</span>
            </h2>
            <p>
              We believe psychosocial support should be respectful,
              inclusive, compassionate, and responsive to people's needs.
            </p>
          </div>

          <div className="psy-principles-list">
            {supportPrinciples.map((principle, index) => (
              <div className="psy-principle-item" key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{principle}</p>
                <CheckCircle2 size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PROJECT */}
      <section className="psy-project section-padding">
        <div className="psy-container psy-project-grid">
          <div className="psy-project-image">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1100&q=85"
              alt="Community members participating in a group activity"
            />
          </div>

          <div className="psy-project-content">
            <span className="psy-label">OUR RELATED PROJECT</span>
            <h2>Psychosocial Awareness Project</h2>
            <p>
              Through psychosocial awareness activities, we aim to encourage
              conversations about emotional well-being, strengthen community
              understanding, and promote supportive relationships.
            </p>

            <Link
              to="/projects/psychosocial-awareness"
              className="psy-primary-btn"
            >
              Discover the Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="psy-cta">
        <div className="psy-container psy-cta-content">
          <div className="psy-cta-icon"><Heart /></div>
          <span className="psy-label">BE PART OF THE CHANGE</span>

          <h2>
            Together, We Can Build a More Caring Community
          </h2>

          <p>
            Join our mission to promote emotional well-being, strengthen
            community connections, and create an environment where everyone
            feels supported and valued.
          </p>

          <div className="psy-cta-actions">
            <Link to="/get-involved" className="psy-cta-light">
              Get Involved <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="psy-cta-outline">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PsychosocialSupport;
