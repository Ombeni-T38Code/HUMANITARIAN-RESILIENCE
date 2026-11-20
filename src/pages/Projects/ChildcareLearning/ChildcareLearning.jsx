
import React from "react";
import {
  ArrowRight,
  Baby,
  BookOpen,
  Blocks,
  Brain,
  Heart,
  HeartHandshake,
  Lightbulb,
  Palette,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Users,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../../components/Layout/PageHero";

import "./ChildcareLearning.css";

const focusAreas = [
  {
    icon: Baby,
    title: "Early Childhood Development",
    description:
      "Encouraging children's early development through age-appropriate learning, play, exploration, and positive interaction.",
  },
  {
    icon: BookOpen,
    title: "Early Learning",
    description:
      "Supporting foundational learning through stories, language activities, creative exercises, and educational resources.",
  },
  {
    icon: Palette,
    title: "Creative Activities",
    description:
      "Encouraging creativity and self-expression through drawing, painting, music, crafts, and imaginative play.",
  },
  {
    icon: Blocks,
    title: "Learning Through Play",
    description:
      "Using play-based activities to encourage curiosity, communication, problem-solving, and social development.",
  },
  {
    icon: Heart,
    title: "Child Well-being",
    description:
      "Promoting caring, respectful, and supportive environments where children can feel valued and encouraged.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection Awareness",
    description:
      "Promoting awareness of children's safety, dignity, rights, and the importance of child-friendly environments.",
  },
];

const activities = [
  {
    icon: BookOpen,
    title: "Reading and Storytelling",
    description:
      "Helping children develop language, imagination, listening, and early literacy skills.",
  },
  {
    icon: Palette,
    title: "Art and Creativity",
    description:
      "Providing opportunities for drawing, colouring, crafts, and creative expression.",
  },
  {
    icon: Blocks,
    title: "Educational Games",
    description:
      "Encouraging learning through age-appropriate games, puzzles, and interactive activities.",
  },
  {
    icon: Users,
    title: "Social Interaction",
    description:
      "Helping children develop communication, cooperation, friendship, and sharing skills.",
  },
];

const approach = [
  {
    number: "01",
    icon: Heart,
    title: "Create a Caring Environment",
    description:
      "Encourage welcoming and supportive spaces where children feel respected and valued.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Encourage Exploration",
    description:
      "Use creative and play-based activities to support curiosity and discovery.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Support Early Learning",
    description:
      "Promote foundational learning through stories, educational games, and practical activities.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Promote Child Safety",
    description:
      "Encourage child protection awareness and safe, respectful interactions.",
  },
];

const objectives = [
  "Encourage early childhood development",
  "Promote access to child-friendly learning opportunities",
  "Support creativity and learning through play",
  "Encourage positive social interaction",
  "Promote child safety and well-being",
  "Support families and community participation",
];

export default function ChildcareLearning() {
  return (
    <main className="childcare-learning-page">
      <PageHero
        eyebrow="OUR PROJECTS"
        title="Childcare & Learning"
        description="Creating supportive learning opportunities where children can explore, play, develop skills, and build a stronger foundation for their future."
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2000&q=85"
      />

      {/* INTRODUCTION */}
      <section className="cl-intro section-padding">
        <div className="cl-container cl-intro-grid">
          <div className="cl-intro-image">
            <img
              src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1100&q=85"
              alt="Children enjoying outdoor activities"
            />

            <div className="cl-image-card">
              <Baby size={28} />
              <div>
                <strong>Every Child Matters</strong>
                <span>Supporting growth and learning</span>
              </div>
            </div>
          </div>

          <div className="cl-intro-content">
            <span className="cl-label">ABOUT THE PROJECT</span>

            <h2>
              Giving Children Opportunities
              <span> to Learn and Grow</span>
            </h2>

            <p>
              Every child deserves opportunities to learn, play, explore,
              and develop in a safe and supportive environment. Early
              childhood experiences help shape children's confidence,
              relationships, and future learning.
            </p>

            <p>
              In communities affected by displacement and limited
              resources, children and families may face barriers to
              accessing quality childcare and early learning opportunities.
            </p>

            <p>
              Through our Childcare & Learning project, Humanitarian
              Resilience Aid promotes child-friendly learning, creativity,
              early development, and awareness of children's safety and
              well-being.
            </p>

            <Link to="/contact" className="cl-primary-btn">
              Contact Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="cl-importance section-padding">
        <div className="cl-container cl-importance-grid">
          <div className="cl-importance-content">
            <span className="cl-label">WHY CHILDCARE AND LEARNING MATTER</span>

            <h2>
              A Strong Foundation
              <span> Starts in Childhood</span>
            </h2>

            <p>
              Children need opportunities to explore their interests,
              develop relationships, build confidence, and discover new
              things. Supportive childcare and early learning environments
              can contribute to children's overall development.
            </p>

            <p>
              Through play, storytelling, creative activities, and positive
              interaction, children can develop important foundational
              abilities while enjoying their childhood.
            </p>

            <div className="cl-importance-points">
              <div>
                <CheckCircle2 size={20} />
                <span>Encourages curiosity and creativity</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Supports communication and social skills</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Promotes child safety and well-being</span>
              </div>
            </div>
          </div>

          <div className="cl-importance-image">
            <img
              src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1100&q=85"
              alt="Children participating in a learning activity"
            />
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="cl-focus section-padding">
        <div className="cl-container">
          <div className="cl-section-heading">
            <span className="cl-label">OUR AREAS OF FOCUS</span>

            <h2>Supporting Children's Development</h2>

            <p>
              We encourage learning, creativity, positive interaction,
              and child-friendly environments that support children's
              growth and development.
            </p>
          </div>

          <div className="cl-focus-grid">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="cl-focus-card" key={item.title}>
                  <span className="cl-focus-number">
                    0{index + 1}
                  </span>

                  <div className="cl-focus-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="cl-focus-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="cl-activities section-padding">
        <div className="cl-container cl-activities-grid">
          <div className="cl-activities-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85"
              alt="Children learning together in a classroom"
            />
          </div>

          <div className="cl-activities-content">
            <span className="cl-label">LEARNING AND PLAY</span>

            <h2>
              Learning Should Be an Enjoyable Experience
            </h2>

            <p>
              Children learn in different ways. We value practical,
              creative, and interactive activities that encourage
              participation and make learning enjoyable.
            </p>

            <div className="cl-activity-list">
              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div className="cl-activity-item" key={activity.title}>
                    <div className="cl-activity-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3>{activity.title}</h3>
                      <p>{activity.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="cl-approach section-padding">
        <div className="cl-container">
          <div className="cl-section-heading">
            <span className="cl-label">OUR APPROACH</span>

            <h2>Creating Positive Learning Experiences</h2>

            <p>
              We believe that children benefit from environments that
              encourage learning, creativity, safety, and positive
              relationships.
            </p>
          </div>

          <div className="cl-approach-grid">
            {approach.map((step) => {
              const Icon = step.icon;

              return (
                <article className="cl-approach-card" key={step.number}>
                  <span className="cl-approach-number">
                    {step.number}
                  </span>

                  <div className="cl-approach-icon">
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

      {/* OBJECTIVES */}
      <section className="cl-objectives section-padding">
        <div className="cl-container cl-objectives-grid">
          <div className="cl-objectives-content">
            <span className="cl-label">OUR OBJECTIVES</span>

            <h2>
              Helping Children Build a Brighter Future
            </h2>

            <p>
              Our aim is to support children's learning and development
              while encouraging families and communities to value safe,
              inclusive, and child-friendly environments.
            </p>

            <Link
              to="/what-we-do/child-development"
              className="cl-text-link"
            >
              Explore Our Child Development Program
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="cl-objectives-list">
            {objectives.map((objective) => (
              <div className="cl-objective-item" key={objective}>
                <CheckCircle2 size={21} />
                <span>{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHILD-CENTRED MESSAGE */}
      <section className="cl-message section-padding">
        <div className="cl-container">
          <div className="cl-message-inner">
            <div className="cl-message-icon">
              <Sparkles size={32} />
            </div>

            <span>OUR COMMITMENT TO CHILDREN</span>

            <h2>
              Every Child Deserves the Chance to Learn, Play and Thrive
            </h2>

            <p>
              When children have opportunities to explore, learn, and
              feel supported, they can develop confidence and build
              foundations for a brighter future. Together, we can create
              environments where every child is valued.
            </p>

            <div className="cl-message-decoration">
              <Star size={18} />
              <span>Learning • Creativity • Opportunity</span>
              <Star size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cl-cta section-padding">
        <div className="cl-container">
          <div className="cl-cta-content">
            <div className="cl-cta-icon">
              <HeartHandshake size={32} />
            </div>

            <span>INVEST IN CHILDREN'S FUTURE</span>

            <h2>
              Help Us Create Better Learning Opportunities for Children
            </h2>

            <p>
              Join Humanitarian Resilience Aid in promoting childcare,
              early learning, creativity, and child well-being in our
              community.
            </p>

            <div className="cl-cta-actions">
              <Link to="/get-involved" className="cl-cta-primary">
                Get Involved <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="cl-cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
