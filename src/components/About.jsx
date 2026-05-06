export function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <p className="eyebrow">About</p>
        <h2>Developer profile</h2>
      </div>
      <div className="grid two">
        <article className="card">
          <p>
            Full Stack Web Developer based in Cairo, Egypt, focused on modern web apps with strong UI,
            reliable architecture, and good user experience.
          </p>
          <p>
            I enjoy turning complex problems into clean digital products and continuously improving my
            technical stack.
          </p>
        </article>
        <article className="card accent">
          <h3>What stands out</h3>
          <ul className="bullets">
            <li>React interfaces with responsive layouts</li>
            <li>Dashboard and CRUD-driven product work</li>
            <li>Fast learner with engineering discipline</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
