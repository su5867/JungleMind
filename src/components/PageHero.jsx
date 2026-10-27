export default function PageHero({ kicker, title, lead, aside, stat }) {
  return (
    <section className="page-hero">
      <div className="page-hero__copy">
        <p className="page-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="page-hero__lead">{lead}</p>
      </div>
      <aside className="page-hero__aside">
        <strong>{stat}</strong>
        {aside}
      </aside>
    </section>
  );
}
