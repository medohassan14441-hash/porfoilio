import { courses } from '../data/portfolio';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="section-head">
        <p className="eyebrow">Education</p>
        <h2>Academic background and courses</h2>
      </div>
      <div className="grid two">
        <article className="card">
          <h3>B.Sc. in Civil Engineering</h3>
          <p className="muted">Mansoura University, Egypt | 2017</p>
          <p>Graduated with Very Good grade.</p>
        </article>
        <article className="card">
          <h3>Courses</h3>
          <ul className="timeline">
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
