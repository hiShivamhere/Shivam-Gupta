import React from 'react';

const roles = [
  {
    title: 'Senior Software Engineer',
    company: 'Cisco',
    period: '2020 — Present',
    impact: [
      'Lead development of secure, scalable customer experiences across cloud and networking products.',
      'Mentor engineers, run design reviews, and build tooling that lifts team velocity.',
      'Architect microservices on Kubernetes with strong observability and rollout practices.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'ABC Tech',
    period: '2017 — 2020',
    impact: [
      'Shipped full-stack web apps in React + Node, improving performance and accessibility scores.',
      'Designed CI/CD workflows and automated testing to shrink release cycles.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'XYZ Solutions',
    period: '2015 — 2017',
    impact: [
      'Modernized legacy systems, built APIs, and improved reliability for enterprise clients.',
    ],
  },
];

function Experience() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Experience</p>
        <h2>Leading teams and shipping reliable systems.</h2>
      </div>

      <div className="timeline">
        {roles.map((role) => (
          <div key={role.title} className="timeline-card card">
            <div className="timeline-meta">
              <span className="pill">{role.period}</span>
              <h3>{role.title}</h3>
              <p className="muted">{role.company}</p>
            </div>
            <ul className="list">
              {role.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
