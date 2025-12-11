import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const externalLinks = [
  {
    title: 'Publications',
    description: 'Talks, papers, and long-form writing. Replace this URL with your live list.',
    href: 'https://example.com/publications',
  },
  {
    title: 'Blog',
    description: 'Ongoing notes and experiments. Point this to your preferred platform.',
    href: 'https://example.com/blog',
  },
];

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark">SG</div>
          <div>
            <p className="eyebrow">Portfolio of</p>
            <h1>Shivam Gupta</h1>
          </div>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="content">
        <section id="home" className="section-wrapper">
          <Home />
        </section>
        <section id="about" className="section-wrapper">
          <About />
        </section>
        <section id="experience" className="section-wrapper">
          <Experience />
        </section>
        <section id="education" className="section-wrapper">
          <Education />
        </section>
        <section id="skills" className="section-wrapper">
          <Skills />
        </section>
        <section id="projects" className="section-wrapper">
          <Projects />
        </section>
        <section id="contact" className="section-wrapper">
          <Contact />
        </section>
        <section id="more" className="section-wrapper">
          <div className="section">
            <div className="section-header">
              <p className="eyebrow">More</p>
              <h2>Publications and blog</h2>
              <p className="lede">These open in a new tab so recruiters can jump straight to your live content.</p>
            </div>
            <div className="external-links">
              {externalLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="external-link card"
                >
                  <div className="pill">External</div>
                  <h3>{link.title}</h3>
                  <p className="muted">{link.description}</p>
                  <span className="text-link">Open link ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Shivam Gupta. Crafted with React + Vite.</p>
      </footer>
    </div>
  );
}

export default App;
