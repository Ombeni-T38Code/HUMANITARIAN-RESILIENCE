import { HeartPulse, BookOpen, UsersRound, HandHeart } from "lucide-react";
import styles from "./CommunitySection.module.css";

const COMMUNITY_TRAINING_IMAGE =
  "https://www.wiredinternational.org/wp-content/uploads/2026/05/1000008830.jpg";

const areas = [
  [
    "Health and wellbeing",
    HeartPulse,
    "Community health education, physiotherapy and psychosocial awareness."
  ],
  [
    "Education and learning",
    BookOpen,
    "Coding education for children, English learning for women and health training."
  ],
  [
    "Women and youth",
    UsersRound,
    "Skills development and opportunities for women, children and young people."
  ],
  [
    "Refugee support",
    HandHeart,
    "Supporting refugee families through education, childcare and community services."
  ]
];

export default function CommunitySection() {
  return (
    <section className={`home-section ${styles.section}`} id="community">
      <div className="home-container">
        <div className={`home-heading ${styles.heading}`}>
          <span className="home-label">Our community impact</span>
          <h2>Making a Lasting Difference</h2>
          <p>
            We work to improve lives, strengthen resilience and create
            opportunities through health care, education and community
            development.
          </p>
        </div>

        <div className={styles.grid}>
          {areas.map(([title, Icon, text]) => (
            <article className={styles.card} key={title}>
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon size={32} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <article className={styles.achievement}>
          <div className={styles.achievementImage}>
            <img
              src={COMMUNITY_TRAINING_IMAGE}
              alt="Community healthcare training session with trainees and instructors in Kenya"
              loading="lazy"
            />
          </div>

          <div className={styles.achievementContent}>
            <span className="home-label">Our project achievement</span>
            <h3>Community Healthcare and Physiotherapy Training</h3>
            <p>
              HRA completed a 12-week community healthcare and physiotherapy
              training programme for unemployed refugees in Kakuma Refugee Camp.
            </p>
            <p>
              Participants received theoretical and practical training,
              certificates and starter equipment.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}