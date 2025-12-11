import React from 'react';

const principles = [
  'Bias to ship: small iterations beat big reveals.',
  'Design for observability: metrics, logs, and traces first-class.',
  'Own the DX: great tooling compounds team velocity.',
  'Lead with clarity: crisp written docs and decisive reviews.',
];

function About() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">About</p>
        <h2>The work style that follows me everywhere.</h2>
        <p className="lede">
          I’m Shivam Gupta, a hands-on engineer who loves shaping reliable platforms and coaching teams. I care deeply
          about user experience, developer experience, and the business outcomes that tie them together.
        </p>
      </div>

      <div className="card-grid two-col">
        <div className="card highlight">
          <h3>Blending product + platform thinking</h3>
          <p>
            My sweet spot is translating ambiguous product ideas into scalable architecture. I pair discovery with rapid
            prototyping, then harden the path with automation, testing, and great documentation.
          </p>
        </div>
        <div className="card">
          <h3>What I value</h3>
          <ul className="list">
            {principles.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
