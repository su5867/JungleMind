import { Link } from 'react-router';

export default function Brand({ footer = false }) {
  return (
    <Link className={`brand${footer ? ' brand--footer' : ''}`} to="/" aria-label="JungleMind home">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 2.5 29.5 16 16 29.5 2.5 16 16 2.5Z"
          stroke="#141414"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M16 9.5 22.5 16 16 22.5 9.5 16 16 9.5Z" fill="#141414" />
      </svg>
      <span>JungleMind</span>
    </Link>
  );
}
