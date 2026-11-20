
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Monitor,
  Laptop,
  Code,
  Globe,
  GraduationCap,
  Users,
  Lightbulb,
  BriefcaseBusiness,
  CheckCircle2,
  HeartHandshake,
  Wifi,
  MousePointerClick,
  Target,
  Sparkles,
} from "lucide-react";

import PageHero from "../../../components/Layout/PageHero";
import "./DigitalEducation.css";

const learningAreas = [
  {
    icon: Monitor,
    title: "Computer Literacy",
    description:
      "Introducing learners to computers, operating systems, file management, and essential digital tools.",
  },
  {
    icon: Globe,
    title: "Internet Skills",
    description:
      "Helping participants use the internet safely for learning, communication, research, and accessing information.",
  },
  {
    icon: Code,
    title: "Coding & Programming",
    description:
      "Building problem-solving and creative thinking through introductory programming and practical coding activities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Digital Work Skills",
    description:
      "Developing practical technology skills that can support employment, entrepreneurship, and self-reliance.",
  },
  {
    icon: BookOpen,
    title: "Digital Learning",
    description:
      "Encouraging independent learning through online educational resources and digital learning platforms.",
  },
  {
    icon: Lightbulb,
    title: "Creative Technology",
    description:
      "Giving learners opportunities to explore technology, develop ideas, and create simple digital projects.",
  },
];

const benefits = [
  "Improved computer and digital literacy",
  "Increased access to online educational resources",
  "Practical coding and problem-solving experience",
  "Improved communication and research skills",
  "Greater confidence using digital technology",
  "Better preparation for future education and employment",
];

const steps = [
  {
    number: "01",
    title: "Introduction",
    description:
      "We introduce learners to digital technology and help them understand how it can support education and everyday life.",
  },
  {
    number: "02",
    title: "Practical Training",
    description:
      "Participants develop skills through guided lessons, demonstrations, exercises, and hands-on computer activities.",
  },
  {
    number: "03",
    title: "Project Development",
    description:
      "Learners apply their knowledge by completing practical assignments and creating simple digital projects.",
  },
  {
    number: "04",
    title: "Future Opportunities",
    description:
      "We encourage participants to continue learning and use their skills to explore education, employment, and entrepreneurship.",
  },
];

const DigitalEducation = () => {
  return (
    <main className="de-page">
      <PageHero
        eyebrow="Our Projects"
        title="Digital Education"
        description="Creating opportunities through digital literacy, technology education, and practical digital skills for refugee and host communities."
        image="/images/digital-education-hero.jpg"
      />

      {/* Introduction */}
      <section className="de-intro section-padding">
        <div className="de-container de-intro-grid">
          <div className="de-intro-content">
            <span className="de-eyebrow">Technology for Everyone</span>

            <h2>
              Empowering Communities Through
              <span> Digital Education</span>
            </h2>

            <p>
              Access to digital technology and relevant skills is increasingly
              important for education, communication, employment, and
              participation in today's digital world.
            </p>

            <p>
              Humanitarian Resilience Aid (HRA) promotes digital education by
              creating opportunities for refugees and members of host
              communities to develop practical technology skills. We aim to
              make digital learning more accessible, inclusive, and useful
              for people with different educational backgrounds.
            </p>

            <p>
              Through computer literacy, internet awareness, coding, and
              practical learning activities, we encourage participants to
              build confidence and explore new opportunities.
            </p>

            <Link to="/get-involved/partnerships" className="de-primary-btn">
              Support Digital Education
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="de-intro-visual">
            <img
              src="/images/digital-education-classroom.jpg"
              alt="Students learning computer and digital skills"
            />

            <div className="de-image-note">
              <div className="de-note-icon">
                <GraduationCap size={25} />
              </div>
              <div>
                <strong>Learning for the Future</strong>
                <span>Building confidence through technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="de-learning section-padding">
        <div className="de-container">
          <div className="de-section-heading">
            <span className="de-eyebrow">What We Teach</span>
            <h2>Building Essential Digital Skills</h2>
            <p>
              Our digital education approach focuses on practical knowledge
              that learners can apply in their studies, daily activities,
              and future careers.
            </p>
          </div>

          <div className="de-learning-grid">
            {learningAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="de-learning-card" key={item.title}>
                  <div className="de-card-top">
                    <span className="de-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="de-learning-icon">
                      <Icon size={27} />
                    </div>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="de-card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="de-feature section-padding">
        <div className="de-container de-feature-grid">
          <div className="de-feature-image">
            <img
              src="/images/digital-skills-training.jpg"
              alt="Young people participating in digital skills training"
            />

            <div className="de-feature-label">
              <Laptop size={20} />
              <span>Practical Technology Training</span>
            </div>
          </div>

          <div className="de-feature-content">
            <span className="de-eyebrow">Our Approach</span>

            <h2>
              Learning Technology Through
              <span> Practical Experience</span>
            </h2>

            <p>
              We believe that digital education should go beyond theory.
              Participants need opportunities to practise, experiment,
              ask questions, and develop useful skills.
            </p>

            <p>
              Our approach encourages learners to use technology creatively
              and responsibly while developing confidence in solving
              everyday challenges.
            </p>

            <div className="de-feature-points">
              <div>
                <CheckCircle2 size={20} />
                <span>Beginner-friendly learning activities</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Hands-on computer practice</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Collaborative learning and teamwork</span>
              </div>

              <div>
                <CheckCircle2 size={20} />
                <span>Practical assignments and projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="de-process section-padding">
        <div className="de-container">
          <div className="de-section-heading">
            <span className="de-eyebrow">How Learning Happens</span>
            <h2>Our Digital Learning Journey</h2>
            <p>
              We encourage learners to progress from basic digital
              knowledge to practical skills and independent learning.
            </p>
          </div>

          <div className="de-process-grid">
            {steps.map((step) => (
              <article className="de-process-card" key={step.number}>
                <span className="de-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital Education */}
      <section className="de-impact section-padding">
        <div className="de-container de-impact-grid">
          <div className="de-impact-content">
            <span className="de-eyebrow">Why It Matters</span>

            <h2>
              Opening Doors to
              <span> New Opportunities</span>
            </h2>

            <p>
              Digital skills can help people access educational resources,
              communicate, find information, develop ideas, and participate
              in an increasingly connected world.
            </p>

            <p>
              By promoting inclusive digital education, HRA seeks to reduce
              barriers to technology learning and support individuals as
              they work towards a more independent future.
            </p>

            <Link to="/projects/youth-coding-digital-skills" className="de-text-link">
              Explore Youth Coding Project
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="de-benefits-panel">
            <h3>Expected Learning Benefits</h3>

            {benefits.map((benefit) => (
              <div className="de-benefit-item" key={benefit}>
                <CheckCircle2 size={19} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Participation */}
      <section className="de-community section-padding">
        <div className="de-container de-community-grid">
          <div className="de-community-image">
            <img
              src="/images/digital-learning-community.jpg"
              alt="Community members learning together"
            />
          </div>

          <div className="de-community-content">
            <span className="de-eyebrow">Inclusive Education</span>

            <h2>Digital Opportunities for Refugees and Host Communities</h2>

            <p>
              HRA believes that everyone deserves an opportunity to learn
              and benefit from technology, regardless of their background
              or previous access to digital resources.
            </p>

            <p>
              We encourage the participation of young people, women, and
              other community members who want to improve their digital
              knowledge and explore new opportunities.
            </p>

            <div className="de-community-statements">
              <div>
                <Users size={22} />
                <span>Inclusive community participation</span>
              </div>

              <div>
                <Wifi size={22} />
                <span>Improved digital access and awareness</span>
              </div>

              <div>
                <MousePointerClick size={22} />
                <span>Practical, learner-centred activities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="de-related section-padding">
        <div className="de-container">
          <div className="de-section-heading">
            <span className="de-eyebrow">Explore More</span>
            <h2>Related Education Projects</h2>
            <p>
              Discover other HRA initiatives that promote learning,
              technology, and personal development.
            </p>
          </div>

          <div className="de-related-grid">
            <Link
              to="/projects/youth-coding-digital-skills"
              className="de-related-card"
            >
              <div className="de-related-icon">
                <Code size={26} />
              </div>
              <h3>Youth Coding & Digital Skills</h3>
              <p>
                Helping young people develop coding knowledge,
                digital confidence, and practical technology skills.
              </p>
              <span>
                Explore Project <ArrowRight size={17} />
              </span>
            </Link>

            <Link
              to="/projects/womens-english-education"
              className="de-related-card"
            >
              <div className="de-related-icon">
                <BookOpen size={26} />
              </div>
              <h3>Women's English Education</h3>
              <p>
                Supporting women to improve communication,
                literacy, and access to learning opportunities.
              </p>
              <span>
                Explore Project <ArrowRight size={17} />
              </span>
            </Link>

            <Link
              to="/projects/childcare-learning"
              className="de-related-card"
            >
              <div className="de-related-icon">
                <GraduationCap size={26} />
              </div>
              <h3>Childcare & Learning</h3>
              <p>
                Creating supportive learning opportunities
                that contribute to children's development.
              </p>
              <span>
                Explore Project <ArrowRight size={17} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="de-cta section-padding">
        <div className="de-container">
          <div className="de-cta-box">
            <div className="de-cta-decoration">
              <Sparkles size={36} />
            </div>

            <span className="de-cta-eyebrow">
              Help Build a Digital Future
            </span>

            <h2>Make Digital Education Accessible to Everyone</h2>

            <p>
              Join HRA in creating opportunities for refugees and host
              communities through technology, education, and digital skills.
              Your support can help learners gain the knowledge and confidence
              they need to move forward.
            </p>

            <div className="de-cta-actions">
              <Link to="/get-involved/volunteer" className="de-cta-primary">
                Become a Volunteer
                <ArrowRight size={18} />
              </Link>

              <Link to="/get-involved/partnerships" className="de-cta-secondary">
                Partner With Us
                <HeartHandshake size={18} />
              </Link>

              <Link to="/donate" className="de-cta-donate">
                Support Our Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalEducation;
