import { useEffect, useRef } from 'react';
import styles from './WhySection.module.css';

export default function WhySection() {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return undefined;

    if (!('IntersectionObserver' in window)) {
      content.classList.add(styles.isVisible);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        content.classList.toggle(styles.isVisible, entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={styles.section}
      id="why-us-why-now"
      aria-labelledby="why-us-heading"
    >
      <div className={styles.layout}>
        <div className={styles.content} ref={contentRef}>
          <span className={styles.eyebrow}>Why us? Why now?</span>
          <h2 className={styles.heading} id="why-us-heading">
            We believe every displaced person deserves the opportunity to learn,
            earn, thrive, and lead change.
          </h2>
          <p className={styles.description}>
            We are a refugee-led organization committed to creating pathways
            for displaced people and host communities to access quality
            education, digital inclusion, sustainable livelihoods,
            environmental stewardship, and community-led advocacy. By
            investing in people, strengthening local leadership, and promoting
            social enterprise, we empower communities to become self-reliant,
            resilient, and equipped to build a future filled with dignity,
            opportunity, and hope.
          </p>
        </div>
      </div>
    </section>
  );
}