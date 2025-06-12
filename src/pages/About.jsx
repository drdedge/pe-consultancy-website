import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import { TeamSection, ApproachSection, WaysOfWorking } from '../components/Team'

export default function About() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to ways-of-working section if coming from home page
    // or if there's a hash in the URL
    const scrollToSection = () => {
      const element = document.getElementById('ways-of-working');
      if (element && location.state?.scrollTo === 'ways-of-working') {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    // Small delay to ensure DOM is ready
    setTimeout(scrollToSection, 100);
  }, [location]);

  return (
    <div className="about">
      <Hero 
        title="Data-Driven Leaders with PE DNA"
        subtitle="Combining technical excellence with deep transaction experience"
        subtext="We integrate seamlessly with your teams to deliver solutions you own and control"
      />
      <TeamSection />
      <ApproachSection />
      <WaysOfWorking />
    </div>
  )
}
