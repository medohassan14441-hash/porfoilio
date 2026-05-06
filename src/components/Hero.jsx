export function Hero({ profile }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{profile.title}</p>
        <h1>Building polished web experiences that feel fast, clear, and reliable.</h1>
        <p className="lead">{profile.summary}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-secondary" href="#contact">Contact Me</a>
        </div>
      </div>

      <aside className="hero-panel">
        <p className="panel-label">Profile</p>
        <h2>{profile.name}</h2>
        <p className="muted">{profile.location}</p>
        <div className="hero-list">
          <span>React-driven interfaces</span>
          <span>Scalable full-stack builds</span>
          <span>Clean, maintainable code</span>
        </div>
      </aside>
    </section>
  );
}
