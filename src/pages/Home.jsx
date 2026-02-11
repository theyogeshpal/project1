import Hero from '../components/Hero';
import TrainingCarousel from '../components/TrainingCarousel';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TechnologySection from '../components/TechnologySection';
import OurStory from '../components/OurStory';
import TrainingPrograms from '../components/TrainingPrograms';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrainingCarousel />
      <AboutSection />
      <WhyChooseUs />
      <TechnologySection />
      <OurStory />
      <TrainingPrograms />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Home;
