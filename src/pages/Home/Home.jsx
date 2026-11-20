import HeroSection from './sections/HeroSection/HeroSection';
import WhySection from './sections/WhySection/WhySection';
import AboutSection from './sections/AboutSection/AboutSection';
import ProgramsSection from './sections/ProgramsSection/ProgramsSection';
import HealthSection from './sections/HealthSection/HealthSection';
import EducationSection from './sections/EducationSection/EducationSection';
import ImpactSection from './sections/ImpactSection/ImpactSection';
import CommunitySection from './sections/CommunitySection/CommunitySection';
import InvolvedSection from './sections/InvolvedSection/InvolvedSection';
import FinalCtaSection from './sections/FinalCtaSection/FinalCtaSection';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <WhySection />
      <AboutSection />
      <ProgramsSection />
      <HealthSection />
      <EducationSection />
      <ImpactSection />
      <CommunitySection />
      <InvolvedSection />
      <FinalCtaSection />
    </div>
  );
}
