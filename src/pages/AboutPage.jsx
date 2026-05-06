import { Link } from 'react-router-dom';

const strengths = [
  {
    title: 'Clean Code',
    text: 'I care about readable structure, reusable components, and maintainable frontend logic.',
  },
  {
    title: 'Problem Solving',
    text: 'I enjoy breaking down real product needs into clear technical solutions.',
  },
  {
    title: 'Scalable Apps',
    text: 'I focus on building systems that feel solid both in UI and underlying architecture.',
  },
  {
    title: 'Fast Learner',
    text: 'I adapt quickly to new stacks, tools, and workflows whenever the project needs it.',
  },
];

const milestones = [
  'NTI: built a clinic website with booking and doctor dashboard',
  'DEPI: worked on AGRSUP full-stack e-commerce experience',
  'Current internship: building React interfaces and improving UI/UX flows',
];

const badges = ['React', 'Node.js', 'JavaScript', 'TypeScript', 'MySQL', 'Supabase'];

export function AboutPage() {
  return (
    <section className="page-section">
      <div className="section-head">
        <p className="eyebrow">About</p>
        <h1>Who I am</h1>
      </div>

      <div className="about-story-grid">
        <article className="info-card about-story-card animate-in">
          <p className="about-kicker">My Story</p>
          <h2>From engineering discipline to full-stack product building.</h2>
          <p>
            I started with an engineering background, which shaped how I think about systems, structure,
            and solving practical problems. Over time, I moved into web development and found the space
            where logic, design, and product thinking meet.
          </p>
          <p>
            Today I build modern web applications with a strong focus on clean interfaces, scalable
            architecture, and user experiences that feel polished and dependable.
          </p>
        </article>

        <article className="info-card about-quote-card animate-in animate-delay-1">
          <p className="about-quote">
            I build products that are pleasant on the surface, strong underneath, and thoughtful in how
            they solve real user problems.
          </p>
          <div className="hero-tech-strip">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </article>
      </div>

      <div className="about-stats-grid">
        <article className="info-card stat-card animate-in animate-delay-1">
          <strong>5+</strong>
          <span>Projects delivered and showcased</span>
        </article>
        <article className="info-card stat-card animate-in animate-delay-2">
          <strong>3</strong>
          <span>Major training and internship tracks</span>
        </article>
        <article className="info-card stat-card animate-in animate-delay-3">
          <strong>Full Stack</strong>
          <span>Frontend experience with backend awareness</span>
        </article>
      </div>

      <div className="about-strengths-grid">
        {strengths.map((item, index) => (
          <article
            key={item.title}
            className={`info-card strength-card animate-in animate-delay-${Math.min(index + 1, 4)}`}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="about-bottom-grid">
        <article className="info-card timeline-card animate-in">
          <p className="about-kicker">Mini Timeline</p>
          <h2>Growth path</h2>
          <ul className="bullet-list">
            {milestones.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info-card cta-card animate-in animate-delay-1">
          <p className="about-kicker">Next Step</p>
          <h2>See how I turn ideas into working products.</h2>
          <p>
            The strongest part of my portfolio is not only the visual layer, but how each project connects
            product goals with technical decisions.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">View Projects</Link>
            <Link className="btn btn-secondary" to="/contact">Contact Me</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
