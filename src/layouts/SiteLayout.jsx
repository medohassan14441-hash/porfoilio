import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { profile, sections } from '../data/portfolio';

const links = [
  { label: 'Home', path: '/' },
  ...sections.map((section) => ({ label: section, path: `/${section.toLowerCase()}` })),
];

export function SiteLayout() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar">
        <Link className="brand" to="/">
          <span className="brand-mark brand-mark-logo" aria-hidden="true">
            <svg viewBox="0 0 48 48" focusable="false" aria-hidden="true">
              <path d="M14 31V17l10 13 10-13v14" />
              <path d="M15 34h18" />
              <path d="M33 19c0-2.4 1.9-4.3 4.3-4.3" />
            </svg>
          </span>
          <span>{profile.name}</span>
        </Link>

        <div className="nav-shell">
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className={`socials ${menuOpen ? 'open' : ''}`}>
            <a
              className="social-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .1-.79.42-1.31.76-1.61-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.82 5.62-5.5 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/mohamed-hassan-b098ba1a2/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5A2.48 2.48 0 1 1 2.5 5.98 2.48 2.48 0 0 1 4.98 3.5ZM3 8.5h3.96V21H3V8.5Zm7.02 0h3.8v1.71h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.15V21h-3.96v-5.47c0-1.31-.02-3-1.83-3-1.84 0-2.12 1.44-2.12 2.9V21h-3.96V8.5Z" />
              </svg>
            </a>
            <a
              className="social-link"
              href="mailto:your.email@example.com"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l8 5.33 8-5.33V7H4Zm16 10V9.1l-7.44 4.96a1 1 0 0 1-1.12 0L4 9.1V17h16Z" />
              </svg>
            </a>
          </div>

          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <span className="theme-toggle-inner">
                <svg
                  className="theme-toggle-icon theme-toggle-icon-sun"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
                Light
              </span>
            ) : (
              <span className="theme-toggle-inner">
                <svg
                  className="theme-toggle-icon theme-toggle-icon-moon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M21 12.79A9 9 0 0 1 11.21 3 7.5 7.5 0 1 0 21 12.79Z" />
                </svg>
                Dark
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        Top
      </button>
    </div>
  );
}
