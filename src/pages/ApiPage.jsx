import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';

const principles = [
  {
    tag: '01 / Keep it clear',
    title: 'Send the useful context.',
    text: 'Share the task, constraints, and format you need. Clear input gives the model a better place to start.',
    id: 'request-shape',
  },
  {
    tag: '02 / Stay in control',
    title: 'Build your own flow.',
    text: 'Decide how to present results, when to ask follow ups, and where people stay in the loop.',
  },
  {
    tag: '03 / Check the answer',
    title: 'Keep humans close.',
    text: 'Review important outputs and give people a way to confirm, refine, or challenge what they receive.',
    id: 'responsible-use',
  },
];

function RequestExample() {
  return (
    <div className="code-window">
      <div className="code-window__bar">
        <i />
        <i />
        <i />
        <span>JAVASCRIPT / FETCH</span>
      </div>
      <pre>
        <span className="code-green">const</span> response ={' '}
        <span className="code-green">await</span> fetch(JUNGLEMIND_ENDPOINT, {'{'}
        <br /> method: <span className="code-yellow">"POST"</span>,<br /> headers: {'{'}{' '}
        <span className="code-yellow">"Authorization"</span>:{' '}
        <span className="code-yellow">
          `Bearer ${'{'}API_KEY{'}'}`
        </span>{' '}
        {'}'},<br /> body: JSON.stringify({'{'} model:{' '}
        <span className="code-yellow">"junglemind-3"</span>,<br /> input:{' '}
        <span className="code-yellow">"Help me make this clearer."</span> {'}'})<br />
        {'}'});
      </pre>
    </div>
  );
}

export default function ApiPage() {
  return (
    <>
      <PageHero
        kicker="The JungleMind API"
        title={
          <>
            Make room
            <br />
            for better thinking.
          </>
        }
        lead="Bring careful, context aware reasoning into the places where your customers already work. A small surface area, a familiar request, a lot of room to build."
        stat="Start with one call."
        aside="Keep your integration lightweight, then shape the experience around the work your product does best."
      />
      <section className="content-wrap">
        <div className="api-band">
          <aside className="surface api-sidebar">
            <h3>Developer guide</h3>
            <a href="#quickstart">
              Quickstart <span>01</span>
            </a>
            <a href="#request-shape">
              Request shape <span>02</span>
            </a>
            <a href="#responsible-use">
              Responsible use <span>03</span>
            </a>
            <Link to="/credits">
              Usage &amp; credits <span>{'\u2197'}</span>
            </Link>
          </aside>
          <article className="surface api-copy" id="quickstart">
            <h2>A familiar way to get started.</h2>
            <p>
              Send a question, choose a model, and receive a considered response. This example shows
              the shape of a request; your access dashboard will provide the correct endpoint and
              credentials when enabled.
            </p>
            <RequestExample />
          </article>
        </div>
        <div className="api-steps">
          {principles.map((principle) => (
            <article className="surface api-step" id={principle.id} key={principle.tag}>
              <span>{principle.tag}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
        <div className="surface api-cta" id="early-access">
          <div>
            <h3>Want to build with JungleMind?</h3>
            <p>Request a place in the early access program and we will share the next steps.</p>
          </div>
          <a
            className="btn-dark"
            href="mailto:hello@junglemind.ai?subject=JungleMind%20API%20early%20access"
          >
            Request access <span>{'\u2197'}</span>
          </a>
        </div>
      </section>
    </>
  );
}
