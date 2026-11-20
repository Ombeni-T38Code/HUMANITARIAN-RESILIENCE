import healthImage from '../../../assets/mental-health.jpg';
import physiotherapyImage from '../../../assets/community-center.jpg';
import codingImage from '../../../assets/education.jpg';
import womenImage from '../../../assets/community-handshake.jpg';
import psychosocialImage from '../../../assets/team-meeting.jpg';
import childcareImage from '../../../assets/community-project.jpg';
import styles from './Programs.module.css';

const programs = [
  ['Healthcare', 'Community Health Education', 'Promoting health awareness and practical knowledge to help individuals and families make informed decisions about their well-being.', healthImage],
  ['Physical Well-being', 'Community Physiotherapy', 'Supporting physical well-being through rehabilitation awareness, movement education and community-based physiotherapy initiatives.', physiotherapyImage],
  ['Digital Learning', "Children's Coding Education", 'Introducing children to digital literacy, coding and technology skills that help prepare them for future opportunities.', codingImage],
  ["Women's Empowerment", "Women's English Education", "Supporting women's communication skills, confidence and participation through accessible English learning opportunities.", womenImage],
  ['Social Well-being', 'Psychosocial Awareness', 'Encouraging awareness, social connection and supportive environments that promote emotional and psychosocial well-being.', psychosocialImage],
  ['Family Support', 'Child Care Support', 'Promoting supportive environments for children and families, helping caregivers balance their responsibilities and opportunities.', childcareImage],
];

export default function Programs() {
  return (
    <section className={styles.section} id="programs">
      <div className={styles.container}>
        <header className={styles.heading}>
          <span>Our programs</span>
          <h2>Practical Programs. <em>Meaningful Opportunities.</em></h2>
          <p>
            We translate our commitment into practical community initiatives
            designed to support learning, health, inclusion and personal
            development.
          </p>
        </header>
        <div className={styles.grid}>
          {programs.map(([category, title, description, image]) => (
            <article className={styles.card} key={title}>
              <div className={styles.image}>
                <img src={image} alt="" loading="lazy" />
                <span>{category}</span>
              </div>
              <div className={styles.body}>
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
