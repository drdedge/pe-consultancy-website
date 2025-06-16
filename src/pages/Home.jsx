import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'
import shareImage from '/src/assets/images/about/team/david-edgeley.jpg'

export default function Home() {
  const location = useLocation()
  const canonical = `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, '')}${location.pathname}`
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
      <Helmet>
        <title>Data &amp; AI Analytics Consultancy</title>
        <meta
          name="description"
          content="Private equity analytics consultancy delivering data-driven insights across the investment lifecycle."
        />
        <meta
          name="keywords"
          content="private equity analytics, data analytics, due diligence, portfolio optimization"
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Data &amp; AI Analytics Consultancy" />
        <meta
          property="og:description"
          content="Transform deal intelligence with data and AI."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={shareImage} />
      </Helmet>
      <Hero
        title="Accelerate Portfolio Value Creation Through Advanced Analytics"
        subtitle="From deal sourcing to exit, our insights empower smarter decisions"
        subtext="Leverage AI-driven intelligence to unlock growth across your investments"
        buttons={heroButtons}
      />
      <Services />
      <CaseStudies />
    </div>
  )
}
