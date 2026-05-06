import { experience } from '../data/portfolio';

export function ExperiencePage() {
  return (
    <section className="page-section">
      <div className="section-head">
        <p className="eyebrow">Experience</p>
        <h1>Professional background</h1>
      </div>
      <div className="stack">
        {experience.map((item) => (
          <article className="info-card timeline-card" key={item.role}>
            <div className="timeline-top">
              <div>
                <h2>{item.role}</h2>
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
