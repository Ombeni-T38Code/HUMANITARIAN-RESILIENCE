import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import image from '../../../../assets/community-project.jpg';
import styles from './AboutSection.module.css';

const objectives = [
  'Promote and facilitate community health education.',
  'Promote and facilitate the overall well-being of people with disabilities through physiotherapy without discrimination.',
  'Improve the quality of life of single mothers, women, and children through life skills education, awareness, and technological services.',
  'Contribute to poverty reduction and improve professional skills and quality of life for marginalized communities.',
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const animatedElements = section.querySelectorAll('[data-animate]');
    if (!('IntersectionObserver' in window)) {
      animatedElements.forEach((element) => {
        element.classList.add(styles.isVisible);
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
          } else {
            entry.target.classList.remove(styles.isVisible);
          }
        });
      },
      { threshold: 0.15 },
    );

    animatedElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      <div className={styles.layout}>
        <div className={styles.imageColumn} data-animate>
          <img
            src={image}
            alt="Humanitarian Resilience Aid community members and graduates"
          />
        </div>

        <div className={styles.contentColumn}>
          <div className={styles.content}>
            <span className={`${styles.eyebrow} ${styles.revealItem}`} data-animate>
              Who we are
            </span>
            <h2 className={`${styles.heading} ${styles.revealItem}`} data-animate>
              Created by refugees for capacity building.
            </h2>
            <p className={`${styles.description} ${styles.revealItem}`} data-animate>
              Humanitarian Resilience Aid (HRA) is an organization created by
              refugees to build the capacity of young people and adults. We
              support refugee communities as they prepare to return home or
              integrate into new communities with confidence.
            </p>
            <p className={`${styles.description} ${styles.revealItem}`} data-animate>
              We teach community health and physiotherapy through a
              comprehensive program of ten courses.
            </p>

            <div className={`${styles.objectives} ${styles.revealItem}`} data-animate>
              <h3 className={styles.objectivesTitle}>Our objectives</h3>
              <ol className={styles.objectivesList} data-animate>
                {objectives.map((objective, index) => (
                  <li key={objective}>
                    <span className={styles.objectiveNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ol>
            </div>

            <Link
              to="/get-involved"
              className={`${styles.link} ${styles.revealItem}`}
              data-animate
            >
              Partner with us
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
