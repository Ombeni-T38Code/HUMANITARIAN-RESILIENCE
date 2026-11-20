import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/HeroSection/about/Hore.jpg';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroContainer} id="home">
      {/* Full-coverage background */}
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />

      {/* Dark overlay gradient to keep text readable */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <span className={styles.tag}>Promoting health care and education</span>

          <h1 className={styles.mainHeading}>
            Building Resilient Communities. Creating{' '}
            <span className={styles.greenText}>Brighter Futures.</span>
          </h1>

          <p className={styles.paragraphText}>
            Access to quality and affordable healthcare education that leads to
            employment is a basic human right. In Kakuma Refugee Camp and
            Kalobeyei, HRA reskills refugees with healthcare and physiotherapy
            education to expand employment opportunities, foster
            self-determination and reduce poor healthcare outcomes.
          </p>

          <blockquote className={styles.blockquoteBlock}>
            <p className={styles.paragraphTexts}>
              Helping refugees with medical skills training empowers them to
              care for themselves, integrate into society and build stronger,
              healthier communities.
            </p>
          </blockquote>

          <div className={styles.buttonGroup}>
            <Link to="/projects" className={styles.primaryBtn}>
              Explore Our Projects <ArrowRight size={17} className={styles.arrowIcon} />
            </Link>
            <Link to="/get-involved" className={styles.secondaryBtn}>
              Join Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}