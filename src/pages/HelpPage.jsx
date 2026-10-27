import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';

const faqGroups = [
  {
    id: 'getting-started',
    title: 'Getting started',
    questions: [
      [
        'What is JungleMind?',
        'JungleMind is a reasoning focused AI system designed to help people make progress on real work. It can help you explore an idea, understand a complicated topic, draft a plan, or bring a feature to life through the API.',
      ],
      [
        'How do I get access?',
        'Request early access from the API page. We are opening JungleMind 3.0 in thoughtful waves, with product teams and curious builders invited first.',
      ],
      [
        'Do I need to install anything?',
        'No installation is needed to start exploring. When API access is available, you can connect using a standard HTTPS request and the client of your choice.',
      ],
    ],
  },
  {
    id: 'using-junglemind',
    title: 'Using JungleMind',
    questions: [
      [
        'What kinds of tasks is it good at?',
        'It is especially useful when a task benefits from careful reasoning: synthesis, research planning, code assistance, drafting, structured analysis, and moving from a fuzzy question to a practical next step.',
      ],
      [
        'Can I use JungleMind in my own product?',
        'Yes. The JungleMind API is built for product experiences, internal tools, and workflows. See the API guide for an example request and integration overview.',
      ],
    ],
  },
  {
    id: 'credits-billing',
    title: 'Credits & billing',
    questions: [
      [
        'How do credits work?',
        'Credits are a simple way to keep track of usage. Your balance follows the work you do, so small experiments can stay small and heavier workloads can scale with your needs. Visit Credits for an interactive estimate.',
      ],
      [
        'Will I be charged just for creating an account?',
        'Creating an account or requesting access does not itself use credits. Usage is associated with requests you choose to make once your account is enabled.',
      ],
    ],
  },
  {
    id: 'privacy-trust',
    title: 'Privacy & trust',
    questions: [
      [
        'Does JungleMind always get it right?',
        'No AI system is infallible. Treat responses as a strong starting point, and verify important facts before you rely on them. We design for careful, transparent usefulness.',
      ],
      [
        'How can I get more help?',
        <>
          For product questions, write to{' '}
          <a href="mailto:hello@junglemind.ai">hello@junglemind.ai</a>. For integration questions,
          include the endpoint and a request identifier where possible so our team can help you
          faster.
        </>,
      ],
    ],
  },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

export default function HelpPage() {
  const [query, setQuery] = useState('');
  const filteredGroups = useMemo(
    () =>
      faqGroups
        .map((group) => ({
          ...group,
          questions: group.questions.filter(([question, answer]) =>
            `${question} ${typeof answer === 'string' ? answer : ''}`
              .toLowerCase()
              .includes(query.trim().toLowerCase()),
          ),
        }))
        .filter((group) => group.questions.length > 0),
    [query],
  );
  const resultCount = filteredGroups.reduce((total, group) => total + group.questions.length, 0);

  return (
    <>
      <PageHero
        kicker="Help, without the maze"
        title={
          <>
            Good questions
            <br />
            belong here.
          </>
        }
        lead="A clear place to start, whether you are finding your way around JungleMind or working through the finer details."
        stat="We are here to help."
        aside="Browse quick answers below. Looking for developer details? The API guide is a good next stop."
      />
      <section className="content-wrap">
        <div className="help-tools">
          <label className="search-box">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search questions and answers"
              aria-label="Search help articles"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <p aria-live="polite">
            {query
              ? `${resultCount} ${resultCount === 1 ? 'answer' : 'answers'} found`
              : 'Browse all answers'}
          </p>
        </div>
        <div className="help-layout">
          <aside className="surface help-sidebar">
            <p>On this page</p>
            {faqGroups.map((group) => (
              <a href={`#${group.id}`} key={group.id}>
                {group.title}
              </a>
            ))}
          </aside>
          <div className="surface faq-list">
            {filteredGroups.map((group) => (
              <section id={group.id} key={group.id}>
                <p className="faq-category">{group.title}</p>
                {group.questions.map(([question, answer]) => (
                  <details className="faq-item" key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </section>
            ))}
            {resultCount === 0 && (
              <p className="help-empty">No answers match that search yet. Try a broader phrase.</p>
            )}
          </div>
        </div>
        <p className="help-contact">
          Still looking?{' '}
          <Link to="/api">
            Ask our team about the API <span>{'\u2197'}</span>
          </Link>
        </p>
      </section>
    </>
  );
}
