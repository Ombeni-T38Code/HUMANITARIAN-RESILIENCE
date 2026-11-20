import styles from './OurStory.module.css';

const steps = [
  {
    title: 'Understanding Community Needs',
    description: 'We listen to communities, understand the challenges they face and identify opportunities for meaningful and inclusive support.',
  },
  {
    title: 'Creating Learning Opportunities',
    description: 'We promote education, awareness and practical skills that help individuals discover their abilities and strengthen their confidence.',
  },
  {
    title: 'Supporting Community Action',
    description: 'We encourage participation, collaboration and community-led activities that respond to local needs.',
  },
  {
    title: 'Building Lasting Resilience',
    description: 'We work toward a future where individuals and families have stronger opportunities to live independently and contribute to society.',
  },
];

export default function OurStory() {
  return (
    <section className={styles.section} id="our-story">
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Our story</span>
            <h2>
              Turning Challenges Into <span>Opportunities.</span>
            </h2>
            <p>
              Communities facing humanitarian and economic challenges need
              more than temporary assistance. They need opportunities,
              knowledge, skills and support that help them build a stronger
              future.
            </p>
            <blockquote>
              “Resilient communities are built when people are empowered to
              become part of the solution.”
            </blockquote>
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <article className={styles.step} key={step.title}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
