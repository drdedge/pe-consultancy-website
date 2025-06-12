import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import { TeamSection, ApproachSection, WaysOfWorking } from '../components/Team'

export default function About() {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
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
