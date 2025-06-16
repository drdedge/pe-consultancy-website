import React from 'react';
import { teamMembers, approachMetrics, engagementModels, philosophyPoints } from '../data/team';
import './Team.css';

// Placeholder image component
const TeamPhoto = ({ name }) => (
  <div className="team-photo-placeholder">
    <span>{name.split(' ').map(n => n[0]).join('')}</span>
  </div>
);

export const TeamSection = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="team-member-header">
                {member.photo ? (
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="team-photo"
                  />
                ) : (
                  <TeamPhoto name={member.name} />
                )}
                <div>
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                </div>
              </div>
              
              <div className="team-member-content">
                <p><strong>Background:</strong></p>
                <ul>
                  {member.background.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
                
                <div className="expertise-tags">
                  {member.expertise.map((skill, index) => (
                    <span key={index} className="expertise-tag">{skill}</span>
                  ))}
                </div>
                
                <p><strong>Notable Achievements:</strong></p>
                <ul>
                  {member.achievements.map((achievement, index) => (
                    <li key={index}>• {achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ApproachSection = () => {
  return (
    <section className="approach">
      <div className="container">
        <h2 className="section-title">From Insight to Impact in Weeks, Not Months</h2>
        <p>We understand PE timelines. Our approach combines:</p>
        <div className="approach-grid">
          {approachMetrics.map((metric, index) => (
            <div key={index} className="approach-item">
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WaysOfWorking = () => {
  return (
    <section className="ways-of-working" id="ways-of-working">
      <div className="container">
        <h2 className="section-title">Flexible Engagement, Lasting Impact</h2>
        <div className="engagement-grid">
          {engagementModels.map((model, index) => (
            <div key={index} className="engagement-model">
              <h3>{model.icon} {model.title}</h3>
              <p>{model.description}</p>
              <ul>
                {model.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="working-philosophy">
          <h3>Our Core Principle: You Own the Future</h3>
          <p>Every solution we build is designed for your organisation to own, operate and evolve. We believe in empowering your organisation with:</p>
          <div className="philosophy-points">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="philosophy-item">
                <strong>{point.title}</strong>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
          <div className="philosophy-footer">
            <p className="philosophy-highlight">
              Whether you require a quick proof of concept, fractional expertise or full project delivery, we adapt to your organisation's needs.
            </p>
            <p className="philosophy-subtext">
              We can embed alongside your team on a part-time basis or provide end-to-end delivery, scaling from two-week sprints to multi-year transformations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};