import { Link } from 'react-router';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import PromptCard from '../components/PromptCard.jsx';

const features = [
  {
    index: '01 / REASON',
    title: 'It follows the whole question.',
    description:
      'JungleMind works through the details, connects the pieces, and keeps the original goal in view.',
    art: 'art-orbit',
  },
  {
    index: '02 / CONTEXT',
    title: 'It remembers what matters.',
    description:
      'Longer threads stay coherent, so your team can keep moving without starting over at every turn.',
    art: 'art-leaf',
  },
  {
    index: '03 / BUILD',
    title: 'It fits the way you work.',
    description:
      'A clean API and straightforward controls make it simple to bring thoughtful AI into your product.',
    art: 'art-lines',
  },
];

function FeatureCard({ feature, featured }) {
  return (
    <article className={`feature-card${featured ? ' feature-card--dark' : ''}`}>
      <span className="feature-index">{feature.index}</span>
      <div className={`feature-art ${feature.art}`} aria-hidden="true">
        <span>{'\u2197'}</span>
        <i />
        <i />
        <i />
        <i />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero" aria-label="JungleMind introduction">
        <div className="hero__bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260831_223518_f11bfa03-4e65-47e1-a4a7-30e42a7a8c2f.png&amp;w=1920&amp;q=85"
          >
            <source
              type="video/mp4"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260831_232706_43757be4-2250-4f09-8cd7-23aebbf147ad.mp4"
            />
          </video>
        </div>
        <div className="hero__inner">
          <Header home />
          <div className="stage">
            <div className="badge rise" style={{ '--i': 8 }}>
              <span className="badge__tag">Now</span>
              <span>JungleMind 3.0 is here</span>
              <span className="badge__arrow">{'\u2197'}</span>
            </div>
            <h1 className="headline rise" style={{ '--i': 10 }}>
              The thinking engine
              <br className="brk" /> shaped for what counts.
            </h1>
            <p className="sub rise" style={{ '--i': 12 }}>
              JungleMind is an AI system that reasons through every problem carefully before
              answering.
              <br className="brk" /> Plug into the API, launch in minutes, and ship reasoning you
              can really rely on.
            </p>
            <PromptCard />
            <div className="hero__proof">
              <span>
                <i />
                Built for careful reasoning
              </span>
              <span>Made for people who make things</span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#manifesto">
          Scroll to discover <span>{'\u2193'}</span>
        </a>
      </section>
      <main id="main-content">
        <section className="section section--intro" id="manifesto">
          <div className="section__head">
            <p className="eyebrow">A little more thought goes a long way</p>
            <h2>
              Fast answers are easy.
              <br />
              <em>Good thinking takes care.</em>
            </h2>
          </div>
          <p className="intro-copy">
            The best tools do not make the work feel smaller. They help you see it more clearly.
            JungleMind is built to follow the thread, hold onto context, and turn a complicated
            question into a useful next step.
          </p>
        </section>
        <section className="section section--features">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A calmer kind of capable</p>
              <h2>
                More signal.
                <br />
                Less guesswork.
              </h2>
            </div>
            <Link className="text-link" to="/api">
              Explore the API <span>{'\u2197'}</span>
            </Link>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <FeatureCard key={feature.index} feature={feature} featured={index === 0} />
            ))}
          </div>
        </section>
        <section className="section section--quote">
          <div className="quote-mark">{'\u201c'}</div>
          <blockquote>
            Make room for the hard questions.
            <br />
            <em>Then give them a better answer.</em>
          </blockquote>
          <p>JUNGLEMIND / A THINKING ENGINE FOR REAL WORK</p>
        </section>
        <section className="section section--cta">
          <div>
            <p className="eyebrow">Your next idea has somewhere to go</p>
            <h2>
              Build with a little
              <br />
              more clarity.
            </h2>
            <p>Get a first look at JungleMind 3.0 and start shaping what comes next.</p>
          </div>
          <Link className="btn-dark btn-large" to="/api#early-access">
            Request early access <span>{'\u2197'}</span>
          </Link>
        </section>
      </main>
      <Footer home />
    </div>
  );
}
