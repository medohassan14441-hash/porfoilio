export function Header({ name, sections }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        <span className="brand-mark brand-mark-logo" aria-hidden="true">
          <svg viewBox="0 0 48 48" focusable="false" aria-hidden="true">
            <path d="M14 31V17l10 13 10-13v14" />
            <path d="M15 34h18" />
            <path d="M33 19c0-2.4 1.9-4.3 4.3-4.3" />
          </svg>
        </span>
        <span>{name}</span>
      </a>

      <nav className="nav">
        {sections.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
