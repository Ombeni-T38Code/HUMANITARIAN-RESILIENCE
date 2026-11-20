import { Eye, Target } from 'lucide-react';
import styles from './MissionVision.module.css';

const purpose = [
  {
    title: 'Empowering People to Build Better Lives.',
    label: 'Our mission',
    icon: Target,
    description:
      'To provide practical training, education, healthcare-related initiatives and community support that empower refugees, migrants, women, children, youth and marginalized communities to build healthier, more resilient and self-reliant lives.',
  },
  {
    title: 'A World Where Every Community Can Thrive.',
    label: 'Our vision',
    icon: Eye,
    description:
      'To see inclusive, healthy and resilient communities where every individual has access to opportunities, can develop their potential and participate meaningfully in society.',
  },
];

export default function MissionVision() {
  return (
    <section className={styles.section} id="mission-vision">
      <div className={styles.container}>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>Our purpose</span>
          <h2>
            Guided by Purpose. <span>Focused on People.</span>
          </h2>
          <p>
            Our mission and vision reflect our commitment to human dignity,
            inclusion, opportunity and stronger communities.
          </p>
        </header>

        <div className={styles.grid}>
          {purpose.map(({ title, label, icon: Icon, description }) => (
            <article className={styles.card} key={label}>
              <Icon className={styles.icon} size={34} aria-hidden="true" />
              <span className={styles.label}>{label}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
