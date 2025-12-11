import React from 'react';

const projects = [
  {
    title: 'Observability Hub',
    description:
      'Unified telemetry platform with distributed tracing, SLO dashboards, and automated alert tuning for microservices.',
    stack: ['TypeScript', 'Node', 'OpenTelemetry', 'PostgreSQL', 'Grafana'],
    link: 'https://github.com/hiShivamhere',
  },
  {
    title: 'Design System Kit',
    description:
      'Composable React component library with theming, accessibility primitives, and documentation site powered by MDX.',
    stack: ['React', 'Vite', 'Storybook', 'CSS-in-JS'],
    link: 'https://github.com/hiShivamhere',
  },
  {
    title: 'Delivery Control Plane',
    description:
      'Multi-tenant release orchestration with progressive rollouts, canary analysis, and audit trails for enterprise apps.',
    stack: ['Go', 'Kubernetes', 'gRPC', 'Redis', 'GitHub Actions'],
    link: 'https://github.com/hiShivamhere',
  },
  {
    title: 'Personal Analytics',
    description:
      'Privacy-first personal analytics dashboard that blends calendar, tasks, and focus time to guide weekly planning.',
    stack: ['Next.js', 'Tailwind', 'Supabase', 'Vercel'],
    link: 'https://github.com/hiShivamhere',
  },
];

function Projects() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Projects</p>
        <h2>Selected work across platforms, tooling, and experience.</h2>
        <p className="lede">A mix of professional impact and personal experiments that keep me curious.</p>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <div key={project.title} className="card project-card">
            <div className="pill">Build</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="chips">
              {project.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
            <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
              View details ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
