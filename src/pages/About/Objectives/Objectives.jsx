import styles from './Objectives.module.css';

const objectives = [
  ['Improve Community Health', 'Promote health education, awareness, physical well-being and access to appropriate community support.'],
  ['Promote Disability Inclusion', 'Encourage participation, accessibility, awareness and opportunities for people with disabilities.'],
  ['Empower Women and Youth', 'Expand access to practical training, education, leadership and livelihood opportunities.'],
  ['Support Quality Education', 'Promote inclusive learning, digital literacy, skills development and lifelong education.'],
  ['Strengthen Livelihoods', 'Support entrepreneurship, practical skills and opportunities for sustainable income generation.'],
  ['Build Resilient Communities', 'Encourage community participation, cooperation and locally driven development initiatives.'],
];

export default function Objectives() {
  return (
    <section className={styles.section} id="objectives">
      <div className={styles.container}>
        <header className={styles.heading}>
          <span>Our objectives</span>
          <h2>Creating Change That <em>Matters.</em></h2>
          <p>
            We focus on practical objectives that support community well-being,
            inclusion and sustainable development.
          </p>
        </header>
        <div className={styles.grid}>
          {objectives.map(([title, description], index) => (
            <article className={styles.card} key={title}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
