import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'

export default function Home() {
  const scrollToCaseStudies = (e) => {
    e.preventDefault();
    const target = document.getElementById('case-studies');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const heroButtons = [
    {
      text: 'View Portfolio Projects',
      href: '#case-studies',
      onClick: scrollToCaseStudies
    },
    {
      text: 'How We Work',
      to: '/about',
      variant: 'secondary'
    }
  ];

  return (
    <div className="home">
      <Hero 
        title="Transform Deal Intelligence with Data & AI"
        subtitle="From due diligence to portfolio optimization, we deliver actionable insights that drive value creation"
        subtext="Your single source of truth across the entire investment lifecycle"
        buttons={heroButtons}
      />
      <Services />
      <CaseStudies />
    </div>
  )
}
