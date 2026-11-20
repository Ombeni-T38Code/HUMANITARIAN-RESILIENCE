
import {
  HeartHandshake,
  Presentation,
  Heart,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import styles from "./InvolvedSection.module.css";

const cards = [
  {
    title: "Become a Volunteer",
    icon: HeartHandshake,
    description:
      "Share your skills, time, and passion to support humanitarian initiatives and strengthen vulnerable communities.",
    path: "/contact",
  },
  {
    title: "Become an Educator",
    icon: Presentation,
    description:
      "Help deliver community health education, professional training, and skills-development opportunities.",
    path: "/contact",
  },
  {
    title: "Donate and Support",
    icon: Heart,
    description:
      "Your generous contributions help advance healthcare, education, community development, and sustainable livelihoods.",
    path: "/donate",
  },
];

export default function InvolvedSection() {
  return (
    <section
      className={`home-section ${styles.section}`}
      id="get-involved"
      aria-labelledby="involved-title"
    >
      <div className="home-container">
        <div className={`home-heading ${styles.heading}`}>
          <span className="home-label">JOIN OUR MISSION</span>

          <h2 id="involved-title">
            Be Part of the Change
          </h2>

          <p>
            We welcome passionate volunteers, dedicated educators,
            healthcare professionals, community leaders, organizations,
            and supporters who share our vision of promoting healthcare,
            education, and community empowerment.

            Whether you contribute your time, professional skills,
            knowledge, resources, or financial support, your involvement
            can help us expand opportunities for refugees, women,
            children, and other vulnerable communities.

            Together, we can strengthen local capacities, improve access
            to essential services, and build a healthier, more educated,
            and resilient society.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                className={styles.card}
                key={card.title}
              >
                <div
                  className={styles.iconWrap}
                  aria-hidden="true"
                >
                  <Icon size={28} strokeWidth={1.85} />
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <Link
                  to={card.path}
                  className={styles.actionLink}
                  aria-label={`${card.title} - Get involved`}
                >
                  <span>Get Involved</span>
                  <ArrowRight size={17} strokeWidth={2} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
