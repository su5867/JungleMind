import { Outlet, useLocation } from 'react-router';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

export default function PageLayout() {
  const location = useLocation();
  return (
    <div className="inner-page">
      <Header key={location.pathname} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
