import React from 'react';

const posts = [
  {
    title: 'How to Architect Scalable Microservices',
    date: 'Aug 2025',
    summary:
      'Patterns for slicing services, avoiding chatty calls, and keeping contracts stable as teams grow.',
  },
  {
    title: 'Modern DevOps with GitHub Actions',
    date: 'Jul 2025',
    summary:
      'Reusable workflows, deployment protection rules, and secrets hygiene for reliable pipelines.',
  },
  {
    title: 'React Performance Patterns',
    date: 'Jun 2025',
    summary:
      'Where to memoize, when to split bundles, and how to instrument hydration and interaction timing.',
  },
];

function Blog() {
  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">Blog</p>
        <h2>Notes, experiments, and lessons learned.</h2>
        <p className="lede">A lightweight feed of the topics I like to explore.</p>
      </div>
      <div className="card-grid">
        {posts.map((post) => (
          <div key={post.title} className="card">
            <div className="pill">{post.date}</div>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
