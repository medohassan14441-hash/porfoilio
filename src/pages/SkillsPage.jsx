import { skills } from '../data/portfolio';

export function SkillsPage() {
  return (
    <section className="page-section">
      <div className="section-head">
        <p className="eyebrow">Skills</p>
        <h1>Technical toolkit</h1>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <article className="info-card skill-card animate-in" key={category}>
            <h2>{category}</h2>
            <div className="logo-row">
              {items.map((item) => (
                <a
                  key={item.name}
                  className={`logo-chip logo-chip-${item.tone}`}
                  href={item.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${item.name} official source`}
                  title={item.source}
                >
                  <img src={item.icon} alt="" className="logo-img" aria-hidden="true" />
                  <span>{item.name}</span>
                  <span className="skill-tooltip" role="tooltip">
                    {item.usage}
                  </span>
                  <svg className="logo-link-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 5h5v5h-2V8.41l-7.29 7.3-1.42-1.42 7.3-7.29H14V5ZM5 7h6V5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h-2v6H5V7Z" />
                  </svg>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
