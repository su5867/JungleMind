import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';

const plans = [
  {
    name: 'Explore',
    fit: 'For individuals testing an idea',
    price: 'Start small',
    detail: 'A simple way to learn where thoughtful AI can help.',
    points: ['Guided product access', 'Usage visibility', 'Community help'],
    cta: 'Get early access',
    featured: false,
  },
  {
    name: 'Build',
    fit: 'For teams building with the API',
    price: 'Shape your plan',
    detail: 'The essentials to bring JungleMind into a real workflow.',
    points: ['API access', 'Project level usage', 'Priority onboarding'],
    cta: 'Talk to our team',
    featured: true,
  },
  {
    name: 'Scale',
    fit: 'For products growing with AI',
    price: 'Let’s talk',
    detail: 'A plan shaped around your product and operating needs.',
    points: ['Dedicated planning', 'Volume guidance', 'Integration support'],
    cta: 'Contact us',
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Plans that grow with the work"
        title={
          <>
            Clear steps.
            <br />
            Room to grow.
          </>
        }
        lead="Start with an experiment, build a useful workflow, then scale when the value is clear. We’ll share current access and usage terms directly while JungleMind is in early access."
        stat="No surprise pricing."
        aside="Final rates are not published yet. The estimator shows an illustration only; talk with our team for current access terms."
      />
      <section className="content-wrap pricing-content" aria-label="JungleMind plans">
        <div className="pricing-note surface">
          <span className="pricing-note__dot" aria-hidden="true" />
          <p>
            <strong>Early access is open by request.</strong> We’ll confirm availability, included
            usage, and any costs before you get started.
          </p>
          <Link to="/credits">
            Explore the usage estimator <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`surface plan-card${plan.featured ? ' plan-card--featured' : ''}`}
              key={plan.name}
            >
              {plan.featured && <span className="plan-card__label">A good place to build</span>}
              <p className="plan-card__name">{plan.name}</p>
              <p className="plan-card__fit">{plan.fit}</p>
              <h2>{plan.price}</h2>
              <p className="plan-card__detail">{plan.detail}</p>
              <ul>
                {plan.points.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                className={plan.featured ? 'btn-dark' : 'plan-card__link'}
                to="/api#early-access"
              >
                {plan.cta} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="pricing-bottom">
          <div>
            <p className="page-kicker">Know what you’re getting</p>
            <h2>Usage should be easy to understand.</h2>
          </div>
          <p>
            Before activation, we’ll explain the applicable rates, how usage is measured, and how to
            track it. No live pricing is implied by the sample estimator.
          </p>
          <Link className="text-link" to="/help">
            Read billing answers <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
