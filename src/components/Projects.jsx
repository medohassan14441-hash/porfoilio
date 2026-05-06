import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
        <p className="muted">Replace the GitHub and demo placeholders with your live links.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project card">
            <div className="project-tag">Featured</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="chips">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul className="bullets compact">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.github}>GitHub</a>
              <a href={project.demo}>Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
