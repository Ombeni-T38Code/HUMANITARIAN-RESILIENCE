import educationImage from '../../../assets/education.jpg';
import livelihoodsImage from '../../../assets/livelihood.jpg';
import communityImage from '../../../assets/community-center.jpg';
import teamworkImage from '../../../assets/community-handshake.jpg';
import styles from './Areas.module.css';

const areas = [
  ['Education', 'Learning and Skills', 'Encouraging access to learning, digital literacy and practical skills development.', educationImage],
  ['Livelihoods', 'Economic Empowerment', 'Promoting entrepreneurship, vocational skills and sustainable livelihood opportunities.', livelihoodsImage],
  ['Empowerment', 'Women, Children and Youth', 'Supporting protection, participation, development and meaningful opportunities.', communityImage],
  ['Development', 'Community Development', 'Strengthening community participation, inclusion and locally led initiatives.', teamworkImage],
];

export default function Areas() {
  return (
    <section className={styles.section} id="areas">
      <div className={styles.container}>
        <header className={styles.heading}>
          <span>Our areas of intervention</span>
          <h2>Working Across the Areas <em>That Matter Most.</em></h2>
          <p>
            Our approach connects education, health, livelihoods and community
            development to address different needs.
          </p>
        </header>
        <div className={styles.grid}>
          {areas.map(([category, title, description, image]) => (
            <article className={styles.card} key={category}>
              <img src={image} alt={title} loading="lazy" />
              <div className={styles.content}>
                <span>{category}</span>
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
