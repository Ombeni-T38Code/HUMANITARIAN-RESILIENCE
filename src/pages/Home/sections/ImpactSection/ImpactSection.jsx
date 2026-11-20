import { HeartPulse, GraduationCap, Users, Handshake } from "lucide-react";
import styles from "./ImpactSection.module.css";

const impacts = [
  ["Healthcare", HeartPulse, "Community health and physiotherapy education."],
  ["Education", GraduationCap, "Learning and skills development opportunities."],
  ["Empowerment", Users, "Supporting refugees, women and young people."],
  ["Partnership", Handshake, "Working with organizations and communities."]
];

export default function ImpactSection() {
  return (
    <section className={`home-section ${styles.section}`} id="impact">
      <div className="home-container">
        <div className={`home-heading ${styles.heading}`}>
          <span className={styles.label}>Our achievements</span>
          <h2>Making a Difference Together</h2>
          <p>
            Our work creates opportunities for refugees and vulnerable communities
            through healthcare, education and empowerment.
          </p>
        </div>

        <div className={styles.grid}>
          {impacts.map(([title, Icon, text]) => (
            <article className={styles.card} key={title}>
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon size={34} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}