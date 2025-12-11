import React from 'react';

const highlights = [
  { label: 'Years shipping software', value: '10+' },
  { label: 'Products launched', value: '25' },
  { label: 'Team members mentored', value: '40+' },
  { label: 'Patents/Pubs', value: '5' },
];

const featureCards = [
  {
    title: 'Building resilient platforms',
    text: 'Lead engineer at Cisco crafting secure, scalable experiences across cloud and networked systems.',
  },
  {
    title: 'Shipping with speed + quality',
    text: 'I obsess over developer experience, automation, and observability so teams move fast without breaking things.',
  },
  {
    title: 'Coaching and writing',
    text: 'Mentor engineers, run design reviews, and publish deep-dives on architecture, DevOps, and frontend craft.',
  },
];

function Home() {
  return (
    <div className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Engineering leader · Builder · Optimizer</p>
        <h2>
          I design and ship reliable products—from bold 0→1 bets to global platforms—with a calm, hands-on mindset.
        </h2>
        <p className="lede">
          Currently crafting platform experiences at Cisco. I thrive at the intersection of architecture, developer
          productivity, and UX polish.
        </p>
        <div className="cta-row">
          <a className="button primary" href="mailto:hishivamhere@gmail.com">
            Let’s talk
          </a>
          <a className="button ghost" href="#projects">
            View projects
          </a>
        </div>
        <div className="stats">
          {highlights.map((item) => (
            <div key={item.label} className="stat">
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="feature-grid">
        {featureCards.map((card) => (
          <div key={card.title} className="card">
            <div className="pill">Focus</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
