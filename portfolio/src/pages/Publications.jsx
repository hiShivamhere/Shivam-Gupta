import React from 'react';

const publications = [
  {
    title: 'Designing Safe Rollouts at Scale',
    venue: 'Cisco Engineering Blog',
    year: '2025',
    summary: 'Blueprint for canarying, feature flags, and blast-radius control for enterprise releases.',
  },
  {
    title: 'Measuring Developer Experience',
    venue: 'DX Summit',
    year: '2024',
    summary: 'How to instrument build times, deploy latency, and feedback loops to guide platform investment.',
  },
  {
    title: 'Frontend Reliability Patterns',
    venue: 'React Europe',
    year: '2023',
    summary: 'Practical techniques for error boundaries, graceful degradation, and observability at the edge.',
  },
];

function Publications() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Publications & Talks</p>
        <h2>Sharing what I learn along the way.</h2>
      </div>
      <div className="card-grid">
        {publications.map((pub) => (
          <div key={pub.title} className="card">
            <div className="pill">{pub.year}</div>
            <h3>{pub.title}</h3>
            <p className="muted">{pub.venue}</p>
            <p>{pub.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publications;
