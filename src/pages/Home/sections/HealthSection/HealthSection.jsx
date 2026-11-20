import { Stethoscope, PersonStanding, BookOpen, Brain } from "lucide-react";
import styles from "./HealthSection.module.css";

const HEALTH_IMAGE =
  "https://newsroom.amref.org/wp-content/uploads/2025/06/Life-saving-Health-Services_-Malawi_-Community-Health-Worker_-Simenti_Amref-Health-Africa_Amaru-Photography-2-copy-1-1024x683.jpg";

const features = [
  ["Community health", Stethoscope, "Healthcare education and awareness."],
  ["Physiotherapy", PersonStanding, "Support for disability and chronic pain."],
  ["Medical training", BookOpen, "Health skills and practical knowledge."],
  ["Psychosocial support", Brain, "Mental wellbeing awareness."]
];

export default function HealthSection() {
  return (
    <section className="home-section" id="health">
      <div className={`home-container ${styles.grid}`}>
        <div>
          <img
            className={styles.image}
            src={HEALTH_IMAGE}
            alt="African community health worker assisting a mother and child"
            loading="lazy"
          />
        </div>

        <div className={styles.content}>
          <span className="home-label">Healthcare and physiotherapy</span>
          <h2>Improving Community Health and Wellbeing</h2>
          <p>
            HRA promotes community health education and physiotherapy to improve
            healthcare knowledge, support people with disabilities and expand
            opportunities for refugee health workers.
          </p>

          <div className={styles.features}>
            {features.map(([title, Icon, text]) => (
              <div className={styles.feature} key={title}>
                <Icon size={20} />
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}