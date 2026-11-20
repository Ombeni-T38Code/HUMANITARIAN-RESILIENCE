import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutHeroImage from '../../../assets/HeroSection/about/Hore.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.background}
        src={aboutHeroImage}
        alt="Humanitarian Resilience Aid community"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.kicker}>
            <span aria-hidden="true" />
            Hope · Opportunity · Resilience
          </span>

          <h1>
            Empowering People.
            <em> Transforming Communities.</em>
          </h1>

          <p className={styles.description}>
            We believe every person deserves the opportunity to live with
            dignity, develop their potential and build a better future. Through
            community-led initiatives, we work to strengthen lives and create
            lasting positive change.
          </p>

          <div className={styles.actions}>
            <a href="#who-we-are" className={styles.primaryButton}>
              Discover our story
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <Link to="/get-involved" className={styles.secondaryButton}>
              Become part of our mission
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.heroBottom}>
        <div className={styles.heroBottomInner}>
          <p>Building stronger and more resilient communities</p>
          <strong>Every Person. Every Opportunity. Every Future.</strong>
          <a href="#who-we-are" className={styles.scrollLink}>
            Scroll to explore <span aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}