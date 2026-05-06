import { useState } from 'react';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page-section">
      <div className="section-head">
        <p className="eyebrow">Contact</p>
        <h1>Let's build something useful together.</h1>
      </div>
      <div className="contact-grid">
        <div className="info-card animate-in">
          <p className="muted">
            Add your email, LinkedIn, and GitHub links here for a complete portfolio presence.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:your.email@example.com">Email Me</a>
            <a className="btn btn-secondary" href="#">LinkedIn</a>
            <a className="btn btn-secondary" href="#">GitHub</a>
          </div>
        </div>

        <form className="info-card contact-form animate-in animate-delay-1" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project"
            />
          </label>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
