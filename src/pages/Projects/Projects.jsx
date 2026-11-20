
import React from "react";
import {
  ArrowRight,
  HeartPulse,
  PersonStanding,
  Brain,
  Baby,
  Code,
  Languages,
  HandHeart,
  Droplets,
  GraduationCap,
  Target,
  Users,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../components/Layout/PageHero";

import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Community Health Education",
    category: "HEALTH & WELL-BEING",
    description:
      "Promoting health awareness and sharing practical health information to help individuals and families make informed decisions about their well-being.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    icon: HeartPulse,
    link: "/projects/community-health-education",
  },
  {
    number: "02",
    title: "Community Physiotherapy",
    category: "REHABILITATION",
    description:
      "Supporting people with physical challenges through rehabilitation awareness, movement, physical well-being, and access to appropriate support.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    icon: PersonStanding,
    link: "/projects/community-physiotherapy",
  },
  {
    number: "03",
    title: "Psychosocial Awareness",
    category: "MENTAL & SOCIAL WELL-BEING",
    description:
      "Encouraging psychosocial awareness, emotional well-being, positive relationships, and supportive community environments.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    icon: Brain,
    link: "/projects/psychosocial-awareness",
  },
  {
    number: "04",
    title: "Childcare & Learning",
    category: "CHILD DEVELOPMENT",
    description:
      "Creating opportunities for children to learn, play, develop confidence, and explore their potential in supportive environments.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85",
    icon: Baby,
    link: "/projects/childcare-learning",
  },
  {
    number: "05",
    title: "Digital Education",
    category: "EDUCATION & TECHNOLOGY",
    description:
      "Expanding access to digital learning and helping community members develop technology skills for education and future opportunities.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    icon: Code,
    link: "/projects/digital-education",
  },
  {
    number: "06",
    title: "Women's English Education",
    category: "WOMEN'S EDUCATION",
    description:
      "Supporting women to improve their English communication, literacy, confidence, and participation in everyday community life.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    icon: Languages,
    link: "/projects/womens-english-education",
  },
  {
    number: "07",
    title: "Soap Making",
    category: "LIVELIHOODS & ENTREPRENEURSHIP",
    description:
      "Equipping women and young people with practical soap production skills and encouraging small business development and income generation.",
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=900&q=85",
    icon: Droplets,
    link: "/projects/soap-making",
    featured: true,
  },
  {
    number: "08",
    title: "Youth Coding & Digital Skills",
    category: "YOUTH EMPOWERMENT",
    description:
      "Introducing young people to coding, website development, problem-solving, and digital skills that can support future opportunities.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    icon: GraduationCap,
    link: "/projects/youth-coding-digital-skills",
  },
];

const projectValues = [
  {
    icon: Target,
    title: "Community-Led",
    description:
      "We focus on the real needs, priorities, and aspirations of the communities we serve.",
  },
  {
    icon: Users,
    title: "Inclusive Participation",
    description:
      "We encourage participation from women, youth, children, and vulnerable community members.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership and Collaboration",
    description:
      "We believe lasting progress comes through cooperation, shared knowledge, and community partnerships.",
  },
  {
    icon: CheckCircle2,
    title: "Sustainable Development",
    description:
      "We promote practical solutions that strengthen knowledge, skills, resilience, and independence.",
  },
];

export default function Projects() {
  return (
    <main className="hra-projects-page">
      <PageHero
        eyebrow="OUR PROJECTS"
        title="Creating Change Through Community Action"
        description="Discover how Humanitarian Resilience Aid promotes health, education, rehabilitation, and economic opportunities for refugees and host communities in Kakuma."
        image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=2000&q=85"
      />

      {/* INTRODUCTION */}
      <section className="hra-projects-intro section-padding">
        <div className="hra-projects-container hra-projects-intro-grid">
          <div className="hra-projects-intro-content">
            <span className="hra-projects-label">
              MAKING A DIFFERENCE TOGETHER
            </span>

            <h2>
              Practical Projects.
              <span> Meaningful Change.</span>
            </h2>

            <p>
              Humanitarian Resilience Aid works with refugee and host
              communities in Kakuma to address challenges affecting health,
              education, livelihoods, and community well-being.
            </p>

            <p>
              Through our projects, we promote practical learning, community
              participation, access to knowledge, and opportunities that help
              people build stronger and more resilient futures.
            </p>

            <p>
              Each initiative reflects our commitment to supporting people,
              strengthening abilities, and creating opportunities for
              sustainable community development.
            </p>

            <Link
              to="/what-we-do"
              className="hra-projects-primary-btn"
            >
              Explore What We Do <ArrowRight size={18} />
            </Link>
          </div>

          <div className="hra-projects-intro-image">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85"
              alt="Community members participating in a group activity"
            />

            <div className="hra-projects-image-caption">
              <HandHeart size={27} />
              <div>
                <strong>Community First</strong>
                <span>Working together for lasting change</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="hra-projects-list section-padding">
        <div className="hra-projects-container">
          <div className="hra-projects-section-heading">
            <span className="hra-projects-label">
              OUR CURRENT PROJECT AREAS
            </span>

            <h2>Explore Our Projects</h2>

            <p>
              Our initiatives focus on improving lives through health,
              education, skills development, rehabilitation, and economic
              empowerment.
            </p>
          </div>

          <div className="hra-projects-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  className={`hra-project-card ${
                    project.featured ? "hra-project-card-featured" : ""
                  }`}
                  key={project.number}
                >
                  <Link
                    to={project.link}
                    className="hra-project-card-image"
                    aria-label={`Explore ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />

                    <span className="hra-project-card-number">
                      {project.number}
                    </span>

                    {project.featured && (
                      <span className="hra-project-featured-label">
                        FEATURED PROJECT
                      </span>
                    )}
                  </Link>

                  <div className="hra-project-card-content">
                    <div className="hra-project-card-top">
                      <div className="hra-project-card-icon">
                        <Icon size={23} />
                      </div>

                      <span>{project.category}</span>
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <Link
                      to={project.link}
                      className="hra-project-card-link"
                    >
                      Explore Project <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED SOAP MAKING PROJECT */}
      <section className="hra-projects-feature section-padding">
        <div className="hra-projects-container hra-projects-feature-grid">
          <div className="hra-projects-feature-image">
            <img
              src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1100&q=85"
              alt="Handmade soap products from a soap-making initiative"
              loading="lazy"
            />

            <div className="hra-projects-feature-stats">
              <div>
                <strong>35</strong>
                <span>Women trained</span>
              </div>

              <div className="hra-projects-feature-divider" />

              <div>
                <strong>20</strong>
                <span>Young people trained</span>
              </div>
            </div>
          </div>

          <div className="hra-projects-feature-content">
            <span className="hra-projects-label">
              FEATURED LIVELIHOOD PROJECT
            </span>

            <h2>
              Empowering Women and Youth Through
              <span> Soap Making</span>
            </h2>

            <p>
              Many families in Kakuma face economic challenges and limited
              employment opportunities. Our soap-making initiative helps
              women and young people develop practical production skills and
              explore small business opportunities.
            </p>

            <p>
              We have trained 35 women and 20 young people in soap making.
              Some participants have started small soap-making businesses
              and are earning income by selling their products.
            </p>

            <div className="hra-projects-feature-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Practical soap production skills</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Small business opportunities</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Income generation and independence</span>
              </div>
            </div>

            <Link
              to="/projects/soap-making"
              className="hra-projects-primary-btn"
            >
              Discover This Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="hra-projects-values section-padding">
        <div className="hra-projects-container">
          <div className="hra-projects-section-heading">
            <span className="hra-projects-label">
              HOW WE WORK
            </span>

            <h2>Our Approach to Project Development</h2>

            <p>
              We believe successful community projects are built around
              participation, inclusion, collaboration, and sustainable
              solutions.
            </p>
          </div>

          <div className="hra-projects-values-grid">
            {projectValues.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  className="hra-project-value-card"
                  key={value.title}
                >
                  <div className="hra-project-value-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hra-projects-cta section-padding">
        <div className="hra-projects-container">
          <div className="hra-projects-cta-content">
            <div className="hra-projects-cta-icon">
              <HeartHandshake size={33} />
            </div>

            <span>JOIN OUR MISSION</span>

            <h2>
              Together, We Can Create More Opportunities
            </h2>

            <p>
              Your support, partnership, and participation can help us
              strengthen community projects and reach more people in need.
            </p>

            <div className="hra-projects-cta-actions">
              <Link
                to="/get-involved"
                className="hra-projects-cta-primary"
              >
                Get Involved <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="hra-projects-cta-secondary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
