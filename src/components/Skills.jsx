import { skills } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <p className="eyebrow">Skills</p>
        <h2>Technical toolkit</h2>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category} className="card">
            <h3>{category}</h3>
            <div className="icon-grid">
              {items.map((item) => (
                <span key={item.name} className={`tech-pill tech-pill-${item.tone}`}>
                  <img className="tech-icon" src={item.icon} alt="" aria-hidden="true" />
                  <span>{item.name}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
