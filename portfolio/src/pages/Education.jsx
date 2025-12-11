import React from 'react';

const education = [
  {
    degree: 'M.Tech, Computer Science',
    school: 'Example Institute of Technology',
    period: '2020 — 2022',
    highlights: [
      'Specialized in distributed systems and cloud-native architectures.',
      'Capstone: built a rollout control platform with feature flags and automated canary analysis.',
    ],
  },
  {
    degree: 'B.Tech, Information Technology',
    school: 'Example University',
    period: '2016 — 2020',
    highlights: [
      'Graduated with honors; research in API performance and observability.',
      'Led the developer club, organized meetups, and mentored junior peers.',
    ],
  },
];

function Education() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Education</p>
        <h2>Learning the foundations that shape my craft.</h2>
        <p className="lede">Replace the entries below with your actual degrees, schools, and key outcomes.</p>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <div key={item.degree} className="timeline-card card">
            <div className="timeline-meta">
              <span className="pill">{item.period}</span>
              <h3>{item.degree}</h3>
              <p className="muted">{item.school}</p>
            </div>
            <ul className="list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
