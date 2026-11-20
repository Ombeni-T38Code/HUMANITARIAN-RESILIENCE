
import { useEffect, useRef } from "react";
import {
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import styles from "./ProgramsSection.module.css";

const IMAGES = {
  communityHealth:
    "https://medtreks.com/wp-content/uploads/2021/02/10758003552_585A1650.png",

  physiotherapy:
    "https://mercyships.africa/wp-content/uploads/2025/04/SLG241212_REHAB_MAYAH_ETA_IW002_HI-MID-1.jpg",

  psychosocial:
    "https://researchoutreach.org/wp-content/uploads/2020/09/A-group-of-women-attending-a-group-therapy-session_2.jpg.webp",

  childCare:
    "https://rippleafrica.org/wp-content/uploads/2023/10/A-little-girl-practices-reciting-colours-to-her-friends-at-preschool-in-Malawi.jpg",

  codingEducation:
    "https://www.projectelimu.org/img/IMG_0020DL.jpg",

  womensEnglish:
    "https://images.squarespace-cdn.com/content/v1/657cd3ebeeb9e40a9b8e1c95/618e18e1-c319-4696-a7bb-7289b5306622/2024+Program+One+Pagers.jpg",

  soapMaking:
    "https://globalmamas.org/wp-content/uploads/2021/05/Process_BlackSoap.jpg"
};

const programs = [
  {
    title: "Community Health Education",
    image: IMAGES.communityHealth,
    description:
      "Training refugees in practical community health skills to improve healthcare access and create employment opportunities."
  },
  {
    title: "Community Physiotherapy",
    image: IMAGES.physiotherapy,
    description:
      "Supporting people living with chronic pain and disabilities through accessible physiotherapy services."
  },
  {
    title: "Psychosocial Awareness",
    image: IMAGES.psychosocial,
    description:
      "Promoting mental health awareness, emotional wellbeing and stronger community support systems."
  },
  {
    title: "Child Care Refugees Project",
    image: IMAGES.childCare,
    description:
      "Creating safe, nurturing and educational environments for children from refugee families."
  },
  {
    title: "Children's Coding Education",
    image: IMAGES.codingEducation,
    description:
      "Introducing children to digital skills, coding, creativity and future technology opportunities."
  },
  {
    title: "Women's English Education",
    image: IMAGES.womensEnglish,
    description:
      "Empowering women through English language learning, communication and educational opportunities."
  },
  {
    title: "Soap Making and Economic Empowerment",
    image: IMAGES.soapMaking,
    description:
      "Equipping women and young people with practical soap-making skills to develop businesses and generate income."
  }
];

export default function ProgramsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const revealElements = section.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add(styles.isVisible));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(styles.isVisible, entry.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`home-section ${styles.section}`}
      id="programs"
      ref={sectionRef}
    >
      <div className={`home-container ${styles.container}`}>

        {/* SECTION HEADING */}
        <div className={`home-heading ${styles.heading} ${styles.reveal}`} data-reveal>
          <span className={styles.label}>
            OUR PROJECTS
          </span>

          <h2>
            Programs That <span>Transform Lives</span>
          </h2>

          <p>
            Our programs focus on healthcare, education,
            wellbeing and creating opportunities for refugees
            and vulnerable communities to build a stronger future.
          </p>
        </div>

        {/* MODERN BENTO 7-BOX GRID */}
        <div className={styles.grid}>
          {programs.map((program, index) => {
            return (
              <article
                className={`
                  ${styles.card}
                  ${styles.reveal}
                  ${index === 0 ? styles.featured : ""}
                  ${index >= 5 ? styles.wide : ""}
                `}
                key={program.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` }}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay} />
                </div>

                <div className={styles.body}>
                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <Link
                    to="/projects"
                    className={styles.link}
                  >
                    Learn More
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* SOAP MAKING FEATURE */}
        <section
          className={`${styles.soapSection} ${styles.reveal}`}
          data-reveal
        >

          <div className={styles.soapContent}>
            <span className={styles.soapLabel}>
              WOMEN & YOUTH EMPOWERMENT
            </span>

            <h2>
              Empowering Women and Youth
              <span> Through Soap Making</span>
            </h2>

            <p>
              Life has become increasingly difficult for many
              refugee and host community families in Kakuma,
              especially following the reduction and withdrawal
              of humanitarian aid. Many households struggle
              to meet their basic needs, while women and young
              people have limited employment and income opportunities.
            </p>

            <p>
              Through our soap-making program, we aim to equip
              women and youth with practical skills in soap
              production, create employment opportunities and
              help them start small businesses.
            </p>

            {/* TRAINING STATISTICS */}
            <div className={styles.soapStats}>
              <div>
                <strong>35</strong>
                <span>Women Trained</span>
              </div>

              <div>
                <strong>20</strong>
                <span>Youth Trained</span>
              </div>

              <div>
                <strong>55</strong>
                <span>Total Participants</span>
              </div>
            </div>

            <p>
              So far, we have successfully trained 35 women
              and 20 young people. Some participants have
              already started small soap-making businesses
              and are earning income from selling their products.
            </p>

            {/* SUPPORT MESSAGE */}
            <div className={styles.soapSupport}>
              <h3>Your Support Can Make a Difference</h3>

              <p>
                With your support, we can train more people,
                purchase production equipment and raw materials,
                secure a good and conducive production space,
                create more job opportunities and help families
                become financially independent.
              </p>

              <p>
                Your donation can turn skills into businesses,
                create income and bring hope to families.
                Together, we can build a more self-reliant
                refugee and host community.
              </p>

              <Link
                to="/get-involved"
                className={styles.soapButton}
              >
                Support This Program
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className={styles.soapImage}>
            <img
              src={IMAGES.soapMaking}
              alt="Women and youth participating in hands-on soap-making production"
              loading="lazy"
            />

            <div className={styles.soapImageCaption}>
              <strong>
                Skills. Opportunity. Independence.
              </strong>

              <span>
                Building stronger communities in Kakuma
              </span>
            </div>
          </div>

        </section>

        {/* VIEW ALL PROJECTS */}
        <div className={`${styles.footer} ${styles.reveal}`} data-reveal>
          <Link
            to="/projects"
            className={styles.button}
          >
            Explore All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
