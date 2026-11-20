import { ArrowRight } from 'lucide-react';
import styles from './Join.module.css';

const actions = [
  ['Become a volunteer', 'Volunteer%20with%20HRA', true],
  ['Partner with us', 'Partnership%20with%20HRA', false],
  ['Support our work', 'Support%20HRA', false],
];

export default function Join() {
  return (
    <section className={styles.section} id="join">
      <div className={styles.decoration} />
      <div className={`${styles.decoration} ${styles.right}`} />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Join our mission</span>
          <h2>Be Part of the <span>Change.</span></h2>
          <p>
            Stronger communities are built when people come together with a
            shared purpose. Join Humanitarian Resilience Aid in creating
            opportunities, supporting vulnerable people and building a more
            resilient future. Your time, skills, knowledge and support can help
            make a difference.
          </p>
          <div className={styles.actions}>
            {actions.map(([label, subject, primary]) => (
              <a
                className={primary ? styles.primaryButton : styles.secondaryButton}
                href={`mailto:humanitarianraid@gmail.com?subject=${subject}`}
                key={label}
              >
                {label}
                {primary && <ArrowRight size={17} aria-hidden="true" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
