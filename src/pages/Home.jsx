import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { profile, projects, experience } from '../data/portfolio';

export function Home() {
  const heroLines = [
    {
      line1: ['Building', 'end-to-end'],
      line2: ['digital', 'products'],
      line3: ['that feel', 'alive.'],
    },
    {
      line1: ['Turning', 'ideas into'],
      line2: ['fast, modern', 'web apps.'],
      line3: ['that feel', 'premium.'],
    },
    {
      line1: ['Shaping', 'clean'],
      line2: ['scalable', 'experiences.'],
      line3: ['that feel', 'alive.'],
    },
  ];
  const [heroCopyIndex, setHeroCopyIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    let timeoutId;
    const timer = window.setInterval(() => {
      setIsSwitching(true);
      timeoutId = window.setTimeout(() => {
        setHeroCopyIndex((current) => (current + 1) % heroLines.length);
        setIsSwitching(false);
      }, 220);
    }, 3800);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(timeoutId);
    };
  }, []);

  const heroCopy = heroLines[heroCopyIndex];

  return (
    <>
      <section className="hero hero-split">
        <div className="hero-copy animate-in">
          <p className="eyebrow typing-eyebrow">{profile.title}</p>
          <h1 className={`hero-title ${isSwitching ? 'is-switching' : ''}`} key={heroCopyIndex}>
            <span className="title-line title-line-1">
              {heroCopy.line1[0]} <span className="title-accent">{heroCopy.line1[1]}</span>
            </span>
            <span className="title-line title-line-2">
              {heroCopy.line2[0]} <span className="title-accent">{heroCopy.line2[1]}</span>
            </span>
            <span className="title-line title-line-3">
              {heroCopy.line3[0]} <span className="title-accent">{heroCopy.line3[1]}</span>
            </span>
          </h1>
          <p className="lead hero-lead">
            Skilled in building <span>modern interfaces</span>, scalable <span>backend-connected apps</span>,
            and practical solutions for <span>real-world problems</span>.
          </p>

          <div className="hero-tech-strip" aria-label="Core technologies">
            <span>React</span>
            <span>Node.js</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
          </div>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">See My Work</Link>
            <Link className="btn btn-secondary" to="/contact">Contact Me</Link>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <strong>Full Stack</strong>
              <span>Frontend + Backend</span>
            </div>
            <div className="metric">
              <strong>5+</strong>
              <span>Featured projects</span>
            </div>
            <div className="metric">
              <strong>Cairo</strong>
              <span>Based in Egypt</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-in animate-delay-1">
          <div className="photo-stage">
            <div className="photo-frame">
              <img src="/profile.jpg" alt={profile.name} className="profile-photo" />
            </div>
            <div className={`photo-status ${isSwitching ? 'is-switching' : ''}`} key={heroCopyIndex}>
              <span className="photo-status-kicker">Now Building</span>
              <strong>
                {heroCopy.line2[0]} <span>{heroCopy.line2[1]}</span>
              </strong>
              <p>
                {heroCopy.line3[0]} <span>{heroCopy.line3[1]}</span>
              </p>
            </div>
            <div className="floating-card card-mini">
              <span className="eyebrow">Available for opportunities</span>
              <strong>Full Stack Developer</strong>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-grid">
        <article className="info-card animate-in animate-delay-2">
          <span className="eyebrow">About Me</span>
          <h2>Clean code, clear logic, smooth UI.</h2>
          <p>
            I focus on building products that feel polished on the frontend and dependable on the backend.
          </p>
        </article>

        <article className="info-card accent featured-home-project animate-in animate-delay-3">
          <span className="eyebrow">Featured Project</span>
          <h2>{projects[0].name}</h2>
          <p>{projects[0].description}</p>
          <div className="project-links">
            <Link to={`/projects/${projects[0].slug}`}>Case Study</Link>
          </div>
          <div className="project-thumb">
            <img src={projects[0].image} alt={projects[0].name} loading="lazy" />
          </div>
        </article>
      </section>
    </>
  );
}
