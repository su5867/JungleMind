import { useState } from 'react';
import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';

const usageTypes = [
  ['Explore', 'Prototypes & personal workflows', 'Start small'],
  ['Build', 'Internal tools & early products', 'Grow steadily'],
  ['Scale', 'Customer facing experiences', 'Plan together'],
];

function formatTokens(tokens) {
  if (tokens >= 1_000_000) return `${(tokens / 1_000_000).toFixed(tokens % 1_000_000 ? 1 : 0)}M`;
  return `${(tokens / 1_000).toFixed(tokens % 1_000 ? 1 : 0)}K`;
}

export default function CreditsPage() {
  const [tokens, setTokens] = useState(100_000);
  const estimate = ((tokens / 1_000) * 0.02).toFixed(tokens < 10_000 ? 2 : 0);
  const usageLabel =
    tokens < 150_000
      ? 'A light month of exploration'
      : tokens < 600_000
        ? 'A steady rhythm of building'
        : 'A busy product in motion';

  return (
    <>
      <PageHero
        kicker="Credits that follow your curiosity"
        title={
          <>
            Room to explore.
            <br />
            Control to scale.
          </>
        }
        lead="Keep a clear picture of how much you use. Start with a small experiment, find a rhythm that works, and grow your usage alongside your product."
        stat="Simple by design."
        aside="Credits help you understand your activity at a glance, so it is easier to plan the next step."
      />
      <section className="content-wrap">
        <div className="surface credit-meter">
          <div>
            <p className="page-kicker">Usage estimator / illustration</p>
            <h2>What might a month look like?</h2>
            <p>
              Adjust the estimated token volume to explore a sample monthly amount. This is an
              illustrative planning aid, not a live quote or current price schedule.
            </p>
            <div className="range-wrap">
              <label htmlFor="usage-range">
                Estimated monthly volume <strong>{formatTokens(tokens)} tokens</strong>
              </label>
              <input
                type="range"
                id="usage-range"
                min="10000"
                max="1000000"
                step="10000"
                value={tokens}
                onChange={(event) => setTokens(Number(event.target.value))}
              />
              <div className="range-ends">
                <span>10K</span>
                <span>1M tokens</span>
              </div>
            </div>
          </div>
          <div className="estimate-card">
            <span>Illustrative estimate</span>
            <strong>${estimate}</strong>
            <p>{usageLabel}</p>
            <small>Example only · actual terms may differ</small>
          </div>
        </div>
        <div className="surface credit-table">
          <h3>A simple way to think about usage</h3>
          {usageTypes.map(([name, audience, description]) => (
            <div className="credit-row" key={name}>
              <strong>{name}</strong>
              <span>{audience}</span>
              <span>{description}</span>
            </div>
          ))}
          <p className="credit-note">
            The estimator uses a sample rate to demonstrate the interaction. JungleMind has not
            published final pricing; your access terms will include the current rates and credit
            details.
          </p>
        </div>
        <div className="surface api-cta">
          <div>
            <h3>Have a usage question?</h3>
            <p>We can help you think through a practical starting point for your project.</p>
          </div>
          <Link className="btn-dark" to="/help">
            Visit Help <span>{'\u2197'}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
