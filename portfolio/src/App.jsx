import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css';

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
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/experience', label: 'Experience' },
            { to: '/skills', label: 'Skills' },
            { to: '/projects', label: 'Projects' },
            { to: '/publications', label: 'Publications' },
            { to: '/blog', label: 'Blog' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Shivam Gupta. Crafted with React + Vite.</p>
      </footer>
    </div>
  );
}

export default App;
