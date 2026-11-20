import {
  Heart,
  Users,
  Lightbulb,
  ShieldCheck,
  HandHeart,
  Mountain,
  Handshake,
  Sparkles,
} from 'lucide-react';
import styles from './CoreValues.module.css';

const values = [
  ['Human Dignity', Heart, "We respect every person's rights, identity, abilities and worth, regardless of their background."],
  ['Inclusion', Users, 'We promote equal opportunities and meaningful participation for all members of society.'],
  ['Empowerment', Sparkles, "We strengthen people's knowledge, confidence, skills and ability to make decisions."],
  ['Accountability', ShieldCheck, 'We value responsibility, transparency and the responsible use of resources and opportunities.'],
  ['Compassion', HandHeart, 'We approach people and communities with empathy, understanding and a commitment to support.'],
  ['Resilience', Mountain, 'We encourage the ability to overcome challenges, adapt and create positive change.'],
  ['Collaboration', Handshake, 'We believe lasting change is strengthened through cooperation, shared knowledge and partnerships.'],
  ['Innovation', Lightbulb, 'We welcome practical ideas and creative approaches to address changing community needs.'],
];

export default function CoreValues() {
  return (
    <section className={styles.section} id="values">
      <div className={styles.container}>
        <header className={styles.heading}>
          <span>Our core values</span>
          <h2>The Principles Behind <em>Everything We Do.</em></h2>
          <p>
            Our values guide how we work, how we treat people and how we build
            meaningful relationships with communities.
          </p>
        </header>

        <div className={styles.grid}>
          {values.map(([title, Icon, description]) => (
            <article className={styles.card} key={title}>
              <div className={styles.icon}>
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
