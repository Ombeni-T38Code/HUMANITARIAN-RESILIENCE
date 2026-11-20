import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import Hero from './Hero/Hero';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import OurStory from './OurStory/OurStory';
import MissionVision from './MissionVision/MissionVision';
import CoreValues from './CoreValues/CoreValues';
import Objectives from './Objectives/Objectives';
import Areas from './Areas/Areas';
import Programs from './Programs/Programs';
import SoapMaking from './SoapMaking/SoapMaking';
import Join from './Join/Join';

const sections = [
  Hero,
  WhoWeAre,
  OurStory,
  MissionVision,
  CoreValues,
  Objectives,
  Areas,
  Programs,
  SoapMaking,
  Join,
];

export default function AboutUs() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const elements = page.querySelectorAll('[data-about-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add(styles.visible));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(styles.visible, entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.main} ref={pageRef}>
      {sections.map((Section, index) => (
        <div
          className={styles.reveal}
          data-about-reveal
          key={Section.name}
          style={{ '--reveal-delay': `${Math.min(index, 4) * 70}ms` }}
        >
          <Section />
        </div>
      ))}
    </div>
  );
}
