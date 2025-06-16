import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import { TeamSection, ApproachSection, WaysOfWorking } from '../components/Team'
import shareImage from '/src/assets/images/about/team/david-edgeley.jpg'

export default function About() {
  const location = useLocation();
  const canonical = `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, '')}${location.pathname}`

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
      <Helmet>
        <title>About - Data &amp; AI Analytics Consultancy</title>
        <meta
          name="description"
          content="Learn about our data-driven team and how we integrate seamlessly with private equity firms."
        />
        <meta
          name="keywords"
          content="private equity, analytics team, data science, consultancy"
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="About - Data &amp; AI Analytics Consultancy" />
        <meta
          property="og:description"
          content="Meet the experts transforming deal intelligence with data and AI."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={shareImage} />
      </Helmet>
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
