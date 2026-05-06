import { projects } from '../data/portfolio';
import { Link } from 'react-router-dom';

export function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="section-head">
        <p className="eyebrow">Projects</p>
        <h1>Latest work</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card info-card animate-in" key={project.name}>
            <div className="project-media">
              <img src={project.image} alt={project.name} loading="lazy" />
            </div>
            <span className="project-tag">Featured</span>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="chips">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul className="bullet-list compact">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="project-links">
              <Link to={`/projects/${project.slug}`}>Case Study</Link>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
