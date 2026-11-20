
import React from "react";
import {
  BookOpen,
  Laptop,
  Code,
  GraduationCap,
  Users,
  Lightbulb,
  Monitor,
  ArrowRight,
  CheckCircle,
  Globe,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./EducationDigitalSkills.css";

const learningAreas = [
  {
    icon: BookOpen,
    title: "Basic Education",
    description:
      "Supporting access to learning opportunities and essential knowledge for children, youth, and adults.",
  },
  {
    icon: Laptop,
    title: "Computer Literacy",
    description:
      "Helping learners develop practical computer skills, including using computers and essential digital tools.",
  },
  {
    icon: Code,
    title: "Coding & Programming",
    description:
      "Introducing young people to programming, web development, and the skills needed to explore technology.",
  },
  {
    icon: Globe,
    title: "Digital Communication",
    description:
      "Building confidence in using the internet, digital platforms, and online communication tools.",
  },
  {
    icon: GraduationCap,
    title: "Learning Support",
    description:
      "Encouraging continuous learning through guidance, educational resources, and supportive learning environments.",
  },
  {
    icon: Lightbulb,
    title: "Practical Skills",
    description:
      "Promoting creativity, critical thinking, problem-solving, and skills that can support future opportunities.",
  },
];

const benefits = [
  "Improved access to educational opportunities",
  "Increased computer and digital literacy",
  "Practical technology and programming skills",
  "Greater confidence in using digital tools",
  "Improved learning and problem-solving abilities",
  "Better preparation for employment and entrepreneurship",
];

const EducationDigitalSkills = () => {
  return (
    <main className="education-page">
      {/* HERO SECTION */}
      <section className="education-hero">
        <div className="education-hero-overlay"></div>

        <div className="education-container education-hero-content">
          <span className="education-eyebrow">
            <GraduationCap size={17} />
            WHAT WE DO
          </span>

          <h1>
            Education & <span>Digital Skills</span>
          </h1>

          <p>
            Empowering children, young people, and communities through
            education, digital literacy, and practical technology skills
            for a brighter and more inclusive future.
          </p>

          <div className="education-hero-actions">
            <Link to="/contact" className="education-primary-btn">
              Get Involved <ArrowRight size={18} />
            </Link>

            <Link to="/projects" className="education-outline-btn">
              Explore Our Projects
            </Link>
          </div>

          <div className="education-hero-note">
            <BookOpen size={19} />
            <span>Learning today. Opportunities tomorrow.</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="education-intro education-section">
        <div className="education-container education-intro-grid">
          <div className="education-intro-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
              alt="Students participating in a learning activity"
            />
            <div className="education-image-label">
              <GraduationCap size={27} />
              <div>
                <strong>Education for Everyone</strong>
                <span>Building knowledge and opportunity</span>
              </div>
            </div>
          </div>

          <div className="education-intro-content">
            <span className="education-section-label">
              EDUCATION FOR A BETTER FUTURE
            </span>

            <h2>
              Creating opportunities through
              <span> learning and technology.</span>
            </h2>

            <p>
              Education is an important foundation for individual growth,
              community development, and long-term resilience. At
              Humanitarian Resilience Aid, we believe that everyone deserves
              opportunities to learn, develop skills, and participate in an
              increasingly digital world.
            </p>

            <p>
              Our Education and Digital Skills program aims to support
              children, youth, and adults by promoting access to learning,
              computer literacy, digital awareness, and practical technology
              skills.
            </p>

            <p>
              Through inclusive learning opportunities, we seek to help
              community members build confidence, discover their potential,
              and prepare for future education, employment, and
              entrepreneurship opportunities.
            </p>

            <Link to="/contact" className="education-text-link">
              Learn More About Our Work <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="education-learning education-section">
        <div className="education-container">
          <div className="education-section-heading">
            <span className="education-section-label">
              WHAT WE FOCUS ON
            </span>
            <h2>Building skills for a changing world</h2>
            <p>
              We promote inclusive learning and practical skills that help
              individuals participate in today's knowledge and digital
              economy.
            </p>
          </div>

          <div className="education-learning-grid">
            {learningAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="education-learning-card" key={item.title}>
                  <div className="education-card-number">
                    0{index + 1}
                  </div>

                  <div className="education-card-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="education-card-line"></span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIGITAL SKILLS FEATURE */}
      <section className="education-digital education-section">
        <div className="education-container education-digital-grid">
          <div className="education-digital-content">
            <span className="education-section-label">
              PREPARING COMMUNITIES FOR THE DIGITAL AGE
            </span>

            <h2>
              Digital skills that open
              <span> new possibilities.</span>
            </h2>

            <p>
              Digital technology is changing how people learn, communicate,
              work, and access information. We aim to reduce digital
              exclusion by creating opportunities for community members
              to develop essential technology skills.
            </p>

            <div className="education-digital-points">
              <div>
                <CheckCircle size={20} />
                <span>Introduction to computers and digital devices</span>
              </div>

              <div>
                <CheckCircle size={20} />
                <span>Internet research and online learning</span>
              </div>

              <div>
                <CheckCircle size={20} />
                <span>Basic coding and web development</span>
              </div>

              <div>
                <CheckCircle size={20} />
                <span>Digital communication and productivity tools</span>
              </div>
            </div>

            <Link to="/contact" className="education-primary-btn">
              Support Digital Learning <ArrowRight size={18} />
            </Link>
          </div>

          <div className="education-digital-image">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
              alt="Learners developing digital skills using computers"
            />

            <div className="education-floating-card">
              <Monitor size={30} />
              <div>
                <strong>Digital Inclusion</strong>
                <span>Skills for tomorrow's opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="education-community education-section">
        <div className="education-container">
          <div className="education-section-heading">
            <span className="education-section-label">
              INCLUSIVE LEARNING
            </span>
            <h2>Learning opportunities for every generation</h2>
            <p>
              We seek to create supportive learning opportunities that
              respond to the needs and aspirations of different members
              of the community.
            </p>
          </div>

          <div className="education-community-grid">
            <article className="education-community-card">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85"
                alt="Young child learning"
              />
              <div>
                <span>01 / CHILDREN</span>
                <h3>Children</h3>
                <p>
                  Encouraging foundational learning, curiosity, creativity,
                  and positive educational development.
                </p>
              </div>
            </article>

            <article className="education-community-card">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85"
                alt="Young people studying together"
              />
              <div>
                <span>02 / YOUTH</span>
                <h3>Youth</h3>
                <p>
                  Supporting young people to develop digital competencies,
                  practical skills, and confidence for future opportunities.
                </p>
              </div>
            </article>

            <article className="education-community-card">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
                alt="Adult learner reading"
              />
              <div>
                <span>03 / ADULTS</span>
                <h3>Adults</h3>
                <p>
                  Promoting lifelong learning, digital awareness, and
                  opportunities for personal and economic development.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="education-approach education-section">
        <div className="education-container education-approach-grid">
          <div className="education-approach-heading">
            <span className="education-section-label">
              OUR APPROACH
            </span>
            <h2>
              Learning that creates
              <span> lasting change.</span>
            </h2>
            <p>
              We believe meaningful education should be inclusive,
              practical, community-driven, and connected to real-life
              opportunities.
            </p>
          </div>

          <div className="education-approach-list">
            <div className="education-approach-item">
              <span>01</span>
              <div>
                <h3>Inclusive Access</h3>
                <p>
                  Encouraging learning opportunities for people from
                  different backgrounds and circumstances.
                </p>
              </div>
            </div>

            <div className="education-approach-item">
              <span>02</span>
              <div>
                <h3>Practical Learning</h3>
                <p>
                  Promoting hands-on learning experiences that help
                  participants apply their knowledge.
                </p>
              </div>
            </div>

            <div className="education-approach-item">
              <span>03</span>
              <div>
                <h3>Community Participation</h3>
                <p>
                  Working with communities to understand learning needs
                  and encourage local participation.
                </p>
              </div>
            </div>

            <div className="education-approach-item">
              <span>04</span>
              <div>
                <h3>Future Opportunities</h3>
                <p>
                  Helping learners prepare for further education,
                  employment, and entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPECTED IMPACT */}
      <section className="education-impact education-section">
        <div className="education-container education-impact-grid">
          <div className="education-impact-heading">
            <span className="education-section-label">
              THE CHANGE WE WANT TO CREATE
            </span>
            <h2>Knowledge today. Stronger communities tomorrow.</h2>
            <p>
              By expanding access to education and digital skills, we
              aim to contribute to more confident, capable, and resilient
              communities.
            </p>
          </div>

          <div className="education-impact-list">
            {benefits.map((benefit) => (
              <div className="education-impact-item" key={benefit}>
                <CheckCircle size={20} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT LINK */}
      <section className="education-projects education-section">
        <div className="education-container education-projects-grid">
          <div>
            <span className="education-section-label">
              TURNING LEARNING INTO ACTION
            </span>
            <h2>Discover our education projects</h2>
            <p>
              Explore initiatives that promote learning, digital
              inclusion, and skills development within our communities.
            </p>
          </div>

          <Link to="/projects" className="education-projects-btn">
            Explore All Projects <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="education-cta">
        <div className="education-cta-overlay"></div>

        <div className="education-container education-cta-content">
          <div className="education-cta-icon">
            <Heart size={29} />
          </div>

          <span>BE PART OF THE CHANGE</span>

          <h2>
            Help us make education and digital skills accessible to
            everyone.
          </h2>

          <p>
            Your support can help create learning opportunities,
            strengthen digital skills, and empower communities to build
            a better future.
          </p>

          <div className="education-cta-actions">
            <Link to="/donate" className="education-primary-btn">
              Support Our Work <Heart size={18} />
            </Link>

            <Link to="/contact" className="education-outline-btn">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EducationDigitalSkills;
