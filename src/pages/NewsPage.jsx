import { useState } from 'react';
import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';

const articles = [
  {
    tag: 'Product',
    date: 'August 31, 2026',
    read: '5 min read',
    title: 'Meet JungleMind 3.0: a little more thought in every turn',
    description:
      'Why we are building an AI system that takes the time to understand what the question is really asking.',
    id: 'note-1',
  },
  {
    tag: 'Perspective',
    date: 'August 18, 2026',
    read: '4 min read',
    title: 'Good tools make space for the person using them',
    description:
      'A product philosophy for building intelligence that feels like a capable collaborator, not another dashboard.',
    id: 'note-2',
  },
  {
    tag: 'Research',
    date: 'July 29, 2026',
    read: '6 min read',
    title: 'When the hard part is keeping the whole picture in view',
    description:
      'What long context can make possible, and why remembering the right details matters more than remembering everything.',
    id: 'note-3',
  },
  {
    tag: 'Building',
    date: 'July 10, 2026',
    read: '3 min read',
    title: 'A first look at building with the JungleMind API',
    description:
      'Start with a single request. Find the moment where thoughtful reasoning makes your product more useful.',
    id: 'note-4',
  },
];

function NewsCard({ article }) {
  return (
    <Link className="surface news-card" to={`/journal#${article.id}`}>
      <div className="news-card__visual">
        <span>{article.tag}</span>
      </div>
      <div className="news-card__body">
        <div className="news-card__meta">
          <span>{article.date}</span>
          <span>{article.read}</span>
        </div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <span className="news-card__read">
          Read the note <span>{'\u2197'}</span>
        </span>
      </div>
    </Link>
  );
}

export default function NewsPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  function handleSubscribe(event) {
    event.preventDefault();
    setStatus('This signup form is ready for a mailing list connection.');
    setEmail('');
  }

  return (
    <>
      <PageHero
        kicker="Notes from the canopy"
        title={
          <>
            Field notes
            <br />
            for curious minds.
          </>
        }
        lead="Ideas, small discoveries, and dispatches from the people building JungleMind. A little signal for the long view."
        stat="Take a moment."
        aside="Good work starts with attention. These are a few things we have been paying attention to lately."
      />
      <section className="content-wrap">
        <div className="news-grid">
          {articles.map((article) => (
            <NewsCard article={article} key={article.id} />
          ))}
        </div>
        <div className="surface newsletter">
          <div>
            <h3>A thoughtful note, now and then.</h3>
            <p>Occasional ideas from the JungleMind team. No noise, easy unsubscribe.</p>
          </div>
          <form onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit">Join the list</button>
          </form>
          <div className="newsletter-status" aria-live="polite">
            {status}
          </div>
        </div>
      </section>
    </>
  );
}
