import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="page-section">
        <div className="info-card">
          <p className="muted">Project not found.</p>
          <Link className="btn btn-primary" to="/projects">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="section-head">
        <p className="eyebrow">Case Study</p>
        <h1>{project.name}</h1>
      </div>

      <div className="project-detail-grid">
        <article className="info-card animate-in">
          <div className="project-media">
            <img src={project.image} alt={project.name} loading="lazy" />
          </div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="info-card animate-in animate-delay-1">
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
          <h2>Solution</h2>
          <p>{project.solution}</p>
          <h2>Impact</h2>
          <p>{project.impact}</p>
        </article>
      </div>

      <article className="info-card animate-in animate-delay-2">
        <h2>Tech Stack</h2>
        <div className="chips">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </article>
    </section>
  );
}
