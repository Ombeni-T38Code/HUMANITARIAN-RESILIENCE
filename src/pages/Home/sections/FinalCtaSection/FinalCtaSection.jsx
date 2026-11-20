import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import styles from "./FinalCtaSection.module.css";

const CTA_BACKGROUND_IMAGE =
  "https://www.unhcr.org/blogs/wp-content/uploads/sites/48/2024/12/RF1393259_206A2627.jpg";

export default function FinalCtaSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="final-cta-heading"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 57, 41, 0.88), rgba(11, 57, 41, 0.9)), url(${CTA_BACKGROUND_IMAGE})`
      }}
    >
      <div className={`home-container ${styles.inner}`}>
        <span className={styles.eyebrow}>Humanitarian Resilience Aid</span>

        <h2 id="final-cta-heading">Together, We Can Build a Better Future</h2>

        <p>
          Your support helps refugees and vulnerable families access practical
          healthcare education, physiotherapy care, psychosocial support,
          digital coding skills, English learning, and hands-on soap production
          in Kakuma and surrounding host communities.
        </p>

        <p>
          Every contribution expands local skills, creates pathways to income,
          and builds stronger, more self-reliant households. Join Humanitarian
          Resilience Aid today and help turn compassion into lasting, everyday
          opportunity.
        </p>

        <div className={styles.actions}>
          <Link
            to="/contact"
            className={`home-button home-button--primary ${styles.primaryButton}`}
          >
            <span>Join our mission</span>
            <ArrowRight size={17} strokeWidth={2} />
          </Link>

          <Link
            to="/donate"
            className={`home-button ${styles.secondaryButton}`}
          >
            <Heart size={17} strokeWidth={2} />
            <span>Support a program</span>
          </Link>
        </div>
      </div>
    </section>
  );
}