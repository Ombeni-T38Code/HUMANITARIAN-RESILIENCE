import { Check } from 'lucide-react';
import styles from './WhoWeAre.module.css';
import communityImage from '../../../assets/community-center.jpg';
import educationImage from '../../../assets/education.jpg';

const commitments = [
  'Community empowerment',
  'Inclusive education',
  'Health and well-being',
  'Sustainable livelihoods',
];

export default function WhoWeAre() {
  return (
    <section className={styles.section} id="who-we-are">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.visual}>
            <div className={styles.decoration} />
            <div className={styles.mainImage}>
              <img src={communityImage} alt="Community members supporting one another" loading="lazy" />
            </div>
            <div className={styles.smallImage}>
              <img src={educationImage} alt="Students learning together" loading="lazy" />
            </div>
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>Who we are</span>
            <h2>
              Driven by Purpose. <span>United by Humanity.</span>
            </h2>
            <p>
              Humanitarian Resilience Aid (HRA) is a community-focused
              organization committed to supporting vulnerable individuals and
              families through education, health initiatives, skills
              development and community empowerment.
            </p>
            <p>
              We recognize the challenges faced by refugees, host communities,
              women, children, youth and other marginalized groups. Our work
              creates practical opportunities that help people improve their
              well-being and become more self-reliant.
            </p>
            <p>
              We believe meaningful change begins when communities are
              included, empowered and given the tools to shape their future.
            </p>

            <ul className={styles.commitments}>
              {commitments.map((commitment) => (
                <li key={commitment}>
                  <span><Check size={14} aria-hidden="true" /></span>
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
