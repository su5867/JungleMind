import { Link } from 'react-router';
import Brand from './Brand.jsx';

const links = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'Help', to: '/help' },
  { label: 'API', to: '/api' },
  { label: 'Credits', to: '/credits' },
  { label: 'News', to: '/news' },
];

export default function Footer({ home = false }) {
  if (home) {
    return (
      <footer className="footer">
        <Brand footer />
        <p>Thoughtful intelligence for the work that matters.</p>
        <div className="footer__links">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
        <small>{'\u00a9'} 2026 JungleMind. Keep thinking.</small>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <Link to="/">{'\u00a9'} 2026 JungleMind</Link>
      <div className="site-footer__links">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
      <span>Keep thinking.</span>
    </footer>
  );
}
