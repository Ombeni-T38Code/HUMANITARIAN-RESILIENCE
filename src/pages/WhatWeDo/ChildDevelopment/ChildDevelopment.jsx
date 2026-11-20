
import React from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  BookOpen,
  GraduationCap,
  Heart,
  ShieldCheck,
  Palette,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  HandHeart,
  Sparkles,
} from "lucide-react";

import PageHero from "../../../components/Layout/PageHero";
import "./ChildDevelopment.css";

const childFocusAreas = [
  {
    icon: <Baby />,
    title: "Early Childhood Development",
    description:
      "Supporting young children during their important early years through nurturing care, play, learning, and positive development experiences.",
  },
  {
    icon: <BookOpen />,
    title: "Learning Support",
    description:
      "Encouraging children's learning through educational activities, reading opportunities, basic literacy, and supportive learning environments.",
  },
  {
    icon: <ShieldCheck />,
    title: "Child Protection",
    description:
      "Promoting safe and supportive environments where children are respected, protected, and encouraged to reach their potential.",
  },
  {
    icon: <Palette />,
    title: "Creative Activities",
    description:
      "Using games, drawing, storytelling, and other creative activities to develop children's imagination, confidence, and communication.",
  },
  {
    icon: <Heart />,
    title: "Emotional Well-being",
    description:
      "Encouraging positive relationships, emotional expression, social interaction, and a sense of belonging among children.",
  },
  {
    icon: <GraduationCap />,
    title: "Educational Opportunities",
    description:
      "Helping children build foundational knowledge and skills that support their participation in education and lifelong learning.",
  },
];

const childBenefits = [
  "Improved access to supportive learning opportunities",
  "Development of communication and social skills",
  "Greater confidence through play and creative activities",
  "Positive relationships with peers and caregivers",
  "Safe and inclusive spaces for children",
  "A stronger foundation for lifelong learning",
];

const ChildDevelopment = () => {
  return (
    <main className="child-development-page">
      <PageHero
        eyebrow="WHAT WE DO"
        title="Child Development"
        subtitle="Building brighter futures by supporting children's learning, well-being, protection, and development."
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=85"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "What We Do", link: "/what-we-do" },
          { label: "Child Development" },
        ]}
      />

      {/* INTRODUCTION */}
      <section className="child-intro section-padding">
        <div className="child-container child-intro-grid">
          <div className="child-intro-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85"
              alt="Children participating in a learning activity"
            />
            <div className="child-image-note">
              <span className="child-note-icon">
                <Heart size={22} />
              </span>
              <div>
                <strong>Every Child Matters</strong>
                <p>Every child deserves the opportunity to grow and learn.</p>
              </div>
            </div>
          </div>

          <div className="child-intro-content">
            <span className="child-section-label">OUR COMMITMENT</span>
            <h2>
              Every Child Deserves a <span>Bright Future</span>
            </h2>

            <p>
              Children are the foundation of every community. They deserve
              opportunities to learn, develop, express themselves, and grow
              in environments where they feel safe, valued, and supported.
            </p>

            <p>
              At Humanitarian Resilience Aid, we promote child development
              through learning opportunities, creative activities, social
              interaction, and initiatives that support children's overall
              well-being.
            </p>

            <p>
              We believe that investing in children today helps build stronger,
              healthier, and more resilient communities for tomorrow.
            </p>

            <Link to="/contact" className="child-primary-btn">
              Learn More About Our Work <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="child-focus section-padding">
        <div className="child-container">
          <div className="child-section-heading">
            <span className="child-section-label">WHAT WE FOCUS ON</span>
            <h2>
              Supporting Every Stage of <span>Childhood</span>
            </h2>
            <p>
              We encourage children's growth through inclusive activities
              that support learning, creativity, protection, and well-being.
            </p>
          </div>

          <div className="child-focus-grid">
            {childFocusAreas.map((item, index) => (
              <article className="child-focus-card" key={item.title}>
                <div className="child-focus-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="child-focus-icon">{item.icon}</div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <span className="child-card-line"></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING AND PLAY */}
      <section className="child-learning section-padding">
        <div className="child-container child-learning-grid">
          <div className="child-learning-content">
            <span className="child-section-label">LEARNING THROUGH EXPERIENCE</span>
            <h2>
              Helping Children <span>Learn, Explore & Grow</span>
            </h2>

            <p>
              Children learn in different ways. Through play, discovery,
              communication, and practical experiences, they develop important
              abilities that prepare them for future opportunities.
            </p>

            <div className="child-learning-points">
              <div>
                <CheckCircle2 />
                <span>Interactive and age-appropriate learning activities</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Reading, storytelling, and communication activities</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Creative expression through art, games, and play</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Positive social interaction and teamwork</span>
              </div>
            </div>

            <Link to="/projects/childcare-learning" className="child-text-link">
              Explore Childcare & Learning Project <ArrowRight size={18} />
            </Link>
          </div>

          <div className="child-learning-image">
            <img
              src="https://images.unsplash.com/photo-1472162314594-eca3c3d90c83?auto=format&fit=crop&w=1100&q=85"
              alt="Children learning and playing together"
            />
            <div className="child-learning-sticker">
              <Sparkles size={22} />
              <span>Learn Through Play</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="child-importance section-padding">
        <div className="child-container">
          <div className="child-section-heading">
            <span className="child-section-label">WHY CHILD DEVELOPMENT MATTERS</span>
            <h2>
              Giving Children the <span>Foundation to Succeed</span>
            </h2>
            <p>
              Supporting children today contributes to healthier families
              and stronger communities in the future.
            </p>
          </div>

          <div className="child-benefits-grid">
            {childBenefits.map((benefit) => (
              <div className="child-benefit-item" key={benefit}>
                <CheckCircle2 size={20} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="child-approach section-padding">
        <div className="child-container child-approach-grid">
          <div className="child-approach-heading">
            <span className="child-section-label">OUR APPROACH</span>
            <h2>
              Creating Opportunities for <span>Children to Thrive</span>
            </h2>
            <p>
              We believe child development works best when families,
              caregivers, educators, and communities work together.
            </p>
          </div>

          <div className="child-approach-list">
            <div className="child-approach-item">
              <span><Users /></span>
              <div>
                <h3>Community Participation</h3>
                <p>
                  Working with families and community members to encourage
                  positive child development.
                </p>
              </div>
            </div>

            <div className="child-approach-item">
              <span><BookOpen /></span>
              <div>
                <h3>Inclusive Learning</h3>
                <p>
                  Encouraging learning opportunities that welcome children
                  with different needs and backgrounds.
                </p>
              </div>
            </div>

            <div className="child-approach-item">
              <span><HandHeart /></span>
              <div>
                <h3>Care and Protection</h3>
                <p>
                  Promoting respectful, caring, and supportive environments
                  where children can develop with dignity.
                </p>
              </div>
            </div>

            <div className="child-approach-item">
              <span><Lightbulb /></span>
              <div>
                <h3>Continuous Development</h3>
                <p>
                  Supporting children's curiosity, creativity, confidence,
                  and readiness for future learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROJECT */}
      <section className="child-project section-padding">
        <div className="child-container child-project-grid">
          <div className="child-project-image">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1100&q=85"
              alt="Children participating in community activities"
            />
          </div>

          <div className="child-project-content">
            <span className="child-section-label">OUR RELATED PROJECT</span>
            <h2>Childcare & Learning Project</h2>
            <p>
              Our Childcare & Learning Project promotes opportunities for
              children to participate in supportive learning experiences,
              develop social skills, and explore their creativity.
            </p>

            <Link to="/projects/childcare-learning" className="child-primary-btn">
              Explore the Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="child-cta">
        <div className="child-container child-cta-content">
          <span className="child-cta-icon"><Heart size={28} /></span>
          <span className="child-section-label">JOIN OUR MISSION</span>
          <h2>Help Us Build a Brighter Future for Every Child</h2>
          <p>
            Your support can help create learning opportunities and safer,
            more supportive environments for children in our community.
          </p>

          <div className="child-cta-actions">
            <Link to="/get-involved" className="child-cta-light">
              Get Involved <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="child-cta-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChildDevelopment;
