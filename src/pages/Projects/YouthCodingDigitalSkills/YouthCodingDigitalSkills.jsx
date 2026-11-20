
import React from "react";
import {
  Code,
  Laptop,
  Monitor,
  Globe,
  Brain,
  Lightbulb,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  ShieldCheck,
  Target,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Database,
  HeartHandshake,
  BookOpen,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../../components/Layout/PageHero";
import "./YouthCodingDigitalSkills.css";

const skillAreas = [
  {
    icon: Laptop,
    title: "Computer Literacy",
    description:
      "Introduce young people to computers, operating systems, typing, file management, and essential computer applications.",
  },
  {
    icon: Code,
    title: "Programming Fundamentals",
    description:
      "Help learners understand programming concepts, write basic code, and develop logical thinking.",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Introduce practical website development through HTML, CSS, JavaScript, and modern frontend technologies.",
  },
  {
    icon: Globe,
    title: "Internet and Digital Skills",
    description:
      "Develop internet navigation, online research, digital communication, and responsible technology use.",
  },
  {
    icon: Brain,
    title: "Problem-Solving",
    description:
      "Encourage learners to think critically, solve technical challenges, and approach problems creatively.",
  },
  {
    icon: Smartphone,
    title: "Digital Applications",
    description:
      "Introduce learners to useful digital tools and applications that support education and everyday activities.",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Introduction to Computers",
    description:
      "Learn computer basics, keyboard skills, operating systems, and essential digital operations.",
  },
  {
    number: "02",
    title: "Digital Literacy",
    description:
      "Explore internet use, online research, digital communication, and online safety.",
  },
  {
    number: "03",
    title: "Introduction to Coding",
    description:
      "Understand programming logic, basic coding concepts, and how to write simple programs.",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "Practise creating websites using HTML, CSS, JavaScript, and other relevant technologies.",
  },
  {
    number: "05",
    title: "Practical Projects",
    description:
      "Apply acquired knowledge by working on practical projects and solving real-world problems.",
  },
];

const benefits = [
  "Improved computer literacy and digital confidence",
  "Foundational programming and coding knowledge",
  "Practical website development experience",
  "Stronger creativity and problem-solving skills",
  "Improved access to online learning resources",
  "Preparation for further technology education",
  "Exposure to digital career and entrepreneurship opportunities",
];

const YouthCodingDigitalSkills = () => {
  return (
    <main className="ycd-page">
      <PageHero
        eyebrow="Our Projects"
        title="Youth Coding & Digital Skills"
        description="Opening digital opportunities for young people through computer education, programming, practical technology training, and innovation."
        image="/images/youth-coding-training.jpg"
      />

      {/* INTRODUCTION */}
      <section className="ycd-section ycd-intro">
        <div className="ycd-container ycd-intro-grid">
          <div className="ycd-intro-content">
            <span className="ycd-label">Preparing Youth for the Digital Future</span>

            <h2>
              Empowering Young People Through
              <span> Technology and Innovation</span>
            </h2>

            <p>
              Technology is increasingly important in education, communication,
              employment, and business. However, many young people in refugee
              and host communities face limited access to computers, digital
              education, and practical technology training.
            </p>

            <p>
              Through our Youth Coding and Digital Skills project, Humanitarian
              Resilience Aid aims to create learning opportunities that
              introduce young people to computers, digital literacy,
              programming, and practical technology skills.
            </p>

            <p>
              We want young people to gain the knowledge, confidence, and
              problem-solving abilities needed to participate in the digital
              world and explore future education and livelihood opportunities.
            </p>

            <Link to="/get-involved/partnerships" className="ycd-button">
              Support Digital Education <ArrowRight size={18} />
            </Link>
          </div>

          <div className="ycd-intro-visual">
            <img
              src="/images/youth-learning-computers.jpg"
              alt="Young people learning computer and digital skills"
            />

            <div className="ycd-floating-card">
              <div className="ycd-floating-icon">
                <Code size={29} />
              </div>
              <div>
                <strong>Learn. Create. Innovate.</strong>
                <span>Building skills for tomorrow</span>
              </div>
            </div>

            <div className="ycd-decoration"></div>
          </div>
        </div>
      </section>

      {/* WHY DIGITAL SKILLS */}
      <section className="ycd-section ycd-importance">
        <div className="ycd-container">
          <div className="ycd-section-heading">
            <span className="ycd-label">Why Digital Education Matters</span>
            <h2>Technology Creates New Possibilities</h2>
            <p>
              Digital skills can help young people access information,
              continue learning, develop solutions, and prepare for a
              changing world.
            </p>
          </div>

          <div className="ycd-importance-grid">
            <article className="ycd-importance-card">
              <div className="ycd-icon-box">
                <GraduationCap size={28} />
              </div>
              <h3>Education Opportunities</h3>
              <p>
                Help young people access online learning resources, digital
                educational materials, and opportunities for further training.
              </p>
            </article>

            <article className="ycd-importance-card">
              <div className="ycd-icon-box">
                <BriefcaseBusiness size={28} />
              </div>
              <h3>Future Employment</h3>
              <p>
                Introduce technology skills that can support future career
                development, entrepreneurship, and self-employment.
              </p>
            </article>

            <article className="ycd-importance-card">
              <div className="ycd-icon-box">
                <Lightbulb size={28} />
              </div>
              <h3>Creativity and Innovation</h3>
              <p>
                Encourage young people to use technology creatively and
                develop solutions to challenges in their communities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SKILL AREAS */}
      <section className="ycd-section ycd-skills">
        <div className="ycd-container">
          <div className="ycd-section-heading">
            <span className="ycd-label">What Young People Learn</span>
            <h2>Building Essential Digital Skills</h2>
            <p>
              Our learning approach introduces practical skills that can
              help young people become confident digital learners and creators.
            </p>
          </div>

          <div className="ycd-skills-grid">
            {skillAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="ycd-skill-card" key={item.title}>
                  <div className="ycd-skill-top">
                    <span>0{index + 1}</span>
                    <div className="ycd-icon-box">
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

      {/* LEARNING JOURNEY */}
      <section className="ycd-section ycd-journey">
        <div className="ycd-container ycd-journey-grid">
          <div className="ycd-journey-content">
            <span className="ycd-label">Our Learning Approach</span>
            <h2>From Basic Computer Skills to Practical Projects</h2>

            <p>
              We encourage a step-by-step learning approach that allows
              participants to build foundational knowledge before applying
              their skills through practical activities.
            </p>

            <div className="ycd-journey-list">
              {learningSteps.map((item) => (
                <div className="ycd-journey-item" key={item.number}>
                  <span className="ycd-journey-number">
                    {item.number}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ycd-journey-visual">
            <img
              src="/images/youth-coding-class.jpg"
              alt="Students participating in a coding lesson"
            />

            <div className="ycd-code-card">
              <div className="ycd-code-heading">
                <span></span>
                <span></span>
                <span></span>
                <small>learning.js</small>
              </div>

              <pre>
                <code>
                  <span className="ycd-code-purple">function</span>{" "}
                  <span className="ycd-code-yellow">createFuture</span>() {"{"}
                  {"\n"}  <span className="ycd-code-purple">return</span>{" "}
                  <span className="ycd-code-green">"New Opportunities"</span>;
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL LEARNING */}
      <section className="ycd-section ycd-practical">
        <div className="ycd-container">
          <div className="ycd-section-heading">
            <span className="ycd-label">Learning by Doing</span>
            <h2>Turning Knowledge Into Practical Experience</h2>
            <p>
              Practical activities help learners understand how technology
              works and how digital skills can be applied in everyday life.
            </p>
          </div>

          <div className="ycd-practical-grid">
            <article className="ycd-practical-card">
              <div className="ycd-practical-icon">
                <Laptop size={30} />
              </div>
              <h3>Computer Practice</h3>
              <p>
                Practise typing, file management, document preparation,
                and computer applications.
              </p>
            </article>

            <article className="ycd-practical-card">
              <div className="ycd-practical-icon">
                <Code size={30} />
              </div>
              <h3>Coding Exercises</h3>
              <p>
                Write basic code, understand programming logic, and
                practise developing simple applications.
              </p>
            </article>

            <article className="ycd-practical-card">
              <div className="ycd-practical-icon">
                <Globe size={30} />
              </div>
              <h3>Website Creation</h3>
              <p>
                Develop simple web pages and learn how websites are
                structured and displayed.
              </p>
            </article>

            <article className="ycd-practical-card">
              <div className="ycd-practical-icon">
                <Database size={30} />
              </div>
              <h3>Digital Projects</h3>
              <p>
                Apply digital knowledge through small projects and
                collaborative problem-solving activities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ycd-section ycd-benefits">
        <div className="ycd-container ycd-benefits-grid">
          <div className="ycd-benefits-heading">
            <span className="ycd-label">Expected Benefits</span>
            <h2>Skills That Prepare Youth for Tomorrow</h2>
            <p>
              The project aims to help young people develop a strong
              foundation for continued learning and participation in
              the digital economy.
            </p>
          </div>

          <div className="ycd-benefits-list">
            {benefits.map((benefit) => (
              <div className="ycd-benefit-item" key={benefit}>
                <CheckCircle2 size={21} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL SAFETY */}
      <section className="ycd-section ycd-safety">
        <div className="ycd-container ycd-safety-inner">
          <div className="ycd-safety-icon">
            <ShieldCheck size={42} />
          </div>

          <div>
            <span className="ycd-label">Responsible Digital Participation</span>
            <h2>Learning to Use Technology Safely</h2>
            <p>
              Digital education also includes responsible internet use,
              protecting personal information, recognising online risks,
              respecting others, and using technology positively.
            </p>
          </div>

          <div className="ycd-safety-points">
            <span><CheckCircle2 size={18} /> Online safety awareness</span>
            <span><CheckCircle2 size={18} /> Responsible internet use</span>
            <span><CheckCircle2 size={18} /> Digital communication skills</span>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="ycd-section ycd-goals">
        <div className="ycd-container">
          <div className="ycd-section-heading">
            <span className="ycd-label">Our Goals</span>
            <h2>Opening Doors to Digital Opportunities</h2>
          </div>

          <div className="ycd-goals-grid">
            <article className="ycd-goal-card">
              <Target size={30} />
              <h3>Expand Digital Access</h3>
              <p>
                Create more opportunities for young people to access
                computers, digital learning resources, and training.
              </p>
            </article>

            <article className="ycd-goal-card">
              <Rocket size={30} />
              <h3>Encourage Innovation</h3>
              <p>
                Support young people to develop ideas, build projects,
                and use technology to solve problems.
              </p>
            </article>

            <article className="ycd-goal-card">
              <HeartHandshake size={30} />
              <h3>Build Future Opportunities</h3>
              <p>
                Strengthen pathways to further education, digital
                entrepreneurship, and future employment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RELATED PROGRAM */}
      <section className="ycd-related">
        <div className="ycd-container ycd-related-inner">
          <div>
            <span className="ycd-label">Related Program</span>
            <h2>Education and Digital Skills</h2>
            <p>
              Discover our wider commitment to education, digital literacy,
              and learning opportunities for children, youth, and communities.
            </p>
          </div>

          <Link to="/what-we-do/education" className="ycd-outline-button">
            Explore Our Program <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="ycd-cta">
        <div className="ycd-container ycd-cta-inner">
          <div>
            <span className="ycd-label">Join Our Mission</span>
            <h2>Help Young People Build a Digital Future</h2>
            <p>
              Support access to computers, practical digital education,
              coding training, and opportunities that help young people
              develop their potential.
            </p>
          </div>

          <div className="ycd-cta-actions">
            <Link
              to="/get-involved/volunteer"
              className="ycd-button ycd-button-light"
            >
              Become a Volunteer <ArrowRight size={18} />
            </Link>

            <Link to="/donate" className="ycd-button ycd-button-gold">
              Support Digital Education
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YouthCodingDigitalSkills;
