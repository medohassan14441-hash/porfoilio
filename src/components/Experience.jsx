import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>Internships and development work</h2>
      </div>
      <div className="stack">
        {experience.map((item) => (
          <article key={item.role} className="card timeline-card">
            <div className="timeline-top">
              <div>
                <h3>{item.role}</h3>
                <p className="muted">{item.company}</p>
              </div>
              <span className="period">{item.period}</span>
            </div>
            <p>{item.details}</p>
            <div className="chips">
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
