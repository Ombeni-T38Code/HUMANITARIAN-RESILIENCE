
import React from "react";
import {
  BookOpen,
  Languages,
  MessageCircle,
  Users,
  GraduationCap,
  Lightbulb,
  Heart,
  ArrowRight,
  CheckCircle2,
  Globe,
  Target,
  HandHeart,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../../components/Layout/PageHero";
import "./WomensEnglishEducation.css";

const learningAreas = [
  {
    icon: BookOpen,
    title: "Reading Skills",
    description:
      "Help women develop reading skills so they can understand written information, learning materials, and everyday documents.",
  },
  {
    icon: MessageCircle,
    title: "Speaking and Conversation",
    description:
      "Create opportunities to practise spoken English and communicate confidently in everyday situations.",
  },
  {
    icon: GraduationCap,
    title: "Writing Skills",
    description:
      "Support learners in developing basic writing skills, including sentences, simple messages, and useful communication.",
  },
  {
    icon: Languages,
    title: "Vocabulary Development",
    description:
      "Introduce practical English vocabulary that women can use at home, in learning environments, and in the community.",
  },
];

const benefits = [
  "Improved communication and everyday interaction",
  "Greater confidence when speaking English",
  "Better access to educational information",
  "Increased participation in community activities",
  "More opportunities for personal development",
  "Improved readiness for future learning and training",
];

const activities = [
  {
    number: "01",
    title: "Basic English Lessons",
    description:
      "Introduce learners to English letters, words, sentence formation, and everyday expressions.",
  },
  {
    number: "02",
    title: "Group Learning",
    description:
      "Encourage women to learn together through group exercises, discussions, and shared experiences.",
  },
  {
    number: "03",
    title: "Practical Conversation",
    description:
      "Use everyday situations to help learners practise greetings, introductions, questions, and responses.",
  },
  {
    number: "04",
    title: "Reading and Writing Practice",
    description:
      "Provide practical exercises that help women improve their reading comprehension and written communication.",
  },
];

const WomensEnglishEducation = () => {
  return (
    <main className="wee-page">
      <PageHero
        eyebrow="Our Projects"
        title="Women's English Education"
        description="Creating learning opportunities that empower women with English language skills, confidence, and stronger participation in community life."
        image="/images/womens-english-education.jpg"
      />

      {/* INTRODUCTION */}
      <section className="wee-section wee-intro">
        <div className="wee-container wee-intro-grid">
          <div className="wee-intro-content">
            <span className="wee-label">Education and Empowerment</span>

            <h2>
              Empowering Women Through
              <span> English Education</span>
            </h2>

            <p>
              Language plays an important role in education, communication,
              and participation in everyday life. For many women in refugee
              and host communities, limited English skills can make it
              difficult to access information, communicate confidently, and
              take advantage of learning opportunities.
            </p>

            <p>
              Through our Women's English Education project, Humanitarian
              Resilience Aid aims to provide accessible learning opportunities
              where women can develop practical English language skills in a
              supportive and encouraging environment.
            </p>

            <p>
              Our goal is to help women strengthen their confidence, express
              themselves, and become more active participants in their
              families and communities.
            </p>

            <Link to="/get-involved/volunteer" className="wee-button">
              Support Women's Education <ArrowRight size={18} />
            </Link>
          </div>

          <div className="wee-intro-visual">
            <div className="wee-image-main">
              <img
                src="/images/womens-english-class.jpg"
                alt="Women participating in an English learning session"
              />
            </div>

            <div className="wee-image-card">
              <div className="wee-image-icon">
                <BookOpen size={28} />
              </div>
              <div>
                <strong>Learning for Every Woman</strong>
                <span>Building confidence through education</span>
              </div>
            </div>

            <div className="wee-decor wee-decor-one"></div>
            <div className="wee-decor wee-decor-two"></div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="wee-section wee-why">
        <div className="wee-container">
          <div className="wee-section-heading">
            <span className="wee-label">Why This Project Matters</span>
            <h2>Education Creates New Possibilities</h2>
            <p>
              English language skills can help women overcome communication
              barriers and access opportunities for learning and growth.
            </p>
          </div>

          <div className="wee-why-grid">
            <div className="wee-why-card">
              <div className="wee-icon-box">
                <Globe size={28} />
              </div>
              <h3>Access to Information</h3>
              <p>
                Understanding English can make it easier to access educational
                resources, community information, and important services.
              </p>
            </div>

            <div className="wee-why-card">
              <div className="wee-icon-box">
                <Users size={28} />
              </div>
              <h3>Community Participation</h3>
              <p>
                Communication skills can support women in participating in
                discussions, activities, and community initiatives.
              </p>
            </div>

            <div className="wee-why-card">
              <div className="wee-icon-box">
                <Lightbulb size={28} />
              </div>
              <h3>Personal Development</h3>
              <p>
                Learning a new language can encourage confidence, independence,
                and continued personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="wee-section wee-learning">
        <div className="wee-container">
          <div className="wee-section-heading">
            <span className="wee-label">What Women Learn</span>
            <h2>Building Practical English Skills</h2>
            <p>
              Learning activities focus on useful language skills that women
              can apply in their everyday lives.
            </p>
          </div>

          <div className="wee-learning-grid">
            {learningAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="wee-learning-card" key={item.title}>
                  <div className="wee-learning-top">
                    <span className="wee-learning-number">
                      0{index + 1}
                    </span>
                    <div className="wee-icon-box">
                      <Icon size={26} />
                    </div>
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
      <section className="wee-section wee-activities">
        <div className="wee-container wee-activities-grid">
          <div className="wee-activities-content">
            <span className="wee-label">Our Learning Approach</span>
            <h2>Learning Through Practice and Participation</h2>

            <p>
              We encourage a friendly, inclusive, and supportive learning
              environment where women can practise at their own pace.
            </p>

            <div className="wee-activity-list">
              {activities.map((activity) => (
                <div className="wee-activity-item" key={activity.number}>
                  <span className="wee-activity-number">
                    {activity.number}
                  </span>

                  <div>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="wee-activities-image">
            <img
              src="/images/women-learning-together.jpg"
              alt="Women learning and practising English together"
            />

            <div className="wee-quote-card">
              <MessageCircle size={30} />
              <p>
                Every new word is a step towards confidence, communication,
                and opportunity.
              </p>
              <span>Learning together, growing together.</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="wee-section wee-benefits">
        <div className="wee-container wee-benefits-grid">
          <div className="wee-benefits-heading">
            <span className="wee-label">Expected Benefits</span>
            <h2>Skills That Support Women's Growth</h2>
            <p>
              The project aims to support women in developing language skills
              that can benefit their personal, educational, and community lives.
            </p>
          </div>

          <div className="wee-benefits-list">
            {benefits.map((benefit) => (
              <div className="wee-benefit-item" key={benefit}>
                <CheckCircle2 size={21} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="wee-section wee-goals">
        <div className="wee-container">
          <div className="wee-section-heading">
            <span className="wee-label">Our Goals</span>
            <h2>Creating a Supportive Learning Future</h2>
            <p>
              We want women to have the opportunity to learn, practise, and
              continue developing their skills.
            </p>
          </div>

          <div className="wee-goals-grid">
            <div className="wee-goal-card">
              <Target size={30} />
              <h3>Accessible Education</h3>
              <p>
                Encourage inclusive learning opportunities for women with
                different educational backgrounds.
              </p>
            </div>

            <div className="wee-goal-card">
              <Heart size={30} />
              <h3>Confidence and Independence</h3>
              <p>
                Help women feel more confident communicating and expressing
                their ideas.
              </p>
            </div>

            <div className="wee-goal-card">
              <HandHeart size={30} />
              <h3>Community Empowerment</h3>
              <p>
                Support women to use their skills to contribute to their
                families and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROGRAM */}
      <section className="wee-section wee-related">
        <div className="wee-container wee-related-inner">
          <div>
            <span className="wee-label">Related Program</span>
            <h2>Education and Digital Skills</h2>
            <p>
              Discover how HRA supports education, digital literacy, and
              practical learning opportunities for children, youth, and
              community members.
            </p>
          </div>

          <Link to="/what-we-do/education" className="wee-outline-button">
            Explore Our Education Program <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="wee-cta">
        <div className="wee-container wee-cta-inner">
          <div>
            <span className="wee-label">Be Part of the Change</span>
            <h2>Help Women Access Learning Opportunities</h2>
            <p>
              Your support can help create an environment where women learn,
              build confidence, and work towards a brighter future.
            </p>
          </div>

          <div className="wee-cta-actions">
            <Link to="/get-involved/volunteer" className="wee-button wee-button-light">
              Become a Volunteer <ArrowRight size={18} />
            </Link>

            <Link to="/donate" className="wee-button wee-button-gold">
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WomensEnglishEducation;
