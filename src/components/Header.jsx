import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Brand from './Brand.jsx';

const links = [
  { label: 'Help', to: '/help' },
  { label: 'API', to: '/api' },
  { label: 'Credits', to: '/credits' },
  { label: 'News', to: '/news' },
];

export default function Header({ home = false }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [open]);

  return (
    <header className={home ? 'nav' : 'site-header'}>
      <Brand />
      <nav
        id="site-menu"
        className={`nav__nav${open ? ' is-open' : ''}`}
        aria-label="Main navigation"
      >
        <ul className="nav__links">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="btn-dark menu__cta" to="/api#early-access" onClick={() => setOpen(false)}>
          Request Access
        </Link>
      </nav>
      <div className="nav__cta">
        <Link className="btn-dark" to="/api#early-access">
          Request Access
        </Link>
      </div>
      <button
        className="nav__toggle"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav__toggle-box" aria-hidden="true">
          <span className="bar bar--top" />
          <span className="bar bar--bot" />
        </span>
      </button>
    </header>
  );
}
