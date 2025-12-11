import React from 'react';

const skillSets = [
  {
    title: 'Frontend & UX',
    items: ['React', 'TypeScript', 'Vite', 'Redux', 'Accessibility', 'Design systems'],
  },
  {
    title: 'Backend & Platform',
    items: ['Node.js', 'Express', 'REST/GraphQL APIs', 'Python', 'Go', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'GitHub Actions', 'Observability'],
  },
  {
    title: 'Leadership & Practice',
    items: ['Technical strategy', 'Mentorship', 'Incident response', 'System design', 'Technical writing'],
  },
];

function Skills() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Skills</p>
        <h2>Craft, architecture, and the systems that keep teams fast.</h2>
      </div>
      <div className="card-grid">
        {skillSets.map((set) => (
          <div key={set.title} className="card">
            <div className="pill">Core</div>
            <h3>{set.title}</h3>
            <ul className="chips">
              {set.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
