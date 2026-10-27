import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';

const stories = [
  {
    id: 'note-1',
    category: 'Product',
    date: 'August 31, 2026',
    read: '5 min read',
    title: 'Meet JungleMind 3.0: a little more thought in every turn',
    deck: 'A good answer starts with a better understanding of the question.',
    paragraphs: [
      'Most questions arrive with a little context around the edges: a constraint someone forgot to mention, a decision that needs to be made, a person who will use the result. JungleMind 3.0 is built to work through those details before it responds. The goal is not to make every answer longer. It is to make the useful part easier to find.',
      'We have focused on careful reasoning, coherent longer conversations, and an API that feels familiar to developers. As we open access, we are looking forward to seeing the real questions people bring to it.',
    ],
  },
  {
    id: 'note-2',
    category: 'Perspective',
    date: 'August 18, 2026',
    read: '4 min read',
    title: 'Good tools make space for the person using them',
    paragraphs: [
      'The best tools do not ask to become the center of attention. They help you see the shape of a problem, make the next decision with more confidence, and then get out of the way. That is the standard we return to when we design a JungleMind interaction.',
      'A helpful assistant should make room for human judgment. It should be easy to ask another question, correct an assumption, or decide that the right answer is the one you already had.',
    ],
  },
  {
    id: 'note-3',
    category: 'Research',
    date: 'July 29, 2026',
    read: '6 min read',
    title: 'When the hard part is keeping the whole picture in view',
    paragraphs: [
      'Long conversations are useful when a model can keep track of the details that matter: what you are trying to do, which options you have already ruled out, and what a successful result should look like. More context helps only when it stays connected to the task.',
      'That is why we think about context as a question of attention as much as capacity. The work is to keep the thread useful as it grows.',
    ],
  },
  {
    id: 'note-4',
    category: 'Building',
    date: 'July 10, 2026',
    read: '3 min read',
    title: 'A first look at building with the JungleMind API',
    paragraphs: [
      'Start with one task that genuinely takes thought. Share the context your product already knows, ask for a useful output shape, and give the person using your product a clear way to review the result. A small integration is often the best way to learn where reasoning can help.',
      'The API is designed to be a simple starting point, with room for your product to create the experience around it.',
    ],
  },
];

function Story({ story }) {
  return (
    <article className="journal-story" id={story.id}>
      <p className="page-kicker">
        {story.category} · {story.date} · {story.read}
      </p>
      <h2>{story.title}</h2>
      {story.deck && <p className="page-hero__lead">{story.deck}</p>}
      {story.paragraphs.map((paragraph) => (
        <p className="intro-copy" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </article>
  );
}

export default function JournalPage() {
  return (
    <>
      <PageHero
        kicker="Field notes / JungleMind"
        title={
          <>
            A little more
            <br />
            thought, by design.
          </>
        }
        lead="A few ideas from our team on what useful intelligence can look like, and how we are trying to build it."
        stat="From the team."
        aside="Product notes, working principles, and the questions shaping our work."
      />
      <section className="content-wrap">
        <div className="surface journal-content">
          {stories.map((story) => (
            <Story story={story} key={story.id} />
          ))}
          <Link className="text-link" to="/api">
            Explore the API <span>{'\u2197'}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
