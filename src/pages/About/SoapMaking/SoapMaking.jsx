import { Link } from 'react-router-dom';
import styles from './SoapMaking.module.css';
import soapImage from '../../../assets/soap-making.jpg';

const supportNeeds = [
  'Train more women and young people in soap production.',
  'Purchase production equipment and raw materials.',
  'Secure a suitable and conducive production space.',
  'Create more employment and small business opportunities.',
  'Help families become more financially independent.',
];

const impact = [
  ['35', 'Women trained'],
  ['20', 'Young people trained'],
  ['55', 'Total participants'],
  ['New', 'Small businesses emerging'],
];

export default function SoapMaking() {
  return (
    <section className={styles.section} id="soap-making">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.visual}>
            <img src={soapImage} alt="Handmade soap created through the HRA training program" loading="lazy" />
            <div className={styles.stat}>
              <strong>55</strong>
              <span>Women and young people trained</span>
            </div>
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>Economic empowerment</span>
            <h2>
              Empowering Women and Youth Through <em>Soap Making.</em>
            </h2>
            <p>
              Many refugee and host community families in Kakuma struggle to
              meet their basic needs, while women and young people have limited
              opportunities to find jobs and earn an income.
            </p>
            <p>
              Through our soap-making program, we equip women and youth with
              practical production skills, create employment opportunities and
              help participants start small businesses.
            </p>
            <p>
              We have trained 35 women and 20 young people. Some participants
              have already started small soap-making businesses and are earning
              income by selling their products.
            </p>

            <div className={styles.impact}>
              {impact.map(([number, label]) => (
                <div key={label}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className={styles.support}>
              <h3>Help Us Expand This Opportunity</h3>
              <ul>
                {supportNeeds.map((need) => <li key={need}>{need}</li>)}
              </ul>
            </div>

            <p>
              Your donation can turn skills into businesses, create income and
              bring hope to families. Together, we can build a more self-reliant
              refugee and host community.
            </p>

            <div className={styles.actions}>
              <a
                href="mailto:humanitarianraid@gmail.com?subject=Support%20Soap-Making%20Program"
                className={styles.primaryButton}
              >
                Support this program
              </a>
              <Link to="/get-involved" className={styles.secondaryButton}>
                Become a partner
              </Link>
            </div>
            <span className={styles.note}>
              Every contribution helps create skills, income and opportunity.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
