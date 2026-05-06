export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's build something useful together.</h2>
          <p className="muted">
            Add your email, LinkedIn, and GitHub links here for a complete portfolio presence.
          </p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-primary" href="mailto:your.email@example.com">Email Me</a>
          <a className="btn btn-secondary" href="#">LinkedIn</a>
          <a className="btn btn-secondary" href="#">GitHub</a>
        </div>
      </div>
    </section>
  );
}
