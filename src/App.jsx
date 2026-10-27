import { lazy, Suspense, useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router';
import PageLayout from './components/PageLayout.jsx';

const ApiPage = lazy(() => import('./pages/ApiPage.jsx'));
const CreditsPage = lazy(() => import('./pages/CreditsPage.jsx'));
const HelpPage = lazy(() => import('./pages/HelpPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const JournalPage = lazy(() => import('./pages/JournalPage.jsx'));
const NewsPage = lazy(() => import('./pages/NewsPage.jsx'));
const PricingPage = lazy(() => import('./pages/PricingPage.jsx'));

const pageTitles = {
  '/': 'JungleMind — The thinking engine shaped for what counts.',
  '/help': 'Help & answers — JungleMind',
  '/pricing': 'Plans & pricing — JungleMind',
  '/api': 'JungleMind API — Thoughtful AI, ready to build',
  '/credits': 'Credits & usage — JungleMind',
  '/news': 'Field notes — JungleMind',
  '/journal': 'Field notes — JungleMind',
};

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Page not found — JungleMind';
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const frame = requestAnimationFrame(() => {
      const targetId = decodeURIComponent(hash.slice(1));
      document.getElementById(targetId)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="page-kicker">404 / Nothing here</p>
      <h1>Looks like this path wandered off.</h1>
      <p>Let us point you back toward something useful.</p>
      <Link className="btn-dark" to="/">
        Back to JungleMind
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Suspense
        fallback={
          <main className="route-loading" aria-live="polite">
            Loading JungleMind...
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route element={<PageLayout />}>
            <Route path="pricing" element={<PricingPage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="api" element={<ApiPage />} />
            <Route path="credits" element={<CreditsPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="journal" element={<JournalPage />} />
            <Route path="help.html" element={<Navigate to="/help" replace />} />
            <Route path="api.html" element={<Navigate to="/api" replace />} />
            <Route path="credits.html" element={<Navigate to="/credits" replace />} />
            <Route path="news.html" element={<Navigate to="/news" replace />} />
            <Route path="journal.html" element={<Navigate to="/journal" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
