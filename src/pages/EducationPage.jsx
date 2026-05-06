import { courses } from '../data/portfolio';

export function EducationPage() {
  return (
    <section className="page-section">
      <div className="section-head">
        <p className="eyebrow">Education</p>
        <h1>Academic foundation</h1>
      </div>
      <div className="stack">
        <article className="info-card">
          <h2>B.Sc. in Civil Engineering</h2>
          <p>Mansoura University, Egypt | 2017</p>
          <p>Graduated with Very Good grade.</p>
        </article>
        <article className="info-card">
          <h2>Courses</h2>
          <ul className="bullet-list">
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
